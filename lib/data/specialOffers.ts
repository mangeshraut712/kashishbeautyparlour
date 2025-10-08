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
    discount: '10% OFF',
    description: 'Get 10% discount on your first visit',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'Percent',
    title: 'Bridal Package',
    discount: 'Save ₹1500',
    description: 'Complete bridal package with pre-bridal treatments',
    color: 'from-primary to-yellow-500',
  },
  {
    icon: 'Tag',
    title: 'Refer & Earn',
    discount: '₹200 Credit',
    description: 'Refer a friend and both get ₹200 discount',
    color: 'from-green-500 to-teal-500',
  },
]
