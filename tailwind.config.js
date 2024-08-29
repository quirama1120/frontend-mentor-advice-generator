/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/js/index.js"],
  theme: {
    extend: {
      fontSize: {
        'quote': '28px',
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
