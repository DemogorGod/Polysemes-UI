module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#283D3B',
        'primary-2': '#197278',
        'secondary': '#772E25',
        'secondary-2': '#C44536',
        'background': '#EDDDD4',
        'grey': '#C9C9C9',
      },
      fontFamily: {
        'display': ['Avenir',],
        'body': ['"Open Sans"'],
      }

    },
  },
  plugins: [],
}