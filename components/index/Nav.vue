<template>
	<view class="nav">
		
		<scroll-view scroll-x="true" >
			<view class="flex justify-between navF">
				<text @click="Active(item)" class="flex-1 px-5 font-weight-bold p-1"
				 :class="[ NavId == item.id ? 'navList' : '' ]" v-for="(item,index) in NavList">{{item.classname}}</text>
			</view>
		</scroll-view>
	
	</view>
		
</template>

<script>
	export default{
		props:{
			NavList:{
				type:Array,
				default:[],
			}
		},
		data(){
			return{
			NavId:1
			}
		},
		methods:{
			Active(data){
				this.NavId = data.id
				this.$emit('Active-list',data)
			}
		}
	}
</script>

<style>
	scroll-view{
		width: 750rpx;
	}

	.navList{
		color: #fc587b;
		font-size: 35rpx;
		transform: auto;
	}
	.navF{
		line-height: 50rpx;
		width: 1000rpx;
	}
</style>
