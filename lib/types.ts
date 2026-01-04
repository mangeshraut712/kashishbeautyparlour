/**
 * TypeScript Type Definitions
 * Centralized types for the Kashish Beauty Parlour application
 */

// ============================================
// Business Types
// ============================================

export interface Service {
    id: string
    name: string
    description: string
    category: string
    price: number | string
    duration?: string
    image: string
    features?: string[]
}

export interface GalleryImage {
    id: string
    src: string
    alt: string
    category: string
}

export interface Testimonial {
    id: string
    name: string
    image: string
    text: string
    rating: number
    service: string
    date?: string
}

export interface BlogPost {
    id: number
    title: string
    excerpt: string
    content: string
    image: string
    category: string
    author: string
    date: string
    readTime: string
    tags: string[]
}

export interface Course {
    id: string
    title: string
    duration: string
    price: string
    schedule: string
    description: string
    basicSyllabus?: string[]
    advancedSyllabus?: Record<string, string[]>
    demoSessions?: string[]
    features?: string[]
    documentsRequired?: string[]
    paymentOptions?: string[]
}

// ============================================
// Contact & Form Types
// ============================================

export interface ContactFormData {
    firstName: string
    lastName?: string
    phone: string
    email?: string
    service: string
    preferredDate?: string
    message: string
}

export interface NewsletterFormData {
    email: string
}

export interface EnrollmentFormData {
    fullName: string
    phone: string
    email: string
    course: string
    experience: 'none' | 'beginner' | 'intermediate' | 'advanced'
    message?: string
}

// ============================================
// UI Component Types
// ============================================

export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg' | 'xl' | 'icon'

export type CardVariant = 'default' | 'elevated' | 'glass' | 'dark' | 'outline' | 'ghost'
export type CardPadding = 'none' | 'sm' | 'default' | 'lg'

export type AnimationVariant = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn'

// ============================================
// Navigation Types
// ============================================

export interface NavLink {
    name: string
    href: string
    description?: string
}

export interface BusinessInfo {
    name: string
    tagline: string
    description: string
    contact: {
        phone: string
        whatsapp: string
        email: string
    }
    address: string
    hours: {
        weekday: string
        weekend: string
    }
    social: {
        instagram: string
        facebook: string
        google: string
    }
}

// ============================================
// API Types
// ============================================

export interface ApiResponse<T = unknown> {
    ok: boolean
    data?: T
    error?: string
    message?: string
}

export interface FormState {
    success: boolean
    message: string
    errors?: Record<string, string>
}

// ============================================
// SEO & Metadata Types
// ============================================

export interface PageMetadata {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
}

// ============================================
// Hook Return Types
// ============================================

export interface ScrollPosition {
    scrollPosition: number
    scrollDirection: 'up' | 'down'
    isScrolled: boolean
}

export interface InViewState {
    ref: React.RefObject<HTMLElement | null>
    isInView: boolean
    hasAnimated: boolean
}

export interface WindowSize {
    width: number
    height: number
}
