// Intent patterns for the offline chatbot. Kept dependency-free so they can be unit tested.
// Order matters in ChatbotEngine: hair is checked before spa, so spa words must not appear in hair.
export const PATTERNS = {
    greeting: /^(hi|hello|hey|namaste|good morning|good evening|good afternoon)/i,
    thanks: /(thank|thanks|thankyou|appreciate)/i,

    // Services
    bridal: /(bridal|bride|wedding|marriage|dulhan)/i,
    facial: /(facial|cleanup|face|skin care|glow)/i,
    hair: /(hair|haircut|hairstyle|keratin|color|highlight)/i,
    makeup: /(makeup|party makeup|hd makeup|airbrush)/i,
    spa: /(spa|massage|body|wellness|relax)/i,
    waxing: /(wax|waxing|threading|eyebrow)/i,
    nails: /(nail|manicure|pedicure|nail art)/i,

    // Training
    training: /(training|course|learn|class|certificate|career|job|beautician)/i,

    // Booking
    booking: /(book|appointment|schedule|reserve|slot)/i,
    availability: /(available|open|timing|time|hours|when)/i,

    // Pricing
    price: /(price|cost|fee|charge|rate|how much|payment)/i,

    // Location
    location: /(where|location|address|direction|map)/i,

    // Contact
    contact: /(contact|phone|call|whatsapp|number)/i,

    // About
    about: /(about|who|experience|owner|meena|founder)/i,
}
