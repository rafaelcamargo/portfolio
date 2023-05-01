const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: project.scripts.dist.filename.dev
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.dev
    })
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        {
          from: /(.*)\/assets\//,
          to: function(context){
            return context.parsedUrl.pathname.replace(/(.*)\/assets\//, '/assets/');
          },
        }
      ]
    }
  }
}
