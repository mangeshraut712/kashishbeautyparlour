'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Sparkles, Heart, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function ProcessSteps() {
    const t = useTranslations('ProcessSteps')
    const tCommon = useTranslations('Common')

    const steps = [
        {
            number: '01',
            icon: Calendar,
            title: t('steps.bookTitle'),
            description: t('steps.bookDesc'),
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500/10',
        },
        {
            number: '02',
            icon: MapPin,
            title: t('steps.visitTitle'),
            description: t('steps.visitDesc'),
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-500/10',
        },
        {
            number: '03',
            icon: Sparkles,
            title: t('steps.transformTitle'),
            description: t('steps.transformDesc'),
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-500/10',
        },
        {
            number: '04',
            icon: Heart,
            title: t('steps.glowTitle'),
            description: t('steps.glowDesc'),
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-500/10',
        },
    ]

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-md rounded-full mb-6 border border-gray-100">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                            {t('tagline')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                        {t('title')} <span className="gold-text-animated">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                        {t('steps.book')} → {t('steps.visit')} → {t('steps.transform')} → {t('steps.glow')}
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Connector Line (hidden on last item and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
                                )}

                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 relative z-10 h-full">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-sm shadow-xl group-hover:scale-110 transition-transform">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                        {step.description}
                                    </p>
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
                        className="inline-flex items-center gap-3 px-10 py-5 gold-gradient text-black rounded-full font-bold transition-all hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 group"
                    >
                        {tCommon('bookAppointment')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
