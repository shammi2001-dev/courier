/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      fontFamily:{
      'ox': ['Oxanium', 'cursive']
      }
    },
  },
  plugins: [],
}


