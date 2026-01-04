'use client'

import Hero from '@/components/home/Hero'
import FeaturedServices from '@/components/home/FeaturedServices'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import SpecialOffers from '@/components/home/SpecialOffers'
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery'
import StaffProfiles from '@/components/home/StaffProfiles'
import BookingCalendar from '@/components/booking/BookingCalendar'
import SocialProof from '@/components/home/SocialProof'
import InstagramFeed from '@/components/home/InstagramFeed'
import ProcessSteps from '@/components/home/ProcessSteps'
import LocationMap from '@/components/home/LocationMap'

import { Sparkles, ArrowRight, CheckCircle, Phone, MessageSquare, Calendar, Clock, Star, Heart, Award, Users, Shield, Zap, Gift, Crown, Scissors, Palette, Flower2, Gem, Wand2 } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { BUSINESS_STATS, BUSINESS_INFO } from '@/lib/constants'
import Image from 'next/image'
import { useRef } from 'react'



// Enhanced Marquee component for scrolling text
const Marquee = ({ children, direction = 'left', speed = 20 }: { children: React.ReactNode; direction?: 'left' | 'right'; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      animate={{ x: direction === 'left' ? [0, -1000] : [-1000, 0] }}
      transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      className="inline-flex gap-8"
    >
      {children}
      {children}
    </motion.div>
  </div>
)

export default function Home() {
  // Ref for parallax effects
  const containerRef = useRef<HTMLDivElement>(null)

  const bookingFeatures = [
    { icon: MessageSquare, text: 'WhatsApp Confirmation', color: 'bg-gradient-to-br from-green-500 to-emerald-600', shadow: 'shadow-green-500/30' },
    { icon: Calendar, text: 'Priority Scheduling', color: 'bg-gradient-to-br from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/30' },
    { icon: Clock, text: 'Easy Rescheduling', color: 'bg-gradient-to-br from-purple-500 to-violet-600', shadow: 'shadow-purple-500/30' },
    { icon: Shield, text: 'Secure UPI Payments', color: 'bg-gradient-to-br from-amber-500 to-orange-600', shadow: 'shadow-amber-500/30' },
  ]

  const serviceHighlights = [
    { icon: Crown, text: 'Bridal Makeup', color: 'text-pink-400' },
    { icon: Scissors, text: 'Hair Styling', color: 'text-purple-400' },
    { icon: Palette, text: 'Facials', color: 'text-blue-400' },
    { icon: Flower2, text: 'Spa & Wellness', color: 'text-green-400' },
    { icon: Gem, text: 'Nail Art', color: 'text-amber-400' },
    { icon: Heart, text: 'Skin Care', color: 'text-rose-400' },
    { icon: Wand2, text: 'Threading', color: 'text-cyan-400' },
    { icon: Star, text: 'Mehendi', color: 'text-orange-400' },
  ]



  return (
    <div ref={containerRef}>


      <Hero />

      {/* Scrolling Service Highlights Banner */}
      <section className="py-5 bg-white border-y border-gray-100 overflow-hidden relative">
        <Marquee direction="left" speed={25}>
          <div className="flex items-center gap-16 px-4">
            {serviceHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className={`w-4 h-4 text-primary`} />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-gray-900 group-hover:text-primary transition-colors">{item.text}</span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Process Steps - NEW SECTION */}
      <ProcessSteps />

      <FeaturedServices />

      {/* Quick Booking CTA */}
      <section id="booking" className="snap-section py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white shadow-xl shadow-primary/10 rounded-full mb-8 border border-primary/10"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  Instant Reservations
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Experience Beauty
                <span className="block mt-2 gold-text-animated italic">At Your Convenience</span>
              </h2>

              <p className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                Select your preferred date, time, and service. We&apos;ll confirm your luxury experience via WhatsApp instantly.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {bookingFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 transition-all hover:border-primary/30 hover:shadow-xl group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${feature.color} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg ${feature.shadow}`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-900">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`tel:${BUSINESS_INFO.contact.whatsapp}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-500/30"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold transition-all shadow-lg shadow-[#25D366]/30"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="pt-6 border-t border-gray-100 hidden lg:flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-pink-500/30 border-3 border-white flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Trusted by {BUSINESS_STATS.happyCustomers}+ Clients</p>
                  <p className="text-xs text-gray-500">⭐ {BUSINESS_STATS.averageRating} average rating on Google</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="shadow-[0_30px_80px_rgba(0,0,0,0.15)] rounded-[2.5rem] overflow-hidden border-4 border-white">
                <BookingCalendar />
              </div>

              {/* Floating Card - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Quick Response</p>
                    <p className="text-sm text-gray-500">Confirmation within 2 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-amber-500 px-4 py-2 rounded-full shadow-xl hidden lg:flex items-center gap-2"
              >
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-white font-bold text-sm">Top Rated</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <BeforeAfterGallery />
      <WhyChooseUs />
      <StaffProfiles />

      {/* Instagram Feed - NEW SECTION */}
      <InstagramFeed />

      {/* Special Offers with Enhanced Design */}
      <SpecialOffers />

      {/* Testimonials / Social Proof */}
      <SocialProof />

      {/* Bridal CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-28 bg-white text-gray-900 relative overflow-hidden"
      >
        {/* Decorative Background - Removed blurs for solid white theme */}
        <div className="absolute inset-0 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-100 rounded-full mb-8 border border-pink-200">
              <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
              <span className="text-pink-700 font-bold text-xs uppercase tracking-[0.2em]">
                Bridal Services
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Getting Married? <span className="gold-text-animated">💒</span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-600 font-medium">
              Book your bridal trial and let us create your dream wedding look
            </p>

            {/* Bridal Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              {[
                { icon: Crown, text: 'Bridal Makeup', color: 'from-pink-500 to-rose-600' },
                { icon: Sparkles, text: 'Pre-Bridal Care', color: 'from-purple-500 to-violet-600' },
                { icon: Users, text: 'Family Package', color: 'from-blue-500 to-cyan-600' },
                { icon: Gift, text: 'Special Offers', color: 'from-amber-500 to-orange-600' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/bridal"
                className="inline-flex items-center gap-3 px-10 py-5 gold-gradient text-black rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-primary/30 group"
              >
                Explore Bridal Packages
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}?text=Hi, I'm interested in bridal packages`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg transition-all hover:shadow-xl border border-gray-200"
              >
                <MessageSquare className="w-5 h-5" />
                Enquire Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Training CTA Section - Enhanced */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-50" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white">
                <Image
                  src="/images/parlour/inside-1.png"
                  alt="Kashish Beauty Training Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">ISO Certified Training</p>
                      <p className="text-xs text-gray-500">Professional courses with placement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold text-sm">100% Placement</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  Beauty Training
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Start Your Career in <span className="gold-text-animated">Beauty Industry</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
                Join our ISO-certified beauty training program and learn from industry experts. We offer comprehensive courses in makeup artistry, hair styling, skin care, and more.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { text: '100% Job Placement Assistance', color: 'text-green-600' },
                  { text: 'Hands-on Practical Training', color: 'text-blue-600' },
                  { text: 'Industry-Recognized Certification', color: 'text-purple-600' },
                  { text: 'Flexible Class Timings', color: 'text-amber-600' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full bg-green-100 flex items-center justify-center`}>
                      <CheckCircle className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/training"
                className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-black rounded-full font-bold transition-all hover:shadow-xl hover:shadow-primary/20 hover:scale-105 group"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map - NEW SECTION */}
      <LocationMap />

    </div>
  )
}