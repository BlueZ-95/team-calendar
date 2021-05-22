module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'c1': '10rem',
        'c2': '12rem',
        'c3': '14rem',
        'c4': '16rem',
        'c5': '18rem',
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
