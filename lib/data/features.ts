import { BUSINESS_STATS } from '@/lib/constants'

// Features data for Why Choose Us section
export interface Feature {
  icon: string
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'Award',
    title: 'Certified Professionals',
    description: 'Experienced and certified beauticians with years of expertise',
  },
  {
    icon: 'Users',
    title: `${BUSINESS_STATS.happyCustomers} Happy Clients`,
    description: 'Trusted by thousands of satisfied customers across Pune',
  },
  {
    icon: 'Clock',
    title: 'Flexible Timings',
    description: 'Open 7 days a week with convenient appointment slots',
  },
  {
    icon: 'Shield',
    title: 'Hygiene & Safety',
    description: 'Maintaining highest standards of cleanliness and safety',
  },
  {
    icon: 'Heart',
    title: 'Personalized Care',
    description: 'Customized services tailored to your unique needs',
  },
  {
    icon: 'Sparkles',
    title: 'Premium Products',
    description: 'Using only high-quality, branded beauty products',
  },
]
