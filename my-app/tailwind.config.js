/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["montserrat", "sans-serif"],
    },
    // colors: {
    //   'peach': 'f4b393',
    //   'lightblue': '57b8ff',
    //   'lightgreen': 'afc97e',
    //   'medblue': '0b3954',
    // },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
