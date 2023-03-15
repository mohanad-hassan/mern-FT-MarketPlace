/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{primary:"#40513B"}
    },
  },
  plugins: [],
  // to not have issues with other frontend frameworks .
  corePlugins:{preflight:false}
}