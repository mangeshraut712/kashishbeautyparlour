'use client'

import Image from 'next/image'
import { Award, Shield, Heart, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS_STATS } from '@/lib/constants'
import { useTranslations } from 'next-intl'

export default function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs')

  const features = [
    {
      icon: Award,
      title: t('features.certified'),
      description: t('features.certifiedDesc'),
    },
    {
      icon: Heart,
      title: t('features.personalized'),
      description: t('features.personalizedDesc'),
    },
    {
      icon: Shield,
      title: t('features.hygiene'),
      description: t('features.hygieneDesc'),
    },
  ]

  return (
    <section className="snap-section py-16 bg-white relative overflow-hidden">
      {/* Decorative Elements - Simplified for pure white theme */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Images & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative rounded-3xl shadow-xl w-full aspect-[3/4] overflow-hidden border border-gray-100 image-zoom-container glow-gold-hover">
                  <Image
                    src="/images/makeup-looks/look-5.jpg"
                    alt="Spa Treatment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-primary p-8 rounded-3xl text-black shadow-xl animate-pulse-glow">
                  <div className="text-4xl font-bold mb-1">{BUSINESS_STATS.yearsOfExperience}</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">{BUSINESS_STATS.yearsLabel}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">{t('topRated')}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">{t('topRatedDesc')}</p>
                </div>
                <div className="relative rounded-3xl shadow-xl w-full aspect-[3/5] overflow-hidden border border-gray-100 image-zoom-container glow-gold-hover">
                  <Image
                    src="/images/makeup-looks/look-6.jpg"
                    alt="Makeup Artistry"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-bold text-xs uppercase tracking-[0.3em]"
              >
                {t('tagline')}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                {t('title')} <span className="gold-text-animated">{t('titleHighlight')}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed font-medium">
                {t('description')}
              </motion.p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 group card-premium">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 group-hover:bg-primary/20 rounded-2xl flex items-center justify-center transition-all duration-500 border border-gray-200">
                      <Icon className="w-6 h-6 text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
