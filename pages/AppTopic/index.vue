<template>
	<!-- 添加话题 -->
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="flex justify-between p-2 align-center">
			<my-icon @Father="back" iconName="icon-fanhui"></my-icon>
			<text>所有人可见 <my-icon iconName="icon-shezhi"></my-icon></text>
			<text></text>
		</view>
		
		
		
		<!-- 文本域 -->
		<view class="px-2">
			<textarea v-model="Usertext" placeholder="说一句话吧" />
		</view>
		
		<view class="Fenlei p-1 info">
			<text>#所属分类：关注</text>
		</view>
		<view class="info p-1 tack">
			<text>#请选择话题</text>
		</view>
		
		
		<view class="bottom px-2 flex justify-between align-center">
			<view >
				<text class="px-1">
				<my-icon iconName="icon-keyboard1"></my-icon>
				</text>
				<text class="px-1">
				<my-icon iconName="icon-liulan"></my-icon>
				</text>
				<text class="px-1">
				<my-icon iconName="icon-zengjia"></my-icon>
				</text>
			</view>
			<view class="send">
			发送
			</view>
		</view>
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				Usertext:''
			}
		},
		methods:{
			back(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style>
	.info{
		border: 1px solid #999999;
		width: 250rpx;
		border-radius: 50rpx;
		margin: 20rpx;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding-bottom: 20rpx;
	}
	.send{
		padding: 10rpx 30rpx;
		background-color: #ffb1a4;
		text-align: center;
		color: #FFFFFF;
		border-radius: 10rpx;
	}
</style>
