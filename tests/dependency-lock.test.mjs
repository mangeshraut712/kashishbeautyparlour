import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const minimumSafeUuid = [11, 1, 1]

function parseVersion(version) {
  const match = /^(\d+)\.(\d+)\.(\d+)/.exec(version)
  assert.ok(match, `expected a semantic version, received ${version}`)
  return match.slice(1).map(Number)
}

function isAtLeast(version, minimum) {
  for (const [index, part] of version.entries()) {
    if (part !== minimum[index]) {
      return part > minimum[index]
    }
  }
  return true
}

test('the UUID advisory comparison follows semantic-version ordering', () => {
  assert.equal(isAtLeast([11, 0, 9], minimumSafeUuid), false)
  assert.equal(isAtLeast([11, 1, 1], minimumSafeUuid), true)
  assert.equal(isAtLeast([12, 0, 0], minimumSafeUuid), true)
})

test('the lockfile does not install UUID versions affected by GHSA-w5hq-g745-h8pq', async () => {
  const lockfile = JSON.parse(
    await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'),
  )
  const uuidVersions = Object.entries(lockfile.packages)
    .filter(([path]) => path.endsWith('/node_modules/uuid') || path === 'node_modules/uuid')
    .map(([, entry]) => entry.version)

  for (const version of uuidVersions) {
    assert.ok(
      isAtLeast(parseVersion(version), minimumSafeUuid),
      `uuid@${version} is affected by GHSA-w5hq-g745-h8pq; require at least 11.1.1`,
    )
  }
})
