/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'lato': ["'Lato', sans-serif"]
    },
    extend: {
      colors: {
        lightRed: '#ec4323',
        darkRed: '#a8170d',
        lightGreen: '#4cb748',
        darkGreen: '#027441',
        orange: '#fbb040',
      }
    },
  },
  plugins: [],
}
