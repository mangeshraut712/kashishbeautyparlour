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
    text: 'Perfect for special occasions! I needed makeup for a corporate event and they made me look absolutely professional yet stunning. The team worked within budget and the results lasted the entire evening. Will definitely return!',
  },
  {
    id: 5,
    name: 'Kavita Jain',
    service: 'Nail Art & Spa',
    image: '/images/testimonials/kavita-jain.jpg',
    rating: 5,
    text: 'Amazing attention to detail! My bridal nail art was absolutely exquisite. The designs were unique and perfectly matched my wedding theme. Staff is friendly, hygienic, and uses top-quality products. Highly satisfied!',
  },
  {
    id: 6,
    name: 'Meera Singhania',
    service: 'Complete Beauty Package',
    image: '/images/testimonials/meera-singhania.jpg',
    rating: 5,
    text: 'The best in Pune! Professional, hygienic, and affordable. I got their bridal package (makeup, hair, facial, and manicure) and everything was perfect. The team is skilled, patient, and really cares about customer satisfaction. 10/10!',
  },
  {
    id: 7,
    name: 'Divya Agarwal',
    service: 'Beauty Training Course',
    image: '/images/testimonials/divya-agarwal.jpg',
    rating: 5,
    text: 'Excellent training institute! I recently completed their makeup artist course and it was comprehensive and practical. The trainers are industry experts with real experience. Got a good job immediately after completion. Thank you Kashish!',
  },
  {
    id: 8,
    name: 'Preeti Chowdhury',
    service: 'Threading & Eyebrow Shaping',
    image: '/images/testimonials/preeti-chowdhury.jpg',
    rating: 5,
    text: 'Best threading service I\'ve ever experienced! Precise, painless, and quick. The hygienically maintained environment and professional staff make it a pleasure to visit. Will recommend to all my friends.',
  },
]
