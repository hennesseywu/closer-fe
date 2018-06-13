module.exports = {
    lintOnSave: false,
    devServer: {
        open: process.platform === 'darwin',
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 1234,
        https: false,
        hotOnly: false,
    }
}