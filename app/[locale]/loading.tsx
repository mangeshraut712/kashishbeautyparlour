import { Sparkles } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo shimmer */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 gold-gradient rounded-3xl animate-pulse shadow-2xl shadow-primary/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-black" />
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-56 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto mb-6">
          <div className="h-full gold-gradient animate-[shimmer_1.5s_ease-in-out_infinite] w-1/2"></div>
        </div>

        <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] animate-pulse">
          Enhancing Beauty...
        </p>
      </div>
    </div>
  )
}
