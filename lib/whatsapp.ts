import { BUSINESS_INFO } from './constants'

export function buildWhatsAppLink(message: string): string {
  const phone = BUSINESS_INFO.contact.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
