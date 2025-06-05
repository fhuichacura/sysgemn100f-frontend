/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        card: "#1e293b",
        primary: "#3b82f6",
        accent: "#38bdf8",
      },
    },
  },
  plugins: [],
}