/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js"],
  theme: {
    screens: {
      md: "550px",
      hm: { raw: "(max-height:420px)" }
    },

    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      custom: ["Manrope", "sans-serif"]
    },
    fontWeight: {
      bold: 800
    },
    extend: {
      colors: {
        light_cyan: "hsl(193, 38%, 86%)",
        neon_green: "hsl(150, 100%, 66%)",
        grayish_blue: "hsl(217, 19%, 38%)",
        darkgrayish_blue: "hsl(217, 19%, 24%)",
        dark_blue: "hsl(218, 23%, 16%)"
      }
    }
  },
  plugins: []
};
