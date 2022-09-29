module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require('postcss-preset-env')({
      browsers: 'last 3 versions',
    }),
  ]
}