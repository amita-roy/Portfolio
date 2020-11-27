module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F9855B',
        body: '#E5E5E5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
