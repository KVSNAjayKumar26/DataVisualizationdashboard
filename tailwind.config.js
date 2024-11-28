/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',  // Use the class strategy for dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all template files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

