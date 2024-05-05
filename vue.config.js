module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.101.10:8088', // 目标服务器地址
		// target: 'http://192.168.101.8:8089', // 目标服务器地址
		target: 'http://192.168.101.11:8088', // 目标服务器地址
        changeOrigin: true, // 是否改变源地址
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  }
}