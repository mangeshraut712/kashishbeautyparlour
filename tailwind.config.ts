import type { Config } from 'tailwindcss'

const config: Config = {
  // Enable dark mode via class (required for next-themes)
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',       // Golden
          light: '#F4DF4E',        // Bright Gold
          dark: '#B8860B',         // Dark Goldenrod
        },
        secondary: {
          DEFAULT: '#FFB6C1',      // Light Pink
          light: '#FFF0F5',       // Lavender Blush
          dark: '#FF69B4',        // Hot Pink
        },
        accent: {
          DEFAULT: '#800020',      // Burgundy
          light: '#A52A2A',       // Brown
          dark: '#4A0000',        // Deep Maroon
        },
        luxury: {
          gold: '#D4AF37',
          silk: '#F5F5DC',
          cream: '#FFFDD0',
          dark: '#1A1A1A',
        },
        background: '#FFFFFF',    // White
        foreground: '#1A1A1A',    // Near Black
        muted: '#F8F9FA',         // Light Gray
        'muted-foreground': '#6B7280', // Medium Gray
        border: '#E5E7EB',        // Light Border
      },

      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4DF4E 50%, #B8860B 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
    },
  },

  plugins: [],
}
export default config

