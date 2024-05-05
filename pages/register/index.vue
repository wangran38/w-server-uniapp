<template>
	<view class="reg-wrapper">
		<!-- 注册页 -->
		<view class="reg-content">
			<view class="reg-title">用户注册</view>
			<form>
				<view class="input-wrapper">
					<input class="input-text" type="text" name="phone" placeholder="请输入账号" maxlength="20"
						v-model="phone" />
				</view>
				<view class="input-wrapper">
					<input class="input-text" type="password" name="psw" placeholder="请输入密码" maxlength="20" v-model="psw" />
				</view>
				<view class="input-wrapper">
					<input class="input-text" type="password" name="psw1" placeholder="请再次输入密码" maxlength="20"
						v-model="psw1" />
				</view>
				<button class="reg-btn" @tap="register()">注册</button>
				<view class="login-wrapper">
					<button class="login-btn" @tap="gotoLogin()">立即登录</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import store from '@/store/index.js';

	export default {
		data() {
			return {
				phone: '',
				psw: '',
				psw1: ''
			}
		},
		onLoad(options) {
		},
		methods: {
			register() {
				uni.request({
					url: 'http://127.0.0.1:8088/api/assessors_rg',
					    header: {
					        'content-type': 'application/json' //自定义请求头信息
					    },
					method: 'POST',
					  //   data: {
					  //       phone: phone,
							// psw: psw,
							// psw1: psw1
					  //   },
						dataType: 'json',
					success: (res) => {
						console.log(res.data); // 输出模拟的用户列表数据  
					},
					fail(err) {
						console.log('err', err);
					}
				});
			},
			gotoLogin() {
				uni.navigateTo({
					url: '/pages/login/index'
				});
			}
		}
	}
</script>
<style lang="scss">
	page {
		background: linear-gradient(to bottom, #29b6f6, #039be5);
		padding-bottom: 0;
	}

	.reg-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		flex-direction: column;
		background-color: #457bf9;
	}

	.reg-content {
		width: 80%;
		padding: 25px;
		font-size: 15px;
		background-color: #ffffff;
		border-radius: 16px;
		box-shadow: 5px 5px 7px 0 rgba(0, 0, 0, 0.15);
		z-index: 9;

		.reg-title {
			text-align: center;
			font-size: 16px;
			font-weight: 700;
			margin-bottom: 24px;
		}

		.input-wrapper {
			position: relative;

			.input-text {
				padding: 0 25px;
				height: 50px;
				line-height: 50px;
				margin-bottom: 25px;
				background-color: #eee;
				font-size: 16px;
				border-radius: 50px;

				.uni-input-placeholder {
					color: #aeaeae;
				}
			}
		}

		.reg-btn {
			font-size: 16px;
			background-color: #457bf9;
			color: #fff;
			height: 50px;
			line-height: 50px;
			border-radius: 25px;
			letter-spacing: 10px;
		}

		.login-wrapper {
			color: #c0c0c0;
			margin-top: 10px;

			.login-btn {
				font-size: 16px;
				background-color: transparent;
				border: 0;
				color: #457bf9;
			}

			uni-button:after {
				border: none;
				border-radius: 0;
			}
		}
	}
</style>