module.exports = {
  theme: {
    extend: {

      fontFamily: {
        'sans': '"Open Sans", sans-serif',
        montserrat: '"Montserrat", sans-serif',
      },
      boxShadow: {
        'dark': 'var(--box-shodow-sm)',
        'light': 'var(--box-shodow-xsm)'
      },
      colors: {
        'ruby-red': 'var(--ruby-red-color)',
        'dark-grey': 'var(--dark-grey-color)',
      },
      maxHeight:{
        'inherit': 'inherit',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        margin: {
          DEFAULT: 'auto',
        }
      },
    },

  },
  content: ["./assets/**/*.{html,js}"],
  plugins: [],
}