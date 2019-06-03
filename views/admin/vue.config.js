const isPord = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isPord ? '/public/admin/' : '/',
  outputDir: '../../app/public/admin',
  indexPath: '../../view/admin.njk',
  devServer: {
    proxy: {
      '^/api/admin': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        changeOrigin: true
      },
    },
  }
}
