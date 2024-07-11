/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  
        'xs': '375px',
        'xmd' : '425px',
        'md' : '768px',
        'lg' : '1024px',
        '2lg' : '1440px',
      },
    },
  },
  plugins: [],
}