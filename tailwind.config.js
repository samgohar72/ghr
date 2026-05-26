/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          silver: '#A8A8A8',
          'silver-light': '#D4D4D4',
          'silver-dark': '#707070',
        },
        border: '#D4D4D4',
        input: '#D4D4D4',
        ring: '#0A0A0A',
        background: '#FFFFFF',
        foreground: '#0A0A0A',
        primary: {
          DEFAULT: '#0A0A0A',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          foreground: '#0A0A0A'
        },
        muted: {
          DEFAULT: '#D4D4D4',
          foreground: '#707070'
        },
        accent: {
          DEFAULT: '#A8A8A8',
          foreground: '#0A0A0A'
        },
      },
      borderRadius: {
        lg: '4px',
        md: '2px',
        sm: '2px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}