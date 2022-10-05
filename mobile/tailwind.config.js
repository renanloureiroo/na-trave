/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red1: "#300219",
          red2: "#AF053F",
          red3: "#BB2E57",

          black1: "#0B0E16",

          grey1: "#696C74",
          grey2: "#91949D",
          gray3: "#B1B4BD",

          white1: "#F4F6FF",
        },
      },
    },
  },
  plugins: [],
};
