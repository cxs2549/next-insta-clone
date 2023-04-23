/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "496px",
        lg: "1160px",
        xl: "1266px"
      },
      boxShadow: {
        ring: "0 0 0 3px #fff, 0 0 0 5px #FF462D",
      },
    },
  },
  plugins: [],
}
