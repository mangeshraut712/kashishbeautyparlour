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
        primary: '#D4AF37',
        secondary: '#FFB6C1',
        accent: '#800020',
        background: '#FFFFFF',
        text: '#2C3E50',
        muted: '#F8F9FA',
        border: '#E5E7EB',
      },

      borderColor: {
        DEFAULT: '#E5E7EB',
        border: '#E5E7EB',
      },

      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
