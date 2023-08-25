/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{astro,ts,tsx}',
    './components/**/*.{astro,ts,tsx}',
    './app/**/*.{astro,ts,tsx}',
    './src/**/*.{astro,ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "800px",
      },
    },
    extend: {}
  },
  plugins: [require("tailwindcss-animate")],
}