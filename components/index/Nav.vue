<template>
	<view class="nav">
		
		<scroll-view scroll-x="true" show-scrollbar="flase" >
			<view class="flex justify-between navF">
				<text @click="Active(item,index)" class="flex-1 px-5 font-weight-bold p-1"
				 :class="{ 'navList' : Aindex == index }" v-for="(item,index) in NavList">{{item.classname}}</text>
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
			},
			Aindex:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
			}
		},
		methods:{
			Active(data,index){
				this.$emit('Active-list',data,index)
			}
		}
	}
</script>

<style>
	.nav{
		background-color: #FFFFFF;
	}
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
