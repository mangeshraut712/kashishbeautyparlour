'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-200 text-sm">
          <div className="flex items-center gap-4 text-gray-600">
            <a href={`tel:+917276784825`} className="flex items-center gap-2 hover:text-primary transition">
              <Phone className="w-4 h-4" />
              +91 72767 84825
            </a>
            <span>|</span>
            <span>{BUSINESS_INFO.hours.weekdays}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              Instagram
            </a>
            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              Facebook
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kashish Beauty Parlour Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
                Kashish
              </span>
              <span className="text-xs md:text-sm text-gray-600 -mt-1">
                Beauty Parlour
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact#booking"
            className="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition transform hover:scale-105"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary transition font-medium py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-primary text-white px-6 py-3 rounded-full font-medium text-center transition hover:bg-primary/90"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
