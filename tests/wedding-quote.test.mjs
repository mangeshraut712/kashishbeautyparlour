import assert from 'node:assert/strict'
import test from 'node:test'

const { calculateWeddingQuote } = await import(new URL('../lib/wedding-quote.ts', import.meta.url))

test('family members shown in the summary are included in the total', () => {
  const quote = calculateWeddingQuote(25000, [2500], 3)
  assert.equal(quote.familyTotal, 7500)
  assert.equal(quote.totalPrice, 35000)
  assert.equal(quote.finalPrice, 35000)
})

test('the 3+ add-on discount applies to the full total', () => {
  const quote = calculateWeddingQuote(25000, [2500, 3000, 5000], 2)
  assert.equal(quote.totalPrice, 40500)
  assert.equal(quote.discount, 4050)
  assert.equal(quote.finalPrice, 36450)
})
