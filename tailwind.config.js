/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F7F3',
        ink: '#2E3438',
        nordic: '#5E7F94',
        mist: '#EDF2F4',
        line: '#DADBD6',
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(46, 52, 56, 0.10)',
      },
    },
  },
  plugins: [],
}
