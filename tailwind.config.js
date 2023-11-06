/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors: {
        'gray-100': '#181818',
        'gray-200': '#2c2c2c',
        'gray-300': '#424242',
        'gray-400': '#575757',
        'gray-500': '#6b6b6b',
        'gray-600': '#7f7f7f',
        'gray-700': '#939393',
        'gray-800': '#a7a7a7',
        'gray-900': '#bcbcbc',
        'yellow': '#fed100',
        'yellow-bright': '#ffde4c', // Eine leicht brillantere Version für Hover-Effekte
        'yellow-muted': '#b3a180', // Eine abgedunkelte Version für deaktivierte Buttons
     
      },
    },
  },
  plugins: [
    require('preline/plugin'),  ],
}
