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
        'subFooterBg': "url('/src/assets/images/copyright_bg_1.png')",
        'aboutUsBg': "url('/src/assets/images/about_us_bg.png')"

      },
      fontFamily: {
        'lobster': ["Lobster", "sans-serif"],
        'lexend': ["Lexend", "sans-serif"]
      },
      keyframes: {
        move: {
          '0%': { left: '0' },
          '100%': { left: '-100px' },
        }
      },
      animation: {
        'spin-slow': 'spin 7.8s linear infinite',
        'moveAni': 'move 5s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [],
}

