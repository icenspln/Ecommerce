/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitish: "#FBFBFB",
        redish: "#DE1F4D",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, auto))",
      },
      fontFamily: {
        display: "Dancing Script",
      },
    },
  },
  plugins: [],
};
