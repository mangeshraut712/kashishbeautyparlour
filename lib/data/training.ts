import { GraduationCap, Clock, Users, Award, CheckCircle } from 'lucide-react'

export const courses = [
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
    title: 'Beauty Therapy Course',
    duration: '4 Months',
    price: '₹35,000',
    schedule: 'Weekdays',
    description: 'Comprehensive beauty therapy training covering facials, massages, and body treatments.',
    features: [
      'Facial & skin treatments',
      'Body massage techniques',
      'Nail care & pedicure',
      'Waxing & threading',
      'Chemical peels & exfoliation',
      'Spa treatments & aromatherapy',
    ],
  },
  {
    id: 'nail-technician',
    title: 'Nail Technician Course',
    duration: '1.5 Months',
    price: '₹12,000',
    schedule: 'Weekends',
    description: 'Master nail art, extensions, and professional nail care services.',
    features: [
      'Nail anatomy & health',
      'Nail art techniques',
      'Gel polish application',
      'Nail extensions',
      'French & American manicure',
      'Client consultation',
    ],
  },
]

export const benefits = [
  {
    icon: Award,
    title: 'Certified Training',
    description: 'Get certified with recognized beauty qualifications',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Personalized attention with small batches of students',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Weekend and weekday batches available',
  },
  {
    icon: CheckCircle,
    title: 'Job Assistance',
    description: 'Career guidance and placement assistance provided',
  },
]
