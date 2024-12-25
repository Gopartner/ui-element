/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Aktifkan mode berbasis class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.divider': {
          '@apply my-1 border-t border-gray-300 dark:border-gray-700': {},
        },
      });
    },
  ],
}
