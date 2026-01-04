'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'
import { useTranslations } from 'next-intl'

const instagramPosts = [
    {
        id: 1,
        image: '/images/looks/005fda72-33b9-4264-a446-1f25739d8814.JPG',
        likes: 234,
        comments: 18,
        caption: 'Stunning bridal look ✨',
    },
    {
        id: 2,
        image: '/images/looks/1546a195-b30f-4f99-abe8-ccd2726e9bc5.JPG',
        likes: 189,
        comments: 12,
        caption: 'Party glam ready 💄',
    },
    {
        id: 3,
        image: '/images/looks/21c688ae-29e9-4fe8-a417-e5c55b593772.JPG',
        likes: 312,
        comments: 24,
        caption: 'Perfect curls 💇‍♀️',
    },
    {
        id: 4,
        image: '/images/looks/29e40702-3495-437f-9f1f-8f6b50b0c303.JPG',
        likes: 278,
        comments: 21,
        caption: 'Natural glow makeup 🌸',
    },
    {
        id: 5,
        image: '/images/looks/354754af-5bd0-4365-8e7b-d7871e7fac03.JPG',
        likes: 156,
        comments: 9,
        caption: 'Hair transformation 💫',
    },
    {
        id: 6,
        image: '/images/looks/3b2b71dc-7fc8-4c86-8b7e-c7fb0c08f4fe.JPG',
        likes: 421,
        comments: 35,
        caption: 'Bridal perfection 👰',
    },
]

export default function InstagramFeed() {
    const t = useTranslations('InstagramFeed')

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Effects - Removed blurs for solid white theme */}
            <div className="absolute inset-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full mb-6 border border-gray-100 shadow-sm">
                        <Instagram className="w-5 h-5 text-pink-500" />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-sm uppercase tracking-wider">
                            {t('titleHighlight')}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                        {t('tagline')}
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Instagram Grid - Apple Style */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {instagramPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Image
                                src={post.image}
                                alt={post.caption}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <div className="flex items-center gap-4 text-white text-sm mb-2">
                                    <span className="flex items-center gap-1">
                                        <Heart className="w-4 h-4 fill-white" />
                                        {post.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="w-4 h-4" />
                                        {post.comments}
                                    </span>
                                </div>
                                <p className="text-white text-xs font-medium truncate">{post.caption}</p>
                            </div>

                            {/* Instagram Icon on Hover */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                <Instagram className="w-4 h-4 text-pink-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Follow Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href={BUSINESS_INFO.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white rounded-full font-bold transition-all hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 group"
                    >
                        <Instagram className="w-5 h-5" />
                        {t('followButton')}
                        <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
