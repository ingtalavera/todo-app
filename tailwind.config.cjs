/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(220, 98%, 61%)',
        check: {
          start: 'hsl(192, 100%, 67%)',
          end: 'hsl(280, 87%, 65%)',
        },
        light: {
          'very-gray': 'hsl(0, 0%, 98%)',
          'very-grayish-blue': 'hsl(236, 33%, 92%)',
          'grayish-blue': 'hsl(233, 11%, 84%)',
          'dark-grayish-blue': 'hsl(236, 9%, 61%)',
          'very-dark-grayish-blue': 'hsl(235, 19%, 35%)'
        },
        dark: {
          'very-blue': 'hsl(235, 21%, 11%)',
          'very-desaturated-blue': 'hsl(235, 24%, 19%)',
          'light-grayish-blue': 'hsl(234, 39%, 85%)',
          'ligth-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'grayish-blue': 'hsl(234, 11%, 52%)',
          'very-grayish-blue': 'hsl(233, 14%, 35%)',
          'very-grayish-blie-hover': 'hsl(237, 14%, 26%)',
        }
      }
    },
  },
  plugins: [],
}
