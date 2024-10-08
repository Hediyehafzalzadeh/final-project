/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif , f1' // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

