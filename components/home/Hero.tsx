'use client'

import Link from 'next/link'
import { Sparkles, Award, Users } from 'lucide-react'
import { heroStats, floatingCards, heroContent } from '@/lib/data/home'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {heroContent.badge.text}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
              {heroContent.title.split(' ').map((word, index) => 
                word === 'Artistry' ? (
                  <span key={index} className="text-primary"> {word}</span>
                ) : (
                  <span key={index}> {word}</span>
                )
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {heroContent.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={heroContent.cta.primary.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition transform hover:scale-105 shadow-lg"
              >
                {heroContent.cta.primary.text}
              </Link>
              <Link
                href={heroContent.cta.secondary.href}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition"
              >
                {heroContent.cta.secondary.text}
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <div 
                key={index}
                className={`absolute ${
                  index === 0 ? '-bottom-4 -left-4' : 'top-4 -right-4'
                } bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center`}>
                    {card.icon === 'Award' ? (
                      <Award className={`w-6 h-6 ${card.iconColor}`} />
                    ) : (
                      <Users className={`w-6 h-6 ${card.iconColor}`} />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{card.title}</div>
                    <div className="text-sm text-gray-600">{card.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}