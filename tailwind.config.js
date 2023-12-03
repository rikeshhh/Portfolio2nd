/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Lato": ['Lato', 'sans-serif'],
      'Manrope': ['Manrope', 'sans-serif'],
      "Poppins": ['Poppins', 'sans-serif']
    },
    fontWeight:{
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      color:{
        'dark-blue':'#2E2E47',
        'light-blue':'#3C3C5B',
        },
        padding:{
          '96px':'96px',
          '132px':'132px',
        }
    },
  },
  plugins: [],
}