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

test('greeting only matches whole words, not words that start with "hi"', () => {
  for (const message of ['highlights price', 'hindi speaking staff', 'heyday offers']) {
    assert.equal(PATTERNS.greeting.test(message), false, message)
  }
  for (const message of ['hi', 'Hi there', 'hello!', 'good morning']) {
    assert.equal(PATTERNS.greeting.test(message), true, message)
  }
})

test('facebook questions go to contact, not the facial or booking intents', () => {
  for (const message of ['are you on facebook?', 'facebook page link', 'instagram or facebook']) {
    assert.equal(PATTERNS.facial.test(message), false, message)
    assert.equal(PATTERNS.booking.test(message), false, message)
    assert.equal(PATTERNS.contact.test(message), true, message)
  }
  assert.equal(PATTERNS.facial.test('face cleanup price'), true)
  assert.equal(PATTERNS.booking.test('book a facial'), true)
  assert.equal(PATTERNS.booking.test('can i rebook my slot'), true)
})
