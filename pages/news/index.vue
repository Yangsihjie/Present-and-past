<template>
	<view class="con">
		<swiper :indicator-dots="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in 5">
				<scroll-view scroll-x="true">
					<view class="bg-danger add">{{item}}</view>
				</scroll-view>
			</swiper-item>

		</swiper>



	</view>
</template>

<script>
</script>

<style>
	uni-page-body {
		width: 100%;
		height: 100%;
	}

	.con {
		width: 100%;
		height: 100%;
	}

	.add {
		width: 101%;
		height: 100%;
	}
</style>
