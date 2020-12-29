<template>
	<!-- 布局组件 -->
	<view class="box">
		
		<view class="box_item" v-for="(item,index) in userList" :key="index">
			<!-- 标题 -->
			<view class="flex justify-between align-center">
				<view class="flex align-center px-2">
					<image class="logo" :src="item.titlepic" mode="aspectFill"></image>
					<view class="flex flex-column justify-between  px-2">
						<view class="font_md">
							{{item.user.username}}
						</view>
						<view class="font-time">
							{{item.create_time}}
						</view>
					</view>
				</view>
	
				<view class="pink px-2">
					关注
				</view>
	
	
			</view>
			<!-- 内容 -->
			<view class="font_desc px-2 p-2">
				{{item.title}}
			</view>
	
			<!-- 图片 -->
			<view class="img px-2">
				<block v-for="(u,ind) in item.images" :key="ind">
					<image v-show="ind == 0" :src="u.url" mode="aspectFill" style="height: 193px; width: 100%;"></image>
				</block>
			</view>
			
			
			<!-- 操作 -->
			<view class="btn flex justify-between align-center">
				<view class="flex-1 text-center">
					<my-icon iconName="icon-dianzan"></my-icon>
					1
				</view>
				<view class="flex-1 text-center">
					<my-icon iconName="icon-dianzan"></my-icon>
					踩
				</view>
				<view class="flex-1 text-center">
					<my-icon iconName="icon-xiaoxi"></my-icon>
					1
				</view>
				<view class="flex-1 text-center">
					<my-icon iconName="icon-fenxiang"></my-icon>
					分享
				</view>
			</view>
	
		</view>
	
	
	</view>
	
	
</template>

<script>
	export default{
		props:{
			userList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	.logo {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
	
	.pink {
		background-color: #fe5a7d;
		color: #fff;
		font-size: 30rpx;
		margin: 0 20rpx;
	}
	.font_desc{
		font-weight: 500;
		font-size: 35rpx;
	}
		
	.font-time {
		color: #a5a29b;
		font-size: 26rpx;
	}
	.font_md{
		font-size: 32rpx;
	}
	.box{
		background-color: #f5f5f5;
		padding: 10rpx 0;
	}
	.box_item{
		margin: 20rpx 0;
		background-color: #FFFFFF;
	}
	.img image{
		border-radius: 6rpx;
	}
</style>
