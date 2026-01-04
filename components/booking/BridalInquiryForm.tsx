'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Calendar, Users, Phone, Mail, MapPin, Sparkles, CheckCircle, Star } from 'lucide-react'

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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-gray-100"
            >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white fill-white" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Thank You, Beautiful Bride! 💕
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    We&apos;ve received your bridal inquiry. Our team will contact you within 24 hours to discuss your dream wedding look.
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold">
                    <Sparkles className="w-5 h-5" />
                    Congratulations on your upcoming wedding!
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
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Bride&apos;s Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.brideName}
                                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                                placeholder="Enter bride's name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <Phone className="w-4 h-4 inline mr-1" />
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-1" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Wedding Date *
                            </label>
                            <input
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
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Venue Name/Address
                            </label>
                            <input
                                type="text"
                                value={formData.venue}
                                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                                placeholder="Hotel name or address"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Venue Type
                            </label>
                            <select
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
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                Budget Range
                            </label>
                            <select
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
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                How did you hear about us?
                            </label>
                            <select
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        Special Requests / Notes
                    </label>
                    <textarea
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
                    disabled={isSubmitting || !formData.brideName || !formData.phone || !formData.weddingDate || formData.services.length === 0}
                    className="w-full py-4 gold-gradient text-black font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
                >
                    {isSubmitting ? (
                        <>
                            <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <Heart className="w-5 h-5" />
                            Submit Bridal Inquiry
                        </>
                    )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                    We respect your privacy and will contact you within 24 hours
                </p>
            </form>
        </motion.div>
    )
}
