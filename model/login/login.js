import uniRequest from '../../utils/requset.js'

// 账号密码登录接口
export function UserLogin(username,password) {
  return uniRequest({
    url:'/user/login',
	method:'POST',
	data:{
		username,
		password
	}
  })
}
//发送验证码
export function code(phone){
	return uniRequest({
		url:'/user/sendcode',
		method:'POST',
		data:{
			phone
		}
	})
}

//手机验证码登录
export function UserCodeLogin(phone,code){
	return uniRequest({
		url:'/user/phonelogin',
		method:'POST',
		data:{
			phone,
			code
		}
	})
}
//退出登录
export function LoginOut(){
	return uniRequest({
		url:'user/logout',
		method:'POST'
	})
}