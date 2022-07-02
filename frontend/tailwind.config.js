/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        pink: "#F20D60",
        orange: "#FF3636",
        violet: "#8941FF",
        purple: {
          300: "#9A5CFF",
          500: "#3F29C7",
          700: "#291D71",
          900: "#140F34",
        },
        green: {
          100: "#E6FFD2",
          300: "#70FF00",
          500: "#59CA00",
        },
      },
    },
  },
  plugins: [],
};
