/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      xbr: ["xbr"],
      marola:["marola"],
      kuusino:["kuusino"],
      consolas:["Consolas"],
    },
    maxHeight: {
      page: '700px',
      header: '85px',
    },
    extend: {},
  },
  plugins: [],
}