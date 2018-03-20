const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',

  resolve: {
    extensions: ['.js','.jsx']
  },



  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map.js',
    publicPath: '/'
  },

  devtool: '#source-map',

  module: {

    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  precss,
                  autoprefixer,
                ];
              },
            },
          },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'jsLoaders' },
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          { loader: 'url-loader',
              options: { limit: 10000 }
          }
        ]
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}

// loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }]
