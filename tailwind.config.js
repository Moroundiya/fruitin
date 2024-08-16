/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('/src/assets/images/hero-bg.jpg')"
      },
      fontFamily: {
        'lobster': ["Lobster", "sans-serif"],
        'lexend': ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}

