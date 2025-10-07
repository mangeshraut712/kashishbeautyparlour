# Kashish Beauty Parlour - Project Structure

## 📁 Recommended Next.js Project Structure

```
kashish-beauty-parlour/
│
├── 📁 public/                          # Static assets
│   ├── 📁 images/
│   │   ├── 📁 gallery/                 # Before/After, portfolio images
│   │   ├── 📁 services/                # Service category images
│   │   ├── 📁 team/                    # Staff photos
│   │   ├── 📁 salon/                   # Interior/exterior photos
│   │   ├── logo.svg                    # Kashish Beauty Parlour logo
│   │   ├── favicon.ico
│   │   └── og-image.jpg                # Social media preview image
│   ├── 📁 videos/                      # Promotional videos (if any)
│   └── robots.txt
│
├── 📁 src/
│   ├── 📁 app/                         # Next.js 14 App Router
│   │   ├── layout.tsx                  # Root layout with header/footer
│   │   ├── page.tsx                    # Homepage
│   │   ├── globals.css                 # Global styles
│   │   │
│   │   ├── 📁 about/                   # About page
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 services/                # Services section
│   │   │   ├── page.tsx                # All services listing
│   │   │   ├── 📁 bridal-makeup/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 hair-services/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 facial-treatments/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 nail-art/
│   │   │   │   └── page.tsx
│   │   │   └── 📁 spa-services/
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 gallery/                 # Photo gallery
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 pricing/                 # Pricing & packages
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 training/                # Training center
│   │   │   ├── page.tsx
│   │   │   └── 📁 courses/
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 blog/                    # Beauty tips & articles
│   │   │   ├── page.tsx                # Blog listing
│   │   │   └── 📁 [slug]/
│   │   │       └── page.tsx            # Individual blog post
│   │   │
│   │   ├── 📁 book-appointment/        # Booking page
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 testimonials/            # Customer reviews
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 contact/                 # Contact page
│   │   │   └── page.tsx
│   │   │
│   │   └── 📁 api/                     # API routes
│   │       ├── 📁 booking/
│   │       │   └── route.ts            # Handle booking submissions
│   │       ├── 📁 contact/
│   │       │   └── route.ts            # Handle contact form
│   │       └── 📁 newsletter/
│   │           └── route.ts            # Newsletter signup
│   │
│   ├── 📁 components/                  # Reusable React components
│   │   ├── 📁 layout/
│   │   │   ├── Header.tsx              # Navigation bar
│   │   │   ├── Footer.tsx              # Footer with links
│   │   │   ├── MobileMenu.tsx          # Mobile navigation
│   │   │   └── WhatsAppButton.tsx      # Floating WhatsApp button
│   │   │
│   │   ├── 📁 home/
│   │   │   ├── Hero.tsx                # Hero section with CTA
│   │   │   ├── FeaturedServices.tsx    # Service cards
│   │   │   ├── Stats.tsx               # Business statistics
│   │   │   ├── TestimonialCarousel.tsx # Customer testimonials
│   │   │   ├── InstagramFeed.tsx       # Latest Instagram posts
│   │   │   ├── SpecialOffers.tsx       # Current promotions
│   │   │   └── LocationMap.tsx         # Google Maps embed
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── ServiceCard.tsx         # Individual service card
│   │   │   ├── ServiceGrid.tsx         # Grid layout for services
│   │   │   ├── ServiceDetail.tsx       # Service detail view
│   │   │   └── PricingTable.tsx        # Pricing display
│   │   │
│   │   ├── 📁 gallery/
│   │   │   ├── GalleryGrid.tsx         # Masonry/grid layout
│   │   │   ├── Lightbox.tsx            # Image viewer
│   │   │   ├── CategoryFilter.tsx      # Filter by category
│   │   │   └── BeforeAfter.tsx         # Before/after slider
│   │   │
│   │   ├── 📁 booking/
│   │   │   ├── BookingForm.tsx         # Appointment form
│   │   │   ├── ServiceSelector.tsx     # Service dropdown
│   │   │   ├── DateTimePicker.tsx      # Date/time selection
│   │   │   └── BookingSummary.tsx      # Booking confirmation
│   │   │
│   │   ├── 📁 blog/
│   │   │   ├── BlogCard.tsx            # Blog post card
│   │   │   ├── BlogGrid.tsx            # Blog listing
│   │   │   ├── BlogPost.tsx            # Full blog post
│   │   │   └── RelatedPosts.tsx        # Related articles
│   │   │
│   │   ├── 📁 ui/                      # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── carousel.tsx
│   │   │   └── ... (other UI components)
│   │   │
│   │   └── 📁 common/
│   │       ├── ContactForm.tsx         # Contact form
│   │       ├── Newsletter.tsx          # Newsletter signup
│   │       ├── SocialLinks.tsx         # Social media icons
│   │       ├── Breadcrumbs.tsx         # Breadcrumb navigation
│   │       ├── SEO.tsx                 # SEO meta tags
│   │       └── Loading.tsx             # Loading spinner
│   │
│   ├── 📁 lib/                         # Utility functions
│   │   ├── utils.ts                    # Helper functions
│   │   ├── constants.ts                # App constants
│   │   ├── validations.ts              # Form validations
│   │   └── emailService.ts             # Email sending logic
│   │
│   ├── 📁 data/                        # Static data
│   │   ├── services.ts                 # Service definitions
│   │   ├── testimonials.ts             # Customer testimonials
│   │   ├── faq.ts                      # FAQs
│   │   ├── team.ts                     # Team member info
│   │   └── blog-posts.ts               # Blog content (or use CMS)
│   │
│   ├── 📁 styles/                      # Additional styles
│   │   └── custom.css                  # Custom CSS if needed
│   │
│   └── 📁 types/                       # TypeScript types
│       ├── service.ts
│       ├── booking.ts
│       ├── testimonial.ts
│       └── blog.ts
│
├── 📄 .env.local                       # Environment variables
├── 📄 .gitignore
├── 📄 next.config.js                   # Next.js configuration
├── 📄 tailwind.config.ts               # Tailwind CSS config
├── 📄 tsconfig.json                    # TypeScript config
├── 📄 package.json                     # Dependencies
├── 📄 README.md                        # Project documentation
└── 📄 WEBSITE_PLAN.md                  # This planning document
```

---

## 📋 Key Files Explained

### **1. src/app/page.tsx (Homepage)**
```typescript
import Hero from '@/components/home/Hero'
import FeaturedServices from '@/components/home/FeaturedServices'
import Stats from '@/components/home/Stats'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import SpecialOffers from '@/components/home/SpecialOffers'
import InstagramFeed from '@/components/home/InstagramFeed'
import LocationMap from '@/components/home/LocationMap'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedServices />
      <SpecialOffers />
      <TestimonialCarousel />
      <InstagramFeed />
      <LocationMap />
    </>
  )
}
```

### **2. src/data/services.ts**
```typescript
export const services = [
  {
    id: 'bridal-makeup',
    category: 'Bridal',
    name: 'Bridal Makeup',
    shortDescription: 'Look stunning on your special day',
    description: 'Complete bridal makeup package including pre-bridal treatments, trial makeup, and wedding day makeup with hairstyling.',
    price: 'Starting from ₹15,000',
    duration: '3-4 hours',
    image: '/images/services/bridal-makeup.jpg',
    features: [
      'Pre-bridal consultation',
      'Trial makeup session',
      'HD makeup',
      'Hairstyling',
      'Draping assistance',
      'Touch-up kit'
    ]
  },
  {
    id: 'hair-coloring',
    category: 'Hair',
    name: 'Hair Coloring & Highlights',
    shortDescription: 'Transform your look with vibrant colors',
    description: 'Professional hair coloring services using premium products. From subtle highlights to bold colors.',
    price: 'Starting from ₹2,500',
    duration: '2-3 hours',
    image: '/images/services/hair-coloring.jpg',
    features: [
      'Color consultation',
      'Premium products',
      'Ammonia-free options',
      'After-care guidance'
    ]
  },
  // ... more services
]
```

### **3. src/components/layout/Header.tsx**
```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Kashish Beauty Parlour
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/training">Training</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* CTA Button */}
          <Link 
            href="/book-appointment"
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
```

### **4. src/components/booking/BookingForm.tsx**
```typescript
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Send to WhatsApp
    const whatsappMessage = `
      New Appointment Request:
      Name: ${formData.name}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Date: ${formData.date}
      Time: ${formData.time}
    `
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        placeholder="Your Name" 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      {/* ... other fields */}
      <Button type="submit">Book Appointment</Button>
    </form>
  )
}
```

---

## 🎨 Design System

### **Colors (Tailwind Config)**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',      // Gold
        secondary: '#FFB6C1',    // Pink
        accent: '#800020',       // Burgundy
        background: '#FFFFFF',   // White
        text: '#2C3E50',         // Dark Gray
        muted: '#F8F9FA',        // Light Gray
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

### **Typography Scale**
```css
H1: 48px / 3rem    - Page titles
H2: 36px / 2.25rem - Section headings
H3: 24px / 1.5rem  - Card titles
H4: 20px / 1.25rem - Subsections
Body: 16px / 1rem  - Regular text
Small: 14px / 0.875rem - Captions
```

### **Spacing**
```
Container: max-w-7xl (1280px)
Section padding: py-16 (mobile: py-8)
Card spacing: p-6
Button padding: px-6 py-3
```

---

## 📦 Dependencies (package.json)

```json
{
  "name": "kashish-beauty-parlour",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "framer-motion": "^10.16.4",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.4",
    "lucide-react": "^0.292.0",
    "embla-carousel-react": "^8.0.0",
    "yet-another-react-lightbox": "^3.15.0",
    "react-intersection-observer": "^9.5.3"
  },
  "devDependencies": {
    "@types/node": "^20.9.0",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 🔧 Environment Variables (.env.local)

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://kashishbeautyparlour.com
NEXT_PUBLIC_SITE_NAME=Kashish Beauty Parlour

# Contact Information
NEXT_PUBLIC_PHONE=+919876543210
NEXT_PUBLIC_EMAIL=info@kashishbeautyparlour.com
NEXT_PUBLIC_WHATSAPP=919876543210

# Business Address
NEXT_PUBLIC_ADDRESS="Shop No 5, Nisarg Raj Society, Dange Chowk Rd, Pune"
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://maps.google.com/...

# Social Media
NEXT_PUBLIC_INSTAGRAM=kashishbeautyparlour
NEXT_PUBLIC_FACEBOOK=kashishbeautyparlour
NEXT_PUBLIC_YOUTUBE=kashishbeautyparlour

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (EmailJS or similar)
EMAILJS_SERVICE_ID=service_xxx
EMAILJS_TEMPLATE_ID=template_xxx
EMAILJS_PUBLIC_KEY=public_key_xxx

# CMS (if using Sanity/Contentful)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
```

---

## 📄 Essential Pages Content

### **Homepage Sections:**
1. Hero (Full-screen banner with CTA)
2. Stats (Years in business, happy customers, etc.)
3. Featured Services (4 main services)
4. Special Offers (Current promotions)
5. Testimonials (Carousel)
6. Instagram Feed (Latest posts)
7. Location & Contact

### **About Page:**
- Owner's story
- Experience & expertise
- Certifications
- Team members
- Why choose us

### **Services Page:**
- Service categories
- Each service with description, price, duration
- Before/after examples
- Book now CTA

### **Gallery:**
- Categorized images
- Lightbox viewer
- Filter functionality

### **Pricing:**
- Service pricing table
- Package deals
- Membership options

### **Training Center:**
- Course offerings
- Curriculum details
- Fees & duration
- Enrollment form

### **Blog:**
- Beauty tips
- Trends
- How-to guides
- Product reviews

### **Contact:**
- Contact form
- Google Maps
- Business hours
- Social links

---

## 🚀 Deployment Checklist

### **Pre-Launch:**
- [ ] All pages completed
- [ ] Content proofread
- [ ] Images optimized
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] SEO metadata
- [ ] Analytics setup
- [ ] Google Maps working
- [ ] WhatsApp integration
- [ ] SSL certificate

### **Launch:**
- [ ] Domain connected
- [ ] DNS configured
- [ ] Deploy to Vercel
- [ ] Test all links
- [ ] Submit sitemap to Google
- [ ] Test contact forms
- [ ] Verify analytics

### **Post-Launch:**
- [ ] Monitor analytics
- [ ] Collect feedback
- [ ] Fix any issues
- [ ] Start marketing
- [ ] Create content calendar
- [ ] Encourage reviews

---

## 📱 Mobile-First Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet portrait */
lg: 1024px   /* Tablet landscape / Small laptop */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Large desktop */
```

### **Responsive Design Strategy:**
- Design for mobile first (320px+)
- Scale up for larger screens
- Touch-friendly buttons (min 44px)
- Readable text (16px minimum)
- Optimized images for mobile

---

## 🎯 Performance Targets

```
Lighthouse Scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

Core Web Vitals:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Page Size:
- Homepage: < 1MB
- Service pages: < 500KB
- Gallery: Lazy loaded
```

---

## 🔍 SEO Structure

### **URL Structure:**
```
Homepage: /
About: /about
Services: /services
  - /services/bridal-makeup
  - /services/hair-services
  - /services/facial-treatments
Gallery: /gallery
Pricing: /pricing
Training: /training
  - /training/courses
Blog: /blog
  - /blog/beauty-tips-for-summer
Contact: /contact
Book: /book-appointment
```

### **Meta Tags (Example):**
```html
<title>Kashish Beauty Parlour | Best Beauty Salon in Thergaon, Pune</title>
<meta name="description" content="Professional beauty services and training center in Pune. Bridal makeup, hair styling, facials, and more. Book your appointment today!" />
<meta name="keywords" content="beauty parlour pune, bridal makeup thergaon, beauty salon dange chowk, beauty training pune" />
```

---

This structure provides a solid foundation for a professional, scalable beauty parlour website! 🎨✨