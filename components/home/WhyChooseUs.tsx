'use client'

import { Award, Users, Clock, Shield, Heart, Sparkles } from 'lucide-react'
import { features } from '@/lib/data/features'

// Icon mapping for dynamic icon rendering
const iconMap = {
  Award,
  Users,
  Clock,
  Shield,
  Heart,
  Sparkles,
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            Excellence in Every Service
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to providing the highest quality beauty services with a personal touch
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
