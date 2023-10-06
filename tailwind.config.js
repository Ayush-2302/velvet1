/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [ require("tw-elements/dist/plugin.cjs")],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
};
