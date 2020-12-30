<template>
	<view class="login">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="back p-2">
			<my-icon iconName="icon-guanbi" iconSize="50"></my-icon>
		</view>
		<!-- 账号密码登录 -->
		<view class="id" v-if="loginShow">
			<view class="id_title">
				<text>账号密码登录</text>
			</view>
			<view class="form">
				<view class="input">
					<input type="text" placeholder="昵称/手机号/邮箱" v-model="userName" />
				</view>
				<view class="input">
					<input type="text" placeholder="请输入密码" password v-model="passWord" />
					<text class="Wpassword">忘记密码</text>
				</view>
			</view>
			<view class="btn">
				<button v-if="userName =='' || passWord == '' " class="button" disabled>
					登录
				</button>
				<button v-else class="button" @click="LoGIn">
					登录
				</button>
			</view>
			<view class="login_pas">
				<text class="lo" @click="CutLogin">验证码登录</text>
				<text class="gang">|</text>
				<text class="lo">登录遇到问题</text>
			</view>
		</view>



		<!-- 手机验证码登录 -->
		<view class="mobile" v-else>
			<view class="id_title">
				<text>手机验证码登录</text>
			</view>
			<view class="form">
				<view class="input">
					<input type="text" placeholder="手机号" v-model="userMobile"  />
				</view>
				<view class="input">
					<input type="text" placeholder="请输入验证码" v-model="userCode"  />
					<text class="Wpassword noHold" v-show="!hold" @click="GetCode">获取验证码</text>
					<text class="Wpassword" v-show="hold">请稍等 {{second}} 秒后重新发送</text>
				</view>
			</view>
			<view class="btn">
				<button v-if="userMobile =='' || userCode == '' " class="button" disabled>
					登录
				</button>
				<button v-else class="button" @click="codeLogin" >
					登录
				</button>
			</view>
			
			<view class="login_pas">
				<text class="lo" @click="CutLogin">账号密码登录</text>
				<text class="gang">|</text>
				<text class="lo">登录遇到问题</text>
			</view>
			
		</view>
		
		<!-- 底部样式 -->
		<view class="text-center social">
			<text>———— 社交账号登录 ————</text>
		</view>
		<view class="weiXin flex justify-between">
			<view class="LoginWeiXIn">
				<my-icon iconName="icon-weixin" iconColor="#fff"></my-icon>
			</view>
			<view class="LoginWeiXIn lan">
				<my-icon iconName="icon-QQ" iconColor="#fff"></my-icon>
			</view>
			<view class="LoginWeiXIn huang">
				<my-icon iconName="icon-xinlangweibo" iconColor="#fff"></my-icon>
			</view>
		</view>

		<view class="Btext">
			<text>注册即代表您同意 <text class="BYes">《XXX社区协议》</text></text>
		</view>
	</view>
</template>

<script>
	import {
		UserLogin,
		UserCodeLogin,
		code
	} from '../../model/login/login.js'
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				userName: '',//账号
				passWord: '',//密码
				loginShow:false,
				userMobile:'',//用户手机号
				userCode:'',//验证码
				hold:false,
				second:60,//倒计时秒
			}
		},
		methods: {
			//账号密码登录
			async LoGIn() {
				const {data} = await UserLogin(this.userName,this.passWord)
				if(data.errorCode){
					uni.showToast({
						title:data.msg,
						icon:'none'
					})
				}
				console.log(data)
			},
			//切换验证码登录
			CutLogin(){
				this.loginShow = !this.loginShow
			},
			//发送验证码
			async GetCode(){
				const {data} = await code(this.userMobile)
				this.hold = !this.hold
				this.resetTime()
				//错误提示
				if(data.errorCode){
					uni.showToast({
						title:data.msg,
						icon:'none'
					})
				}else{
					let str = data.msg
					const b=str.replace(`验证码：`, '')
					
					console.log(b)
					this.userCode = b
					
				}
				
				console.log(data)
			},
			//倒计时
			resetTime(){
			    var timer = null;
			    timer = setInterval(()=>{
			        this.second -= 1;
			        if(this.second  >0){
			           
			        }else{
			           clearInterval(timer);
					   this.hold = !this.hold
			        }
			    },1000);
			},
			//验证码登录
			async codeLogin(){
				const {data} = await UserCodeLogin(this.userMobile,this.userCode)
				if(data.msg == '登录成功'){ //登录成功
					uni.setStorageSync('token',data.data.token)
					uni.setStorageSync('user',data.data.userinfo)
					uni.showToast({
						title:data.msg
					})
					uni.switchTab({
						url:'../home/index'
					})
				}else{
					uni.showToast({
						title:'登录失败'
					})
				}
			}
		}
	}
</script>

<style>
	.login {
		width: 100%;
		height: 500rpx;
	}

	.back {
		height: 100rpx;
	}

	.id_title {
		line-height: 250rpx;
		text-align: center;
		font-size: 50rpx;
		color: #6d6c67;
	}

	.form {}

	.input {
		padding: 20rpx 0;
		position: relative;
	}

	.Wpassword {
		position: absolute;
		top: 44rpx;
		right: 80rpx;
		color: #bbbbbb;
	}

	input {
		width: 90%;
		margin: 0 auto;
		height: 100rpx;
		border-bottom: 1px solid #f4f4f4;
	}

	.button {
		margin: 50rpx auto 0 auto;
		width: 90%;
		background-color: #ffb1a4;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		color: #FFFFFF;
		font-size: 35rpx;
		border-radius: 50rpx;
	}

	.login_pas {
		line-height: 150rpx;
		text-align: center;
	}

	.lo {
		color: #33677c;
		font-size: 30rpx;
		font-weight: 500;
	}

	.gang {
		color: #bbbbbb;
		padding: 0 20rpx;
	}

	.social {
		color: #bbbbbb;
	}

	.weiXin {
		margin-top: 30rpx;
		padding: 0 140rpx;
	}

	.LoginWeiXIn {
		background-color: #2ad19b;
		text-align: center;
		line-height: 80rpx;
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.lan {
		background-color: #2caefc;
	}

	.huang {
		background-color: #fc772a;
	}

	.Btext {
		color: #bbbbbb;
		text-align: center;
		line-height: 100rpx;

	}

	.BYes {
		color: #2caefc;
	}
	.noHold{
		background-color: #ffb1a4;
		padding: 10rpx 20rpx;
		border-radius: 8rpx;
		color: #FFFFFF;
	}
</style>
