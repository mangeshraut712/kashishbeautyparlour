'use client';

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Award, Users, Sparkles, Heart, Clock, ArrowRight, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS_STATS } from '@/lib/constants'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('About')
  const tCommon = useTranslations('Common')

  const values = [
    { icon: Award, titleKey: 'values.excellence', descKey: 'values.excellenceDesc', color: 'from-amber-500 to-orange-500' },
    { icon: Users, titleKey: 'values.trust', descKey: 'values.trustDesc', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, titleKey: 'values.innovation', descKey: 'values.innovationDesc', color: 'from-purple-500 to-pink-500' },
    { icon: Heart, titleKey: 'values.care', descKey: 'values.careDesc', color: 'from-rose-500 to-red-500' },
  ]

  const whyChooseUs = [
    { titleKey: 'whyChooseUs.certified', descKey: 'whyChooseUs.certifiedDesc' },
    { titleKey: 'whyChooseUs.premium', descKey: 'whyChooseUs.premiumDesc' },
    { titleKey: 'whyChooseUs.hygiene', descKey: 'whyChooseUs.hygieneDesc' },
    { titleKey: 'whyChooseUs.personalized', descKey: 'whyChooseUs.personalizedDesc' },
    { titleKey: 'whyChooseUs.affordable', descKey: 'whyChooseUs.affordableDesc' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-white text-gray-900 relative overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gray-900">{t('pageTitle').split('Kashish')[0]}</span>
                <span className="gold-text-hero">Kashish</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium mb-8">
                {t('pageSubtitle')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-black rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  {tCommon('bookAppointment')}
                  <ArrowRight className="w-4 h-4" />
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
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/parlour/outside.jpg"
                  alt="Kashish Beauty Parlour And Training Center"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{BUSINESS_STATS.yearsOfExperience}</p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4 border border-primary/30">
              <Quote className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                {t('since')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              {t('journeyTitle').split('Excellence')[0]}<span className="gold-text-animated">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="relative">
                <Image
                  src="/images/other/about-picture.jpeg"
                  alt="About Kashish Beauty Parlour And Training Center"
                  width={400}
                  height={280}
                  className="rounded-2xl shadow-xl w-full border border-gray-100"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold gold-text">{BUSINESS_STATS.yearsOfExperience}</div>
                      <div className="text-gray-500 font-medium text-xs">{BUSINESS_STATS.yearsLabel}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                  <div className="text-2xl font-bold gold-text">{BUSINESS_STATS.happyCustomers}</div>
                  <div className="text-gray-500 font-medium text-xs">{BUSINESS_STATS.customersLabel}</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center">
                  <div className="text-2xl font-bold gold-text">{BUSINESS_STATS.studentsTrained}</div>
                  <div className="text-gray-500 font-medium text-xs">{BUSINESS_STATS.studentsLabel}</div>
                </div>
              </div>
            </motion.div>

            {/* Text Content - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 text-gray-600 font-medium leading-relaxed"
            >
              <p className="text-lg">{t('journeyP1')}</p>
              <p>{t('journeyP2')}</p>
              <p>{t('journeyP3')}</p>
              <p>{t('journeyP4')}</p>
              <p>{t('journeyP5')}</p>

              <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-gray-700 italic text-lg">
                  &ldquo;{t('quote')}&rdquo;
                </p>
                <p className="text-primary font-bold text-sm mt-3">— Meena Raut, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4 border border-primary/30">
              <Heart className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                {t('coreValues')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              {t('whatWeStandFor').split('Stand')[0]}<span className="gold-text-animated">Stand For</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              {t('valuesDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-[2rem] bg-white hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] border border-gray-100 hover:border-primary/20 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{t(value.titleKey)}</h3>
                <p className="text-gray-500 font-medium">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4 border border-primary/30">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                {t('whyKashish')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              The Kashish <span className="gold-text-animated">{t('kashishDifference').split('Kashish')[1] || 'Difference'}</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-primary/20">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
              {t('experienceDifference').split('Kashish')[0]}<span className="gold-text-animated">Kashish Difference</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600 font-medium">
              {t('joinThousands')}
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
