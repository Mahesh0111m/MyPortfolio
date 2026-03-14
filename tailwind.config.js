/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        accent: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgb(0 0 0 / 0.08), 0 2px 8px -2px rgb(0 0 0 / 0.04)',
        'soft-dark': '0 4px 20px -4px rgb(0 0 0 / 0.3), 0 2px 8px -2px rgb(0 0 0 / 0.2)',
      },
    },
  },
  plugins: [],
}
