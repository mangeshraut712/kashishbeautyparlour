import assert from 'node:assert/strict'
import test from 'node:test'

const { chatServiceListsFrom, priceHighlightsFrom, isFacialTreatment, chatCourseQuotesFrom } = await import(
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

test('facial quotes are facials, not bleach, de-tan, or ear piercing', () => {
  const facialNames = chatServiceLists.facial.map((item) => item.name)
  assert.ok(facialNames.includes(service('gold-facial').name))
  assert.ok(facialNames.includes(service('cleanup').name))
  assert.ok(facialNames.includes(service('whitening-ritual').name))
  assert.equal(facialNames.includes(service('ear-piercing').name), false)
  assert.equal(facialNames.includes(service('chale-face-bleach').name), false)
  assert.equal(facialNames.includes(service('anti-tan').name), false)
  assert.equal(isFacialTreatment(service('ear-piercing')), false)
  const skinNames = chatServiceLists.skin.map((item) => item.name)
  assert.deepEqual(skinNames.sort(), [
    service('anti-tan').name,
    service('chale-face-bleach').name,
    service('ear-piercing').name,
  ].sort())
})

test('training course quotes match the public academy catalog', async () => {
  const { readFileSync } = await import('node:fs')
  const trainingSource = readFileSync(new URL('../lib/data/training.ts', import.meta.url), 'utf8')
  const engineSource = readFileSync(new URL('../lib/chatbot-engine.ts', import.meta.url), 'utf8')
  const titleMatch = trainingSource.match(/title: '([^']+)'/)
  const priceMatch = trainingSource.match(/price: '(₹[^']+)'/)
  const durationMatch = trainingSource.match(/duration: '([^']+)'/)
  assert.ok(titleMatch && priceMatch && durationMatch)
  const quotes = chatCourseQuotesFrom([
    {
      title: titleMatch[1],
      duration: durationMatch[1],
      price: priceMatch[1],
      schedule: '12 PM – 5 PM',
      features: ['Complete Basic and Advanced Syllabus'],
    },
  ])
  assert.equal(quotes.length, 1)
  assert.equal(quotes[0].price, '₹60,000')
  assert.equal(quotes[0].duration, '6 Months')
  assert.match(quotes[0].name, /Basic to Advanced Makeup/)
  assert.equal(engineSource.includes('₹45,000'), false)
  assert.equal(engineSource.includes('₹80,000'), false)
  assert.equal(engineSource.includes("fee: '₹35,000'"), false)
  assert.match(engineSource, /chatCourseQuotesFrom\(courses\)/)
})
