'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, Users, Phone, Mail, MapPin, Sparkles, CheckCircle, Star, MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'

/**
 * Bridal Inquiry Form - Critical for Indian wedding market
 * Detailed questionnaire for bridal bookings
 */

const bridalServices = [
    'Bridal Makeup (Maharashtrian)',
    'Bridal Makeup (South Indian)',
    'Bridal Makeup (North Indian)',
    'Bridal Makeup (Reception/Cocktail)',
    'Bridal Makeup (Christian/Catholic)',
    'Bridal Makeup (Muslim/Nikah)',
    'Engagement Makeup',
    'Mehendi Function Makeup',
    'Sangeet Makeup',
    'Haldi Ceremony Makeup',
    'Pre-Wedding Photoshoot Makeup',
]

const budgetRanges = [
    '₹10,000 - ₹20,000',
    '₹20,000 - ₹35,000',
    '₹35,000 - ₹50,000',
    '₹50,000 - ₹75,000',
    '₹75,000+',
]

const venueTypes = [
    'Hotel/Banquet Hall',
    'Home',
    'Destination Wedding',
    'Temple/Church',
    'Farmhouse/Resort',
    'Other',
]

interface BridalFormData {
    brideName: string
    phone: string
    email: string
    weddingDate: string
    venue: string
    venueType: string
    services: string[]
    budget: string
    guestCount: string
    specialRequests: string
    howHeard: string
}

export default function BridalInquiryForm() {
    const [formData, setFormData] = useState<BridalFormData>({
        brideName: '',
        phone: '',
        email: '',
        weddingDate: '',
        venue: '',
        venueType: '',
        services: [],
        budget: '',
        guestCount: '',
        specialRequests: '',
        howHeard: '',
    })
    const [isRequestReady, setIsRequestReady] = useState(false)

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.brideName || !formData.phone || !formData.weddingDate || formData.services.length === 0) return
        setIsRequestReady(true)
    }

    const bridalRequestHref = buildWhatsAppLink([
        'Hello Kashish Beauty Parlour,',
        '',
        'I would like to request a bridal consultation.',
        `Bride: ${formData.brideName}`,
        `Phone: ${formData.phone}`,
        formData.email ? `Email: ${formData.email}` : '',
        `Wedding date: ${formData.weddingDate}`,
        formData.venue ? `Venue: ${formData.venue}` : '',
        formData.venueType ? `Venue type: ${formData.venueType}` : '',
        `Services: ${formData.services.join(', ')}`,
        formData.budget ? `Budget: ${formData.budget}` : '',
        formData.guestCount ? `Guest count: ${formData.guestCount}` : '',
        formData.specialRequests ? `Notes: ${formData.specialRequests}` : '',
        '',
        'Please confirm availability before booking.',
    ].filter(Boolean).join('\n'))

    if (isRequestReady) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-gray-100"
            >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Bridal inquiry ready to send
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    This static site cannot submit bridal inquiries. Open WhatsApp and send the prepared message to request availability.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                        href={bridalRequestHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 gold-gradient rounded-full text-black font-bold"
                    >
                        Continue on WhatsApp
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsRequestReady(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 font-bold text-gray-700"
                    >
                        Edit inquiry
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-accent to-primary p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Heart className="w-8 h-8 fill-white" />
                        <h2 className="text-2xl font-heading font-bold">Bridal Inquiry</h2>
                    </div>
                    <p className="opacity-90">Let us make your special day even more beautiful</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
                {/* Personal Details */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Bride&apos;s Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="bridal-name" className="block text-sm font-bold text-gray-700 mb-2">
                                Bride&apos;s Name *
                            </label>
                            <input
                                id="bridal-name"
                                type="text"
                                required
                                value={formData.brideName}
                                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                                placeholder="Enter bride's name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="bridal-phone" className="block text-sm font-bold text-gray-700 mb-2">
                                <Phone className="w-4 h-4 inline mr-1" />
                                Phone Number *
                            </label>
                            <input
                                id="bridal-phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="bridal-email" className="block text-sm font-bold text-gray-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-1" />
                                Email Address
                            </label>
                            <input
                                id="bridal-email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="bridal-date" className="block text-sm font-bold text-gray-700 mb-2">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Wedding Date *
                            </label>
                            <input
                                id="bridal-date"
                                type="date"
                                required
                                value={formData.weddingDate}
                                onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Venue Details */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Venue Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="bridal-venue" className="block text-sm font-bold text-gray-700 mb-2">
                                Venue Name/Address
                            </label>
                            <input
                                id="bridal-venue"
                                type="text"
                                value={formData.venue}
                                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                                placeholder="Hotel name or address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="bridal-venue-type" className="block text-sm font-bold text-gray-700 mb-2">
                                Venue Type
                            </label>
                            <select
                                id="bridal-venue-type"
                                value={formData.venueType}
                                onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="">Select venue type</option>
                                {venueTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Services Selection */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Services Required *
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {bridalServices.map((service) => (
                            <button
                                key={service}
                                type="button"
                                onClick={() => handleServiceToggle(service)}
                                aria-pressed={formData.services.includes(service)}
                                className={`p-3 text-left rounded-xl border-2 transition-all text-sm font-medium ${formData.services.includes(service)
                                    ? 'border-primary bg-primary/5 text-black'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    {formData.services.includes(service) && (
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                    )}
                                    {service}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Budget & Additional */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Budget & Preferences
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="bridal-budget" className="block text-sm font-bold text-gray-700 mb-2">
                                Budget Range
                            </label>
                            <select
                                id="bridal-budget"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="">Select budget</option>
                                {budgetRanges.map((range) => (
                                    <option key={range} value={range}>{range}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bridal-referral-source" className="block text-sm font-bold text-gray-700 mb-2">
                                How did you hear about us?
                            </label>
                            <select
                                id="bridal-referral-source"
                                value={formData.howHeard}
                                onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            >
                                <option value="">Select option</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Google">Google Search</option>
                                <option value="JustDial">JustDial</option>
                                <option value="Friend/Family">Friend/Family Referral</option>
                                <option value="Wedding Planner">Wedding Planner</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Special Requests */}
                <div className="mb-8">
                    <label htmlFor="bridal-notes" className="block text-sm font-bold text-gray-700 mb-2">
                        Special Requests / Notes
                    </label>
                    <textarea
                        id="bridal-notes"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Any specific requirements, allergies, makeup preferences, or special requests..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!formData.brideName || !formData.phone || !formData.weddingDate || formData.services.length === 0}
                    className="w-full py-4 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
                >
                    <>
                        <MessageCircle className="w-5 h-5" />
                        Prepare WhatsApp Inquiry
                    </>
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    Your inquiry is not sent until you send the prepared WhatsApp message.
                </p>
            </form>
        </motion.div>
    )
}
