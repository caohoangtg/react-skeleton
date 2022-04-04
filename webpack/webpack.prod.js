const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('SIT'),
      'process.env.BASE_URL': JSON.stringify('BASE_URL'),
    }),
  ],
}
