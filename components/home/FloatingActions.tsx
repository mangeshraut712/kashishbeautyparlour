'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, X } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useTranslations } from 'next-intl'

export default function FloatingActions() {
    const [isExpanded, setIsExpanded] = useState(false)
    const t = useTranslations('FloatingActions')
    const tCommon = useTranslations('Common')



    return (
        <>
            {/* Fixed Action Buttons - Right Side (phone toggle at bottom) */}
            <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">

                {/* Expanded Contact Actions */}
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {/* WhatsApp Button */}
                            <motion.a
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ delay: 0.05 }}
                                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}?text=Hi, I want to book an appointment at Kashish Beauty Parlour`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] transition-all group"
                                aria-label={t('whatsApp')}
                            >
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-bold text-sm">{t('whatsApp')}</span>
                            </motion.a>

                            {/* Phone Button */}
                            <motion.a
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                href={`tel:${BUSINESS_INFO.contact.whatsapp}`}
                                className="flex items-center gap-3 px-5 py-3 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-all group"
                                aria-label={t('callUs')}
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-bold text-sm">{t('callUs')}</span>
                            </motion.a>
                        </>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <div className="relative">
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${isExpanded
                            ? 'bg-gray-900 text-white rotate-45'
                            : 'gold-gradient text-black hover:shadow-primary/40'
                            }`}
                        whileTap={{ scale: 0.95 }}
                        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
                    >
                        {isExpanded ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Phone className="w-6 h-6" />
                        )}
                    </motion.button>

                    {/* Pulse Effect when closed */}
                    {!isExpanded && (
                        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" />
                    )}
                </div>
            </div>

            {/* Mobile Bottom Bar - Only visible on mobile */}
            <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-2 px-4">
                <div className="flex items-center justify-around gap-2 max-w-lg mx-auto">
                    <a
                        href={`tel:${BUSINESS_INFO.contact.whatsapp}`}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-bold text-sm"
                    >
                        <Phone className="w-4 h-4" />
                        {t('callUs')}
                    </a>
                    <a
                        href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm"
                    >
                        <MessageSquare className="w-4 h-4" />
                        {t('whatsApp')}
                    </a>
                    <a
                        href="#booking"
                        className="flex-1 flex items-center justify-center gap-2 py-3 gold-gradient text-black rounded-xl font-bold text-sm"
                    >
                        {tCommon('bookNow')}
                    </a>
                </div>
            </div>
        </>
    )
}
