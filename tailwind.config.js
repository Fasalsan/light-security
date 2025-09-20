/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#F87171', // red-400
        secondary: '#60A5FA', // blue-400
      },
      keyframes: {
        textColor: {
          '0%, 100%': { color: '#F87171' }, // red
          '50%': { color: '#60A5FA' }, // blue
        },
      },
      animation: {
        textColor: 'textColor 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
