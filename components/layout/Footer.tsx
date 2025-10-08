import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Kashish Beauty Parlour
            </h3>
            <p className="text-sm mb-4">
              {BUSINESS_INFO.description}. Providing exceptional beauty services and professional training in Pune since years.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#bridal" className="hover:text-primary transition">
                  Bridal Makeup
                </Link>
              </li>
              <li>
                <Link href="/services#hair" className="hover:text-primary transition">
                  Hair Services
                </Link>
              </li>
              <li>
                <Link href="/services#facial" className="hover:text-primary transition">
                  Facial Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#spa" className="hover:text-primary transition">
                  Spa & Massage
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-primary transition">
                  Beauty Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>{BUSINESS_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-primary transition">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-primary transition">
                  {BUSINESS_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <div>Monday - Sunday: {BUSINESS_INFO.hours.weekdays}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
