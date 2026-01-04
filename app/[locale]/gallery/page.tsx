'use client';

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Sparkles, Play, ArrowRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryCategories, galleryImages, galleryVideos } from '@/lib/data/gallery'
import { useTranslations } from 'next-intl'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const t = useTranslations('Gallery')
  const tCommon = useTranslations('Common')

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length)
    }
  }, [selectedImageIndex, filteredImages.length])

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1)
    }
  }, [selectedImageIndex, filteredImages.length])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [selectedImageIndex, closeModal, prevImage, nextImage])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }

  // Category translation map
  const getCategoryTranslation = (category: string) => {
    const categoryMap: Record<string, string> = {
      'All': t('categories.all'),
      'Makeup Looks': t('categories.makeup'),
      'Hairstyles': t('categories.hair'),
      'Before & After': t('categories.bridal'),
      'Bridal & Wedding': t('categories.bridalWedding'),
      'Services': t('categories.services'),
      'Training & Academy': t('categories.training'),
      'Parlour Interior/Exterior': t('categories.parlour'),
    }
    return categoryMap[category] || category
  }

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-gray-900">
                Our Visual <span className="gold-text-animated">Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium mb-8">
                {t('pageDescription')}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{galleryImages.length}+</p>
                  <p className="text-sm text-gray-500">Photos</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{galleryCategories.length}</p>
                  <p className="text-sm text-gray-500">Categories</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/makeup-looks/look-1.jpg"
                      alt="Bridal Makeup"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/hairstyles/hair-1.jpg"
                      alt="Hair Styling"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-[180px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/makeup-looks/look-3.jpg"
                      alt="Party Makeup"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/makeup-looks/look-5.jpg"
                      alt="Wedding Look"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {galleryCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 ${selectedCategory === category
                  ? 'gold-gradient text-black shadow-xl shadow-primary/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary/30 hover:shadow-lg'
                  }`}
              >
                {getCategoryTranslation(category)}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-[1.5rem] cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-bold text-center">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                  {getCategoryTranslation(image.category)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section - Apple Style Carousel */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-md rounded-full mb-6 border border-primary/10">
              <Play className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('videoShowcase')}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              Visual <span className="gold-text-animated">Transformations</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              {t('videoDescription')}
            </p>
          </motion.div>

          {/* Apple-style Video Carousel */}
          <div className="relative max-w-7xl mx-auto">
            <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar">
              {galleryVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[45vw] snap-center"
                >
                  <div className="relative group bg-black rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <video
                      controls
                      playsInline
                      className="w-full aspect-video object-cover"
                      poster={video.poster}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      {video.category}
                    </div>
                    <div className="absolute bottom-16 left-8 right-8">
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">{video.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Hint */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryVideos.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gray-900">
              {t('readyForTransformation').split('Transformation')[0]}<span className="gold-text">Transformation?</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600 font-medium">
              {t('ctaDescription')}
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

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-[60] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </button>
            )}

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </button>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.target === e.currentTarget && closeModal()}
            >
              <div className="relative w-[90vw] h-[80vh] max-w-6xl">
                <Image
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].alt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                  unoptimized
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-sm text-white px-5 py-3 rounded-xl border border-white/10">
                <div className="font-bold">{filteredImages[selectedImageIndex].alt}</div>
                <div className="text-xs text-gray-300 mt-1">{getCategoryTranslation(filteredImages[selectedImageIndex].category)}</div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-bold border border-white/10">
                {selectedImageIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
