import uniRequest from '../../utils/requset.js'

// 首页获取文章接口
export function getPostclass() {
  return uniRequest({
    url:'/postclass'
  })
}

//获取话题
export function GetUserTock(id,page){
	return uniRequest({
		url:`/postclass/${id}/post/${page}`,
		method:'GET'
	})
}
//获取热门话题
export function GetHotList(){
	return uniRequest({
		url:`/hottopic`,
	})
}