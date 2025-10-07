// Training courses data
export interface Course {
  id: string
  title: string
  duration: string
  price: string
  schedule: string
  description: string
  features: string[]
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export const courses: Course[] = [
  {
    id: 'makeup-artist',
    title: 'Professional Makeup Artist',
    duration: '3 Months',
    price: '₹25,000',
    schedule: 'Weekdays & Weekends',
    description: 'Complete makeup course covering all aspects from basics to advanced techniques.',
    features: [
      'Basic makeup techniques',
      'Advanced makeup application',
      'Bridal makeup mastery',
      'Product knowledge training',
      'Professional tools & equipment',
      'Hands-on practice sessions',
    ],
  },
  {
    id: 'hair-stylist',
    title: 'Professional Hair Styling',
    duration: '2 Months',
    price: '₹15,000',
    schedule: 'Weekdays & Weekends',
    description: 'Learn professional hair cutting, styling, coloring, and treatment techniques.',
    features: [
      'Hair cutting & styling basics',
      'Advanced styling techniques',
      'Hair coloring & highlighting',
      'Chemical treatments',
      'Hair care & treatment',
      'Professional tools usage',
    ],
  },
  {
    id: 'beauty-therapist',
    title: 'Beauty Therapist',
    duration: '4 Months',
    price: '₹35,000',
    schedule: 'Weekdays & Weekends',
    description: 'Comprehensive beauty therapy course covering all aspects of beauty treatments.',
    features: [
      'Facial treatments & techniques',
      'Skin analysis & consultation',
      'Body treatments & massage',
      'Nail art & manicure',
      'Spa treatments',
      'Client consultation skills',
    ],
  },
  {
    id: 'bridal-specialist',
    title: 'Bridal Specialist',
    duration: '6 Weeks',
    price: '₹20,000',
    schedule: 'Weekends Only',
    description: 'Specialized course focusing on bridal makeup, hair, and complete bridal packages.',
    features: [
      'Bridal makeup techniques',
      'Hair styling for brides',
      'Pre-bridal treatments',
      'Wedding day coordination',
      'Bridal consultation skills',
      'Portfolio development',
    ],
  },
]

export const benefits: Benefit[] = [
  {
    icon: 'Award',
    title: 'Certified Training',
    description: 'Get industry-recognized certificates upon course completion',
  },
  {
    icon: 'Users',
    title: 'Expert Instructors',
    description: 'Learn from experienced professionals with years of industry experience',
  },
  {
    icon: 'BookOpen',
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses covering all aspects of beauty and wellness',
  },
  {
    icon: 'Briefcase',
    title: 'Job Placement',
    description: 'Assistance with job placement and career guidance after course completion',
  },
  {
    icon: 'Clock',
    title: 'Flexible Schedule',
    description: 'Choose from weekday or weekend batches to fit your schedule',
  },
  {
    icon: 'Heart',
    title: 'Hands-on Practice',
    description: 'Extensive practical training with real clients and live demonstrations',
  },
]
