/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    '*.js',
    '*.html'
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'768px'},
      'laptop': {'min':'770px'}      
    },
    fontFamily:{
      'jakarta':['Plus Jakarta Sans', 'sans-serif']
    },
    colors:{
      'carnation': '#f65351',
      'cat-blue': '#0A317B',
      'polar':'#f7fafd',
      'white': '#fff',
      'link-water': '#e5effa',
      'botticelli':'#dde7ee',
      'gull-gray': '#939dae',
      'shuttle-gray': '#5e6778',
      'ebony-clay':'#1c202b',
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children", "&>*")
    })
  ],
}

