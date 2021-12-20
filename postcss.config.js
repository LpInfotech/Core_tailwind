module.exports = (nano) => ({
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "tailwindcss": {config: './tailwindcss-config.js'},
    "autoprefixer": {},
    cssnano: nano.env === 'production' ? {} : false,
  },
})