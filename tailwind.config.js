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
        primary: ['Telex', 'sans-serif']
      },
      colors: {
        darkPrimary: '#0a192f',
        darkSecondary: '#8892b0'
      }
    },
  },
  plugins: [],
};
