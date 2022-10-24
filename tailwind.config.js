/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    rotate: {
      '-180': '-180deg',
       '-90': '-90deg',
      '-45': '-45deg',
       '0': '0',
       '45': '45deg',
       '90': '90deg',
      '135': '135deg',
       '180': '180deg',
      '270': '270deg',
     },
    extend: {
      colors: {
        primary:'#0a2540',
        accentColor: '#00d4ff'
      },
      scale: {
        '160':'2',
        '175': '3',
      },
      skew: {
        '25': '25deg',
        '60': '60deg',
        '-22':'-25deg'
       },
       rotate: {
        '12':'12deg',
        '5': '6deg'
       }
    },
  },
  plugins: [],
}
