/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandColor: '#002454',
      },
      keyframes: {
        'gradient-flow': {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '0% center' },
        }
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s linear infinite',
      },
    },
  },
  plugins: [],
}