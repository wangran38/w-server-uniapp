<template>
	<view class="container">
		<view v-if="isLoggedIn">
			<view class="header">欢迎回来，{{ userName }}</view>
			<view class='function-item' @click="logout">
				<text>退出登录</text>
				<image class="form-arrow-right" src="/static/arrow-right.png"></image>
			</view>
		</view>
		<view v-else>
			<view class="header">请先登录</view>
			<view class='function-item' @click="gotoLogin">
				<text>登录</text>
				<image class="form-arrow-right" src="/static/arrow-right.png"></image>
			</view>
			<view class='function-item' @click="gotoRegister">
				<text>注册</text>
				<image class="form-arrow-right" src="/static/arrow-right.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoggedIn: false,
				userName: '',
			};
		},
		methods: {
			gotoLogin() {
				uni.navigateTo({
					url: '/pages/login/index'
				});
			},
			gotoRegister() {
				uni.navigateTo({
					url: '/pages/register/index'
				});
			},
			login() {
				// 这里模拟登录操作  
				// 在实际应用中，你需要调用登录接口，并处理登录成功或失败的情况  
				this.isLoggedIn = true;
				this.userName = '张三'; // 假设用户名是张三  
				uni.showToast({
					title: '登录成功',
					icon: 'success'
				});
			},
			logout() {
				// 退出登录操作  
				this.isLoggedIn = false;
				this.userName = '';
				uni.showToast({
					title: '已退出登录',
					icon: 'none'
				});
			}
		},
		created() {
			// 在页面创建时检查登录状态  
			// 这里你可以调用接口或从本地存储中获取登录状态  
			// 例如，从 uni.getStorageSync 获取登录状态  
			// const loginInfo = uni.getStorageSync('loginInfo');  
			// if (loginInfo && loginInfo.isLoggedIn) {  
			//   this.isLoggedIn = true;  
			//   this.userName = loginInfo.userName;  
			// }  
		}
	};
</script>

<style>
	.header {
		width: 100%;
		height: 160px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: linear-gradient(rgba(0, 122, 255, 0.6), #fff);
		border-bottom: 1px solid #eee;
	}

	.function-item {
		font-size: 16px;
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 25px;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-top: 8px;
		background-color: #fff;
	}
	
	.function-item:active {
		background-color: #ddd;
	}
</style>