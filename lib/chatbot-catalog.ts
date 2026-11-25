import type { Service } from './data/services'

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

export function quotesInCategory(catalog: Service[], category: string): ChatServiceQuote[] {
    return catalog.filter((item) => item.category === category).map(quote)
}

/** True for facials, cleanups, and facial rituals — not bleach, de-tan, or piercing. */
export function isFacialTreatment(service: Pick<Service, 'id' | 'name'>): boolean {
    return /facial|cleanup|ritual/i.test(`${service.id} ${service.name}`)
}

export function chatServiceListsFrom(catalog: Service[]) {
    const skin = catalog.filter((item) => item.category === 'Facial & Skin')
    return {
        bridalPackages: catalog
            .filter((item) => item.id.startsWith('bridal-makeup'))
            .map(quote),
        makeup: catalog
            .filter(
                (item) =>
                    item.category === 'Bridal & Events' &&
                    !item.id.startsWith('bridal-makeup') &&
                    /makeup|makeover|look|styling/i.test(item.name) &&
                    !/draping|jewelry/i.test(item.name)
            )
            .map(quote),
        facial: skin.filter(isFacialTreatment).map(quote),
        skin: skin.filter((item) => !isFacialTreatment(item)).map(quote),
        hair: quotesInCategory(catalog, 'Hair Care'),
        spa: quotesInCategory(catalog, 'Spa & Wellness'),
        waxing: quotesInCategory(catalog, 'Waxing & Threading'),
        nails: quotesInCategory(catalog, 'Nails'),
    }
}

export const PRICE_HIGHLIGHT_IDS = [
    'bridal-makeup-essential',
    'bridal-makeup-premium',
    'party-makeup',
    'haircut-styling',
    'hair-spa',
    'keratin-treatment',
] as const

export function priceHighlightsFrom(catalog: Service[]): Service[] {
    return PRICE_HIGHLIGHT_IDS.map((id) => {
        const found = catalog.find((item) => item.id === id)
        if (!found) {
            throw new Error(`Missing catalog service ${id}`)
        }
        return found
    })
}

export type TrainingCourseInput = {
    title: string
    duration: string
    price: string
    schedule?: string
    features?: string[]
}

export type ChatCourseQuote = {
    name: string
    duration: string
    price: string
    schedule: string
    includes: string[]
}

export function chatCourseQuotesFrom(catalog: TrainingCourseInput[]): ChatCourseQuote[] {
    return catalog.map((course) => ({
        name: course.title,
        duration: course.duration,
        price: course.price,
        schedule: course.schedule ?? '',
        includes: course.features ?? [],
    }))
}
