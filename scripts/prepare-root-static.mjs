import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'out')

if (!existsSync(outDir)) {
  console.error('Missing out/ directory. Run next build first.')
  process.exit(1)
}

const enIndex = join(outDir, 'en', 'index.html')
if (!existsSync(enIndex)) {
  console.error('Missing out/en/index.html — cannot publish a root homepage.')
  process.exit(1)
}

copyFileSync(enIndex, join(outDir, 'index.html'))

const localeNotFound = join(outDir, 'en', '404.html')
const rootNotFound = join(outDir, '404.html')
if (!existsSync(rootNotFound) && existsSync(localeNotFound)) {
  copyFileSync(localeNotFound, rootNotFound)
}

console.log('Prepared root-path static artifact in out/')
