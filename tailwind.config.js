/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "btn-primary": "#E76F51",
        "warm-coral-transparent": "#E76F511A",
        "blue-primary": "#23A6F0",
        "dark-gray": "#6C6C6C",
        "light-gray": "#7E848C",
        "charcoal-black": "#383838",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
