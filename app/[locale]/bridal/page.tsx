'use client'

import BridalInquiryForm from '@/components/booking/BridalInquiryForm'
import WeddingPackageCalculator from '@/components/booking/WeddingPackageCalculator'
import EMICalculator from '@/components/payment/EMICalculator'
import { motion } from 'framer-motion'
import { Heart, Star, CheckCircle, Crown, Sparkles, Calculator, IndianRupee } from 'lucide-react'
import { BUSINESS_STATS } from '@/lib/constants'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

const bridalPackages = [
    {
        nameKey: 'packages.essential',
        price: '₹15,000',
        features: [
            'Bridal Makeup (HD)',
            'Hairstyling',
            'Draping Assistance',
            'Touch-up Kit',
        ],
    },
    {
        nameKey: 'packages.premium',
        price: '₹25,000',
        popular: true,
        features: [
            'Bridal Makeup (Airbrush)',
            'Hairstyling with Extensions',
            'Pre-bridal Facial',
            'Mehendi Function Makeup',
            'Draping Assistance',
            'Touch-up Kit',
        ],
    },
    {
        nameKey: 'packages.luxury',
        price: '₹35,000',
        features: [
            'All Premium Features',
            'Pre-wedding Photoshoot Makeup',
            'Haldi Ceremony Look',
            'Sangeet Night Look',
            'Reception Look',
            'Groom Makeover',
            '3 Family Member Makeovers',
        ],
    },
]

export default function BridalPage() {
    const t = useTranslations('Bridal')

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Hero Section */}
            <section className="pt-28 pb-16 bg-white text-gray-900 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-gray-100 shadow-sm">
                                <Heart className="w-4 h-4 text-primary fill-primary" />
                                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                                    {t('pageTagline')}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-gray-900">
                                The Ultimate <span className="gold-text-animated">Bridal</span> Transformation
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium mb-8">
                                {t('pageDescription')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact#booking"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-black rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/services/bridal-premium.png"
                                    alt="Bridal Makeup Services at Kashish Beauty Parlour"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-4 md:left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Star className="w-6 h-6 text-primary fill-primary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">1000+</p>
                                        <p className="text-sm text-gray-500">Happy Brides</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-primary/30 shadow-sm"
                        >
                            <Crown className="w-4 h-4 text-primary" />
                            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">
                                {t('bridalCollections')}
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-6 leading-tight">
                            {t('chooseYourLook').split('Signature')[0]}<br />
                            <span className="gold-text-animated italic">Signature Look</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-medium">
                            {t('packagesDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {bridalPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.nameKey}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative group bg-white rounded-[2rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 border flex flex-col h-full overflow-hidden card-premium ${pkg.popular ? 'border-primary/50' : 'border-gray-100'}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-0 right-0 py-2.5 gold-gradient text-black text-[10px] font-black uppercase tracking-[0.2em] text-center">
                                        ✨ {t('mostCoveted')} ✨
                                    </div>
                                )}

                                <div className="text-center mb-8 pt-4">
                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{t(pkg.nameKey)}</h3>
                                    <div className="text-4xl font-black gold-text-animated mb-2">{pkg.price}</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{t('allInclusive')}</div>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-white border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 text-[13px] md:text-sm font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#inquiry"
                                    className={`block w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center transition-all transform hover:scale-[1.02] shadow-xl btn-premium ${pkg.popular
                                        ? 'gold-gradient text-black shadow-primary/20'
                                        : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-100'
                                        }`}
                                >
                                    {t('bookTrial')}
                                </a>

                                {/* Background Pattern for Card - Removed for solid white theme */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-transparent rounded-full opacity-0 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Package Calculator Section */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-primary/30 shadow-sm">
                                    <Calculator className="w-4 h-4 text-primary" />
                                    <span className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                                        {t('customEstimator')}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-8 leading-tight">
                                    {t('buildExperience').split('Wedding')[0]}<br />
                                    <span className="gold-text italic">Wedding Experience</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
                                    {t('estimatorDescription')}
                                </p>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-primary/20">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                                            <IndianRupee className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{t('flexiblePayment')}</h4>
                                            <p className="text-sm text-gray-600">{t('flexiblePaymentDesc')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-[2.5rem] p-1 shadow-2xl overflow-hidden group border border-gray-100">
                                    <div className="p-8">
                                        <EMICalculator amount={25000} serviceName="Premium Bridal Package" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="lg:sticky lg:top-32 h-full">
                                <div className="bg-white rounded-[3rem] p-4 shadow-2xl border border-gray-100 h-full">
                                    <WeddingPackageCalculator />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-yellow-500/30 shadow-sm">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-yellow-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                                {t('theKashishStandard')}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                            {t('whyBridesChoose').split('Kashish')[0]}<span className="gold-text italic">Choose Kashish</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {[
                            { icon: <Star className="w-8 h-8" />, color: 'bg-white', text: 'text-blue-600', title: `${BUSINESS_STATS.happyBrides} ${t('happyBrides')}`, desc: t('trustedByBrides') },
                            { icon: <Heart className="w-8 h-8" />, color: 'bg-white', text: 'text-rose-600', title: t('curatedStyling'), desc: t('curatedDesc') },
                            { icon: <Sparkles className="w-8 h-8" />, color: 'bg-white', text: 'text-primary', title: t('luxuryBrands'), desc: t('luxuryBrandsDesc') },
                            { icon: <Crown className="w-8 h-8" />, color: 'bg-white', text: 'text-amber-600', title: `${BUSINESS_STATS.yearsOfExperience} ${t('yearsExp')}`, desc: t('yearsExpDesc') },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-gray-100`}>
                                    <div className={item.text}>{item.icon}</div>
                                </div>
                                <h3 className="font-heading font-bold text-gray-900 mb-3 text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section id="inquiry" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <BridalInquiryForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
