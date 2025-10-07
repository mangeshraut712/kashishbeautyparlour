'use client'

import { MessageCircle } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking an appointment at Kashish Beauty Parlour."
    )
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </span>
    </button>
  )
}