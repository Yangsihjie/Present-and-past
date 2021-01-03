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
//获取所有话题
export function GetTock(){
	return uniRequest({
		url:`/v1/topicclass`,
		method:'GET'
	})
}
//上传图片
export function AddImage(imglist ='imglist[]' ,filePaths){
	return uniRequest({
		url:'/image/uploadmore',
		method:'POST',
		data:{
			name:'imglist[]',
			filePaths
		}
	})
}

//获取轮播图
export function GetBander(){
	return uniRequest({
		url:'adsense/0',
		method:'GET'
	})
}