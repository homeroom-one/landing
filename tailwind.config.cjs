/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: '#99b1b6',
          200: '#869ea8',
          300: '#73889a',
          400: '#60728b',
          500: '#4d5a7d',
          600: '#3a426e',
          700: '#282860',
          800: '#1d1551',
          900: '#140342'
        },
        dusk: {
          100: '#abfeff',
          200: '#9deeff',
          300: '#8edbff',
          400: '#80c3ff',
          500: '#73a7ff',
          600: '#6689ff',
          700: '#5967ff',
          800: '#564cfe',
          900: '#6440fb'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
