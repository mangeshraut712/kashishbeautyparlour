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
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Exceptional bridal makeup service! The artistry and attention to detail made me feel absolutely beautiful on my special day. The team understood exactly what I wanted and delivered beyond expectations. Highly recommended for brides-to-be!',
  },
  {
    id: 2,
    name: 'Anjali Desai',
    service: 'Hair Styling & Treatment',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Outstanding hair transformation at Kashish! I had severe hair damage from coloring, but their keratin treatment completely revived my hair. The stylist was incredibly skilled and patient. Six months later, my hair is still looking fabulous!',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    service: 'Regular Facial & Skin Care',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Life-changing experience! After struggling with acne and dull skin for years, their customized facial treatments have given me clear, glowing skin I never thought possible. The therapist really understands skin concerns and provides personalized care.',
  },
  {
    id: 4,
    name: 'Meera Joshi',
    service: 'Spa & Wellness',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The spa experience at Kashish is simply divine! The massage and facial treatment left me feeling completely relaxed and rejuvenated. The ambiance is peaceful and the therapists are very professional. A perfect escape from daily stress!',
  },
  {
    id: 5,
    name: 'Riya Kapoor',
    service: 'Henna/Mehndi Design',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Beautiful and intricate henna designs that turned my bridal hand into a work of art! The mehndi artist is incredibly talented with traditional motifs and the henna paste quality is excellent. The cone prepared fresh and the stain was dark and long-lasting. Perfect for my wedding!',
  },
  {
    id: 6,
    name: 'Aaradhya Sharma',
    service: 'Eyebrow Microblading & Lash Extensions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Transformative eyebrow microblading experience! My sparse eyebrows now look full and perfectly shaped. The precision work is exceptional and natural-looking. Combined with lash extensions that open up my eyes amazingly. The aftercare was clear and the results have been flawless for months!',
  },
  {
    id: 7,
    name: 'Kavita Jain',
    service: 'Beauty Parlour Training Course',
    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Life-changing training experience! After completing the comprehensive beauty course at Kashish, I gained all the skills needed to become a certified beautician. The trainers are industry experts and the practical training is phenomenal. Within 6 months, I started my own successful parlor in Mumbai!',
  },
  {
    id: 8,
    name: 'Preeti Chowdhury',
    service: 'Beauty Parlour Training Course',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The training institute transformed my career! I enrolled with zero knowledge and now I\'m a certified makeup artist running my own bridal studio. Hundreds of their students, including me, have successfully opened their own parlours. The government certification and placement support are incredible!',
  },
  {
    id: 9,
    name: 'Meera Agarwal',
    service: 'Beauty Parlour Training Course',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Outstanding training that creates entrepreneurs! Kashish has trained thousands of students like me, many of whom now own successful beauty businesses. The comprehensive curriculum from basics to advanced techniques, combined with business management training, prepared me to start a thriving parlor of my own!',
  },
]
