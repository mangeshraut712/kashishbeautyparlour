import { Link } from '@/i18n/routing'
import { Home, Sparkles, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      {/* Background effects - Removed blurs for solid white theme */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-heading font-bold gold-text-animated leading-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 gold-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20 border border-primary/20">
          <Sparkles className="w-10 h-10 text-black" />
        </div>

        <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
          Page Not <span className="gold-text-animated">Found</span>
        </h3>
        <p className="text-gray-600 mb-10 font-medium leading-relaxed">
          The page you&apos;re looking for seems to have wandered off. Let&apos;s get you back to discovering beauty at Kashish.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 gold-gradient text-black px-10 py-5 rounded-full font-bold transition-all duration-500 hover:scale-105 shadow-xl shadow-primary/20"
          >
            <Home className="w-5 h-5" />
            Return Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-10 py-5 rounded-full font-bold transition-all duration-300 border border-gray-100 shadow-sm"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}
