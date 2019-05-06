const path = require('path');

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  assetsDir: 'assets',
  css: {
    sourceMap: false,
  },
  configureWebpack: config => {

    config.externals = {  // CDN引用
      'vue': 'Vue',
      'axios': 'axios'
    }
  },
  chainWebpack: config => {
    config.resolve.alias    // 设置别名
      .set('@', path.resolve(__dirname, './src'))
      .set('@c', path.resolve(__dirname, './src/components'))
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8880,
    https: false,
    hotOnly: false,
    proxy: {
      '/cros': {
        target: 'http://exampile.com',
        ws: true,
        changOrigin: true
      }
    }
  }
}