/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        purple: '#391c84',
        pink: '#801f8b',
        gray50: '#fefefe',
        gray200: '#6A6A6A',
        gray300: '#34353a',
        red500: '#F84F4F',
        golden: '#F9AE3F',
        cyan: '#3CD4F5',
        parrotGreen: '#75DE73'
      }
    },
  },
  plugins: [],
};
