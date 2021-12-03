module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
