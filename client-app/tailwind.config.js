module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      backgroundImage: {
        homefrontbg: "url(./assets/home/front_world.png)",
        "quiz-bg": "url(./assets/home/quiz_bg.png)",
      },
      colors: {
        "button-primary": "#1b5785",
        "button-primary-hover": "#062b47",
      },
    },
  },
  plugins: [],
};