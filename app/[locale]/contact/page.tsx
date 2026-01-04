'use client';

import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Instagram as InstagramIcon, Facebook as FacebookIcon, PhoneCall, Sparkles, ArrowRight, CheckCircle, Heart, Star, Award, Shield, Zap, HelpCircle, ChevronDown } from 'lucide-react'
import { BUSINESS_INFO, BUSINESS_STATS } from '@/lib/constants'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingCalendar from '@/components/booking/BookingCalendar';
import UPIPayment from '@/components/payment/UPIPayment';
import { logger } from '@/lib/logger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// FAQ Data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of beauty services including bridal makeup, party makeup, hair styling, facials, spa treatments, nail art, waxing, threading, and professional beauty training courses."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our online booking system on this page, call us directly, or send us a message on WhatsApp. We'll confirm your booking within 2 hours during working hours."
  },
  {
    question: "Do you offer bridal packages?",
    answer: "Yes! We offer complete bridal packages including pre-bridal treatments, wedding day makeup, hairstyling, and mehendi function looks. We also provide services for the bride's family and friends."
  },
  {
    question: "What are your working hours?",
    answer: "We are open all 7 days a week from 10:00 AM to 10:00 PM. For special occasions like weddings, we can arrange early morning appointments too."
  },
  {
    question: "Do you offer beauty training courses?",
    answer: "Yes, we offer ISO-certified professional beauty training courses including makeup artistry, hair styling, and skin care. Our courses include practical training and job placement assistance."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), and bank transfers. For bridal packages, we also offer EMI options."
  }
];

// Stats for hero section
const quickStats = [
  { icon: Star, value: BUSINESS_STATS.averageRating, label: 'Rating' },
  { icon: Users, value: BUSINESS_STATS.happyCustomers, label: 'Happy Clients' },
  { icon: Award, value: BUSINESS_STATS.yearsOfExperience, label: 'Years Experience' },
];

// Import Users icon
import { Users } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = useTranslations('Contact');
  const tCommon = useTranslations('Common');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        date: formData.get('preferredDate'),
        message: formData.get('message'),
        source: 'website_contact_form',
        status: 'new',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      logger.error('Network error during contact submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-16 bg-white text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 bg-white shadow-lg shadow-primary/5 border border-primary/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  {t('pageTagline')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-gray-900">
                Let&apos;s Create Your
                <span className="block mt-2 gold-text-animated">Beautiful Story</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8">
                {t('pageDescription')}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
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
                  src="/images/parlour/inside-1.png"
                  alt="Kashish Beauty Parlour Interior"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us Now</p>
                    <p className="text-lg font-bold text-gray-900">+91 7276784825</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Online Booking Section */}
      <section id="booking" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 luxury-badge">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                    {t('onlineBooking')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                  Reserve Your <span className="gold-text-animated">Transformation</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                  {t('bookingDescription')}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                className="lg:sticky lg:top-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <BookingCalendar />
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Why Book Online Card */}
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                      <Heart className="w-5 h-5 text-black" />
                    </div>
                    {t('whyBookOnline')}
                  </h3>
                  <div className="space-y-5">
                    {[
                      {
                        titleKey: 'preferredBeautician',
                        descKey: 'preferredBeauticianDesc',
                        icon: User,
                        color: 'bg-pink-500'
                      },
                      {
                        titleKey: 'queueFree',
                        descKey: 'queueFreeDesc',
                        icon: Zap,
                        color: 'bg-amber-500'
                      },
                      {
                        titleKey: 'exclusiveOffers',
                        descKey: 'exclusiveOffersDesc',
                        icon: Award,
                        color: 'bg-purple-500'
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{t(item.titleKey)}</h4>
                          <p className="text-gray-500 text-xs font-medium leading-relaxed">{t(item.descKey)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="p-8 rounded-[2rem] bg-white border border-primary/20 relative overflow-hidden group">
                  <div className="absolute inset-0 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-lg">
                        <Phone className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{t('supportQueries')}</h3>
                        <p className="text-sm text-gray-500">{t('supportDescription')}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <a
                        href={`tel:${BUSINESS_INFO.contact.whatsapp}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-lg transition-all text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        +91 {BUSINESS_INFO.contact.phone}
                      </a>
                      <a
                        href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg transition-all text-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Shield, text: 'Safe & Hygienic' },
                    { icon: Award, text: 'Certified Experts' },
                    { icon: Heart, text: 'Customer First' },
                  ].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl text-center border border-gray-100 shadow-sm">
                      <badge.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold text-gray-600">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center shadow-lg shadow-primary/20">
                    <Send className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      {t('bookYourAppointment')}
                    </h2>
                    <p className="text-gray-500 text-sm font-medium">{t('formDescription')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8 bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800 text-sm">{t('quickResponse')}</h3>
                    <p className="text-xs text-green-600">{t('quickResponseDesc')}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                        {t('form.firstName')} *
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          autoComplete="given-name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-900 placeholder-gray-400"
                          placeholder={t('form.firstName')}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                        {t('form.lastName')}
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          autoComplete="family-name"
                          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-900 placeholder-gray-400"
                          placeholder={t('form.lastName')}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                      {t('form.phone')} *
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        pattern="[0-9]{10}"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-900 placeholder-gray-400"
                        placeholder="Enter 10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                      {t('form.email')}
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-900 placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                        {t('form.service')} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-700 appearance-none cursor-pointer"
                      >
                        <option value="">{t('form.selectService')}</option>
                        <option value="bridal-makeup">{t('services.bridalMakeup')}</option>
                        <option value="party-makeup">{t('services.partyMakeup')}</option>
                        <option value="hair-styling">{t('services.hairStyling')}</option>
                        <option value="facial">{t('services.facial')}</option>
                        <option value="nail-art">{t('services.nailArt')}</option>
                        <option value="spa">{t('services.spa')}</option>
                        <option value="training">{t('services.training')}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                        {t('form.preferredDate')}
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-widest">
                      {t('form.message')}
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <textarea
                        id="message"
                        rows={4}
                        name="message"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:ring-0 focus:border-primary transition-all font-medium text-gray-900 placeholder-gray-400 resize-none"
                        placeholder={t('form.messagePlaceholder')}
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-black font-bold py-5 px-6 rounded-xl transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg group"
                  >
                    <Send className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    {isSubmitting ? t('form.sending') : t('form.submit')}
                  </button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-white border border-green-200 rounded-xl flex items-start gap-3 shadow-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-green-700 font-medium">
                          {t('successMessage')}
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-5 bg-white border border-red-200 rounded-xl shadow-sm"
                      >
                        <p className="text-red-700 font-medium">
                          {t('errorMessage')}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative flex items-center gap-4 py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 text-gray-400 text-xs font-bold uppercase tracking-widest">{tCommon('orConnectVia')}</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {tCommon('chatOnWhatsApp')}
                  </a>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                  {t('visitStudio')}
                </h2>
                <p className="text-gray-500 font-medium">{t('welcomeMessage')}</p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, titleKey: 'address', content: BUSINESS_INFO.address.full, link: { textKey: 'viewOnMaps', href: BUSINESS_INFO.maps.link }, color: 'from-red-500 to-pink-500' },
                  { icon: Phone, titleKey: 'form.phone', content: `+91 ${BUSINESS_INFO.contact.phone}`, link: { textKey: 'callNow', href: `tel:${BUSINESS_INFO.contact.whatsapp}` }, color: 'from-blue-500 to-cyan-500' },
                  { icon: Mail, titleKey: 'form.email', content: BUSINESS_INFO.contact.email, link: { textKey: 'sendEmail', href: `mailto:${BUSINESS_INFO.contact.email}` }, color: 'from-purple-500 to-indigo-500' },
                  { icon: Clock, titleKey: 'studioHours', content: BUSINESS_INFO.hours.weekdays, subContent: 'Open all 7 days', color: 'from-amber-500 to-orange-500' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-5 p-6 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-primary/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{t(item.titleKey)}</h3>
                      <p className="text-gray-600 font-medium text-sm mb-1">{item.content}</p>
                      {item.subContent && <p className="text-xs text-gray-400">{item.subContent}</p>}
                      {item.link && (
                        <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline mt-2">
                          {t(item.link.textKey)} <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <iframe
                  src={BUSINESS_INFO.maps.embed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kashish Beauty Parlour And Training Center Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="p-6 bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-50">
                <h3 className="font-bold text-gray-900 mb-4">{tCommon('followUs')}</h3>
                <div className="flex gap-3">
                  {[
                    { icon: InstagramIcon, href: BUSINESS_INFO.social.instagram, label: 'Instagram', color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]' },
                    { icon: FacebookIcon, href: BUSINESS_INFO.social.facebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
                    { icon: PhoneCall, href: BUSINESS_INFO.social.justdial, label: 'JustDial', color: 'hover:bg-[#2563EB]' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center transition-all duration-300 group border border-gray-100 ${social.color} hover:text-white hover:border-transparent hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900">{tCommon('paymentOptions')}</h3>
                <UPIPayment showQR={true} className="shadow-lg shadow-gray-100" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 luxury-badge">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked <span className="gold-text">Questions</span>
              </h2>
              <p className="text-gray-500 font-medium">
                Find answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-600 font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
