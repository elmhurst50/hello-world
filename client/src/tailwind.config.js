module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend:{
      colors: {
        'brand-primary': '#6233ff',
        'brand-secondary': '#241B39',
      }
    }
  }
}
