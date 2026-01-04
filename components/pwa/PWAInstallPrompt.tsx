'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Sparkles } from 'lucide-react'

/**
 * PWA Install Prompt - Full implementation
 * Shows install prompt for adding app to home screen
 */

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

import { useTranslations } from 'next-intl'

export default function PWAInstallPrompt() {
    const t = useTranslations('Marketing.PWA')
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showPrompt, setShowPrompt] = useState(false)
    const [isInstalled, setIsInstalled] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Register Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then((registration) => {
                    console.log('SW registered: ', registration);
                }).catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true)
            return
        }

        // Check if dismissed recently
        const dismissed = localStorage.getItem('pwaPromptDismissed')
        if (dismissed) {
            const dismissedTime = new Date(dismissed).getTime()
            const now = new Date().getTime()
            const daysSinceDismissed = (now - dismissedTime) / (1000 * 60 * 60 * 24)
            if (daysSinceDismissed < 7) return // Don't show for 7 days
        }

        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)
            // Show prompt after 30 seconds
            setTimeout(() => setShowPrompt(true), 30000)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => window.removeEventListener('beforeinstallprompt', handler)
    }, [])

    const handleInstall = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            setIsInstalled(true)
        }

        setDeferredPrompt(null)
        setShowPrompt(false)
    }

    const handleDismiss = () => {
        setShowPrompt(false)
        localStorage.setItem('pwaPromptDismissed', new Date().toISOString())
    }

    // Don't render until mounted to avoid hydration issues
    if (!mounted || isInstalled || !showPrompt) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="fixed bottom-28 right-4 w-[calc(100%-2rem)] max-w-sm md:right-6 md:w-96 z-40"
            >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold">{t('title')}</h3>
                                    <p className="text-xs opacity-80">{t('subtitle')}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleDismiss}
                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                                aria-label={t('close')}
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="p-4">
                        <ul className="space-y-2 mb-4 text-sm text-gray-600">
                            {[1, 2, 3].map((i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    {t(`feature${i}`)}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleInstall}
                            className="w-full py-3 gold-gradient text-black font-bold rounded-xl flex items-center justify-center gap-2 transition hover:shadow-lg"
                        >
                            <Download className="w-5 h-5" />
                            {t('installButton')}
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
