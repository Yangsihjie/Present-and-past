<template>
		<!-- icon图标组件 -->
		<text @click="Father" :class="[`iconfont ${iconName}`]" :style="{fontSize: `${iconSize}rpx`, color:`${iconColor}` }"></text>
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
		},
		methods:{
			Father(){
				this.$emit('Father')
			}
		}
	}
</script>

<style>
</style>
