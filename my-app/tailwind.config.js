/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["nunito", "sans-serif"],
      marker: ["satisfy", "cursive"],
      heading: ["open sans", "sans,serif"],
    },
    // colors: {
    //   'peach': 'f4b393',
    //   'lightblue': '57b8ff',
    //   'lightgreen': 'afc97e',
    //   'medblue': '0b3954',
    // },
    extend: {
      keyframes: {
        wave: {
          "0%": {
            "margin-left": "-50%",
          },
          "50%": {
            "margin-right": "-75%",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        slide: {
          "0%": {
            "margin-right": "-75%",
          },
          "50%": {
            "margin-left": "-50%",
          },
        },
      },
    },
    animation: {
      wave: "wave 3s ease-in-out 1",
      bounce: "bounce 1s infinite",
      slide: "slide ease-out 1.5s 1",
    },
  },
  plugins: [require("flowbite/plugin")],
};
