module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "#EFA451",
        blue: "#013BBA",
        lb: "#2a5fd4",
        grey: "#7587A4",
        offwhite: "#FAF9F6",
        redish: "#EF4A37",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cambria: ["Cambria", "serif"],
      },
      fontweight: {
        extrabold: 800,
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#DAF7FF",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/Smq2X7B/background.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
