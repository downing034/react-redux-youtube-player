module.exports = {
  entry: './src/index.js',

  performance: { hints: false },

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {

    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }

    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
