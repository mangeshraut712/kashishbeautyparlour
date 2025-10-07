// Home page data
export interface HeroStats {
  value: string
  label: string
}

export interface FloatingCard {
  icon: string
  title: string
  subtitle: string
  bgColor: string
  iconColor: string
}

export const heroStats: HeroStats[] = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Clients" },
  { value: "50+", label: "Services" }
]

export const floatingCards: FloatingCard[] = [
  {
    icon: "Award",
    title: "Certified",
    subtitle: "Professionals",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: "Users",
    title: "5000+",
    subtitle: "Satisfied Clients",
    bgColor: "bg-secondary/20",
    iconColor: "text-accent"
  }
]

export const heroContent = {
  badge: {
    icon: "Sparkles",
    text: "Professional Beauty Services"
  },
  title: "Where Beauty Meets Artistry",
  description: "Transform your look with our expert beauty services. From bridal makeup to professional training, we bring out your natural beauty with care and expertise.",
  image: {
    src: "/images/hero-beauty-parlour.jpg",
    alt: "Kashish Beauty Parlour"
  },
  cta: {
    primary: {
      text: "Book Appointment",
      href: "/contact#booking"
    },
    secondary: {
      text: "View Services",
      href: "/services"
    }
  }
}

