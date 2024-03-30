/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        perfectGray: "#403C3B",
        graygreen: "#618967",
        focusGray: "#504B4A",
        gray: "#CFCFCF",
      },
      fontSize: {
        67: "67px",
      },
      screens: {
        1600: "1600px",
      },
    },
  },
  plugins: [],
};
