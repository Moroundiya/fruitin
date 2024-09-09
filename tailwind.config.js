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
        'orangeUnderlay': "url('/src/assets/images/hero_shape_2_1.png')",
        'cardBg': "url('/src/assets/images/card-bg.png')",
        'circleBg': "url('/src/assets/images/circle-bg.png')",
        'counterBg': "url('/src/assets/images/counter-bg.png')",
        'processBg': "url('/src/assets/images/process_box_1.jpg')",
        'faqBg': "url('/src/assets/images/faq_bg_1.png')",
        'faqVectorBg': "url('/src/assets/images/faq_vector.png')",
        'testiBg': "url('/src/assets/images/testi_bg.png')",
        'subFooterBg': "url('/src/assets/images/copyright_bg_1.png')"

      },
      fontFamily: {
        'lobster': ["Lobster", "sans-serif"],
        'lexend': ["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}

