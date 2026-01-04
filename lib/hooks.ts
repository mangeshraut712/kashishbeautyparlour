'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { logger } from './logger'

/**
 * Custom hook for handling media queries
 * Modern responsive design pattern
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        setMatches(media.matches)

        const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
    }, [query])

    return matches
}

/**
 * Hook for detecting scroll position
 */
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
    const lastScrollY = useRef(0)

    useEffect(() => {
        const updatePosition = () => {
            const currentScrollY = window.scrollY
            setScrollPosition(currentScrollY)
            setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up')
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', updatePosition, { passive: true })
        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return { scrollPosition, scrollDirection, isScrolled: scrollPosition > 50 }
}

/**
 * Hook for intersection observer
 * Perfect for scroll-triggered animations
 */
export function useInView(options?: IntersectionObserverInit) {
    const [isInView, setIsInView] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                setHasAnimated(true)
            } else {
                setIsInView(false)
            }
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
            ...options,
        })

        observer.observe(element)
        return () => observer.disconnect()
    }, [options])

    return { ref, isInView, hasAnimated }
}

/**
 * Hook for local storage with SSR support
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue)

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) {
                setStoredValue(JSON.parse(item))
            }
        } catch (error) {
            logger.error('Error reading from localStorage:', error)
        }
    }, [key])

    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            logger.error('Error saving to localStorage:', error)
        }
    }, [key, storedValue])

    return [storedValue, setValue] as const
}

/**
 * Hook for debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}

/**
 * Hook for detecting if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const listener = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches)
        }

        mediaQuery.addEventListener('change', listener)
        return () => mediaQuery.removeEventListener('change', listener)
    }, [])

    return prefersReducedMotion
}

/**
 * Hook for click outside detection
 */
export function useClickOutside<T extends HTMLElement>(
    callback: () => void
): React.RefObject<T | null> {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [callback])

    return ref
}

/**
 * Hook for keyboard shortcuts
 */
export function useKeyboardShortcut(
    key: string,
    callback: () => void,
    modifiers: { ctrl?: boolean; shift?: boolean; alt?: boolean } = {}
) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key.toLowerCase() === key.toLowerCase() &&
                (!modifiers.ctrl || event.ctrlKey || event.metaKey) &&
                (!modifiers.shift || event.shiftKey) &&
                (!modifiers.alt || event.altKey)
            ) {
                event.preventDefault()
                callback()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [key, callback, modifiers])
}

/**
 * Hook for window size
 */
export function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}

/**
 * Hook for online/offline status
 */
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        setIsOnline(navigator.onLine)

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return isOnline
}
