/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          warm: '#FFFFFF',
        },
        blue: {
          dark: '#0B0D17',
          light: '#D0D6F9',
        },
      },
      fontFamily: {
        Bellefair: ['Bellefair', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
