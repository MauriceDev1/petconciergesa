/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'powder-blue': '#cee5f2',
        'light-blue': '#accbe1',
        'gray-blue': '#7c98b3',
        'gray-me': '#637081',
        'blue-gray': '#536b78',
      },
    },
  },
  plugins: [],
}
