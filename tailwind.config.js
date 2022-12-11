const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['var(--antonio-font)', ...fontFamily.sans],
        ibm: ['var(--ibmSans-font)', ...fontFamily.sans],
        cooper: ['var(--cooper-font)', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};
