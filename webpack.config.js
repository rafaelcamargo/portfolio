const merge = require('webpack-merge');
const baseConfig = require('./webpack.conf.base');
const devConfig = require('./webpack.conf.dev');
const prodConfig = require('./webpack.conf.prod');
const prerenderConfig = require('./webpack.conf.prerender');

function getSpecificConfig(){
  switch (process.env.NODE_ENV) {
    case 'production':
      return prodConfig;
    case 'ci':
      return prerenderConfig;
    default:
      return devConfig;
  }
}

module.exports = merge(baseConfig, getSpecificConfig());
