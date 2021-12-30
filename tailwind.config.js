const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#00D1C1",
      },
    },
  },
  plugins: [],
};
