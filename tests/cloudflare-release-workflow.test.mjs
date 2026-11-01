import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { load } from 'js-yaml'

const workflowPath = resolve('.github/workflows/deploy-cloudflare.yml')
const workflowText = readFileSync(workflowPath, 'utf8')
const workflow = load(workflowText)
const releaseJob = workflow.jobs.release
const steps = releaseJob.steps
const ciWorkflow = load(readFileSync(resolve('.github/workflows/ci-cd.yml'), 'utf8'))

test('the Cloudflare release workflow deploys only the verified main root-host export', () => {
  assert.deepEqual(workflow.on.push.branches, ['main'])
  assert.ok(Object.hasOwn(workflow.on, 'workflow_dispatch'))
  assert.equal('pull_request' in workflow.on, false)
  assert.deepEqual(workflow.permissions, { contents: 'read' })
  assert.equal(workflow.concurrency['cancel-in-progress'], false)

  assert.match(releaseJob.if, /github\.ref == 'refs\/heads\/main'/)
  assert.deepEqual(releaseJob.permissions, { contents: 'read' })

  const buildStep = steps.find((step) => step.name === 'Build Cloudflare static export')
  assert.equal(buildStep.run, 'npm run build:cloudflare')
  assert.equal(buildStep.env.CLOUDFLARE_SITE_URL, 'https://kashish-cno.pages.dev')

  const verifyStep = steps.find((step) => step.name === 'Verify Cloudflare static export routes')
  assert.equal(verifyStep.run, 'npm run test:static-export')
  assert.equal(verifyStep.env.EXPORT_DIR, 'out-cloudflare')
  assert.equal(verifyStep.env.EXPECTED_SITE_URL, 'https://kashish-cno.pages.dev')
  assert.equal(verifyStep.env.EXPECTED_BASE_PATH, '')

  const deployStep = steps.find((step) => step.name === 'Deploy the verified root-host export')
  assert.equal(deployStep.uses, 'cloudflare/wrangler-action@v4')
  assert.equal(
    deployStep.with.command,
    'pages deploy out-cloudflare --project-name=kashish --branch=main --commit-hash=${{ github.sha }}',
  )
  assert.equal(deployStep.with.apiToken, '${{ secrets.CLOUDFLARE_API_TOKEN }}')
  assert.equal(deployStep.with.accountId, '${{ secrets.CLOUDFLARE_ACCOUNT_ID }}')
})

test('the workflow fails clearly before deployment when Cloudflare credentials are absent', () => {
  const credentialStep = steps.find((step) => step.name === 'Require Cloudflare deployment credentials')

  assert.ok(credentialStep)
  assert.match(credentialStep.run, /-z "\$CLOUDFLARE_API_TOKEN"/)
  assert.match(credentialStep.run, /-z "\$CLOUDFLARE_ACCOUNT_ID"/)
  assert.match(credentialStep.run, /::error title=Cloudflare deployment not configured::/)
  assert.match(credentialStep.run, /exit 1/)
  assert.deepEqual(credentialStep.env, {
    CLOUDFLARE_API_TOKEN: '${{ secrets.CLOUDFLARE_API_TOKEN }}',
    CLOUDFLARE_ACCOUNT_ID: '${{ secrets.CLOUDFLARE_ACCOUNT_ID }}',
  })

  assert.doesNotMatch(workflowText, /pull_request:/)
  assert.doesNotMatch(workflowText, /deployments:\s*write/)
  assert.doesNotMatch(workflowText, /id-token:\s*write/)
})

test('ordinary CI validates the release-workflow contract without using deployment secrets', () => {
  const qualitySteps = ciWorkflow.jobs.quality.steps
  const validationStep = qualitySteps.find(
    (step) => step.name === 'Validate Cloudflare production release workflow',
  )

  assert.ok(validationStep)
  assert.equal(validationStep.run, 'node --test tests/cloudflare-release-workflow.test.mjs')
  assert.equal('env' in validationStep, false)
})
