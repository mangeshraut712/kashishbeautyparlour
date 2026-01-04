'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Sparkles, Award, Users, ChevronRight, Play, Star, MapPin, Clock, Phone } from 'lucide-react'
import { heroContent } from '@/lib/data/home'
import { BUSINESS_STATS, BUSINESS_INFO } from '@/lib/constants'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { useTranslations } from 'next-intl'

const iconMap: Record<string, ReactElement> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  Award: <Award className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
}

export default function Hero() {
  const t = useTranslations('Hero')

  // Stats with translation keys
  const heroStats = [
    { value: BUSINESS_STATS.totalServices, labelKey: 'stats.servicesLabel', icon: Sparkles },
    { value: BUSINESS_STATS.happyCustomers, labelKey: 'stats.clientsLabel', icon: Users },
    { value: BUSINESS_STATS.yearsOfExperience, labelKey: 'stats.yearsLabel', icon: Award },
  ]

  // Floating cards with translation keys
  const floatingCards = [
    { icon: 'Award', titleKey: 'floatingCards.certified', subtitleKey: 'floatingCards.professional' },
    { icon: 'Users', titleKey: 'floatingCards.personalized', subtitleKey: 'floatingCards.customized' },
  ]

  return (
    <section className="snap-section relative min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-white">
      {/* Background Elements - Removed blurs and large gradients for clean white theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-lg shadow-gray-100 border border-gray-50 rounded-full mx-auto lg:mx-0 mb-4"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-gray-600">Thergaon, Pune</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mx-auto lg:mx-0">
                <span className="flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full text-primary">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  {t('tagline')}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-gray-900 leading-[1.05] tracking-tight mt-6">
                Where <span className="gold-text-animated">Beauty</span> Meets <span className="gold-text-animated">Artistry</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mt-6">
                {t('description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-8">
                <Link
                  href={heroContent.cta.primary.href}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 gold-gradient text-black rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-primary/40 overflow-hidden btn-premium glow-gold-hover"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('cta')}
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                </Link>
                <Link
                  href={heroContent.cta.secondary.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 hover:border-primary/30 hover:bg-gray-50 rounded-full font-bold transition-all duration-300 transform hover:scale-105 group shadow-lg">
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-primary fill-primary group-hover:scale-110 transition-transform" />
                    {t('secondaryCta')}
                  </span>
                </Link>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">{BUSINESS_INFO.hours.weekdays}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
                <a href={`tel:${BUSINESS_INFO.contact.whatsapp}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">{BUSINESS_INFO.contact.phone}</span>
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 pt-8">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{stat.value}</div>
                      <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.05em]">{t(stat.labelKey)}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Image Frame - Pro Style */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(212,175,55,0.25)] aspect-[4/5] md:aspect-square max-w-[500px] mx-auto border-[6px] border-white ring-4 ring-primary/20 backdrop-blur-sm group">
                <Image
                  src={heroContent.image.src}
                  alt={heroContent.image.alt}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Pro Glossy Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Sheen Effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-primary fill-primary" />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">{BUSINESS_STATS.averageRating}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{BUSINESS_STATS.totalReviews}+ Reviews</span>
                  </div>
                </motion.div>
              </div>

              {/* Animated Floating Elements */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50. }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className={`absolute ${index === 0 ? '-bottom-4 -left-4' : '-top-8 -right-4'
                    } bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 hidden md:block border border-gray-50 max-w-[200px]`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                      {iconMap[card.icon]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm leading-tight">{t(card.titleKey)}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t(card.subtitleKey)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{t('scroll')}</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
