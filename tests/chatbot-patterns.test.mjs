import assert from 'node:assert/strict'
import test from 'node:test'

const { PATTERNS } = await import(new URL('../lib/chatbot-patterns.ts', import.meta.url))

test('spa questions are not captured by the hair intent', () => {
  for (const message of ['body spa', 'spa massage price', 'do you have a spa']) {
    assert.equal(PATTERNS.hair.test(message), false, message)
    assert.equal(PATTERNS.spa.test(message), true, message)
  }
})

test('hair spa still routes to hair', () => {
  assert.equal(PATTERNS.hair.test('hair spa'), true)
})
