/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#a35a51',
        'secondary-color-dark': '#1a1a1a',
        'background-color': '#211F1F',
        'surface-color': '#2d2a2a',
        'text-color': '#e0e0e0',
        'heading-color': '#ffffff',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
