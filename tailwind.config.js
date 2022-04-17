module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainColor: "#407899",
        altColor: "#010D49",
        lightColor: "#AFAFAF",
        bodyBg: "#FAFAFA",
      },
      backgroundImage: {
        sliderPattern:
          "linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('/images/pic4.jpg')",
      },
    },
  },
  plugins: [],
};
