/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenLigth: "#BDE2CC",
        redDark: "#ED735C",
        grayLigth: "#6F757B",
        yellowLigth: "#F6C768",
        grayDark: "#1C1D1F",
        blackDark: "#121315",
        grayHover: "#6E757D"
      },
    },
  },
  plugins: [],
};
