/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4A90E2', // A welcoming blue
        'brand-secondary': '#F5A623', // A warm, friendly orange
        'brand-dark': '#2C3E50',    // A softer, more modern black
        'brand-light': '#ECF0F1',   // A clean, light gray background
        'brand-accent': '#E74C3C',  // A vibrant red for alerts or important actions
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // A clean, modern, and highly readable font
      },
    },
  },
  plugins: [],
};