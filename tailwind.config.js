/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: '14px'
      },
    },
    screens: {
      xs: "480px",
      ss: "568px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};