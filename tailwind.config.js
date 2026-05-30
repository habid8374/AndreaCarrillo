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
          DEFAULT: '#4CAF8F',
          dark: '#3D9B7A',
          pale: '#E8F5F0',
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
