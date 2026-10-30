'use client'

import { ExternalLink, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { BUSINESS_INFO } from '@/lib/constants'
import { useTranslations } from 'next-intl'

export default function SocialProof() {
  const t = useTranslations('ReviewReference')

  return (
    <section className="snap-section py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 rounded-full mb-6 border border-primary/30"
          >
            <MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">
              {t('label')}
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {t('heading')}
          </h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl text-center"
        >
          <p className="text-sm text-gray-600 font-medium mb-6">
            {t('hint')}
          </p>
          <a
            href={BUSINESS_INFO.maps.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:text-white bg-primary/10 hover:bg-primary px-6 py-3 rounded-xl transition-all duration-300"
          >
            {t('open')}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
