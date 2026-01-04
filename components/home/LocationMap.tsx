'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone, ExternalLink, Car, Bus, Train } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useTranslations } from 'next-intl'

const nearbyLandmarks = [
    { name: 'Dange Chowk', distance: '0.5 km' },
    { name: 'Thergaon Bus Stop', distance: '0.3 km' },
    { name: 'Pimple Saudagar Signal', distance: '1.2 km' },
]

export default function LocationMap() {
    const t = useTranslations('LocationMap')
    const tCommon = useTranslations('Common')

    const transportOptions = [
        {
            icon: Car,
            title: t('byCar'),
            description: 'Free parking available near the salon',
        },
        {
            icon: Bus,
            title: t('byBus'),
            description: 'Thergaon bus stop - 2 min walk',
        },
        {
            icon: Train,
            title: t('byTrain'),
            description: 'Dange Chowk Metro - 10 min walk',
        },
    ]

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-primary/20 shadow-sm">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                            {t('tagline')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                        {t('title')} <span className="gold-text-animated">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[16/10]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5837477391247!2d73.76860037519753!3d18.614250282504727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6a6c94b9b%3A0x48a3d73b36c5a05!2sKashish%20Beauty%20Parlour%20And%20Training%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kashish Beauty Parlour Location"
                                className="absolute inset-0"
                            />

                            {/* Get Directions Button */}
                            <a
                                href={BUSINESS_INFO.maps.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-6 py-3 bg-white shadow-xl rounded-full font-bold text-gray-900 hover:bg-primary hover:text-black transition-all group"
                            >
                                <Navigation className="w-4 h-4 text-primary group-hover:text-black" />
                                {t('getDirections')}
                                <ExternalLink className="w-3 h-3 opacity-50" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Address Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('address')}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {BUSINESS_INFO.address.line1},<br />
                                        {BUSINESS_INFO.address.line2},<br />
                                        {BUSINESS_INFO.address.area},<br />
                                        {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{t('hours')}</h3>
                                    <div className="text-gray-600 text-sm space-y-1">
                                        <p>{t('monToSat')}: {BUSINESS_INFO.hours.weekdays}</p>
                                        <p>{t('sunday')}: {BUSINESS_INFO.hours.sunday}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-white border border-green-100 px-3 py-1.5 rounded-full w-fit shadow-sm">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                {t('openNow')}
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{tCommon('callUs')}</h3>
                                    <a href={`tel:${BUSINESS_INFO.contact.whatsapp}`} className="text-primary font-bold text-lg hover:underline">
                                        {BUSINESS_INFO.contact.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Nearby Landmarks */}
                        <div className="bg-white rounded-3xl p-6 border border-primary/10 shadow-sm transition-all hover:shadow-md">
                            <h3 className="font-bold text-gray-900 mb-4">{t('landmarks')}</h3>
                            <div className="space-y-3">
                                {nearbyLandmarks.map((landmark, index) => (
                                    <div key={index} className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600">{landmark.name}</span>
                                        <span className="text-primary font-bold">{landmark.distance}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Transport Options */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {transportOptions.map((option, index) => {
                        const Icon = option.icon
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 transition-all shadow-sm"
                            >
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{option.title}</h4>
                                    <p className="text-gray-500 text-xs">{option.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
