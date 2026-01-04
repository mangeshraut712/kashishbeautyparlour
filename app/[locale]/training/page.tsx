'use client';

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { GraduationCap, Clock, Users, Award, CheckCircle, Sparkles, ArrowRight, BookOpen, Star } from 'lucide-react'
import { courses, benefits } from '@/lib/data/training'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function TrainingPage() {
  const t = useTranslations('Training')
  const tCommon = useTranslations('Common')

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
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  {t('pageTagline')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gray-900">Professional </span>
                <span className="gold-text-hero">Beauty Academy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium mb-8">
                {t('pageDescription')}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-black rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
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
                  src="/images/parlour/training-1.png"
                  alt="Beauty Training Academy"
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
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100+</p>
                    <p className="text-sm text-gray-500">Students Trained</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 luxury-badge">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                {t('ourCurriculum')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              {t('trainingCourses').split('Courses')[0]}<span className="gold-text-hero">Courses</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              {t('coursesDescription')}
            </p>
          </motion.div>

          {courses.map((course, courseIndex) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: courseIndex * 0.1 }}
              className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 mb-12"
            >
              {/* Course Image & Header */}
              <div className="relative">
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-heading font-bold mb-2 text-white">
                        {course.title}
                      </h3>
                      <p className="text-white/80 font-medium">{t('isoCertified')}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-white border border-white/20">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-white border border-white/20">
                        <Users className="w-4 h-4" />
                        {course.schedule}
                      </div>
                      <div className="bg-white text-primary px-5 py-2 rounded-full font-bold text-sm shadow-xl">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-10">
                <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
                  {course.description}
                </p>

                {/* Basic Syllabus */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    {t('basicSyllabus')}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {course.basicSyllabus.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Syllabus */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    {t('advancedSyllabus')}
                  </h4>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Makeup Module */}
                    <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
                      <h5 className="text-lg font-bold text-pink-600 mb-4">{t('makeupModule')}</h5>
                      <ul className="space-y-2">
                        {course.advancedSyllabus.makeupModule.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hair Module */}
                    <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                      <h5 className="text-lg font-bold text-blue-600 mb-4">{t('hairModule')}</h5>
                      <ul className="space-y-2">
                        {course.advancedSyllabus.hairModule.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skin Module */}
                    <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                      <h5 className="text-lg font-bold text-green-600 mb-4">{t('skinModule')}</h5>
                      <ul className="space-y-2">
                        {course.advancedSyllabus.skinModule.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Demo Sessions */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    {t('handsOnDemo')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.demoSessions.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">💄</span>
                        </div>
                        <span className="text-gray-900 font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {/* Documents Required */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">{t('documentsRequired')}</h4>
                    <ul className="space-y-3">
                      {course.documentsRequired.map((doc, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                          <Award className="w-4 h-4 text-primary flex-shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Payment Options */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">{tCommon('paymentOptions')}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {course.paymentOptions.map((option, index) => (
                        <div key={index} className="text-center bg-white p-4 rounded-xl border border-gray-100">
                          <div className="text-xl mb-1">💰</div>
                          <span className="text-gray-900 font-bold text-sm">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="text-center">
                  <Link
                    href="/contact#booking"
                    className="group inline-flex items-center gap-3 px-12 py-5 gold-gradient text-black font-bold rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-primary/30 text-lg"
                  >
                    <GraduationCap className="w-6 h-6" />
                    {tCommon('enrollNow')} - {course.price}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-4 border border-primary/30">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                {t('whyUs')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              <span className="text-gray-900">Professional </span>
              <span className="gold-text-hero">Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              {t('trainingBenefits')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-[2rem] bg-white hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] border border-gray-100 hover:border-primary/20 transition-all duration-500"
                >
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gray-900">Start Your </span>
              <span className="gold-text-hero">Beautiful Career</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600 font-medium">
              {t('joinThousands')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#booking"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 gold-gradient text-black rounded-full font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl"
              >
                <GraduationCap className="w-5 h-5" />
                {t('enrollCourse')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white hover:bg-gray-50 text-gray-900 shadow-sm rounded-full font-bold transition-all duration-500 border border-gray-200"
              >
                {t('getMoreInfo')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
