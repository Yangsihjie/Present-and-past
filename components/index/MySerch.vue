<template>
	<view class="nav">
		<view class="flex justify-between px-2 align-center">
			<my-icon iconName="icon-qiandao" iconColor="#FEE42B" iconSize="40"></my-icon>
			<input class="border flex-1 mx-2 topInput" type="text" placeholder="搜索糗事" />
			<my-icon iconName="icon-bianji1" @Father="Father"  iconSize="40"></my-icon>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			Father(){
				console.log('1234')
				uni.navigateTo({
					url:'../../pages/AppTopic/index'
				})
			}
		}
	}
</script>

<style>
	.nav{
		background-color: #FFFFFF;
	}
	.topInput {
		border-radius: 6rpx;
		background-color: #f7f7f7;
		text-align: center;
		color: #f7f7f7;
		font-size: 20rpx;
		height: 50rpx;
	}
</style>
