/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        basegreen: '#435327',
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        shadow: ["Shadow", 'sans-serif'],
        sans: ["Open Sans", 'sans-serif']
      },
    },
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},  
      },
  },
  plugins: [],
}

