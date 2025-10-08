import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',       // Golden
        secondary: '#FFB6C1',     // Light Pink
        accent: '#800020',        // Burgundy
        background: '#FFFFFF',    // White
        foreground: '#2C3E50',    // Dark Blue Gray
        muted: '#F8F9FA',         // Light Gray
        'muted-foreground': '#6B7280', // Medium Gray
        border: '#E5E7EB',        // Light Border
      },

      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #D4AF37, #B9941F)',
        'gradient-secondary': 'linear-gradient(to right, #FFB6C1, #FF8FA3)',
      },
    },
  },

  plugins: [],
}
export default config
