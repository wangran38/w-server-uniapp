import Mock from 'mockjs';  
  
Mock.mock('/list', 'get', {  
  'list|1-10': [{  
    'id|+1': 1,  
    'name': '@cname',  
    'age|18-60': 1,  
    'address': '@county(true)'  
  }]  
});