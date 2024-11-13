/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bubbles: "#E7F5FD",
        water: "#CAECFF",
        "bleu-de-france": "#2D9CDB",
        "vivid-cerulean": "#0099EE",
        "medium-aquamarine": "#56E4A0",
        "pastel-red": "#F36868",
        secondary: "#B2C5D4",
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
});
