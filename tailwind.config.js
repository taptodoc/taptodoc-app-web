/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: { "100": "#e3e3e3", "200": "#d8dadc", "300": "#d9d9d9" },
        gray: {
          "100": "#7b7b7b",
          "200": "#221f1f",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        dimgray: "#676767",
        white: "#fff",
        whitesmoke: { "100": "#f6f6f2", "200": "#f2f2f2" },
        midnightblue: { "100": "#371777", "200": "#211572" },
        mediumblue: "#2934ff",
        darkgray: "#a1a1a1",
        honeydew: "#c2edce",
        "black-200": "#ddd",
        red: "#ff0000",
        aliceblue: "#dfeef4",
        darkslategray: "#333",
      },
      fontFamily: {
        inter: "Inter",
        "radio-canada": "'Radio Canada'",
        "be-vietnam-pro": "'Be Vietnam Pro'",
        roboto: "Roboto",
        normal: "Mulish",
        lato: "Lato",
        podkova: "Podkova",
      },
      borderRadius: { small: "10px", base: "20px", large: "40px" },
    },
    fontSize: {
      base: "14px",
      lg: "15px",
      xl: "16px",
      "2xl": "17px",
      "3xl": "20px",
      "4xl": "24px",
      "5xl": "84px",
    },
  },
  corePlugins: { preflight: false },
};
