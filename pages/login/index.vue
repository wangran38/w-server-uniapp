<template>
	<view class="login-wrapper">
		<view class="login-content">
			<view class="login-title">用户登录</view>
			<form>
				<view class="input-wrapper">
					<input class="input-text" type="text" name="username" placeholder="请输入账号" maxlength="20"
						v-model="username" />
				</view>
				<view class="input-wrapper">
					<input class="input-text" type="password" name="password" placeholder="请输入密码" maxlength="20"
						v-model="password" />
				</view>
				<button class="login-btn" @tap="login">登录</button>
				<view class="reg-wrapper">
					<button class="reg-btn" @tap="gotoReg">立即注册</button>
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
				username: '',
				password: ''
			}
		},
		onLoad(options) {},
		methods: {
			login() {
				uni.request({
					//登录接口url
					url: 'http://192.168.101.11:8088/api/assessors_login',
					method: 'POST',
					data: {
						phone: this.username,
						psw: this.password
					},
					success: (res) => {
						console.log(res); // 输出后端返回的数据
						if (res.data.code === 200) {
							uni.setStorageSync('token', res.data.data.token);
							uni.navigateTo({
								url: '/pages/assessment/addnumber'
							});
						} else {
							console.error('登录失败');
							// 处理登录失败逻辑，例如弹窗提示
						}
					},
					fail(err) {
						console.error('请求失败', err);
						// 处理请求失败逻辑，例如弹窗提示
					}
				});
			},
			gotoReg() {
				uni.navigateTo({
					url: '/pages/assessment/addnumber'
				});
			}
		}
	}
</script>

<style lang="scss">
.page {
	background: linear-gradient(to bottom, #29b6f6, #039be5);
	background-attachment: fixed;
	padding-bottom: 0;
}

.login-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
	background-color: #457bf9;
}

.login-content {
	width: 80%;
	padding: 25px;
	font-size: 15px;
	background-color: #ffffff;
	border-radius: 16px;
	box-shadow: 5px 5px 7px 0 rgba(0, 0, 0, 0.15);
	z-index: 9;

	.login-title {
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 24px;
	}

	.input-wrapper {
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

	.login-btn {
		font-size: 16px;
		background-color: #457bf9;
		color: #fff;
		height: 50px;
		line-height: 50px;
		border-radius: 25px;
		letter-spacing: 10px;
	}

	.reg-wrapper {
		color: #c0c0c0;
		margin-top: 10px;

		.reg-btn {
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
