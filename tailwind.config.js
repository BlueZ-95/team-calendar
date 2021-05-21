module.exports = {
  // mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '75': '75vh',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
