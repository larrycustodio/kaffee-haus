const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    context: path.join(__dirname, '/src'),

    entry: {
        javascript: './index'
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public/assets'),
    },
    
    resolve: {
        alias: {
          react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx']
      },
    
      module: {
        loaders: [
          //Babel Loader
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
          },
          //Sass Loader
          {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
          },
          //HTML Loader
          {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
          },
          //IMG Loader
          {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
      },
      devServer: {
        port: 3000,
        contentBase: './public',
        inline: true
      }
    };