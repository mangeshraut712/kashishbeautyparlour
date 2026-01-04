'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('kashish-theme') as Theme | null
        if (savedTheme) {
            setThemeState(savedTheme)
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setThemeState('dark')
        }
    }, [])

    useEffect(() => {
        if (mounted) {
            // Apply theme to document
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(theme)
            localStorage.setItem('kashish-theme', theme)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setThemeState(prev => prev === 'light' ? 'dark' : 'light')
    }

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
    }

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return <>{children}</>
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
