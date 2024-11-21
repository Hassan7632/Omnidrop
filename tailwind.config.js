/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens:{
        xsm:"400px"
      },
      fontFamily:{
        Chillax:["Chillax,sans-serif"],
        plex:["IBM PLEX MONO,sans-serif"],
      },
    },
  },
  plugins: [],
}

