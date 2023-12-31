/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily:{
      Quicksand:['Quicksand', 'sans-serif'],
      Montserrat:['Montserrat', 'sans-serif'],
      Inter:['Inter', 'sans-serif'],
    },
    
    fontSize: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      'st': '6px',
    },

    width: {
      '1400': '1400px',
      '1100': '1100px',
      '900': '900px',
      '800': '800px',
      '700': '700px',
      '500': '500px',
      '550': '550px',
      '200': '200px',
      '300': '300px',
      '340': '340px',
      '150': '150px',
      '100': '100px',
      '75': '75px',
      '250':'250px',
      '50': '50px',
      '350': '350px'
    },
    height: {
      '600': '600px',
      '520': '520px',
      '250':'250px',
      '75': '75px',
      '50': '50px',
      '550': '550px',
      '500': '500px',
      '150': '150px',
      '100': '100px',
      '200': '200px',
      '450': '450px',
      '440': '440px',
      '700': '700px',
      '150': '150px'
    },
  },
},
plugins: [],
}