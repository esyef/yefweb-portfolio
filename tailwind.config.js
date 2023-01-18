/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: colors.slate[900],
      white: colors.slate[100],
      emerald: colors.emerald[400],
    },
    container: {
      centter: true,
    },
  },
  plugins: [],
};
