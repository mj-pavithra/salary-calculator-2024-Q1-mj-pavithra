/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '4': '4 4 0%',
        '3': '3 3 0%',
      }
    },
  },
  plugins: [],
}
