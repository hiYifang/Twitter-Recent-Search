module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.twitter.com/2',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true
      }
    }
  }
};
