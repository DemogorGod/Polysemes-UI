/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#283d3b', // Outer Space
        secondary: '#772e25', // Liver
        primary2: '#197278', // Blue Sapphire
        secondary2: '#c44536', // Watermelon Red
        silver: '#c9c9c9', // Chinese Silver
        pink: '#EEB3AC', // Champagne Pink
        white: '#f1f5f4', // Anti-Flash White
        brown: '#edddd4', // Champagne Pink
        black: '#242424', // Raisin Black 
        grey: '#c2b6b6', // Black Shadows
      }
    },
  },
  plugins: [],
}