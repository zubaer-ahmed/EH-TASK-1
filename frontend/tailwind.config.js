/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#0066FF',
        'blue-hover': '#0096FF',
        'white': '#F5F9FF',
        'red': '#E53E3E',
        'black': '#171717'
      },
    },
  },
  plugins: [],
};
