/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      xbr: ["xbr"],
      marola:["marola"],
      kuusino:["kuusino"]
    },
    maxHeight: {
      page: '710px',
    },
    extend: {},
  },
  plugins: [],
}