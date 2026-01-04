'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react'

/**
 * Before/After Gallery - Critical for building trust in Indian market
 * Shows transformation results with slider comparison
 */

const transformations = [
    {
        id: 1,
        title: 'Complete Bridal Makeover',
        category: 'Bridal Makeup',
        before: '/images/transformations/bridal-1.jpg',
        after: '/images/transformations/bridal-2.jpg',
        description: 'From natural to stunning! Traditional Maharashtrian bridal look with HD makeup, intricate jewelry styling, and flawless finish by Meena Raut.',
        service: 'Premium Bridal Package',
        duration: '4-5 hours',
    },
    {
        id: 2,
        title: 'Engagement Glam Transformation',
        category: 'Party Makeup',
        before: '/images/hairstyles/hair-4.jpg',
        after: '/images/hairstyles/hair-5.jpg',
        description: 'Say hello to glamour! Professional party makeup that brings out your natural beauty with modern techniques and long-lasting finish.',
        service: 'Party Makeup Package',
        duration: '2-3 hours',
    },
    {
        id: 3,
        title: 'Reception Night Look',
        category: 'Bridal Makeup',
        before: '/images/hairstyles/hair-2.jpg',
        after: '/images/hairstyles/hair-3.jpg',
        description: 'Stunning reception transformation! Elegant evening makeup with detailed contouring and luminous skin finish for your special night.',
        service: 'Reception Makeup Package',
        duration: '3 hours',
    },
]

interface TransformationCardProps {
    transformation: typeof transformations[0]
    onClick: () => void
}

function TransformationCard({ transformation, onClick }: TransformationCardProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
        setSliderPosition(percentage)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.touches[0].clientX - rect.left
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
        setSliderPosition(percentage)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
        >
            {/* Before/After Slider */}
            <div
                className="relative h-80 cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                onClick={onClick}
            >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                    <Image
                        src={transformation.after}
                        alt={`${transformation.title} - After`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                        ✓ After
                    </div>
                </div>

                {/* Before Image (Clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
                        <Image
                            src={transformation.before}
                            alt={`${transformation.title} - Before`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white text-gray-900 text-xs font-black uppercase tracking-widest rounded-full shadow-lg border-2 border-gray-200">
                        Before
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4 text-gray-600 absolute left-1" />
                        <ChevronRight className="w-4 h-4 text-gray-600 absolute right-1" />
                    </div>
                </div>

                {/* Drag instruction */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 gold-gradient text-black text-xs font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl border-2 border-white/20">
                    ← Drag Slider to Compare →
                </div>
            </div>

            {/* Info */}
            <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-white border border-primary/20 px-3 py-1 rounded-full shadow-sm">
                        {transformation.category}
                    </span>
                    <span className="text-xs font-bold text-gray-500">
                        {transformation.duration}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {transformation.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {transformation.description}
                </p>
                <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Service: <span className="text-primary">{transformation.service}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default function BeforeAfterGallery() {
    const [selectedImage, setSelectedImage] = useState<typeof transformations[0] | null>(null)

    return (
        <section className="snap-section py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-primary/20 shadow-sm rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                            Real Results
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                        Before & <span className="gold-text">After</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        See the amazing transformations our expert team has achieved
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transformations.map((transformation) => (
                        <TransformationCard
                            key={transformation.id}
                            transformation={transformation}
                            onClick={() => setSelectedImage(transformation)}
                        />
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl px-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                                    <Image
                                        src={selectedImage.before}
                                        alt="Before"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute top-6 left-6 px-5 py-2 bg-white text-gray-900 font-black text-sm uppercase tracking-widest rounded-full shadow-2xl border-2 border-gray-200">
                                        Before
                                    </div>
                                </div>
                                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                                    <Image
                                        src={selectedImage.after}
                                        alt="After"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <div className="absolute top-6 right-6 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-2xl">
                                        ✓ After
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
