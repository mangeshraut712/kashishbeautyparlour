// Smart Chatbot Engine for Kashish Beauty Parlour
// No API keys required - fully offline intelligent assistant

import { BUSINESS_INFO, BUSINESS_STATS } from './constants'
import { PATTERNS } from './chatbot-patterns'
import { services } from './data/services'
import { courses } from './data/training'
import { chatServiceListsFrom, chatCourseQuotesFrom, priceHighlightsFrom } from './chatbot-catalog'

const chatServiceLists = chatServiceListsFrom(services)
const chatCourses = chatCourseQuotesFrom(courses)

interface Message {
    role: 'user' | 'assistant'
    content: string
}

interface ChatbotResponse {
    message: string
    suggestions?: string[]
    data?: Record<string, unknown>
}

// Comprehensive Knowledge Base
const KNOWLEDGE_BASE = {
    services: {
        bridal: {
            name: 'Bridal Makeup',
            description: 'Complete bridal makeup with premium products (MAC, Huda Beauty, Charlotte Tilbury)',
            packages: chatServiceLists.bridalPackages,
            duration: '3-4 hours',
            preBridal: 'We offer pre-bridal packages including facials, cleanups, and skin treatments starting 2 weeks before'
        },
        facial: {
            name: 'Facial Treatments',
            types: chatServiceLists.facial,
            otherSkin: chatServiceLists.skin,
        },
        hair: {
            name: 'Hair Services',
            services: chatServiceLists.hair
        },
        makeup: {
            name: 'Makeup Services',
            types: chatServiceLists.makeup
        },
        spa: {
            name: 'Spa & Wellness',
            treatments: chatServiceLists.spa
        },
        waxing: {
            name: 'Waxing & Threading',
            services: chatServiceLists.waxing
        },
        nails: {
            name: 'Nail Art & Care',
            services: chatServiceLists.nails
        }
    },
    training: {
        courses: chatCourses,
        benefits: [
            'Hands-on practical training',
            'Flexible class timings',
            'Course guidance from the team',
            'Real client exposure'
        ]
    },
    booking: {
        process: [
            'Choose your service',
            'Select preferred date and time',
            'Pick your beautician (optional)',
            'Confirm via WhatsApp or call'
        ],
        whatsapp: BUSINESS_INFO.contact.whatsapp,
        phone: BUSINESS_INFO.contact.phone,
        confirmation: 'The salon will confirm availability directly'
    },
    business: {
        name: BUSINESS_INFO.name,
        location: `${BUSINESS_INFO.address.area}, ${BUSINESS_INFO.address.city}`,
        fullAddress: BUSINESS_INFO.address.full,
        hours: BUSINESS_INFO.hours.weekdays,
        openDays: 'Open all 7 days',
        experience: BUSINESS_STATS.yearsOfExperience,
        founder: {
            name: 'Meena Raut',
            experience: '10+ years',
            instagram: '@meenaraut150880'
        }
    },
    faqs: {
        parking: 'Yes, ample parking space is available near our parlour',
        products: 'We use only premium branded products - MAC, Huda Beauty, Charlotte Tilbury, L\'Oréal Professional',
        hygiene: 'We maintain highest hygiene standards with sanitized tools and equipment',
        payment: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards',
        trial: 'Ask the salon about bridal trial availability and current trial pricing',
        cancellation: 'Free cancellation up to 24 hours before appointment',
        groupBooking: 'Yes, we handle group bookings for weddings, parties. Special discounts available'
    }
}

// Intelligent Pattern Matching

// Smart Response Generator
export class ChatbotEngine {
    private conversationHistory: Message[] = []
    private userContext: {
        interestedService?: string
        askedAboutPrice?: boolean
        wantsBooking?: boolean
    } = {}

    public chat(userMessage: string): ChatbotResponse {
        const normalizedMessage = userMessage.toLowerCase().trim()

        // Add to history
        this.conversationHistory.push({ role: 'user', content: userMessage })

        let response: ChatbotResponse

        // Priority pattern matching
        if (PATTERNS.greeting.test(normalizedMessage)) {
            response = this.getGreeting()
        } else if (PATTERNS.thanks.test(normalizedMessage)) {
            response = this.getThanksResponse()
        } else if (PATTERNS.bridal.test(normalizedMessage)) {
            response = this.getBridalInfo()
            this.userContext.interestedService = 'bridal'
        } else if (PATTERNS.training.test(normalizedMessage)) {
            response = this.getTrainingInfo()
        } else if (PATTERNS.booking.test(normalizedMessage)) {
            response = this.getBookingInfo()
            this.userContext.wantsBooking = true
        } else if (PATTERNS.facial.test(normalizedMessage)) {
            response = this.getFacialInfo()
            this.userContext.interestedService = 'facial'
        } else if (PATTERNS.hair.test(normalizedMessage)) {
            response = this.getHairInfo()
        } else if (PATTERNS.makeup.test(normalizedMessage)) {
            response = this.getMakeupInfo()
        } else if (PATTERNS.spa.test(normalizedMessage)) {
            response = this.getSpaInfo()
        } else if (PATTERNS.waxing.test(normalizedMessage)) {
            response = this.getWaxingInfo()
        } else if (PATTERNS.nails.test(normalizedMessage)) {
            response = this.getNailInfo()
        } else if (PATTERNS.price.test(normalizedMessage)) {
            response = this.getPriceInfo()
            this.userContext.askedAboutPrice = true
        } else if (PATTERNS.location.test(normalizedMessage) || PATTERNS.contact.test(normalizedMessage)) {
            response = this.getContactInfo()
        } else if (PATTERNS.availability.test(normalizedMessage)) {
            response = this.getAvailabilityInfo()
        } else if (PATTERNS.about.test(normalizedMessage)) {
            response = this.getAboutInfo()
        } else {
            response = this.getDefaultResponse(normalizedMessage)
        }

        // Add to history
        this.conversationHistory.push({ role: 'assistant', content: response.message })

        return response
    }

    private getGreeting(): ChatbotResponse {
        const greetings = [
            `Hello! 👋 Welcome to Kashish Beauty Parlour & Training Center!\n\nI'm here to help you with:\n✨ Beauty Services (Bridal, Makeup, Facials, Hair)\n📚 Training Courses\n📅 Appointment Requests\n\nHow can I assist you today?`,
            `Namaste! 🙏 Welcome to Kashish in ${BUSINESS_INFO.address.city}.\n\nWhat would you like to know about?`,
        ]

        return {
            message: greetings[Math.floor(Math.random() * greetings.length)],
            suggestions: ['Bridal Packages', 'Beauty Services', 'Training Courses', 'Book Appointment', 'Pricing']
        }
    }

    private getBridalInfo(): ChatbotResponse {

        let msg = `💍 **Bridal Makeup Packages** at Kashish:\n\n`

        KNOWLEDGE_BASE.services.bridal.packages.forEach((pkg, idx) => {
            msg += `**${idx + 1}. ${pkg.name}** - ${pkg.price}\n`
            msg += `   Includes: ${pkg.includes.join(', ')}\n\n`
        })

        msg += `✨ **Why Choose Us:**\n`
        msg += `• Premium products only (MAC, Huda Beauty, Charlotte Tilbury)\n`
        msg += `• ${BUSINESS_STATS.yearsOfExperience} of expertise\n`
        msg += `• Pre-bridal treatments available\n`
        msg += `• Contact the salon to discuss current payment options\n\n`
        msg += `Would you like to book a bridal trial or need more details?`

        return {
            message: msg,
            suggestions: ['Book Bridal Trial', 'Pre-Bridal Care', 'View Gallery', 'Contact Us']
        }
    }

    private getTrainingInfo(): ChatbotResponse {
        let msg = `🎓 **Professional Beauty Training at Kashish**\n\n`
        msg += `Contact the training center to confirm the current course details.\n\n`

        KNOWLEDGE_BASE.training.courses.forEach((course, idx) => {
            msg += `**${idx + 1}. ${course.name}**\n`
            msg += `   • Duration: ${course.duration}\n`
            msg += `   • Fee: ${course.price}\n`
            if (course.schedule) msg += `   • Schedule: ${course.schedule}\n`
            if (course.includes.length) msg += `   • Includes: ${course.includes.join(', ')}\n`
            msg += `\n`
        })

        msg += `✅ **Benefits:**\n`
        KNOWLEDGE_BASE.training.benefits.forEach(b => msg += `• ${b}\n`)
        msg += `\n👩‍🏫 **Learn from the Kashish team**\n\n`
        msg += `Interested in enrolling? I can help you get started!`

        return {
            message: msg,
            suggestions: ['Enroll Now', 'Course Details', 'Fees & Payment', 'Visit Center']
        }
    }

    private getFacialInfo(): ChatbotResponse {
        let msg = `✨ **Facial Treatments** - Premium Skin Care\n\n`

        KNOWLEDGE_BASE.services.facial.types.forEach(f => {
            msg += `💎 **${f.name}** - ${f.price}\n`
            msg += `   ⏱ ${f.duration}`
            if (f.includes.length) msg += ` | ${f.includes.join(', ')}`
            msg += `\n\n`
        })

        const otherSkin = KNOWLEDGE_BASE.services.facial.otherSkin
        if (otherSkin.length) {
            msg += `**Other skin services:**\n`
            otherSkin.forEach(item => {
                msg += `• **${item.name}** - ${item.price}`
                if (item.duration) msg += ` (${item.duration})`
                if (item.includes.length) msg += ` — ${item.includes.join(', ')}`
                msg += `\n`
            })
            msg += `\n`
        }

        msg += `Book now for glowing, radiant skin!`

        return {
            message: msg,
            suggestions: ['Book Facial', 'Anti-Aging Treatment', 'Bridal Facial Package']
        }
    }

    private getHairInfo(): ChatbotResponse {
        let msg = `💇‍♀️ **Hair Services** - Expert Styling\n\n`

        KNOWLEDGE_BASE.services.hair.services.forEach(h => {
            msg += `• **${h.name}** - ${h.price}\n`
            if (h.duration) msg += `  (${h.duration})\n`
        })

        msg += `\n✂️ Ask the salon about current styling options and product preferences.\n\n`
        msg += `Transform your look today!`

        return {
            message: msg,
            suggestions: ['Book Hair Service', 'Bridal Hair', 'Keratin Treatment', 'Hair Spa']
        }
    }

    private getMakeupInfo(): ChatbotResponse {
        let msg = `💄 **Makeup Services** - Professional Artistry\n\n`

        KNOWLEDGE_BASE.services.makeup.types.forEach(m => {
            msg += `✨ **${m.name}** - ${m.price}\n`
            msg += `   Duration: ${m.duration}\n\n`
        })

        msg += `👑 **Premium Products Used:**\n• MAC • Huda Beauty • Charlotte Tilbury\n`
        msg += `• Urban Decay • Anastasia Beverly Hills\n\n`
        msg += `Perfect makeup for every occasion!`

        return {
            message: msg,
            suggestions: ['Book Party Makeup', 'Bridal Makeup', 'HD Makeup']
        }
    }

    private getSpaInfo(): ChatbotResponse {
        let msg = `🧘‍♀️ **Spa & Wellness** - Complete Relaxation\n\n`

        KNOWLEDGE_BASE.services.spa.treatments.forEach(s => {
            msg += `• **${s.name}** - ${s.price}\n  ${s.duration}\n\n`
        })

        msg += `Experience ultimate relaxation and rejuvenation!\n`
        msg += `All treatments in a serene, hygienic environment.`

        return {
            message: msg,
            suggestions: ['Book Spa Session', 'Body Polishing', 'Aromatherapy']
        }
    }

    private getWaxingInfo(): ChatbotResponse {
        let msg = `🌟 **Waxing & Threading Services**\n\n`

        KNOWLEDGE_BASE.services.waxing.services.forEach(w => {
            msg += `• ${w.name} - ${w.price}\n`
        })

        msg += `\nPain-free waxing with premium quality wax!`

        return {
            message: msg,
            suggestions: ['Book Now', 'View All Services']
        }
    }

    private getNailInfo(): ChatbotResponse {
        let msg = `💅 **Nail Art & Care**\n\n`

        KNOWLEDGE_BASE.services.nails.services.forEach(n => {
            msg += `• **${n.name}** - ${n.price}`
            if (n.duration) msg += ` (${n.duration})`
            msg += `\n`
        })

        msg += `\n✨ Ask the salon about current nail design options.`

        return {
            message: msg,
            suggestions: ['Book Manicure', 'Book Pedicure', 'Nail Art Design']
        }
    }

    private getBookingInfo(): ChatbotResponse {
        const msg = `📅 **Easy Booking Process:**\n\n` +
            `1️⃣ Choose your service\n` +
            `2️⃣ Select date & time\n` +
            `3️⃣ Pick your beautician (optional)\n` +
            `4️⃣ Send your request to the salon\n\n` +
            `📱 **Book Now:**\n` +
            `• WhatsApp: ${BUSINESS_INFO.contact.whatsapp}\n` +
            `• Call: +91 ${BUSINESS_INFO.contact.phone}\n` +
            `• Website: Use our online booking calendar\n\n` +
            `The salon will confirm availability directly.`

        return {
            message: msg,
            suggestions: ['WhatsApp Booking', 'Call Now', 'View Schedule']
        }
    }

    private getContactInfo(): ChatbotResponse {
        const msg = `📍 **Visit Us:**\n\n` +
            `${BUSINESS_INFO.address.full}\n\n` +
            `📞 **Contact:**\n` +
            `• Phone: +91 ${BUSINESS_INFO.contact.phone}\n` +
            `• WhatsApp: ${BUSINESS_INFO.contact.whatsapp}\n` +
            `• Email: ${BUSINESS_INFO.contact.email}\n\n` +
            `🕐 **Timings:** ${BUSINESS_INFO.hours.weekdays}\n` +
            `${KNOWLEDGE_BASE.business.openDays}\n\n` +
            `📱 **Follow Us:**\n` +
            `Instagram: @kashishbeautyandtraining\n` +
            `Facebook: ${BUSINESS_INFO.social.facebook}\n` +
            `Owner: @meenaraut150880`

        return {
            message: msg,
            suggestions: ['Get Directions', 'Call Now', 'WhatsApp Us']
        }
    }

    private getAvailabilityInfo(): ChatbotResponse {
        const msg = `⏰ **We're Open:**\n\n` +
            `⭐ **All 7 Days!**\n` +
            `Monday - Sunday: ${BUSINESS_INFO.hours.weekdays}\n\n` +
            `📅 Online booking available 24/7\n` +
            `📞 Call us during working hours for instant confirmation\n\n` +
            `What time works best for you?`

        return {
            message: msg,
            suggestions: ['Book Today', 'Book Tomorrow', 'Weekend Slot', 'Evening Slot']
        }
    }

    private getPriceInfo(): ChatbotResponse {
        const service = this.userContext.interestedService

        if (service === 'bridal') {
            return this.getBridalInfo()
        } else if (service === 'facial') {
            return this.getFacialInfo()
        }

        let msg = `💰 **Our Services & Pricing:**\n\n**Popular Services:**\n`
        for (const item of priceHighlightsFrom(services)) {
            msg += `• ${item.name}: ${item.price}\n`
        }
        msg += `\n**Training Courses:**\n`
        for (const course of chatCourses) {
            msg += `• ${course.name}: ${course.price} (${course.duration})\n`
        }
        msg += `\n` +
            `💳 Contact the salon to discuss current payment options.\n` +
            `Which service interests you?`

        return {
            message: msg,
            suggestions: ['Bridal Packages', 'Training Courses', 'Facial Pricing', 'Hair Services']
        }
    }

    private getAboutInfo(): ChatbotResponse {
        const msg = `🌟 **About Kashish Beauty Parlour**\n\n` +
            `${BUSINESS_INFO.address.city} beauty services and training center\n\n` +
            `👑 **Founder:** Meena Raut\n` +
            `• ${KNOWLEDGE_BASE.business.founder.experience} expertise\n` +
            `\n📍 Contact the salon for current service, training, and appointment information.`

        return {
            message: msg,
            suggestions: ['View Services', 'Training Center', 'Book Now', 'Contact Us']
        }
    }

    private getThanksResponse(): ChatbotResponse {
        const responses = [
            `You're welcome! 😊 Happy to help!\n\nIs there anything else you'd like to know?`,
            `My pleasure! ✨ Feel free to ask if you need anything else.\n\nLooking forward to serving you!`,
            `Glad I could help! 🌸 Don't hesitate to reach out for anything.\n\nHave a beautiful day!`
        ]

        return {
            message: responses[Math.floor(Math.random() * responses.length)],
            suggestions: ['Book Appointment', 'View Services', 'Training Courses']
        }
    }

    private getDefaultResponse(message: string): ChatbotResponse {
        // Check for specific keywords even in unknown queries
        if (message.includes('price') || message.includes('cost')) {
            return this.getPriceInfo()
        }

        const msg = `I'd love to help you! 😊\n\n` +
            `I can assist you with:\n` +
            `💄 Beauty Services (Bridal, Makeup, Hair, Facials, Spa)\n` +
            `🎓 Training Courses\n` +
            `📅 Booking Appointments\n` +
            `💰 Pricing Information\n` +
            `📍 Location & Contact Details\n\n` +
            `What would you like to know?`

        return {
            message: msg,
            suggestions: ['Bridal Makeup', 'Training Courses', 'Book Appointment', 'Pricing', 'Contact Us']
        }
    }

    public reset(): void {
        this.conversationHistory = []
        this.userContext = {}
    }

    public getHistory(): Message[] {
        return this.conversationHistory
    }
}

// Export singleton instance
export const chatbotEngine = new ChatbotEngine()
