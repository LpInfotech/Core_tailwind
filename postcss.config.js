module.exports = (nano) => ({
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "tailwindcss": {},
    "autoprefixer": {},
    cssnano: nano.env === 'production' ? {} : false,
  },
})