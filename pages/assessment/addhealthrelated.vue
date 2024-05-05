<template>
	<view class="content">
		<view class="form-group">
			<view class="title">压力性损伤</view>
			<view class="form-content" style="text-align: right">
				<picker mode="selector" @change="bindPickerChange($event, 'pressureinjuryIndex')" :value="pressureinjuryIndex" :range="pressureinjury">
					<view class="uni-input">{{ pressureinjury[pressureinjuryIndex] }}</view>
				</picker>
			</view>
		</view>
		<view class="form-group">
			<view class="title">关节活动度</view>
			<view class="form-content" style="text-align: right">
				<picker @change="bindPickerChange($event, 'jointIndex')" :value="jointIndex" :range="joint">
					<view class="uni-input">{{ joint[jointIndex] }}</view>
				</picker>
			</view>
		</view>
		<view class="form-group">
			<view class="title">关节影响部位</view>
			<view class="form-content" style="text-align: right">
				<picker @change="bindPickerChange($event, 'affectedareaIndex')" :value="affectedareaIndex" :range="affectedarea">
					<view class="uni-input">{{ affectedarea[affectedareaIndex] }}</view>
				</picker>
			</view>
		</view>
		<view class="form-group">
			<view class="title">伤口情况</view>
			<view class="form-content" style="text-align: right">
				<picker @change="bindPickerChange($event, 'woundconditionIndex')" :value="woundconditionIndex" :range="woundcondition">
					<view class="uni-input">{{ woundcondition[woundconditionIndex] }}</view>
				</picker>
			</view>
		</view>
		<view class="form-group">
			<view class="title">特殊护理</view>
			<view class="form-content" style="text-align: right">
				<picker @change="bindPickerChange($event, 'specialcareIndex')" :value="specialcareIndex" :range="specialcare">
					<view class="uni-input">{{ specialcare[specialcareIndex] }}</view>
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
				// code: "",
				// codetime: currentDate,
				// // reasons: 0,
				// date: currentDate,
				pressureinjury: ['无', 'I期:皮肤完好，出现指压不会变白的红印', 'II期:皮肤真皮层损失、暴露、出现水疱', 'Ⅲ期:全层皮肤缺失，可见脂肪、肉芽组织以及边缘内卷',
					'IV期:全层皮肤、组织缺失。可见肌腱、肌肉腱膜，以及边缘内卷，伴随隧道、潜行', '不可分期:全身皮肤、组织被腐肉、焦掩盖，无法确认组织缺失程度，去除腐肉、焦痂才可判断损伤程度'
				],
				pressureinjuryIndex: 0,
				joint: ['无', '是', '无法判断'],
				jointIndex: 0,
				affectedarea: ['无', '左上肢', '左下肢', '右上肢', '右下肢', '无法判断'],
				affectedareaIndex: 0,
				woundcondition: ['无', '擦伤', '烧烫伤', '术后伤口', '糖尿病足溃疡', '血管性溃疡', '其他伤口'],
				woundconditionIndex: 0,
				specialcare: ['无', '胃管', '尿管', '气管切开', '胃/肠/膀胱造瘘', '无创呼吸机', '透析', '其他'],
				specialcareIndex: 0,
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
			saveFormData() {
				const dataToSave = {
					pressureinjuryIndex: this.pressureinjuryIndex,
					jointIndex: this.jointIndex,
					affectedareaIndex: this.affectedareaIndex,
					woundconditionIndex: this.woundconditionIndex,
					specialcareIndex: this.specialcareIndex
				};
				uni.setStorageSync('saved_data', dataToSave);
			},
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
			bindPickerChange: function(e,prop) {
				console.log("picker发送选择改变，携带值为", e.detail.value);
				// const {
				// 	value
				// } = e.detail;
				// const {
				// 	pressureinjuryIndex,
				// 	jointIndex,
				// 	affectedareaIndex,
				// 	woundconditionIndex,
				// 	specialcareIndex
				// } = value;
				// this.pressureinjuryIndex = pressureinjuryIndex;
				// this.jointIndex = jointIndex;
				// this.affectedareaIndex = affectedareaIndex;
				// this.woundconditionIndex = woundconditionIndex;
				// this.specialcareIndex = specialcareIndex;
				if (['pressureinjuryIndex', "jointIndex", "affectedareaIndex", "woundconditionIndex", "specialcareIndex"]
					.includes(prop)) {
					// this[prop] = parseInt(e.detail.value)
					this[prop] = e.detail.value
					this.saveFormData(); 
				 }
				// else {
				// 	this[prop] = e.detail.value
				// }
				
			},
			// bindDateChange: function(e) {
			// 	console.log("bindDateChange发送选择改变，携带值为", e.detail.value);
			// 	this.codetime = e.detail.value;
			// 	this.date = e.detail.value;
			// },
			qtj() {
				let data = {
					// code: this.code,
					// codetime: this.codetime,
					// reasons: this.reasons[this.index],
					pressureinjury: this.pressureinjury[this.pressureinjuryIndex],
					joint: this.joint[this.jointIndex],
					affectedarea: this.affectedarea[this.affectedareaIndex],
					woundcondition: this.woundcondition[this.woundconditionIndex],
					specialcare: this.specialcare[this.specialcareIndex]
				};
				console.log(data);
				uni.setStorageSync("saved_data", data);
				uni.request({
					url: "http://192.168.101.11:8088/api/addhealthrelated",
					method: "POST",
					header: {
						Authorization: uni.getStorageSync("token"), // 设置Authorization字段
					},
					data: data,
					success: (res) => {
						console.log(res.data); // 输出模拟的用户列表数据
						if (res.data.code == 200) {
							// 弹出提交成功的消息提示
							uni.showToast({
								title: '提交成功',
								icon: 'success',
								duration: 2000, // 显示时长，单位为毫秒
								success() {
							
									// 提示框关闭后的回调函数，可以在这里进行一些操作
									console.log('提交成功提示框已关闭');
								}
							});
							uni.setStorage({
								key: "number_id",
								data: res.data.data,
							});
							uni.navigateTo({
								url: "./outline",
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
					// this.code = savedData.code;
					// this.codetime = savedData.codetime;
					// // this.date = savedData.date;
					// // this.reasons = savedData.reasons;
					// const reasonIndex = this.reasons.findIndex(reason => reason === savedData
					// 	.reasons); // 修改为 savedData.reasons
					// if (reasonIndex !== -1) {
					// 	this.index = reasonIndex;
					// }
					this.pressureinjuryIndex = savedData.pressureinjuryIndex || 0;
					this.jointIndex = savedData.jointIndex || 0;
					this.affectedareaIndex = savedData.affectedareaIndex || 0;
					this.woundconditionIndex = savedData.woundconditionIndex || 0;
					this.specialcareIndex = savedData.specialcareIndex || 0;
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