<template>
	<!-- 设置页面 -->
	<view >
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="flex justify-between align-center p-2">
			<view>
				<navigator url="../home/index" open-type="switchTab">
				 <my-icon iconName="icon-fanhui"></my-icon>
				 </navigator>
			</view>
			<view class="font-md font-weight-bold">
				设置
			</view>
			<view></view>
		</view>
		
		<view class="flex justify-between align-center p-2">
			<text >账号与安全</text>
			<my-icon iconName="icon-jinru"></my-icon>
		</view>
			<view class="flex justify-between align-center p-2">
			<text>编辑资料</text>
			<my-icon iconName="icon-jinru"></my-icon>
		</view>
			<view class="flex justify-between align-center p-2">
			<text>清除缓存</text>
			<text>2.00KB</text>
		</view>
			<view class="flex justify-between align-center p-2">
			<text>意见反馈</text>
			<my-icon iconName="icon-jinru"></my-icon>
		</view>
			<view class="flex justify-between align-center p-2">
			<text>关于社区</text>
			<my-icon iconName="icon-jinru"></my-icon>
		</view>
		
		<view class="LogOut m-2">
			<view  @click="LogOut" class="text-center">
				<text>退出登录</text>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	//退出登录
	import {LoginOut} from '../../model/login/login.js'
	export default{
		data(){
			return{
				statusBarHeight: this.$statusBarHeight,
			}
		},
		methods:{
			//退出登录
			async LogOut(){
				const {data} = await LoginOut()
				
				uni.showToast({
					title:'退出成功'
				})
				uni.switchTab({
					url:'../home/index'
				})
				uni.removeStorageSync('token')
				
				console.log(data)
			}
		}
	}
</script>

<style>
	.LogOut view{
		font-size: 30rpx;
		margin: 0 auto;
		width: 90%;
		line-height: 100rpx;
		background-color: #ffb1a4;
		color: #FFFFFF;
		border-radius: 50rpx;
	}
</style>
