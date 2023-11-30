/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/html/utils/withMT');
module.exports = withMT({
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5eead4',
        dark: '#0f172a',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        hallo: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
});
