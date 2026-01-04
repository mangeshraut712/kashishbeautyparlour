'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Star, ExternalLink, ThumbsUp, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS_STATS } from '@/lib/constants'

const reviewData = {
    rating: 4.8,
    totalReviews: 650,
    platforms: [
        { name: 'JustDial', rating: 4.8, count: 127 },
        { name: 'Google', rating: 4.9, count: 480 },
        { name: 'Sulekha', rating: 4.7, count: 43 }
    ],
    reviews: [
        {
            id: 1,
            name: 'Sneha M.',
            rating: 5,
            date: '2 days ago',
            review: 'Excellent bridal makeup! Meena ma\'am is very talented and understood exactly what I wanted.',
            platform: 'Google'
        },
        {
            id: 2,
            name: 'Priya K.',
            rating: 5,
            date: '1 week ago',
            review: 'Best parlour in Thergaon area. Clean environment and professional staff. Highly recommended!',
            platform: 'JustDial'
        },
        {
            id: 3,
            name: 'Anjali P.',
            rating: 5,
            date: '2 weeks ago',
            review: 'Good service and reasonable prices. Hair spa was amazing. Will visit again.',
            platform: 'Sulekha'
        }
    ]
}

export default function SocialProof() {
    return (
        <section className="snap-section py-16 bg-white relative overflow-hidden">
            {/* Background Accent - Removed for pure white theme */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 transform translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 rounded-full mb-6 border border-primary/30"
                    >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
                            Trusted by {BUSINESS_STATS.happyCustomers} Clients
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                        Real Stories, <span className="gold-text-animated">Real Glow</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                        We take pride in every smile we create. See why we are the top-rated salon in Pune.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
                    {/* Left: Interactive Stats & QR */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-8 text-gray-900 shadow-xl relative overflow-hidden group border border-gray-100"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-all duration-700" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-5xl font-black gold-text">4.8</div>
                                <div>
                                    <div className="flex gap-1 text-yellow-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Average Rating</div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {reviewData.platforms.map((p) => (
                                    <div key={p.name} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                                        <span className="text-sm font-bold text-gray-600">{p.name}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-black text-primary">{p.rating} ★</span>
                                            <span className="text-[10px] text-gray-400">({p.count})</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center pt-8 border-t border-gray-100">
                                <div className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-6 relative group/qr">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300" />
                                    <Image src="/images/other/reviews qr code.jpg" alt="Review QR" width={200} height={200} className="w-full max-w-[200px] h-auto rounded-xl relative z-10" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Scan to Share Your Experience</p>
                                <a
                                    href="https://www.google.com/maps/place/Kashish+Beauty+Parlour+And+Training+Center/@18.6142502,73.7686004"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-white bg-primary/10 hover:bg-primary px-6 py-3 rounded-xl transition-all duration-300 group"
                                >
                                    Write a Google Review
                                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Selected Reviews Wall */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reviewData.reviews.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 relative group"
                            >
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">
                                    &ldquo;{review.review}&rdquo;
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold text-sm">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">Verified via {review.platform}</div>
                                    </div>
                                    <div className="ml-auto text-xs text-gray-400 font-bold">{review.date}</div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Summary Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary group hover:bg-primary/90 transition-colors p-8 rounded-[2rem] border border-primary/20 flex flex-col items-center justify-center text-center space-y-4 shadow-xl shadow-primary/20"
                        >
                            <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center shadow-lg mb-2">
                                <ThumbsUp className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-black">Join the Kashish Family</h3>
                            <p className="text-sm text-black/80 font-medium px-4">See {BUSINESS_STATS.totalReviews} more five-star verified reviews across all platforms.</p>
                            <Link href="/gallery" className="text-xs font-black uppercase tracking-widest text-black hover:underline flex items-center gap-2">
                                View Gallery Transformations
                                <ExternalLink className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

