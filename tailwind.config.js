module.exports = {
  theme: {
    extend: {

      fontFamily: {
        'sans': '"Open Sans", sans-serif',
        montserrat: '"Montserrat", sans-serif',
      },
      backgroundImage: {
        'relay': 'var(--orage-linear-color)',
      },
      boxShadow: {
      'dark': 'var( --box-shodow-sm)',
      'light': 'var(--box-shodow-xsm)'
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  content: ["./assets/**/*.{html,js}"],
  plugins: [],
}
