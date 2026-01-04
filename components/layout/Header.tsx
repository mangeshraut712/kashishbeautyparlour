'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronRight, Sparkles } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'

// Navigation links config (hrefs only - names come from translations)
const NAV_HREFS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'bridal', href: '/bridal' },
  { key: 'gallery', href: '/gallery' },
  { key: 'training', href: '/training' },
  { key: 'contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Nav')
  const tCommon = useTranslations('Common')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Initial check
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent rendering dynamic path-dependent content until mounted
  const currentPath = mounted ? pathname : ''

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-2'
          : 'py-3 md:py-4'
          }`}
      >
        {/* Background - Glassmorphism */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
            : 'bg-white border-b border-transparent'
            }`}
        />

        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2 md:gap-3">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 rounded-full bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Image
                  src="/icon.png"
                  alt="Kashish Beauty Parlour And Training Center"
                  width={52}
                  height={52}
                  className={`relative transition-all duration-500 group-hover:scale-110 ${isScrolled ? 'h-10 md:h-11 w-auto' : 'h-11 md:h-12 w-auto'}`}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-heading font-bold leading-none tracking-tight text-gray-900 transition-colors duration-500">
                  Kashish
                </span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-primary transition-colors duration-500">
                  Beauty Parlour And Training Center
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center rounded-full px-2 py-1.5 bg-gray-50/80 backdrop-blur-md border border-gray-100 transition-all duration-500">
              {NAV_HREFS.map((link) => {
                const isActive = currentPath === link.href || currentPath.endsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${isActive
                      ? 'text-black bg-primary shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/contact#booking"
                className="group relative px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all"
              >
                <div className="absolute inset-0 gold-gradient transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-black flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tCommon('bookAppointment')}
                </span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="mr-1">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl border-l border-gray-100"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icon.png"
                      alt="Kashish"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <div>
                      <p className="font-heading font-bold text-gray-900 leading-none">Kashish</p>
                      <p className="text-[9px] uppercase tracking-widest text-primary font-bold mt-1">Beauty Parlour And Training Center</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <ul className="space-y-3">
                    {NAV_HREFS.map((link, index) => {
                      const isActive = currentPath === link.href || currentPath.endsWith(link.href)
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${isActive
                              ? 'bg-primary text-black shadow-lg shadow-primary/20'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                          >
                            <span>{t(link.key)}</span>
                            <ChevronRight className={`w-4 h-4 ${isActive ? 'text-black/60' : 'text-gray-400'}`} />
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <Link
                    href="/contact#booking"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full gold-gradient text-black px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-primary/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    {tCommon('bookAppointment')}
                  </Link>
                  <a
                    href={`tel:${BUSINESS_INFO.contact.phone}`}
                    className="flex items-center justify-center gap-3 w-full bg-gray-50 text-gray-700 px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    +91 {BUSINESS_INFO.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
