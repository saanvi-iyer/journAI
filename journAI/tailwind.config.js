/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#D0D1FF',
        'purple-plum': '#6648DB',
        'deep-blue':'#0F2851',
        'water':'#A3EDF2',
        'alert':'#FE8A8A',
        'violet-light':"#D0D1FF",
        'dust-grey':'#B0B2C3',
        'lilac-petals':'#F0F1F9',
      },
    },
    
  },
  plugins: [],
}