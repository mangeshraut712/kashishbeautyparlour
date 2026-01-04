import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with Tailwind merge support
 * Modern utility for conditional class composition
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Format currency in Indian Rupees
 */
export function formatPrice(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount)
}

/**
 * Format date in Indian locale
 */
export function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'long',
    }).format(new Date(date))
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null
    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== 'undefined'

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
    if (!isClient) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
    return Math.random().toString(36).substring(2, 9)
}

/**
 * Truncate text with ellipsis
 */
export function truncate(str: string, length: number): string {
    if (str.length <= length) return str
    return str.slice(0, length) + '...'
}

/**
 * Create absolute URL for metadata
 */
export function absoluteUrl(path: string): string {
    return `${process.env.NEXT_PUBLIC_APP_URL || 'https://kashishbeautyparlour.com'}${path}`
}
