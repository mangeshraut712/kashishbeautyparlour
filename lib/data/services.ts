export const serviceCategories = [
  'All',
  'Basic Grooming',
  'Premium Combos',
  'Combo Offers',
  'Special Packages',
  'Hair Care',
  'Facial & Skin',
  'Nails',
  'Additional',
  'Relaxation',
  'Bridal & Events',
]

export const services = [
  // Basic Grooming Packages
  {
    id: 'fruit-cleanup-hand-wax',
    name: 'Fruit Cleanup & Hand Wax',
    category: 'Basic Grooming',
    description: 'Choose one service (includes fruit cleanup & hand waxing)',
    price: '₹299',
    duration: '30-45 minutes',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop',
    features: ['Fruit facial cleanup', 'Hand waxing', 'Refreshing treatment']
  },
  {
    id: 'full-leg-wax-underarms',
    name: 'Full Leg Wax + Underarms',
    category: 'Basic Grooming',
    description: 'Smooth wax for leg and underarm area',
    price: '₹299',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop',
    features: ['Full leg waxing', 'Underarm waxing', 'Smooth finish']
  },
  {
    id: 'manicure-basic',
    name: 'Basic Manicure',
    category: 'Basic Grooming',
    description: 'Nail cleaning, shaping, cuticle care & polish',
    price: '₹299',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop',
    features: ['Nail cleaning', 'Cuticle care', 'Polish application']
  },
  {
    id: 'head-massage-hair-wash',
    name: 'Head Massage + Hair Wash',
    category: 'Basic Grooming',
    description: 'Relaxing scalp massage with shampoo & conditioner',
    price: '₹299',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    features: ['Scalp massage', 'Hair shampoo', 'Conditioning treatment']
  },
  {
    id: 'basic-pedicure',
    name: 'Basic Pedicure',
    category: 'Basic Grooming',
    description: 'Foot soak, scrub, and polish',
    price: '₹299',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
    features: ['Foot soak', 'Exfoliation', 'Polish application']
  },
  {
    id: 'root-touchup',
    name: 'Root Touchup',
    category: 'Basic Grooming',
    description: 'Quick colour touchup for roots',
    price: '₹299',
    duration: '30 minutes',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop',
    features: ['Root touchup', 'Color blending', 'Styling finish']
  },

  // Premium Facial & Threading Combos
  {
    id: 'cleanup-loreal-hairspa',
    name: 'Cleanup + L\'Oréal Hair Spa',
    category: 'Premium Combos',
    description: 'Deep facial cleanup with professional hair spa',
    price: '₹499',
    duration: '1-1.5 hours',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    features: ['Deep facial cleanup', 'L\'Oréal hair spa', 'Nourishing treatment']
  },
  {
    id: 'hand-wax-loreal-hairspa',
    name: 'Hand Wax + L\'Oréal Hair Spa',
    category: 'Premium Combos',
    description: 'Wax & nourishing L\'Oréal hair treatment',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
    features: ['Hand waxing', 'L\'Oréal hair treatment', 'Nourishing spa']
  },
  {
    id: 'threading-wine-facial',
    name: 'Threading + Wine Facial',
    category: 'Premium Combos',
    description: 'Precision threading with glow facial',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    features: ['Eyebrow threading', 'Wine facial treatment', 'Glowing skin']
  },
  {
    id: 'threading-diamond-facial',
    name: 'Threading + Diamond Facial',
    category: 'Premium Combos',
    description: 'Facial with diamond radiance finish',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
    features: ['Eyebrow threading', 'Diamond facial', 'Radiance treatment']
  },
  {
    id: 'threading-pearl-facial',
    name: 'Threading + Pearl Facial',
    category: 'Premium Combos',
    description: 'Brightening pearl facial',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=600&fit=crop',
    features: ['Eyebrow threading', 'Pearl facial', 'Brightening effect']
  },
  {
    id: 'hand-detan-back-polishing',
    name: 'Hand De-tan + Back Polishing',
    category: 'Premium Combos',
    description: 'Tan removal and exfoliation',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
    features: ['Tan removal', 'Back exfoliation', 'Polishing treatment']
  },

  // Combo Offers
  {
    id: 'bleach-facial-hand-detan-wax',
    name: 'Bleach + Facial + Hand De-tan + Hand Wax',
    category: 'Combo Offers',
    description: 'Complete facial & waxing combo',
    price: '₹999',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    features: ['Facial treatment', 'Bleach', 'De-tan', 'Hand waxing']
  },
  {
    id: 'bleach-facial-pedicure',
    name: 'Bleach + Facial + Pedicure',
    category: 'Combo Offers',
    description: 'Facial + foot care combo',
    price: '₹999',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop',
    features: ['Facial treatment', 'Bleach', 'Comprehensive pedicure']
  },
  {
    id: 'wine-facial-bleach-manicure',
    name: 'Wine Facial + Bleach + Manicure',
    category: 'Combo Offers',
    description: 'Brightening and hand-care combo',
    price: '₹999',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    features: ['Wine facial', 'Bleach', 'Professional manicure']
  },
  {
    id: 'pearl-facial-bleach-loreal-hairspa',
    name: 'Pearl Facial + Bleach + L\'Oréal Hair Spa',
    category: 'Combo Offers',
    description: 'Total glow & hair nourishment',
    price: '₹999',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop',
    features: ['Pearl facial', 'Bleach', 'L\'Oréal hair spa']
  },
  {
    id: 'fruit-facial-manicure-pedicure',
    name: 'Fruit Facial + Manicure + Pedicure',
    category: 'Combo Offers',
    description: 'Skin & nail care combo',
    price: '₹999',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
    features: ['Fruit facial', 'Manicure', 'Pedicure']
  },
  {
    id: 'bleach-cleanup-hairspa-full-hand-leg-wax',
    name: 'Bleach + Cleanup + Hair Spa + Full Hand Half Leg Wax',
    category: 'Combo Offers',
    description: 'Glow & spa combo',
    price: '₹999',
    duration: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop',
    features: ['Bleach', 'Cleanup', 'Hair spa', 'Waxing services']
  },
  {
    id: 'shoulder-length-global-color',
    name: 'Shoulder Length Global Color',
    category: 'Combo Offers',
    description: 'L\'Oréal professional global colouring',
    price: '₹999',
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    features: ['L\'Oréal global color', 'Professional application', 'Styling finish']
  },
  {
    id: 'full-body-massage-steam',
    name: 'Full Body Massage + Steam',
    category: 'Combo Offers',
    description: 'Relaxation with steam therapy',
    price: '₹999',
    duration: '1.5 hours',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=600&fit=crop',
    features: ['Full body massage', 'Steam therapy', 'Aromatherapy']
  },

  // Special Beauty Packages
  {
    id: 'special-package-1',
    name: 'Special Package 1',
    category: 'Special Packages',
    description: 'Threading, Uplips, Forehead, Professional Bleach, Facial (Fruit/Gold/Pearl), Wax (Full Hand + Underarms + Half Leg)',
    price: '₹1,199',
    duration: '2.5-3 hours',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop',
    features: ['Complete threading', 'Professional bleach', 'Choice of facial', 'Comprehensive waxing']
  },
  {
    id: 'special-package-2',
    name: 'Special Package 2',
    category: 'Special Packages',
    description: 'Threading, Uplips, Forehead, Professional Bleach, Professional Facial (Wine/Gold), Wax (Full Hand + Underarms + Half Leg)',
    price: '₹1,499',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    features: ['Complete threading', 'Professional bleach', 'Premium facial', 'Full waxing']
  },
  {
    id: 'special-package-3',
    name: 'Special Package 3',
    category: 'Special Packages',
    description: 'Threading, Uplips, Forehead, Professional Bleach, Professional Lotus Facial, Wax (Full Hand + Underarms + Half Leg)',
    price: '₹1,999',
    duration: '3-3.5 hours',
    image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=600&fit=crop',
    features: ['Complete threading', 'Professional bleach', 'Lotus facial', 'Comprehensive waxing']
  },

  // Hair Care & Treatment
  {
    id: 'hair-spa-cut-wash',
    name: 'Hair Spa + Hair Cut + Hair Wash',
    category: 'Hair Care',
    description: 'Nourishing spa & styling',
    price: '₹1,299',
    duration: '1.5-2 hours',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    features: ['Nourishing hair spa', 'Professional haircut', 'Wash & conditioning']
  },
  {
    id: 'hair-color-facial-hand-leg-wax-eyebrows',
    name: 'Hair Colour + Facial + Hand Wax + Leg Wax + Eyebrows',
    category: 'Hair Care',
    description: 'Multi-service beauty combo',
    price: '₹2,499',
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    features: ['Hair coloring', 'Facial treatment', 'Waxing services', 'Eyebrow shaping']
  },
  {
    id: 'loreal-hair-spa-special',
    name: 'L\'Oréal Hair Spa (Special Offer)',
    category: 'Hair Care',
    description: 'Revitalizing professional spa',
    price: '₹599',
    duration: '45 minutes',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop',
    features: ['L\'Oréal products', 'Deep conditioning', 'Scalp treatment']
  },
  {
    id: 'hair-straightening-smoothening',
    name: 'Hair Straightening / Smoothening / Rebonding',
    category: 'Hair Care',
    description: 'Any length, frizz-free smooth hair',
    price: '₹3,600',
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=600&fit=crop',
    features: ['Frizz-free finish', 'Any hair length', 'Long-lasting smoothening']
  },
  {
    id: 'global-hair-colour',
    name: 'Global Hair Colour',
    category: 'Hair Care',
    description: 'L\'Oréal global coloring (any length)',
    price: '₹2,000',
    duration: '2-3 hours',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop',
    features: ['L\'Oréal global colors', 'Professional application', 'Any hair length']
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin Treatment',
    category: 'Hair Care',
    description: 'Frizz control & shine restoration',
    price: '₹3,200',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop',
    features: ['Frizz control', 'Shine restoration', 'Moisturizing treatment']
  },
  {
    id: 'keratin-botox',
    name: 'Keratin / Botox',
    category: 'Hair Care',
    description: 'Intense smoothing treatment',
    price: '₹4,999',
    duration: '3-4 hours',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=600&fit=crop',
    features: ['Intense smoothing', 'Botox treatment', 'Hair repair']
  },
  {
    id: 'nano-plastia',
    name: 'Nano-Plastia',
    category: 'Hair Care',
    description: 'Premium long-lasting hair treatment',
    price: '₹6,999',
    duration: '4 hours',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    features: ['Nano technology', 'Long-lasting results', 'Hair strengthening']
  },

  // Facial & Skin Care
  {
    id: 'hydra-facial-hand-polishing-pedicure',
    name: 'Hydra Facial + Hand Polishing + Pedicure',
    category: 'Facial & Skin',
    description: 'Glow facial with polishing & foot care',
    price: '₹2,199',
    duration: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop',
    features: ['Hydra facial', 'Hand polishing', 'Comprehensive pedicure']
  },
  {
    id: 'body-polishing-hydra-glow-facial',
    name: 'Body Polishing + Hydra Glow Facial',
    category: 'Facial & Skin',
    description: 'Full-body rejuvenation & glow',
    price: '₹3,999',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop',
    features: ['Body polishing', 'Hydra glow facial', 'Complete skin rejuvenation']
  },
  {
    id: 'facial-bleach-detan-pedicure-eyebrows-wax',
    name: 'Facial + Bleach / D-Tan + Pedicure + Eyebrows + Hand Wax',
    category: 'Facial & Skin',
    description: 'Complete skin & grooming package',
    price: '₹1,499',
    duration: '2.5 hours',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
    features: ['Facial treatment', 'Bleach/De-tan', 'Pedicure', 'Eyebrows', 'Hand wax']
  },
  {
    id: 'bridal-makeup-full',
    name: 'Bridal Makeup (Full Package)',
    category: 'Bridal & Events',
    description: 'Complete bridal makeup package for your special day',
    price: '₹8,499',
    duration: '4-5 hours',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    features: ['Pre-bridal trial', 'Bridal makeup', 'Hairstyling', 'Touch-up kit']
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'Bridal & Events',
    description: 'Glam look for special events',
    price: '₹1,999',
    duration: '1.5-2 hours',
    image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=600&fit=crop',
    features: ['Event makeup', 'Glam application', 'Photography ready']
  },
  {
    id: 'facial-basic',
    name: 'Basic Facial',
    category: 'Facial & Skin',
    description: 'Starting from standard facial treatments',
    price: '₹499',
    duration: '1 hour',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    features: ['Standard facial', 'Skin cleansing', 'Moisturizing treatment']
  }
]
