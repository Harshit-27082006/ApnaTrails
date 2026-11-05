/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trail: {
          50: '#fdf7f3',
          100: '#faeee3',
          200: '#f5dcce',
          300: '#ecc0a9',
          400: '#de9976',
          500: '#cf6c41', // warm terracotta
          600: '#c05731',
          700: '#9f4226',
          800: '#813723',
          900: '#693021',
          950: '#38160e',
        },
        ochre: {
          50: '#fefbf3',
          100: '#fbf5dc',
          200: '#f6e9b3',
          300: '#efd581',
          400: '#e6be4e',
          500: '#d7a126',
          600: '#ba7d1c',
          700: '#945b19',
          800: '#79471b',
          900: '#663b1b',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e7ede6',
          200: '#d0ddd0',
          300: '#adc4ac',
          400: '#84a583',
          500: '#658964',
          600: '#4f6e4e',
          700: '#3f563e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -2px rgba(105, 48, 33, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 32px -4px rgba(105, 48, 33, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
