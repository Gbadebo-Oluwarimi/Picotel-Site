/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:['Nunito'],
        poppins:['Poppins'],
        comforta:['Comfortaa']
      },
      colors:{
        darkgreen: '#132F05',
      }
    },
  },
  plugins: [],
}
