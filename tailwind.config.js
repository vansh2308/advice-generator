/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dblue: "#202632",
        blue: "#313a49",
        turq: "#53ffaa",
        white: "#cadde5",
      
      }
    },
  },
  plugins: [],
}

