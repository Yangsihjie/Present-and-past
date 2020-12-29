<template>
	<view>

		<view :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 搜索组件 -->
		<my-serch></my-serch>
		<!-- 导航条组件 -->
		<my-nav-bar @Active-list="Active" :NavList="NavList"></my-nav-bar>
		<!-- 话题组件 -->
		<my-user-list :userList="userList"></my-user-list>
		
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
			//切换数据
			Active(data){
				console.log(data.id)
				this.userId = data.id
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

</style>
