import { BUSINESS_STATS } from '@/lib/constants'

export const heroContent = {
  badge: {
    icon: 'Sparkles',
    text: 'Premium Beauty Services'
  },
  title: 'Where Beauty Meets Artistry',
  description: 'Experience premium beauty services at Kashish Beauty Parlour And Training Center. Professional makeup, hair styling, facials, and spa treatments in Pune.',
  image: {
    src: '/images/staff/Meena.png',
    alt: 'Meena Raut - Founder & Professional Beautician at Kashish Beauty Parlour'
  },
  cta: {
    primary: {
      text: 'Book Appointment',
      href: '/contact'
    },
    secondary: {
      text: 'View Services',
      href: '/services'
    }
  }
}

export const heroStats = [
  {
    value: BUSINESS_STATS.totalServices,
    label: BUSINESS_STATS.servicesLabel
  },
  {
    value: BUSINESS_STATS.happyCustomers,
    label: BUSINESS_STATS.customersLabel
  },
  {
    value: BUSINESS_STATS.yearsOfExperience,
    label: BUSINESS_STATS.yearsLabel
  }
]

export const floatingCards = [
  {
    icon: 'Award',
    title: 'Certified',
    subtitle: 'Professional stylists',
    bgColor: 'bg-primary/20'
  },
  {
    icon: 'Users',
    title: 'Personalized',
    subtitle: 'Customized services',
    bgColor: 'bg-secondary/20'
  }
]
