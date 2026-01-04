'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { ArrowRight, Sparkle } from 'lucide-react'
import { services } from '@/lib/data/services'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function FeaturedServices() {
  const t = useTranslations('FeaturedServices')
  const featuredServices = services.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="snap-section py-16 bg-white relative overflow-hidden">
      {/* Decorative background removed for pure white theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-white -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4"
          >
            <Sparkle className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
              {t('tagline')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            {t('title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl font-medium">
            {t('description')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary transition-all duration-500 card-premium">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Sheen Effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20">
                  {service.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6 font-medium line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="space-y-0.5">
                    <div className="text-primary font-black text-xl leading-none">
                      {service.price}
                    </div>
                    {parseInt(service.price.replace(/[^\d]/g, '')) >= 3000 && (
                      <div className="text-[8px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mt-1 inline-block border border-green-100 uppercase tracking-tighter">
                        {t('emiAvailable')}
                      </div>
                    )}
                    <div className="text-gray-400 text-[9px] font-black uppercase tracking-[0.15em] mt-1">
                      {service.duration} session
                    </div>
                  </div>
                  <Link
                    href={`/services#${service.id}`}
                    className="w-12 h-12 bg-gray-50 border border-gray-200 group-hover:border-primary/30 text-gray-400 group-hover:text-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg] hover:bg-primary/20">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-4 gold-gradient text-black rounded-full font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 group"
          >
            <span>{t('viewAllServices')}</span>
            <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center -mr-2 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
