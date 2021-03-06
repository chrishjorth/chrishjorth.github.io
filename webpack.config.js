const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  mode: 'development',
  output: {
    filename: '[name]-bundle.dev.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false
    })]
  }
}
