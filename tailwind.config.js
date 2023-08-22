/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3c7671",
        secondary: "#f6cfa2",
        info: "#00425A",
      },
    },
    fontFamily: {
      Poppins_400: "Poppins_400Regular",
      Poppins_500: "Poppins_500Medium",
      Poppins_600: "Poppins_600SemiBold",
      Poppins_700: "Poppins_700Bold",
    },
  },
  plugins: [],
}

