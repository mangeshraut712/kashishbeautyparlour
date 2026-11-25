import { services, type Service } from './data/services.ts'

export type ChatServiceQuote = {
    name: string
    price: string
    duration: string
    includes: string[]
}

function quote(service: Service): ChatServiceQuote {
    return {
        name: service.name,
        price: service.price,
        duration: service.duration,
        includes: service.features ?? [],
    }
}

export function quotesInCategory(category: string): ChatServiceQuote[] {
    return services.filter((item) => item.category === category).map(quote)
}

export const chatServiceLists = {
    bridalPackages: services
        .filter((item) => item.id.startsWith('bridal-makeup'))
        .map(quote),
    makeup: services
        .filter(
            (item) =>
                item.category === 'Bridal & Events' &&
                !item.id.startsWith('bridal-makeup') &&
                /makeup|makeover|look|styling/i.test(item.name) &&
                !/draping|jewelry/i.test(item.name)
        )
        .map(quote),
    facial: quotesInCategory('Facial & Skin'),
    hair: quotesInCategory('Hair Care'),
    spa: quotesInCategory('Spa & Wellness'),
    waxing: quotesInCategory('Waxing & Threading'),
    nails: quotesInCategory('Nails'),
}

export const PRICE_HIGHLIGHT_IDS = [
    'bridal-makeup-essential',
    'bridal-makeup-premium',
    'party-makeup',
    'haircut-styling',
    'hair-spa',
    'keratin-treatment',
] as const

export function priceHighlights(): Service[] {
    return PRICE_HIGHLIGHT_IDS.map((id) => {
        const found = services.find((item) => item.id === id)
        if (!found) {
            throw new Error(`Missing catalog service ${id}`)
        }
        return found
    })
}
