'use client'

import { Link } from '@/i18n/routing'
import { Gift, Percent, Tag, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const offers = [
  {
    icon: Gift,
    title: 'First Time Special',
    discount: '10% OFF',
    description: 'A special greeting for your first luxury experience at Kashish.',
    tag: 'Welcome Gift',
  },
  {
    icon: Percent,
    title: 'Royal Bridal',
    discount: 'SAVE ₹1500',
    description: 'The ultimate transformation for your most special day.',
    tag: 'Premium Package',
  },
  {
    icon: Tag,
    title: 'Loyalty Rewards',
    discount: '₹250 CREDIT',
    description: 'Refer a friend and enjoy exclusive credits on your next visit.',
    tag: 'Members Only',
  },
]

export default function SpecialOffers() {
  return (
    <section className="snap-section py-16 bg-white text-gray-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      {/* Background Effects - Removed blurs for solid white theme */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-gray-200 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Exclusive Privileges
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 leading-tight"
          >
            Luxury Deals <br />
            <span className="gold-text-animated italic">Curated For You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Experience premium beauty at exceptional value with our seasonal packages and rewards.
          </motion.p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-primary/40 transition-all duration-700 h-full flex flex-col items-center text-center overflow-hidden card-premium shadow-lg hover:shadow-2xl"
              >
                {/* Highlight Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="mb-6 px-4 py-1.5 rounded-full bg-white border border-primary/20 text-[9px] font-black uppercase tracking-[0.2em] text-primary shadow-sm">
                  {offer.tag}
                </div>

                <div className="w-20 h-20 gold-gradient rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-primary/20">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <div className="flex-grow space-y-4">
                  <div className="text-4xl md:text-5xl font-black gold-text-animated mb-2">
                    {offer.discount}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] md:text-sm font-medium leading-relaxed max-w-[220px] mx-auto">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 w-full">
                  <Link
                    href="/contact#booking"
                    className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:translate-y-[-2px] transition-transform"
                  >
                    Claim Offer
                    <Gift className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact#booking"
            className="group relative inline-flex items-center gap-4 px-12 py-5 gold-gradient text-black rounded-full font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl overflow-hidden btn-premium"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Book Your Appointment Now
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>
          <p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
            Terms & Conditions Apply
          </p>
        </motion.div>
      </div>
    </section>
  )
}
