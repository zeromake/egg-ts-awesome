const isPord = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isPord ? '/public' : '/',
  outputDir: '../app/public',
  indexPath: '../view/index.njk',
  devServer: {
    proxy: 'http://127.0.0.1:7001',
  }
}
