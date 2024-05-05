<template>
	<view class="content">
		<view class="form-group">
			<view class="title">评估编号</view>
			<input class="form-input" v-model="code" placeholder="请输入" placeholder-style="text-align: right;" />
			<!-- 			<picker @change="bindPickerChange" :value="index2" :range="arraylist">
				<view class="uni-input">{{arraylist[index2]}}</view>
			</picker> -->
		</view>
		<view class="form-group">
			<view class="title">评估日期</view>
			<view class="form-content" style="text-align: right">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ date }}</view>
				</picker>
			</view>
		</view>
		<view class="form-group">
			<view class="title">评估原因</view>
			<view class="form-content" style="text-align: right">
				<picker @change="bindPickerChange($event, 'index')" :value="index" :range="reasons">
					<view class="uni-input">{{ reasons[index] }}</view>
				</picker>
			</view>
		</view>
		<!-- <button style="background-color:#3274ff; border-radius: 25px;width: 80%;color: #fff;margin-top: 50px;"
			@click="qtj()">修改</button> -->
		<button style="
        background-color: #3274ff;
        border-radius: 25px;
        width: 80%;
        color: #fff;
        margin-top: 50px;
      " @click="qtj()">
			点击进入下一项
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true,
			});
			return {
				id: undefined,
				code: "",
				codetime: currentDate,
				// reasons: 0,
				date: currentDate,
				reasons: [
					"首次评估",
					"常规评估",
					"即时评估",
					"因对评估结果有疑问进行的复评",
					"其他原因",
				],
				index: 0,
			};
		},
		onLoad() {
			const token = uni.getStorageSync("token");
			if (!token) { // 如果token不存在，则跳转到登录页面
				uni.navigateTo({
					url: "/pages/login/index" // 假设登录页面路径为 "/pages/login"
				});
			} else { // 如果token存在，则继续执行页面加载逻辑
				this.checkNumberId();
			}
			console.log(token);
		},
		onShow() {
			// 添加onShow生命周期钩子
			this.loadSavedData(); // 在页面显示时加载保存的数据
		},
		computed: {
			startDate() {
				return this.getDate("start");
			},
			endDate() {
				return this.getDate("end");
			},
		},
		methods: {
			checkNumberId() {
				const _this = this;
				uni.getStorage({
					key: "number_id",
					success: function(res) {
						console.log(res.data);
						console.log("有");
						_this.id = res.data;
						_this.fetchMyNumber();
					},
					fail: function() {
						console.log("没有number_id");
					},
				});
			},
			fetchMyNumber() {
				const _this = this; // 保存组件实例的引用
				uni.request({
					url: "http://192.168.101.11:8088/api/my_number",
					method: "POST",
					data: {
						id: _this.id,
					},
					header: {
						Authorization: uni.getStorageSync("token"),
					},
					success: (res) => {
						console.log(res.data);
						// 处理从接口返回的数据
						// 例如，将数据赋值给相应的变量
						if (res.data.code === 200) {
							const myNumberData = res.data.data.listdata;
							_this.id = myNumberData.id;
							_this.code = myNumberData.code;
							// _this.codetime = myNumberData.codetime;
							// _this.date = myNumberData.date;
							// _this.reasons = myNumberData.reasons;
							_this.limit = myNumberData.limit;
							_this.page = myNumberData.page;
						}
					},
					fail(err) {
						console.log("err", err);
					},
				});
			},
			bindPickerChange: function(e) {
				console.log("picker发送选择改变，携带值为", e.detail.value);
				// this.reasons = e.detail.value
				// this.index = e.detail.value
				if (this.reasons && this.reasons.length > 0) {
					this.index = e.detail.value;
				} else {
					console.error("没有正确传出评估原因"); // 添加一个错误日志，以便调试
				}
			},
			bindDateChange: function(e) {
				console.log("bindDateChange发送选择改变，携带值为", e.detail.value);
				this.codetime = e.detail.value;
				this.date = e.detail.value;
			},
			qtj() {
				let data = {
					code: this.code,
					codetime: this.codetime,
					reasons: this.reasons[this.index],
				};
				console.log(data);
				uni.setStorageSync("saved_data", data);
				uni.request({
					url: "http://192.168.101.11:8088/api/add_numbercode",
					method: "POST",
					header: {
						Authorization: uni.getStorageSync("token"), // 设置Authorization字段
					},
					data: data,
					success: (res) => {
						console.log(res.data); // 输出模拟的用户列表数据
						if (res.data.code == 200) {
							uni.setStorage({
								key: "number_id",
								data: res.data.data,
							});
							uni.navigateTo({
								url: "./adddetail",
							});
						}
					},
					fail(err) {
						console.log("err", err);
					},
				});
			},
			bindTimeChange: function(e) {
				this.time = e.detail.value;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === "start") {
					year = year - 60;
				} else if (type === "end") {
					year = year + 2;
				}
				month = month > 9 ? month : "0" + month;
				day = day > 9 ? day : "0" + day;
				return `${year}-${month}-${day}`;
			},
			loadSavedData() {
				// 添加加载保存数据的方法
				const savedData = uni.getStorageSync("saved_data");
				if (savedData) {
					this.code = savedData.code;
					this.codetime = savedData.codetime;
					// this.date = savedData.date;
					// this.reasons = savedData.reasons;
					const reasonIndex = this.reasons.findIndex(reason => reason === savedData
						.reasons); // 修改为 savedData.reasons
					if (reasonIndex !== -1) {
						this.index = reasonIndex;
					}
				}
			},
		},
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.form-group {
		display: flex;
		line-height: 24px;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		border-bottom: 1px solid #eee;
		color: #666;
		padding: 16px 10px 16px 20px;
	}

	.form-group .form-name {}

	.form-group .form-content {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
	}

	.form-group2 {
		display: flex;
		flex-direction: column;
		line-height: 24px;
		align-items: center;
		justify-content: space-between;
		color: #666;
		padding: 16px 20px;
		background-color: #fff;
		margin: 12px 10px 0 10px;
		border-radius: 6px;
		box-shadow: 0 0 2px #ccc;
		width: calc(100vw - 20px);
	}

	.form-group2 .form-name {
		width: 100%;
		padding-bottom: 12px;
		border-bottom: 1px solid #eee;
		color: #000;
		font-size: 15px;
	}

	.form-group2 .form-content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex: 1;
		margin-top: 15px;
		width: 100%;
		padding: 10px 15px;
		background-color: #f8f8f8;
		border-radius: 4px;
	}

	.form-input {
		text-align: right;
		/* padding-right: 20px; */
	}

	.form-text {
		text-align: right;
	}

	.picker-text {
		font-size: 15px;
		text-align: right;
	}

	.icon-wrapper {
		display: flex;
		width: 20px;
		line-height: 50px;
		align-items: center;
		justify-content: center;
	}

	.radio-label {
		padding: 5px 0;
		display: flex;
		align-items: flex-start;
		font-size: 15px;
		justify-content: flex-start;
	}

	.radio-text {
		flex: 1;
	}

	.uni-radio-wrapper {
		display: inline-flex;
		align-items: flex-start;
		vertical-align: middle;
	}

	.uni-radio-input {
		margin-right: 10px;
		width: 18px;
		height: 18px;
		position: relative;
		margin-top: 2px;
	}
</style>