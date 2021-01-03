<template>
	<view>
		<view class="cal" :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 头部选项 -->
		<view class="flex justify-between align-center p-2 cal">
			<view></view>
			<view>
				<text @click="Active(index)" v-for="(item,index) in nav" :key='index' class="font1" :class="{'pitch' : ActiveIndex == index }">{{item}}</text>
			</view>
			<view>
				<my-icon @Father="jump" iconName='icon-bianji1'></my-icon>
			</view>
		</view>

		<!-- 滑动选项卡 -->
		<view class="box">
			<swiper @change="SwiperIndex" :style="{height:`${calHeight}rpx`}" :current="ActiveIndex">
				<swiper-item>
					<scroll-view :style="{height:`${calHeight}rpx`}" scroll-y="true">
						<view class="text-center py-3 ">
							<image src="../../static/common/nothing.png" mode="aspectFit"></image>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item>

					<scroll-view :style="{height:`${calHeight}rpx`}" scroll-y="true">

						<view class="flex justify-between px-2 align-center">
							<view>
								热门分类
							</view>
							<view class="flex align-center">
								<text>更多</text>
								<my-icon iconName="icon-jinru"></my-icon>
							</view>
						</view>
						<!-- 导航 -->
						<view class="flex justify-between  border-bottom p-2 align-center">
							<block v-for="(item,index) in NavList" :key="item.id">
								<text class="Index px-1">{{item.classname}}</text>
							</block>
						</view>

						<!-- 搜索框 -->
						<view class="text-center py-1">
							<input class="serach" type="text" placeholder="搜索话题" />

						</view>

						<!-- 轮播图 -->
						<view class="ban px-2" style="height: 300rpx;">
							<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
								<swiper-item v-for="(item,index) in banList" :key="index">
									<view class="swiper-item">
										<image  :src="item.src" mode="aspectFit"></image>
									</view>
								</swiper-item>
							</swiper>
						</view>
						<view class="font-md p-2">
							最近更新
						</view>

						<view class="p-2">
							<block v-for="(item,index) in hotList" :key="item.id">

								<view class="flex justify-between align-center">
									<view class="img">
										<image style="width: 164rpx; height: 164rpx;" :src="item.titlepic" mode=""></image>
									</view>
									<view class="flex-1 px-2">
										<view class="font-md">
											#{{item.title}}#
										</view>
										<view class="font">
											{{item.desc}}
										</view>
										<view class="font">
											动态{{item.post_count}} 今日{{item.todaypost_count}}
										</view>
									</view>
								</view>

							</block>
						</view>


					</scroll-view>
				</swiper-item>
			</swiper>
		</view>



	</view>
</template>

<script>
	import $U from '../../utils/unit.js'
	import {
		getPostclass,
		GetBander,
		GetHotList
	} from '../../model/index/index.js'
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				nav: ['关注', '话题'],
				ActiveIndex: 0,
				calHeight: 0,
				NavList: [],
				banList: [],
				hotList: []
			}
		},
		methods: {
			//点击切换类名
			Active(index) {
				this.ActiveIndex = index
			},
			SwiperIndex(e) {
				this.ActiveIndex = e.detail.current
			},
			//跳转到添加页面
			jump() {
				uni.navigateTo({
					url: '../AppTopic/index'
				})
			},
			async Get() {
				//获取导航数据
				const {
					data: data
				} = await getPostclass()
				this.NavList = data.data.list
				//获取轮播图
				const {
					data: banlist
				} = await GetBander()
				this.banList = banlist.data.list
				//获取热门话题
				const {
					data: res
				} = await GetHotList()
				this.hotList = res.data.list
				console.log(res)

			}
		},
		onShow() {

		},
		onLoad() {
			this.Get()
		},
		mounted() {
			$U.calSurplusHeight({
				pageID: this,
				pos: "cal",
				success: (res) => this.calHeight = res
			})
		}
	}
</script>

<style>
	.font1 {
		font-size: 35rpx;
		color: #999999;
		padding: 0 10rpx;
		font-weight: 600;
	}

	.pitch {
		color: #ffb1a4;
		font-size: 40rpx;
	}

	.Index {
		background-color: #f8f9fa;
		font-size: 28rpx;
		border: 1px solid #dee2e6;
		border-radius: 10rpx;
	}

	.serach {
		margin: 0 auto;
		width: 90%;
		height: 80rpx;
		text-align: center;
		background-color: #f8f9fa;
	}

	.img image {
		border-radius: 8rpx;

	}
</style>
