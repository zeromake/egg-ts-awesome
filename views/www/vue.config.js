const isPord = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isPord ? '/public/www/' : '/',
  outputDir: '../../app/public/www',
  indexPath: '../../view/www.njk',
  devServer: {
    proxy: 'http://127.0.0.1:7001',
  }
}
