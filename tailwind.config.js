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
        darkenBlack: "#211F20",
        whitenBlack: "#44403F",
        newGray: "#494544",
        darkenGrayGrenn: "#699670",
      },
      fontSize: {
        67: "67px",
        13: "13px",
        22: "22px",
        15: "15px",
        25: "25px",
      },
      screens: {
        1600: "1600px",
        400: "400px",
      },
      borderWidth: {
        "05": "0.5px",
      },
      height: {
        2000: "2000px",
        400: "500px",
      },
    },
  },
  plugins: [],
};
