'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer')
  const tNav = useTranslations('Nav')
  const tCommon = useTranslations('Common')

  const quickLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/services' },
    { key: 'gallery', href: '/gallery' },
    { key: 'contact', href: '/contact' },
  ]

  const serviceLinks = [
    { key: 'bridal', href: '/bridal' },
    { key: 'services', href: '/services' },
    { key: 'training', href: '/training' },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Background - Light only */}
      <div className="absolute inset-0 bg-white" />

      {/* Top accent gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/icon.png"
                  alt="Kashish Beauty Parlour And Training Center"
                  width={56}
                  height={56}
                  className="relative h-14 w-auto transition-transform group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">Kashish</h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">Beauty Parlour And Training Center</p>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-sm">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Facebook">
                <div className="absolute inset-0 bg-[#1877F2] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              {t('quickLinks')}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              {t('ourServices')}
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              {t('getInTouch')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="flex items-start gap-4 text-sm text-gray-600 hover:text-gray-900 transition-colors group p-3 -m-3 rounded-xl hover:bg-gray-50"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{tCommon('callUs')}</div>
                    <div className="font-bold text-gray-900">+91 {BUSINESS_INFO.contact.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="flex items-start gap-4 text-sm text-gray-600 hover:text-gray-900 transition-colors group p-3 -m-3 rounded-xl hover:bg-gray-50"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{tCommon('emailUs')}</div>
                    <div className="font-medium text-sm text-gray-600 break-all">{BUSINESS_INFO.contact.email}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-sm text-gray-600 p-3 -m-3 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{tCommon('location')}</div>
                  <div className="leading-relaxed">{BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}</div>
                </div>
              </li>
              <li className="flex items-start gap-4 text-sm p-3 -m-3 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{tCommon('workingHours')}</div>
                  <div className="text-gray-900 font-medium">{BUSINESS_INFO.hours.weekdays}</div>
                  <div className="text-gray-500 text-xs">{tCommon('openAllDays')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>© {currentYear} {BUSINESS_INFO.name}. {t('copyright')}</span>
            </div>

            <div className="flex items-center gap-8 text-xs">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                {tCommon('privacyPolicy')}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                {tCommon('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent - gold gradient bar */}
      <div className="h-1 w-full gold-gradient" />

      {/* Bottom Padding for Mobile Action Bar */}
      <div className="h-20 lg:hidden" />
    </footer>
  )
}
