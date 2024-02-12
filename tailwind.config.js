/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "500px",
        md: "700px",
        lg: "1024px",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': 600,
        'bold': 500,
        'medium': 400,
        'regular': 300,
      },
      colors: {
        'dark-blue-50': '#f3f0ff',
        'dark-blue-100': '#eae4ff',
        'dark-blue-200': '#d7cdff',
        'dark-blue-300': '#bba5ff',
        'dark-blue-400': '#9a72ff',
        'dark-blue-500': '#7d3aff',
        'dark-blue-600': '#7112ff',
        'dark-blue-700': '#6301ff',
        'dark-blue-800': '#4f00cd',
        'dark-blue-900': '#4502b0',
        'dark-blue-950': '#280078',

        'purple-heart-50': '#faf3ff',
        'purple-heart-100': '#f3e3ff',
        'purple-heart-200': '#e9cbff',
        'purple-heart-300': '#d8a2ff',
        'purple-heart-400': '#c067ff',
        'purple-heart-500': '#a92fff',
        'purple-heart-600': '#9508ff',
        'purple-heart-700': '#8100f7',
        'purple-heart-800': '#7801da',
        'purple-heart-900': '#5b03a0',
        'purple-heart-950': '#3e007a',

        'persian-rose-50': '#fff0fb',
        'persian-rose-100': '#ffe3fa',
        'persian-rose-200': '#ffc6f5',
        'persian-rose-300': '#ff98eb',
        'persian-rose-400': '#ff58db',
        'persian-rose-500': '#ff27c8',
        'persian-rose-600': '#ff00a9',
        'persian-rose-700': '#df0088',
        'persian-rose-800': '#b80070',
        'persian-rose-900': '#980360',
        'persian-rose-950': '#5f0036',
      }, // Add a comma here
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    require('tailwindcss-font-inter')(),
  ]
}

