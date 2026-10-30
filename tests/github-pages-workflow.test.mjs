import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const workflow = readFileSync(resolve('.github/workflows/deploy-pages.yml'), 'utf8')
const ciWorkflow = readFileSync(resolve('.github/workflows/ci-cd.yml'), 'utf8')

test('GitHub Pages deployment uses current hosted-runner actions and preserves dotfiles', () => {
  assert.match(workflow, /uses: actions\/checkout@v5/)
  assert.match(workflow, /uses: actions\/setup-node@v5/)
  assert.match(workflow, /uses: actions\/upload-pages-artifact@v5/)
  assert.match(workflow, /include-hidden-files: true/)
  assert.match(workflow, /uses: actions\/deploy-pages@v4/)

  assert.doesNotMatch(workflow, /actions\/checkout@v4/)
  assert.doesNotMatch(workflow, /actions\/setup-node@v4/)
  assert.doesNotMatch(workflow, /actions\/upload-pages-artifact@v3/)

  assert.match(ciWorkflow, /uses: actions\/checkout@v5/)
  assert.match(ciWorkflow, /uses: actions\/setup-node@v5/)
  assert.match(ciWorkflow, /uses: actions\/upload-artifact@v6/)
  assert.doesNotMatch(ciWorkflow, /actions\/checkout@v4/)
  assert.doesNotMatch(ciWorkflow, /actions\/setup-node@v4/)
  assert.doesNotMatch(ciWorkflow, /actions\/upload-artifact@v4/)
})
