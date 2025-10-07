// Testimonials data
export interface Testimonial {
  id: number
  name: string
  service: string
  image: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    image: '/images/testimonials/priya-sharma.jpg',
    rating: 5,
    text: 'Exceptional bridal makeup service! The artistry and attention to detail made me feel absolutely beautiful on my special day. The team understood exactly what I wanted and delivered beyond expectations. Highly recommended for brides-to-be!',
  },
  {
    id: 2,
    name: 'Anjali Desai',
    service: 'Hair Styling & Treatment',
    image: '/images/testimonials/anjali-desai.jpg',
    rating: 5,
    text: 'Outstanding hair transformation at Kashish! I had severe hair damage from coloring, but their keratin treatment completely revived my hair. The stylist was incredibly skilled and patient. Six months later, my hair is still looking fabulous!',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    service: 'Regular Facial & Skin Care',
    image: '/images/testimonials/sneha-patil.jpg',
    rating: 5,
    text: 'Life-changing experience! After struggling with acne and dull skin for years, their customized facial treatments have given me clear, glowing skin I never thought possible. The therapist really understands skin concerns and provides personalized care.',
  },
  {
    id: 4,
    name: 'Rashmi Khanna',
    service: 'Party Makeup & Hair',
    image: '/images/testimonials/rashmi-khanna.jpg',
    rating: 5,
    text: 'Absolutely love the party makeup and hair styling! The team made me look stunning for my sister\'s wedding. The makeup lasted all day and the hairstyle was perfect. Will definitely come back for future events!',
  },
  {
    id: 5,
    name: 'Meera Joshi',
    service: 'Spa & Wellness',
    image: '/images/testimonials/meera-joshi.jpg',
    rating: 5,
    text: 'The spa experience at Kashish is simply divine! The massage and facial treatment left me feeling completely relaxed and rejuvenated. The ambiance is peaceful and the therapists are very professional. A perfect escape from daily stress!',
  },
  {
    id: 6,
    name: 'Kavya Reddy',
    service: 'Hair Color & Highlights',
    image: '/images/testimonials/kavya-reddy.jpg',
    rating: 5,
    text: 'Amazing hair coloring service! The colorist understood exactly what I wanted and the results exceeded my expectations. The highlights look natural and the color has stayed vibrant for months. Highly recommend their hair services!',
  },
]

