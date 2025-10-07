import Link from 'next/link'
import { Gift, Percent, Tag } from 'lucide-react'
import { specialOffers } from '@/lib/data/specialOffers'

// Icon mapping for dynamic icon rendering
const iconMap = {
  Gift,
  Percent,
  Tag,
}

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Limited Time Offers
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
            Special Deals & Packages
          </h2>
          <p className="text-gray-300 text-lg">
            Don't miss out on our exclusive offers and save on premium beauty services
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specialOffers.map((offer, index) => {
            const Icon = iconMap[offer.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${offer.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {offer.discount}
                  </div>
                  <div className="text-xl font-heading font-semibold mb-2">
                    {offer.title}
                  </div>
                </div>
                <p className="text-gray-300">
                  {offer.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition transform hover:scale-105"
          >
            <Gift className="w-5 h-5" />
            Book Now & Save
          </Link>
        </div>
      </div>
    </section>
  )
}