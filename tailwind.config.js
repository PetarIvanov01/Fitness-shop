/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class', '[data-mode="dark"]'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ["'Roboto'", 'sans-serif'],
            alegreya: ["'Alegreya Sans'", 'sans-serif'],
            inter: ["'Inter'", 'sans-serif'],
        },
        extend: {
            boxShadow: {
                inp2l: 'inset 0px -1px 2px 1px rgba(156,156,156,1)',
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: 0,
                    },
                },
                'slide-up': {
                    '0%': {
                        transform: 'translateX(-50%)',
                    },
                    '-50%': {
                        transform: 'translateX(0%)',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 1000ms forwards',
                'fade-out': 'fade-out 1000ms forwards',
                'slide-up': 'slide-up 1500ms forwards',
            },
            backgroundColor: {
                'gray-w': '#D9D9D9',
                'gray-s': '#C8C4C4',
            },
            colors: {
                'black-c': '#101314',
                'blue-c': '#36454F',
            },
            backgroundImage: {
                'fitnes-img': 'url(/src/assets/backgroundCompres-min.jpg)',
            },
        },
        screens: {
            'bil-s': '520px',
            s: '600px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            ml: '550px',
        },
    },
    plugins: [],
};
