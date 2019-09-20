const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');

module.exports = {
  entry: [`${__dirname}/${project.scripts.source.index}`],
  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@data': `${__dirname}/${project.data.source.root}`,
      '@scripts': `${__dirname}/${project.scripts.source.root}`,
      '@styles': `${__dirname}/${project.styles.source.root}`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.index.source.file,
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{
      from: project.images.source.files,
      to: project.images.dist.root
    }])
  ]
}
