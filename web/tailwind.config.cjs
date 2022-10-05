/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '40px'],
      '3xl': ['48px', '56px'],
    },
    extend: {
      colors: {
        black: '#0b0e16',
        white: '#f4f6ff',
        red: {
          300: '#bb2e57',
          500: '#af053f',
          700: '#300219',
        },
        gray: {
          300: '#b1b4bd',
          500: '#91949d',
          700: '#696c74',
        }
      }
    },
  },
  plugins: [],
}
