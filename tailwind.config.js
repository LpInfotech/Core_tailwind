const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    extend: {},
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }

  },
  purge:{
  content: ["./public/**/*.html"],
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
