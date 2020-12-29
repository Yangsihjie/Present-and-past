import uniRequest from 'uni-request';
import config from '../config.js'
// 公共地址

 // #ifdef H5
  uniRequest.defaults.baseURL = '/api';
 // #endif
 
//#ifndef H5
  uniRequest.defaults.baseURL = config.api_base_url;
// #endif
// uniRequest.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// uniRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
uniRequest.interceptors.request.use(
  request => {
    //配置基本信息  
    return request;
  },
  err => {
    console.log('请求失败');
    return Promise.reject(err);
  });

// 响应拦截
uniRequest.interceptors.response.use(function(response) {
  console.log('返回进入拦截成功')
  return Promise.resolve(response);
}, function(error) {
  console.log('返回进入拦截失败')
  return Promise.reject(error);
});

export default uniRequest