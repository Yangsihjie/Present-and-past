<template>
		<!-- icon图标组件 -->
		<text  :class="[`iconfont ${iconName}`]" :style="{fontSize: `${iconSize}rpx`, color:`${iconColor}` }"></text>
</template>

<script>
	export default{
		props:{
			iconName:{
				type:String,
				default:''
			},
			iconColor:{
				type:String,
				default:''
			},
			iconSize:{
				type:[Number,String],
				default:40
			}
		}
	}
</script>

<style>
</style>
