/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      rotate: {
        '0': '0deg',
        '30': '30deg',
        '60': '60deg',
        '90': '90deg',
        '120': '120deg',
        '135': '135deg',
        '150': '150deg',
        '180': '180deg',
        '210': '210deg',
        '240': '240deg',
        '270': '270deg',
        '300': '300deg',
        '330': '330deg',
        '360': '360deg',
      }
    },
  },
  plugins: [],
}

