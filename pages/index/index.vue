<template>
	<view class="home">
		<view class="top cal">
			<view :style="{height: `${statusBarHeight}px`}"></view>
			<!-- 搜索组件 -->
			<my-serch></my-serch>
			<!-- 导航条组件 -->
			<my-nav-bar @Active-list="Active" :Aindex="Aindex" :NavList="NavList"></my-nav-bar>
		</view>
		<!-- 话题组件 -->
		<my-user-list @PullRefresh="PullRefresh" @changeSwiper="changeSwiper" :calHeight="calHeight" :fIndex="fIndex"
		 :userList="userList" :GetUserList="GetUserList" ></my-user-list>

	</view>
</template>

<script>
	//动态获取高度
	import $U from '../../utils/unit.js'
	//接口
	import {
		getPostclass,
		GetHotList,
		GetUserTock
	} from '../../model/index/index.js'
	// 首页搜索组件
	import MySerch from '../../components/index/MySerch.vue'
	//导航条组件
	import MyNavBar from '../../components/index/Nav.vue'
	//话题组件
	import MyUserList from '../../components/index/bigList.vue'
	export default {

		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				NavList: [],
				userList: [],
				userId: 1,
				userpage: 1,
				fIndex: 0,
				Aindex: 0,
				calHeight: 0,
			}
		},
		//组件
		components: {
			MySerch, // 搜索框组件
			MyNavBar, //导航组件
			MyUserList, //话题组件
		},
		methods: {
			//导航数据
			async GetNavList() {
				const {
					data
				} = await getPostclass()
				this.NavList = data.data.list
			},
			//获取用户对应话题
			async GetUserList() {
				const {
					data
				} = await GetUserTock(this.userId, this.userpage)
				this.userList = data.data.list
				this.userList.forEach(item=>{
					this.$set(item,'GuanZhu',false)
				})
				console.log(this.userList)
			},
			//nav切换数据
			Active(data, index) {
				this.userId = data.id
				this.Aindex = index
				this.fIndex = index
			},
			//屏幕滑动切换数据
			changeSwiper(index) {
				this.Aindex = index
				this.userId = index + 1
				this.GetUserList()
			},
			//上拉加载更多
			async PullRefresh() {
				uni.showLoading({
					title: '正在加载'
				})
				this.userpage++
				const {
					data
				} = await GetUserTock(this.userId, this.userpage)
				if (data.data.list < 10) {
					uni.showToast({
						title: '没有更多数据了',
						icon:'none'
					})
					return false
				} else {
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							title: '加载成功'
						})
						let arr =  [...this.userList, ...data.data.list]
						this.userList = arr
					}, 1000)
					

				}


			},
			

		},
		onShow() {

		},
		onLoad() {
			this.GetNavList()
			this.GetUserList()
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
	/* 	uni-page-body{
		height: 100%;
	}
	.home{
		height: 100%;
	} */
	.top {
		z-index: 999;
		background-color: #FFFFFF;
		height: 150rpx;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
