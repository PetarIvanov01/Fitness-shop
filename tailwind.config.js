/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Roboto","sans-serif"'],
    },
    extend: {
      colors: {
        'black-c': '#101314',
        'blue-c': '#36454F'
      },
      backgroundImage: {
        'fitnes-img': "url('./src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}

