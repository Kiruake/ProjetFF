/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { 


    
    fontFamily: {
    sans: ['Montserrat', 'sans-serif'],
    },

          extend: {
              dropShadow: {
              '3xl': '0 -2px 4px rgba(0, 0, 0, 0.26)',
                           },
                           colors: {

      'tahiti' : {
        100: 'rgba(64, 130, 243, 1)',
        200: 'rgba(46, 93, 145, 1)'
      },
    },
    }
  },
  plugins: []
}
