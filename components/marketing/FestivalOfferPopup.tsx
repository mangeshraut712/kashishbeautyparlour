'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Percent, Sparkles, Clock, Crown } from 'lucide-react'
import { useTranslations } from 'next-intl'

/**
 * Festival Offers & First Visit Discount Popup
 * Shows promotional offers for Indian festivals and new customers
 */

interface FestivalOffer {
    id: string
    title: string
    description: string
    discount: string
    code?: string
    validTill: string
    icon: React.ReactNode
    bgColor: string
    forNewCustomers?: boolean
}

export default function FestivalOfferPopup() {
    const t = useTranslations('Marketing.FestivalOfferPopup')
    const [isOpen, setIsOpen] = useState(false)
    const [currentOffer, setCurrentOffer] = useState<FestivalOffer | null>(null)
    const [copied, setCopied] = useState(false)
    const [mounted, setMounted] = useState(false)

    const festivalOffers: FestivalOffer[] = [
        {
            id: 'new-customer',
            title: t('offers.newCustomer.title'),
            description: t('offers.newCustomer.description'),
            discount: t('offers.newCustomer.discount'),
            code: 'WELCOME10',
            validTill: t('offers.newCustomer.validTill'),
            icon: <Gift className="w-6 h-6" />,
            bgColor: 'from-green-500 to-emerald-600',
            forNewCustomers: true,
        },
        {
            id: 'wedding-season',
            title: t('offers.weddingSeason.title'),
            description: t('offers.weddingSeason.description'),
            discount: t('offers.weddingSeason.discount'),
            code: 'SHAADI2025',
            validTill: t('offers.weddingSeason.validTill'),
            icon: <Crown className="w-6 h-6" />,
            bgColor: 'from-pink-500 to-rose-600',
        },
        {
            id: 'weekend-glow',
            title: t('offers.weekendGlow.title'),
            description: t('offers.weekendGlow.description'),
            discount: t('offers.weekendGlow.discount'),
            code: 'WEEKEND25',
            validTill: t('offers.weekendGlow.validTill'),
            icon: <Sparkles className="w-6 h-6" />,
            bgColor: 'from-purple-500 to-indigo-600',
        },
    ]

    useEffect(() => {
        setMounted(true)

        // Check if user has seen the popup today
        const lastSeen = localStorage.getItem('offerPopupLastSeen')
        const today = new Date().toDateString()

        if (lastSeen !== today) {
            // Show popup after 5 seconds
            const timer = setTimeout(() => {
                setCurrentOffer(festivalOffers[0])
                setIsOpen(true)
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [festivalOffers])

    const handleClose = () => {
        setIsOpen(false)
        localStorage.setItem('offerPopupLastSeen', new Date().toDateString())
    }

    const handleCopyCode = () => {
        if (currentOffer?.code) {
            navigator.clipboard.writeText(currentOffer.code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    // Don't render until mounted to avoid hydration issues
    if (!mounted) return null

    return (
        <AnimatePresence>
            {isOpen && currentOffer && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                            aria-label={t('close')}
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Header */}
                        <div className={`bg-gradient-to-br ${currentOffer.bgColor} p-8 text-white relative overflow-hidden`}>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                                    {currentOffer.icon}
                                </div>
                                <h2 className="text-2xl font-heading font-bold mb-2">
                                    {currentOffer.title}
                                </h2>
                                <p className="opacity-90">{currentOffer.description}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="bg-white p-8">
                            {/* Discount Display */}
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-2xl">
                                    <Percent className="w-6 h-6 text-primary" />
                                    <span className="text-3xl font-bold text-primary">{currentOffer.discount}</span>
                                </div>
                            </div>

                            {/* Coupon Code */}
                            {currentOffer.code && (
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 text-center mb-2 font-medium">{t('useCode')}</p>
                                    <button
                                        onClick={handleCopyCode}
                                        className="w-full py-4 px-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center justify-center gap-3 group border border-gray-100"
                                    >
                                        <code className="text-xl font-mono font-bold text-gray-900 tracking-wider">
                                            {currentOffer.code}
                                        </code>
                                        <span className={`text-sm font-bold ${copied ? 'text-green-600' : 'text-primary'}`}>
                                            {copied ? `✓ ${t('copied')}` : t('copy')}
                                        </span>
                                    </button>
                                </div>
                            )}

                            {/* Validity */}
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6 font-medium">
                                <Clock className="w-4 h-4" />
                                <span>{currentOffer.validTill}</span>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={handleClose}
                                className="w-full py-4 gold-gradient text-black font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-primary/20"
                            >
                                {t('bookNowSave')}
                            </button>

                            {/* Other Offers */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-xs text-gray-400 text-center mb-3 font-bold uppercase tracking-widest">{t('moreOffers')}</p>
                                <div className="flex justify-center gap-2">
                                    {festivalOffers.map((offer) => (
                                        <button
                                            key={offer.id}
                                            onClick={() => setCurrentOffer(offer)}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${offer.bgColor} flex items-center justify-center transition-transform ${currentOffer.id === offer.id ? 'scale-110 ring-2 ring-offset-2 ring-primary shadow-md' : 'opacity-60 hover:opacity-100'
                                                }`}
                                            aria-label={`View ${offer.title}`}
                                        >
                                            <span className="text-white text-lg">
                                                {offer.id === 'new-customer' ? '🎁' : offer.id === 'wedding-season' ? '💒' : '✨'}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
