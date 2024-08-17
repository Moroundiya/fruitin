/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': "url('/src/assets/images/hero-bg.jpg')",
        'aboutBg': "url('/src/assets/images/about_underlay.png')",
        'orangeUnderlay': "url('/src/assets/images/hero_shape_2_1.png')"
      },
      fontFamily: {
        'lobster': ["Lobster", "sans-serif"],
        'lexend': ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}

