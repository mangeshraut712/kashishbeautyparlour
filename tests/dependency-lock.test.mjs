import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const minimumSafeUuid = [11, 1, 1]
const minimumSafeQs = [6, 16, 1]
const minimumSafeZod = [4, 6, 6]

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

test('the lockfile does not install qs versions affected by GHSA-6pq8-jhm2-2vcw', async () => {
  const lockfile = JSON.parse(
    await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'),
  )
  const qsVersions = Object.entries(lockfile.packages)
    .filter(([path]) => path.endsWith('/node_modules/qs') || path === 'node_modules/qs')
    .map(([, entry]) => entry.version)

  for (const version of qsVersions) {
    assert.ok(
      isAtLeast(parseVersion(version), minimumSafeQs),
      `qs@${version} is affected by GHSA-6pq8-jhm2-2vcw; require at least 6.16.1`,
    )
  }
})

test('the lockfile does not install zod versions affected by GHSA-mrhx-c7xc-m3w5', async () => {
  const lockfile = JSON.parse(
    await readFile(new URL('../package-lock.json', import.meta.url), 'utf8'),
  )
  const zodVersions = Object.entries(lockfile.packages)
    .filter(([path]) => path.endsWith('/node_modules/zod') || path === 'node_modules/zod')
    .map(([, entry]) => entry.version)

  for (const version of zodVersions) {
    assert.ok(
      isAtLeast(parseVersion(version), minimumSafeZod),
      `zod@${version} is affected by GHSA-mrhx-c7xc-m3w5; require at least 4.6.6`,
    )
  }
})
