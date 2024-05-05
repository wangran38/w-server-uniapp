// 请求基础配置  
const baseConfig = {
	// baseURL: 'http://192.168.101.21:8088', // API
	baseURL: 'http://192.168.101.11:8088', // API的基础URL
	// baseURL: 'http://192.168.101.8:8089', // API的基础URL
	// baseURL: 'http://192.168.101.10:8088', // API的基础URL  
	timeout: 60000, // 请求超时时间（毫秒）  
};

// 请求拦截器  
const requestInterceptor = (config) => {
	// 这里可以添加一些通用的配置，比如请求头  
	config.header = {
		'Content-Type': 'application/json',
		// ...其他请求头  
	};
	// 如果有token的话，也可以在这里设置  
	if (uni.getStorageSync('token')) {  
	  config.header['Authorization'] = `Bearer ${uni.getStorageSync('token')}`;  
	}  
	return config;
};

// 响应拦截器  
const responseInterceptor = (response) => {
	return response;
	
	// // 对响应数据做点什么  
	if (response.data.code && response.data.code === 200) {
		return response.data; // 返回实际数据  
	} else {
		return Promise.reject(response.data); // 返回一个rejected的 Promise  
	}
};

// 封装后的请求函数  
function request({
	url,
	method = 'GET',
	data = {}
}) {
	return new Promise((resolve, reject) => {
		let fullUrl = url;
		if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
			fullUrl = `${baseConfig.baseURL}${fullUrl}`;
		}
		uni.request({
			...baseConfig,
			url: fullUrl,
			method,
			data: method === 'GET' ? {} : JSON.stringify(data), // GET请求不带data参数体  
			success: (res) => {
				if (res.data.code && res.data.code === 200) {
					resolve(res);
					return;
				}
				reject(res);
				
				// const result = responseInterceptor(res);
				// if (result instanceof Promise) {
				// 	result.then(resolve).catch(reject);
				// } else {
				// 	resolve(result);
				// }
			},
			fail: (error) => {
				reject(error);
				uni.showToast({
					title: '网络错误',
					icon: 'none'
				});
			}
		});
	});
}

// 导出请求函数  
export default request;