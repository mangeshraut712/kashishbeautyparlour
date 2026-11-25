import assert from 'node:assert/strict'
import test from 'node:test'

const { isNavActive } = await import(new URL('../lib/nav.ts', import.meta.url))

test('home is active only on the home page, with or without the trailing slash', () => {
  assert.equal(isNavActive('/', '/'), true)
  assert.equal(isNavActive('/about/', '/'), false)
  assert.equal(isNavActive('/services', '/'), false)
})

test('a section is active on its page under trailingSlash: true', () => {
  assert.equal(isNavActive('/about/', '/about'), true)
  assert.equal(isNavActive('/about', '/about'), true)
  assert.equal(isNavActive('/services/', '/about'), false)
})

test('nested pages keep their section active without prefix collisions', () => {
  assert.equal(isNavActive('/blog/123/', '/blog'), true)
  assert.equal(isNavActive('/blogroll/', '/blog'), false)
})

test('nothing is active before the client knows the pathname', () => {
  assert.equal(isNavActive('', '/'), false)
  assert.equal(isNavActive('', '/about'), false)
})
