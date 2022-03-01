const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const primary = colors.orange;
const secondary = colors.pink;
const info = colors.sky;
const warning = colors.amber;
const success = colors.emerald;
const error = colors.red;
const orange = colors.orange;

module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary,
        orange,
        secondary,
        info,
        warning,
        success,
        error,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
