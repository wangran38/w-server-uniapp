import request from '@/common/api/request.js';  

export const getkpi = (data) => {  
  return request({
	  url: '/api/getkpi',
	  method: 'POST',
	  data
  })  
};  
//提交老者数组接口

export const getOldArr = (data) => {  
  return request({
	  url: 'api/add_score_record',
	  method: 'POST',
	  data
  })  
}; 
// 添加长者
export const addolduser = (data) => {  
  return request({
	  url: '/api/addolduser',
	  method: 'POST',
	  data
  })  
};
 //提交分数
export const submitAssessment = (data) => {  
  return request({
	  url: '/api/add_score_record',
	  // 'Authorization': 'Bearer your_token', 
	  header:{'Authorization': uni.getStorageSync('token')}, // 设置Authorization字段	
	  method: 'POST',
	  data
  })  
};

export const addinformation = (data) => {  
  return request({
	  url: '/api/addinformation',
	  method: 'POST',
	  data
  })  
};

// 文化程度
export const getlevel = (data) => {  
  return request({
	  url: '/api/getlevel',
	  method: 'POST',
	  data
  })  
};

// 婚姻状况
export const getmarital = (data) => {  
  return request({
	  url: '/api/getmarital',
	  method: 'POST',
	  data
  })  
};

// 民族
export const getnation = (data) => {  
  return request({
	  url: '/api/getnation',
	  method: 'POST',
	  data
  })
};

// 医疗费用支付方式
export const getcost = (data) => {  
  return request({
	  url: '/api/getcost',
	  method: 'POST',
	  data
  })
};

// 居住请款API
export const getresidential = (data) => {  
  return request({
	  url: '/api/getresidential',
	  method: 'POST',
	  data
  })  
};

