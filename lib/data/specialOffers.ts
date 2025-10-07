// Special offers data
export interface SpecialOffer {
  icon: string
  title: string
  discount: string
  description: string
  color: string
}

export const specialOffers: SpecialOffer[] = [
  {
    icon: 'Gift',
    title: 'First Time Special',
    discount: '20% OFF',
    description: 'Get 20% discount on your first visit',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'Percent',
    title: 'Bridal Package',
    discount: 'Save ₹5000',
    description: 'Complete bridal package with pre-bridal treatments',
    color: 'from-primary to-yellow-500',
  },
  {
    icon: 'Tag',
    title: 'Refer & Earn',
    discount: '₹500 Credit',
    description: 'Refer a friend and both get ₹500 discount',
    color: 'from-green-500 to-teal-500',
  },
]
