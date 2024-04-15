



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#A1A3F6',
        'purple-plum': '#6648DB',
        'deep-blue':'#0F2851',
        'water':'#A3EDF2',
        'alert':'#FE8A8A',
        'violet-light':"#D0D1FF",
        'dust-grey':'#B0B2C3',
        'lilac-petals':'#E4E7FF',
      },
    },
    
  },
  plugins: [],
}