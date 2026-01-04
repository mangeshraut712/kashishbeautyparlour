import { Clock, Users, Award, CheckCircle } from 'lucide-react'

export const courses = [
  {
    id: 'basic-advanced-beauty',
    title: 'Basic to Advanced Makeup and Hairstyle & Beauty Course',
    duration: '6 Months',
    price: '₹60,000',
    schedule: '12 PM – 5 PM',
    image: '/images/services/training-academy.png',
    description: 'Complete comprehensive beauty training covering basic and advanced makeup, hairstyling, hair treatment, and skin care modules with practical hands-on sessions.',
    basicSyllabus: [
      'Threading',
      'Waxing',
      'Bleach',
      'Facial',
      'Manicure',
      'Pedicure',
      'Cleanup'
    ],
    advancedSyllabus: {
      makeupModule: [
        'Colour Theory',
        'Brush Knowledge',
        'Product Knowledge',
        'Different Types of Eye Makeup',
        'Concealer Techniques',
        'Face Correction',
        'Types of Base',
        'Lips Correction',
        'Base Selection',
        'Eye Makeup Variation',
        'Eyebrow Correction',
        'Types of Eyeliner',
        'Blusher Technique',
        'Glitter Application',
        'Lens Application',
        'Lashes Application',
        'Highlights',
        'Contouring'
      ],
      hairModule: [
        'Sectioning Techniques',
        'Crimping',
        'Curls Variety',
        'Extension Application',
        'Donut and Puff Application',
        'Front Hairstyle Variations',
        'Messy Choti',
        'Bridal Hairstyles',
        'South Indian Hairstyles',
        'Western Hairstyles',
        'Traditional Khopa and Bun Variations',
        'Hair Knowledge and Care',
        'Hair Cuts',
        'Hair Treatments – Smoothening, Botox, Protein, Keratin',
        'Hair Colouring – Global, Balayage, Highlight Shades'
      ],
      skinModule: [
        'Skin Knowledge',
        'Skin Treatments',
        'Skin Machinery Knowledge',
        'Hydra Machine Knowledge'
      ]
    },
    demoSessions: [
      'Party Makeup',
      'Indo-Western Makeup',
      'Maharashtrian Bridal Makeup',
      'Catholic Bridal Makeup',
      '(Includes full practical training with hands-on sessions)'
    ],
    features: [
      'Complete Basic and Advanced Syllabus',
      'Hands-on Practical Training',
      'ISO-Certified Certificate',
      'Professional Demo Sessions',
      'Career Guidance & Job Assistance',
      'Small Batch Sizes'
    ],
    documentsRequired: [
      'Xerox copy of Aadhar Card',
      'PAN Card',
      'Leaving Certificate (10th / 12th)',
      '2 Passport-Size Photos'
    ],
    paymentOptions: [
      'GPay',
      'PhonePe',
      'Bank Transfer',
      'Cash'
    ]
  }
]

export const benefits = [
  {
    icon: Award,
    title: 'ISO-Certified Certificate',
    description: 'Get certified with recognized qualifications upon completion',
  },
  {
    icon: Users,
    title: 'Practical Training',
    description: 'Hands-on sessions with professional tools and guidance',
  },
  {
    icon: Clock,
    title: '6 Months Comprehensive Course',
    description: 'Complete training from basic to advanced levels',
  },
  {
    icon: CheckCircle,
    title: 'Career Prospects',
    description: 'Job assistance and entrepreneurship guidance provided',
  },
]
