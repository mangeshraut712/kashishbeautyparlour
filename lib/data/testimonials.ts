// Testimonials data - used by SocialProof component
export interface Testimonial {
  id: number
  name: string
  service: string
  image: string
  rating: number
  text: string
  date?: string
  platform?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sneha M.',
    service: 'Bridal Makeup',
    image: '/images/testimonials/testimonial-1.png',
    rating: 5,
    text: 'Excellent bridal makeup! Meena ma\'ma is very talented and understood exactly what I wanted.',
    date: '2 days ago',
    platform: 'Google',
  },
  {
    id: 2,
    name: 'Priya K.',
    service: 'Hair Styling & Treatment',
    image: '/images/testimonials/testimonial-2.png',
    rating: 5,
    text: 'Best parlour in Thergaon area. Clean environment and professional staff. Highly recommended!',
    date: '1 week ago',
    platform: 'JustDial',
  },
  {
    id: 3,
    name: 'Anjali P.',
    service: 'Regular Facial & Skin Care',
    image: '/images/testimonials/testimonial-3.png',
    rating: 5,
    text: 'Good service and reasonable prices. Hair spa was amazing. Will visit again.',
    date: '2 weeks ago',
    platform: 'Sulekha',
  },
  {
    id: 4,
    name: 'Meera J.',
    service: 'Spa & Wellness',
    image: '/images/testimonials/testimonial-4.png',
    rating: 5,
    text: 'The spa experience at Kashish is simply divine! The massage and facial treatment left me feeling completely relaxed.',
    date: '3 weeks ago',
    platform: 'Google',
  },
  {
    id: 5,
    name: 'Kavita J.',
    service: 'Beauty Training Course',
    image: '/images/testimonials/testimonial-5.png',
    rating: 5,
    text: 'Life-changing training experience! After completing the comprehensive beauty course at Kashish, I gained all the skills needed to become a certified beautician.',
    date: '1 month ago',
    platform: 'Google',
  },
]
