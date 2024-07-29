/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      screens:{
        'custom-300':'300px',
      }
    },
  },
  
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
      },
 
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],

    fontSize: ["responsive", "hover"],
  },

  plugins: [],
};
