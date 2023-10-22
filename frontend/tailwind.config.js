/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#0066FF',
        'blue-hover': '#0096FF',
        'white': '#FFFFFF',
        'red': '#E53E3E',
        'black': '#171717',
        'gray-500': '#9E9E9E',

        // blue
        'blue-200': '#bfdbfe',
        'blue-100': '#dbeafe',
        'blue-500': '#3b82f6',
        'blue-400': '#60a5fa',
        'blue-600': '#2563eb',

        // green
        'green-400': '#4ade80'
      },
    },
  },
  plugins: [],
};
