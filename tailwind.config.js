/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/*/src/**/*.{html,ts,tsx,js,jsx}",
    "./libs/*/src/**/*.{html,ts,tsx,js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}