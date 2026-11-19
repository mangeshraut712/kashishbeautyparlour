// Pure pricing for the wedding package calculator (unit tested in tests/wedding-quote.test.mjs).
export const FAMILY_MEMBER_PRICE = 2500
export const MULTI_ADD_ON_DISCOUNT_THRESHOLD = 3
export const MULTI_ADD_ON_DISCOUNT_RATE = 0.1

export function calculateWeddingQuote(basePrice: number, addOnPrices: number[], familyCount: number) {
    const familyTotal = Math.max(0, familyCount) * FAMILY_MEMBER_PRICE
    const addOnsTotal = addOnPrices.reduce((total, price) => total + price, 0)
    const totalPrice = basePrice + addOnsTotal + familyTotal
    const discount = addOnPrices.length >= MULTI_ADD_ON_DISCOUNT_THRESHOLD
        ? Math.round(totalPrice * MULTI_ADD_ON_DISCOUNT_RATE)
        : 0
    return { familyTotal, totalPrice, discount, finalPrice: totalPrice - discount }
}
