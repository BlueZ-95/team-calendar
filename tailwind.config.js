module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'c1': '12rem',
        'c2': '14rem',
        'c3': '16rem',
        'c4': '18rem',
        'c5': '20rem',
      },
      minHeight: {
        '75': '75vh',
      },
      maxHeight: {
        '75': '75vh'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
