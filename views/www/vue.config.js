const isPord = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isPord ? '/public/www/' : '/',
  outputDir: '../../app/public/www',
  indexPath: '../../view/www.njk',
  productionSourceMap: !isPord,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        changeOrigin: true
      },
    },
  }
}
