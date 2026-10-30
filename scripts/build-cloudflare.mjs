import { cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const projectRoot = process.cwd()
const cloudflareOutput = join(projectRoot, 'out-cloudflare')
const requestedUrl = process.env.CLOUDFLARE_SITE_URL

if (!requestedUrl) {
  console.error('CLOUDFLARE_SITE_URL is required (for example, https://<project>.pages.dev).')
  process.exit(1)
}

let siteUrl
try {
  siteUrl = new URL(requestedUrl)
} catch {
  console.error('CLOUDFLARE_SITE_URL must be an absolute HTTPS origin.')
  process.exit(1)
}

if (
  siteUrl.protocol !== 'https:' ||
  siteUrl.pathname !== '/' ||
  siteUrl.search ||
  siteUrl.hash ||
  siteUrl.username ||
  siteUrl.password
) {
  console.error('CLOUDFLARE_SITE_URL must be an HTTPS origin with no path, query, fragment, or credentials.')
  process.exit(1)
}

if (existsSync(cloudflareOutput)) {
  console.error('Refusing to overwrite out-cloudflare/. Review or remove that generated artifact before rebuilding.')
  process.exit(1)
}

const nextBin = join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next')
if (!existsSync(nextBin)) {
  console.error('Missing local Next.js binary. Install dependencies before building.')
  process.exit(1)
}

const build = spawnSync(process.execPath, [nextBin, 'build', '--webpack'], {
  cwd: projectRoot,
  env: {
    ...process.env,
    NEXT_PUBLIC_BASE_PATH: '',
    NEXT_PUBLIC_SITE_URL: siteUrl.origin,
  },
  stdio: 'inherit',
})

if (build.status !== 0) {
  process.exit(build.status ?? 1)
}

const prepare = spawnSync(process.execPath, [join(projectRoot, 'scripts', 'prepare-root-static.mjs')], {
  cwd: projectRoot,
  stdio: 'inherit',
})

if (prepare.status !== 0) {
  process.exit(prepare.status ?? 1)
}

cpSync(join(projectRoot, 'out'), cloudflareOutput, { recursive: true })
console.log(`Prepared Cloudflare Pages artifact in ${cloudflareOutput}`)
