module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-yellow-light': '#FFE294',
        'custom-yellow-dark': '#C69615',
        'custom-red-dark': '#FF5F5F',
        'custom-blue-dark': '#192F7D',
        'custom-blue-light': '#23BCFE',
        'custom-blue-ques': '#EBF1FF',
        'custom-blue-lightest': '#192F7D',
        'custom-blue-back1': '#EFF1F6',
        'custom-white-back2': '#F8F8F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
