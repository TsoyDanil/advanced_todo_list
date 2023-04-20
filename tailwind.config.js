/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1a202c',
        secondary: '#718096',
        accent: '#f7fafc',
        danger: '#e53e3e',
        success: '#38a169',
        warning: '#ed8936',
      },
    },
    darkMode: 'media', // or 'class'
  },
  plugins: [],

}

