/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chocolate: '#482E2E',
        'mint-green': '#77FF8B',
        'bright-yellow': '#FFD900',
        peach: '#FF7777',
        'light-purple': '#A28DD1',
        'medium-purple': '#5500FF',
        'strong-purple': '#0004FF'
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
      }
    },
  },
  plugins: [],
}

