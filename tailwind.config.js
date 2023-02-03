/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        sidebar: {
          '0%': { opacity: 0 },
          '50%, 100%': { opacity: 1 },
        },
      },
      animation: {
        sidebar: 'sidebar 300ms ease-in-out ',
      },
    },
    colors: {
      primary: colors.slate[900],
      white: colors.slate[100],
      emerald: colors.emerald[400],
      cyan: colors.cyan[900],
      accentText: colors.cyan[300],
      transparent: colors.transparent,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
