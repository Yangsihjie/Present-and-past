<template>
	<!-- 添加话题 -->
	<view>
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="flex justify-between p-2 align-center">
			<my-icon @Father="back" iconName="icon-fanhui"></my-icon>
			<text>所有人可见 <my-icon iconName="icon-shezhi"></my-icon></text>
			<text></text>
		</view>
		
		
		
		<!-- 文本域 -->
		<view class="px-2">
			<textarea v-model="Usertext" placeholder="说一句话吧" />
		</view>
		
		<view class="Fenlei p-1 info">
			<text>#所属分类：关注</text>
		</view>
		<view class="info p-1 tack">
			<text>#请选择话题</text>
		</view>
		<!-- 图片上传 -->
		<add-img></add-img>
		
		
		<!-- 底部操作框 -->
		<view class="bottom px-2 flex justify-between align-center">
			<view >
				<text class="px-1">
				<my-icon iconName="icon-keyboard1"></my-icon>
				</text>
				<text class="px-1">
				<my-icon iconName="icon-liulan"></my-icon>
				</text>
				<text class="px-1">
				<my-icon @Father="AddImage" iconName="icon-zengjia"></my-icon>
				</text>
			</view>
			<view class="send">
			发送
			</view>
		</view>
		
	</view>

</template>

<script>
	import AddImg from '../../components/index/image.vue'
	//上传图片
	import {AddImage} from '../../model/index/index.js'
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				Usertext:'',
				imgList:[],
				img:'../../static/demo/datapic/19.jpg', //图片路径
			}
		},
		components:{
			AddImg
		},
		methods:{
			//返回上一层
			back(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			// 上传图片
			AddImage(){
				uni.chooseImage({
					//图片上传成功回调
					success:async res=> {
						console.log(res)
						this.imgList = res.tempFiles
						console.log(typeof this.imgList)
						console.log(this.imgList)
						// 图片通过Form Data 方法转换为二进制流
						const formData = new FormData()
						formData.append('file',this.imgList)
						
						console.log(formData)
						const {data} = await AddImage(formData)
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style>
	.info{
		border: 1px solid #999999;
		width: 250rpx;
		border-radius: 50rpx;
		margin: 20rpx;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding-bottom: 20rpx;
	}
	.send{
		padding: 10rpx 30rpx;
		background-color: #ffb1a4;
		text-align: center;
		color: #FFFFFF;
		border-radius: 10rpx;
	}
	.image image{
		width: 200rpx;
		height: 200rpx;
		border-radius: 20rpx;
	}
</style>
