/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,html}',
  ],
  daisyui: {
    themes: ["retro", "dark"],
    rtl: false,
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

