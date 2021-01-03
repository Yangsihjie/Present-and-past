<template>
	<!-- 小纸条 -->
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="flex align-center justify-between px-2">
			<my-icon iconName="icon-geren"></my-icon>
			<text class="font-md">消息列表</text>
			<my-icon iconName="icon-icon_im_keyboard"></my-icon>
		</view>
		
		<view class="flex justify-between align-center p-2">
			<my-icon iconName="icon-user-detail"></my-icon>
			<text class="font-sm">小纸条</text>
			<my-icon iconName="icon-zengjia"></my-icon>
		</view>
		
		<view class="text-center py-2">
			<image src="../../static/common/nothing.png" mode="aspectFit"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
			}
		},
		methods:{
			
		},
		onShow() {
			
		},
	}
</script>

<style>
</style>
