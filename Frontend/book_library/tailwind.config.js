// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-multi': 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
],
}

