/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            fontSize: {
                base: '16px',
            },
            lineHeight: {
                normal: '1.4',
            },
            colors: {
                text: '#0b0c0f',
                background: '#fbfcfd',
                primary: '#4a6ebe',
                secondary: '#97b0e7',
                accent: '#5e8aeb',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                merriweather: ['Merriweather', 'serif'],
            },
        },
    },
    plugins: [],
};
