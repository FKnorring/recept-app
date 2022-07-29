/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FFE0B2",
      accent: "#FEE361",
      bg: "#FBFAF3",
      neut: "#808080",
      secondary: "#26A69A",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
