import assert from 'node:assert/strict'
import test from 'node:test'

const { chatServiceListsFrom, priceHighlightsFrom } = await import(
  new URL('../lib/chatbot-catalog.ts', import.meta.url)
)
const { services } = await import(new URL('../lib/data/services.ts', import.meta.url))
const chatServiceLists = chatServiceListsFrom(services)

function service(id) {
  const found = services.find((item) => item.id === id)
  assert.ok(found, id)
  return found
}

test('party makeup quotes match the public catalog', () => {
  const party = service('party-makeup')
  const quote = chatServiceLists.makeup.find((item) => item.name === party.name)
  assert.deepEqual(quote, {
    name: party.name,
    price: party.price,
    duration: party.duration,
    includes: party.features,
  })
})

test('premium bridal quotes match the public catalog', () => {
  const premium = service('bridal-makeup-premium')
  const quote = chatServiceLists.bridalPackages.find((item) => item.name === premium.name)
  assert.equal(quote.price, premium.price)
  assert.deepEqual(quote.includes, premium.features)
})

test('keratin and price highlights match the public catalog', () => {
  const keratin = service('keratin-treatment')
  const hairQuote = chatServiceLists.hair.find((item) => item.name === keratin.name)
  assert.equal(hairQuote.price, keratin.price)
  assert.equal(hairQuote.duration, keratin.duration)

  const highlights = priceHighlightsFrom(services)
  assert.equal(highlights.length, 6)
  for (const item of highlights) {
    const catalog = service(item.id)
    assert.equal(item.price, catalog.price)
    assert.equal(item.name, catalog.name)
  }
})
