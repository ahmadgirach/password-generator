/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['AR One Sans', 'sans-serif']
      },
      colors: {
        darkPrimary: '#08162b',
        darkSecondary: '#94A3B8'
      }
    },
  },
  plugins: [],
};
