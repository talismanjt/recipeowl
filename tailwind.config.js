/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
    colors: {
      primary: "#3E3F29",
      secondary: {
        100: "#2E2F23",
        200: "#7D8D86",
        300: "#BCA88D",
        350: "#C8C4A6",
        390: "#E5E3D1",
        400: "#F1F0E4",
      },
      success: {
        100: "#F0FFF4",
        200: "#C6F6D5",
        300: "#9AE6B4",
        400: "#68D391",
        500: "#38A169",
        600: "#2F855A",
        700: "#276749",
        800: "#22543D",
        900: "#1C4532",
      },
      danger: {
        100: "#FFF5F5",
        200: "#FED7D7",
        300: "#FEB2B2",
        400: "#FC8181",
        500: "#F56565",
        600: "#E53E3E",
        700: "#C53030",
        800: "#9B2C2C",
        900: "#742A2A",
      },
      warning: {
        100: "#FFFBEB",
        200: "#FEF3C7",
        300: "#FDE68A",
        400: "#FACC15",
        500: "#EAB308",
        600: "#CA8A04",
        700: "#A16207",
        800: "#854D0E",
        900: "#713F12",
      },
    },
  },
  plugins: [],
};
