<template>
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 导航 -->
		<view class="flex justify-between align-center p-2">
			<my-icon @Father="Back" iconName="icon-fanhui"></my-icon>
			<view class="font-sm font-weight-bold">
				{{UserDetail.title}}
			</view>
			<my-icon iconName="icon-gengduo1"></my-icon>
		</view>
		<!-- 用户信息 -->
		<view class="flex align-center justify-between px-2">
			<view class="flex">
				<view >
					<image style="width: 70rpx;height: 70rpx;" class="image" :src="UserDetail.titlepic == '' ? '../../static/demo/datapic/38.jpg' : UserDetail.user.userpic" mode="aspectFill"></image>
				</view>
				<view>
					<view class="font-sm">
						{{UserDetail.user.username}}
					</view>
					<view class="font-small">
						{{UserDetail.create_time |timeFilter}}
					</view>
				</view>
			</view>
			
			<view class="px-2 text-center user">
				<text>关注</text>
			</view>
		</view>
		
		<!-- 用户内容 -->
		<view class="p-2 font">
			{{UserDetail.content}}
		</view>
		<view class="font-sm px-2">
			{{UserDetail.content}}
		</view>
		
		<!-- 大图 -->
		<view class="img p-2 text-center">
			<image @click="img" style="width:650rpx; height: 650rpx;" v-if="UserDetail.images.length !=0" :src="UserDetail.images[0].url" mode="aspectFill"></image>
		</view>
		
		<!-- 评论区 -->
		<view class="font-md font-weight-bold px-2">
			最新评论：{{UserCommit.length}}
		</view>
		
		<view class="box px-2">
			<block v-for="(item,index) in UserCommit" :key="index">
			<view class="flex align-center py-1">
				<view class="userImg px-1">
					<image class="userImg"  :src="item.user.userpic == null ? '../../static/demo/datapic/38.jpg' : item.user.userpic " mode="aspectFill"></image>
				</view>
				<view class="flex-1">
					<view class="font-sm name">
						{{item.user.username}}
					</view>
					<view class="font">
						{{item.data}}
					</view>
					<view class="font-sm">
						{{item.create_time | timeFilter}}
					</view>
				</view>
			</view>
			</block>
		</view>
		
		<!-- 底部操作 -->
		<view class="position-fixed px-2 flex align-center justify-between left-0 right-0 bottom-0 submit">
			<input type="text" v-model="UserText" placeholder="文明发言" />
			<my-icon @Father="Submit" iconName="icon-fabu"></my-icon>
		</view>
		
	</view>
</template>

<script>
	import {ToUserCommit,GetInitCommit,GetUserComment} from '../../model/index/index.js'
	export default{
		data(){
			return{
				statusBarHeight: this.$statusBarHeight,
				userId:0,
				UserDetail:{},
				UserCommit:[],
				UserText:''
			}
		},
		methods:{
			async Submit(){
				const {data} = await GetUserComment(this.UserDetail.share_id,this.UserText,this.UserDetail.id)
				this.UserText = ''
				uni.showToast({title:data.msg})
				const {data:res} = await GetInitCommit(this.userId)
				this.UserCommit = res.data.list
			},
			Back(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			img(){
				let arr= this.UserDetail.images.map(item=>{return item.url})
				uni.previewImage({
					current:0,
					urls:arr
				})
			}
		},
		//监听页面初始加载时获取路由传参的id 并请求数据
		async onLoad(event) {
			this.userId = event.id
			const {data} = await ToUserCommit(event.id)
			console.log(data)
			this.UserDetail = data.data.detail
			const {data:res} = await GetInitCommit(event.id)
			this.UserCommit = res.data.list
		},
		filters: {
			// 时间过滤
			timeFilter: (val) => {
				let hhour = ''
				let time = new Date(val * 1000)
				let year = time.getFullYear()
				let month = time.getMonth() + 1
				if (month < 10) {
					month = '0' + month;
				}
				let day = time.getDate()
				if (day < 10) {
					day = '0' + day;
				}
				let hour = time.getHours()
				if (hour <= 12) {
					hhour = '上午';
				} else {
					hour = hour - 12
					hhour = '下午'
				}
				let minute = time.getMinutes()
				if (minute < 10) {
					minute = '0' + minute;
				}
				return `${year}-${month}-${day} ${hhour} ${hour}:${minute}`
			}
		},
	}
</script>

<style>
	.image{
		border-radius: 50%;
	}
	.user{
		background-color: #ff4a6a;
		border-radius:10rpx;
		color: #FFFFFF;
	}
	.userImg{
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}
	.box{
		padding-bottom: 100rpx;
	}
	.submit{
		background-color: #FFFFFF;
		border-top: 1px solid #CCCCCC;
		height: 100rpx;
		z-index: 100;
		line-height: 100rpx;
	}
	.submit input{
		background-color: #EFEFEF;
		width: 85%;
	}
	.name{
		color: #007AFF;
	}
</style>
