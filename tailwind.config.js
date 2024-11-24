/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: 'rgb(72, 46, 46)',
        'mint-green': 'rgba(119, 255, 139, 58%)',
        'bright-yellow': 'rgba(255, 217, 0, 58%)',
        peach: 'rgba(255, 119, 119,58%)',
        'light-purple': 'rgba(162, 141, 209, 26%)',
        'medium-purple': 'rgba(85, 0, 255, 10%)',
        'strong-purple': 'rgba(0, 4, 255, 34%)'
      },
      fontFamily: {
        quicksand: ["Quicksand", 'sans-serif'],
        poppins: [ "Poppins", 'sans-serif'],
        'nova-slim': ["Nova Slim", 'system-ui'],
        'alumini-sans': ["Alumni Sans", 'sans-serif']
      },
      boxShadow: {
        'elevation-1': '0px 4px 37px 0px rgba(0, 0, 0, 0.25)',
        'elevation-2': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      backgroundPosition: {
        'right-blob-position': '108% 100%'
      }
    },
  },
  plugins: [],
}

