/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#fbf7f2",
        200: "#f6efe5",
        300: "#f2e8d8",
        400: "#ede0cb",
        500: "#e9d8be",
        600: "#baad98",
        700: "#8c8272",
        800: "#5d564c",
        900: "#2f2b26",
      },
    },
    extend: {},
  },
  plugins: [],
};
