const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans", sans-serif'],
        montserrat: '"Montserrat", sans-serif',
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.375rem',
      '2xl': '1.563rem',
      '3xl': '1.875rem',
      '4xl': '2.188rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

  },
  purge:{
  content: ["./assets/**/*.html"],
  },
  plugins: [
    plugin(function({ addComponents, addBase, config }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })

      addBase({
        'h1': { fontSize: config('theme.fontSize.7xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('themefontSize.lg') },
      })

    })
  ],
}
