/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        first: '#5eead4',
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
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
