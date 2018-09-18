module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'local.tiejin.cn',
    port: 8889,
    // https: true
  },
  configureWebpack: {
    entry: [
        'babel-polyfill', './src/main.js'
    ]
  }
}