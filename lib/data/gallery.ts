// Gallery data
export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

export const galleryCategories = [
  'All',
  'Bridal',
  'Makeup',
  'Hair',
  'Facial',
  'Nails',
  'Spa',
]

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/bridal-makeup-1.jpg',
    alt: 'Bridal Makeup',
    category: 'Bridal',
  },
  {
    id: 2,
    src: '/images/gallery/hair-styling-1.jpg',
    alt: 'Hair Styling',
    category: 'Hair',
  },
  {
    id: 3,
    src: '/images/gallery/facial-treatment-1.jpg',
    alt: 'Facial Treatment',
    category: 'Facial',
  },
  {
    id: 4,
    src: '/images/gallery/nail-art-1.jpg',
    alt: 'Nail Art',
    category: 'Nails',
  },
  {
    id: 5,
    src: '/images/gallery/spa-relaxation-1.jpg',
    alt: 'Spa Relaxation',
    category: 'Spa',
  },
  {
    id: 6,
    src: '/images/gallery/bridal-makeup-2.jpg',
    alt: 'Bridal Makeup Look',
    category: 'Bridal',
  },
  {
    id: 7,
    src: '/images/gallery/makeup-artist-1.jpg',
    alt: 'Professional Makeup',
    category: 'Makeup',
  },
  {
    id: 8,
    src: '/images/gallery/hair-color-1.jpg',
    alt: 'Hair Coloring',
    category: 'Hair',
  },
  {
    id: 9,
    src: '/images/gallery/facial-treatment-2.jpg',
    alt: 'Advanced Facial',
    category: 'Facial',
  },
  {
    id: 10,
    src: '/images/gallery/nail-art-2.jpg',
    alt: 'Creative Nail Design',
    category: 'Nails',
  },
  {
    id: 11,
    src: '/images/gallery/spa-massage-1.jpg',
    alt: 'Spa Massage',
    category: 'Spa',
  },
  {
    id: 12,
    src: '/images/gallery/bridal-hair-1.jpg',
    alt: 'Bridal Hair Styling',
    category: 'Bridal',
  },
]
