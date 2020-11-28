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
        body: '#F2F2F2',
        primary: '#F9855B',
        primaryLight: '#FFDACC',
        primaryDark: '#E87E58',
        secondary: '#000',
        secondaryLight: '#423B39',
        white: '#FFF',
        border: '#CFD2DA',
        placeholder: '#B0B4BD',
        grayLight: '#727274',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
