<template>
	<!-- 布局组件 -->
	<view class="box">
		
		<swiper class="swiper" @change="tabChange" :style="{height:`${calHeight}rpx`}" :current="fIndex" >
			<swiper-item v-for="i in 6">
				<scroll-view scroll-y="true"  lower-threshold="50px" @scrolltolower="PullRefresh" :style="{height:`${calHeight}rpx`}">

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
										{{item.create_time |timeFilter}}
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

				</scroll-view>
			</swiper-item>
		</swiper>


	</view>
</template>

<script>
	export default {
		props: {
			userList: {
				type: Array,
				default: []
			},
			fIndex:{
				type:Number,
				default:0
			},
			calHeight:{
				type:[String,Number],
				default:0
			}
		},
		methods:{
			tabChange(e){
				this.$emit('changeSwiper',e.detail.current)
			},
			//上拉到固定像素触发的事件
			PullRefresh(){
				this.$emit('PullRefresh')
			}
		},
		mounted() {
		},
		filters: {
		   // 时间过滤
		   timeFilter: (val)=> {
		    let hhour = ''
		    let time = new Date(val * 1000)
		    let year = time.getFullYear()
		    let month = time.getMonth()+1
		    if(month < 10) {
		     month = '0' + month;
		    }
		    let day = time.getDate()
		    if(day < 10) {
		     day = '0' + day;
		    }
		    let hour = time.getHours()
		    if(hour <= 12) {
		     hhour = '上午';
		    }else {
		     hour = hour - 12
		     hhour = '下午'
		    }
		    let minute = time.getMinutes()
		    if(minute < 10) {
		     minute = '0' + minute;
		    }
		    return `${year}-${month}-${day} ${hhour} ${hour}:${minute}`
		   }
		  },
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

	.font_desc {
		font-weight: 500;
		font-size: 35rpx;
	}

	.font-time {
		color: #a5a29b;
		font-size: 26rpx;
	}

	.font_md {
		font-size: 32rpx;
	}
	.box {
		background-color: #f5f5f5;
		padding: 10rpx 0;
		padding-top: 210rpx;
	}

	.box_item {
		margin: 20rpx 0;
		background-color: #FFFFFF;
		}

	.img image {
		border-radius: 6rpx;
	}

</style>
