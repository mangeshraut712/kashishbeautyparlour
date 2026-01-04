'use client';

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Clock, Star, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { services, serviceCategories } from '@/lib/data/services'
import ShareButtons from '@/components/social/ShareButtons'
import { useTranslations } from 'next-intl'

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const t = useTranslations('Services')
  const tCommon = useTranslations('Common')

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  // Category translation map
  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      'All': t('categories.all'),
      'Bridal & Events': t('categories.bridal'),
      'Hair Care': t('categories.hair'),
      'Facial & Skin': t('categories.skin'),
      'Makeup': t('categories.makeup'),
      'Spa & Wellness': t('categories.spa'),
      'Combo Packages': t('categories.combo'),
      'Nails': t('categories.nails'),
      'Waxing & Threading': t('categories.waxing'),
    }
    return categoryMap[category] || category
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 luxury-badge">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  {t('pageTagline')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                <span className="text-gray-900">Premium Beauty </span>
                <span className="gold-text-hero">Services</span>
              </h1>
              <p className="text-gray-600 text-lg font-medium max-w-xl mx-auto lg:mx-0 mb-8">
                {t('pageDescription')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-black rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  {tCommon('bookNow')}
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/party-makeup.png"
                  alt="Professional Beauty Services"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-500">Services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 btn-premium ${selectedCategory === category
                  ? 'gold-gradient text-black shadow-xl shadow-primary/30 glow-gold'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary/30 hover:shadow-lg'
                  }`}
              >
                {getCategoryTranslation(category)}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                id={service.id}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)] hover:border-primary/20 transition-all duration-500 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                    {getCategoryTranslation(service.category)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div>
                      <div className="text-2xl font-bold gold-text">
                        {service.price}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-gray-900 text-xs uppercase tracking-widest mb-3">{tCommon('includes')}:</h4>
                    <ul className="space-y-2">
                      {service.features?.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Link
                      href="/contact#booking"
                      className="flex-1 gold-gradient text-black py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20"
                    >
                      {tCommon('bookNow')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <ShareButtons
                      title={service.name}
                      description={service.description}
                      url={`${typeof window !== 'undefined' ? window.location.origin : ''}/services#${service.id}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
              {t('readyToTransform')} <span className="gold-text">{t('yourLook')}</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600 font-medium">
              {t('ctaDescription')}
            </p>
            <Link
              href="/contact#booking"
              className="group inline-flex items-center gap-3 px-10 py-5 gold-gradient text-black rounded-full font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">{tCommon('bookAppointment')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
