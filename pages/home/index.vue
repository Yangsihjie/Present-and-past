<template>
	<!-- 我的页面 -->
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class=" flex align-center p-1 px-2 justify-between text-center font-weight-bold">
			<text></text>
			<text>我的</text>
			<my-icon @Father="SetUser" iconName="icon-gengduo1"></my-icon>
		</view>
		<!-- 个人信息 -->
		<view v-if="token" class="flex align-center justify-between px-1 py-2">
			<view class="left flex align-center">
				<view class="logo">
					<image src="../../static/demo/topicpic/12.jpeg" mode="aspectFill"></image>
				</view>
				<view class="text">
					<view class="font-lg font-weight-bold">
						{{user.username}}
					</view>
					<view class="font font-small">
						总帖子 0 ，今日发布0
					</view>
				</view>
			</view>
			<view class="right">
				<my-icon iconName="icon-jinru" iconSize="34"></my-icon>
			</view>
		</view>
		
		<!-- 非登录展示 -->
		<view class="login" v-if="!token" >
			<view class="text-center py-3">
				<text>登录社区，体验更多功能</text>
			</view>
			<view class="text-center py-2">
				<text @click="JumpLogin" >账号/邮箱/手机登录   ></text>
			</view>
		</view>
		
		<!-- 帖子 -->
		<view class="flex">
			<view class="flex flex-column flex-1 text-center">
				<text class="font-md font-weight-bold">0</text>
				<text>帖子</text>
			</view>
			<view class="flex flex-column flex-1 text-center">
				<text  class="font-md font-weight-bold">0</text>
				<text>动态</text>
			</view>
			<view class="flex flex-column flex-1 text-center">
				<text  class="font-md font-weight-bold">0</text>
				<text>评论</text>
			</view>
			<view class="flex flex-column flex-1 text-center">
				<text  class="font-md font-weight-bold">0</text>
				<text>粉丝</text>
			</view>
		</view>
		<!-- 广告 -->
		<view class="advertising">
			<image src="../../static/demo/banner1.jpg" mode="aspectFill"></image>
		</view>
		
		<view class="flex align-center justify-between p-2">
			<view class="flex align-center">
				<my-icon iconName="icon-liulan"></my-icon>
				<text class="px-1">浏览历史</text>
			</view>
			<view >
				<my-icon iconName="icon-jinru" iconSize="34" iconColor="#bbbbbb"></my-icon>
			</view>
		</view>
		<view class="flex align-center justify-between p-2">
			<view class="flex align-center">
				<my-icon iconName="icon-huiyuanvip"></my-icon>
				<text class="px-1">社区认证</text>
			</view>
			<view >
				<my-icon iconName="icon-jinru" iconSize="34" iconColor="#bbbbbb"></my-icon>
			</view>
		</view>
		<view class="flex align-center justify-between p-2">
			<view class="flex align-center">
				<my-icon iconName="icon-icon_im_keyboard"></my-icon>
				<text class="px-1">审核帖子</text>
			</view>
			<view >
				<my-icon iconName="icon-jinru" iconSize="34" iconColor="#bbbbbb"></my-icon>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				token:'',
				usetInfo:{},
			}
		},
		
		onShow() {
			const token = uni.getStorageSync('token')
			const user = uni.getStorageSync('user')
			if(!token){
				console.log(this.token)
				this.token = ''
				uni.showToast({
					title:'未登录',
					icon:'none'
				})
			}else{
				this.token = token
				this.user = user
			}
		},
		methods:{
			//跳转到登录页面
			JumpLogin(){
				uni.navigateTo({
					url:'../login/index'
				})
			},
			//跳转到设置页面
			SetUser(){
				uni.navigateTo({
					url:'../SetUser/index'
				})
			}
		}
	}
</script>

<style>
	.logo {
		width: 150rpx;
		height: 150rpx;

	}

	.logo image {
		margin: 20rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.advertising{
		padding: 20rpx;
		text-align: center;
		margin-top: 10rpx;
	}
	.advertising image{
		height: 196rpx;
		width: 95%;
		border-radius: 10rpx;
	}
</style>
