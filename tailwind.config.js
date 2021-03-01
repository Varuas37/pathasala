const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,


        cardBorderDark:"#162044",
        darkblue: "#070E27",
        lightTheme:"#F4F7FF",
        accentPink:"#DE6164",
        accentBlue:"#082E63",
        blueshade:"#131C45",
        hoverblue:"#162144",
        skyblue:"#60A5FA",
        darkerBlue:"#0059f7"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
