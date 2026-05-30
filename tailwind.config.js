/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#C9A96E',
          dark: '#A8895A',
          pale: '#F7F0E3',
        },
        gold: '#C9A96E',
        carbon: '#2D2D2D',
        slate: '#6B7280',
        bone: '#FAFAFA',
        lavender: '#F5F3FF',
        footer: '#1C1C1E',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
