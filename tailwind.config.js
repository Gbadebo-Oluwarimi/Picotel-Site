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
        comforta:['Comfortaa'],
        mulish:['Mulish']
      },
      colors:{
        darkgreen: '#132F05',
        lightgreen:'#2E5737',
        lightergreen:'#8AEFA1',
      },
      height:{
        hg:"20rem",
      },
      maxWidth:{
        mx:'64rem'
      },
      padding:{
        max:'9rem'
      },
      lineHeight:{
        space:"3.75rem",
        minispace:"2.4rem"
      }
    },
  },
  plugins: [],
}
