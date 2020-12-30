<template>
	<view class="home">
		<view class="top">
			<view :style="{height: `${statusBarHeight}px`}"></view>
			<!-- 搜索组件 -->
			<my-serch></my-serch>
			<!-- 导航条组件 -->
			<my-nav-bar @Active-list="Active"  :Aindex="Aindex" :NavList="NavList"></my-nav-bar>
		</view>
		<!-- 话题组件 -->
		<my-user-list @changeSwiper="changeSwiper" :fIndex="fIndex" :userList="userList"></my-user-list>
		
	</view>
</template>

<script>
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
				userList:[],
				userId:1,
				userpage:1,
				fIndex:0,
				Aindex:0,
			}
		},
		//组件
		components: {
			MySerch, // 搜索框组件
			MyNavBar, //导航组件
			MyUserList,//话题组件
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
				} = await GetUserTock(this.userId,this.userpage)
				this.userList = data.data.list
			},
			//nav切换数据
			Active(data,index){
				this.userId = data.id
				this.Aindex = index
				this.fIndex = index
			},
			//屏幕滑动切换数据
			changeSwiper(index){
				this.Aindex = index
				this.userId = index +1 
				this.GetUserList()
			}

		},
		onShow() {

		},
		onLoad() {
			this.GetNavList()
			this.GetUserList()
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
.top{
	height: 150rpx;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background-color: #FFFFFF;
}
</style>
