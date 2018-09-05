module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'local.tiejin.cn',
    port: 8889
  },
  configureWebpack: {
    entry: [
        'babel-polyfill', './src/main.js'
    ]
  }
}