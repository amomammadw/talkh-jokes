/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./modules/**/*.{js,vue,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "8px",
    },
  },
  plugins: [],
};
