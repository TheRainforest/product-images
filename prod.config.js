/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const path = require('path');


module.exports = {
  mode: "development",
  entry: "./client/singleItemPage.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js',
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }
        ]
      }
    ]
  }
}