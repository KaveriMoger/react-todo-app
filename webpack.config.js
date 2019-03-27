var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      public: path.join(__dirname, './public')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },

  module: {
   rules: [
     { test: /\.(png|jpg)$/,
       loader: 'url-loader',
     },

     {
       test: /\.(png|jpg|gif)$/,
       loader: 'file-loader',
       options: {
          publicPath: 'img',
        },
     },
     {
       test: /\.(js|jsx)$/,
       include: path.resolve(__dirname, 'src'),
       exclude: /node_modules/,
       loader: 'babel-loader'
     },

     {
      test: /\.less$/,
      use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
          }
        }, {
          loader: "less-loader"
        }]
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
   }
};
