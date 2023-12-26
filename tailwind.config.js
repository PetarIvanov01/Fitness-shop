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
      keyframes: {
        'fade-in': {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        'fade-out': {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        },
        'slide-up': {
          "0%": {
            transform: "translateX(-50%)"
          },
          "-50%": {
            transform: "translateX(0%)"
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1000ms forwards' ,
        'fade-out': 'fade-out 1000ms forwards',
        'slide-up': 'slide-up 1500ms forwards',
      },
      colors: {
        'black-c': '#101314',
        'blue-c': '#36454F'
      },
      backgroundImage: {
        'fitnes-img': "url('/src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}

