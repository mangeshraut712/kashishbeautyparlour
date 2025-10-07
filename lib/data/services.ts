export interface Service {
  id: string
  category: string
  name: string
  shortDescription: string
  description: string
  price: string
  duration: string
  image: string
  features?: string[]
}

export const services: Service[] = [
  {
    id: 'bridal-makeup',
    category: 'Bridal',
    name: 'Bridal Makeup',
    shortDescription: 'Look stunning on your special day',
    description: 'Complete bridal makeup package including pre-bridal treatments, trial makeup, and wedding day makeup with hairstyling. We use premium HD makeup products for a flawless, long-lasting look.',
    price: 'Starting from ₹15,000',
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    features: [
      'Pre-bridal consultation',
      'Trial makeup session',
      'HD makeup application',
      'Professional hairstyling',
      'Draping assistance',
      'Touch-up kit provided',
    ],
  },
  {
    id: 'party-makeup',
    category: 'Makeup',
    name: 'Party & Event Makeup',
    shortDescription: 'Perfect look for any occasion',
    description: 'Professional makeup for parties, events, and special occasions. Customized to match your outfit and the event theme.',
    price: 'Starting from ₹2,500',
    duration: '1-2 hours',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    features: [
      'Skin preparation',
      'HD makeup',
      'Eye makeup & lashes',
      'Contouring & highlighting',
      'Suitable for all occasions',
    ],
  },
  {
    id: 'hair-styling',
    category: 'Hair',
    name: 'Hair Styling & Treatment',
    shortDescription: 'Transform your hair',
    description: 'Professional hair services including cuts, styling, coloring, treatments, and more. We use premium products for healthy, beautiful hair.',
    price: 'Starting from ₹500',
    duration: '1-3 hours',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
    features: [
      'Hair consultation',
      'Cuts & styling',
      'Hair coloring & highlights',
      'Keratin treatment',
      'Hair spa',
    ],
  },
  {
    id: 'facial-treatment',
    category: 'Skin Care',
    name: 'Facial Treatments',
    shortDescription: 'Radiant, glowing skin',
    description: 'Multiple facial options including gold, diamond, fruit, and specialized facials for different skin types and concerns.',
    price: 'Starting from ₹800',
    duration: '45-90 minutes',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    features: [
      'Skin analysis',
      'Deep cleansing',
      'Exfoliation',
      'Face massage',
      'Mask application',
      'Moisturizing',
    ],
  },
  {
    id: 'nail-art',
    category: 'Nails',
    name: 'Manicure & Pedicure',
    shortDescription: 'Beautiful hands and feet',
    description: 'Complete nail care services including manicure, pedicure, nail art, gel nails, and nail extensions.',
    price: 'Starting from ₹500',
    duration: '45-90 minutes',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    features: [
      'Nail shaping & filing',
      'Cuticle care',
      'Hand/foot massage',
      'Polish application',
      'Nail art designs',
    ],
  },
  {
    id: 'spa-services',
    category: 'Spa',
    name: 'Spa & Massage',
    shortDescription: 'Relax and rejuvenate',
    description: 'Luxurious spa treatments including body massage, body scrubs, and relaxation therapies.',
    price: 'Starting from ₹1,200',
    duration: '60-90 minutes',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    features: [
      'Full body massage',
      'Aromatherapy',
      'Body scrub',
      'Relaxation techniques',
      'Stress relief',
    ],
  },
]

export const serviceCategories = [
  'All',
  'Bridal',
  'Makeup',
  'Hair',
  'Skin Care',
  'Nails',
  'Spa',
]