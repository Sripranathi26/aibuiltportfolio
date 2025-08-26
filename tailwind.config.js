/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(99, 102, 241, 0.45)', // indigo glow
      },
    },
  },
  plugins: [],
}