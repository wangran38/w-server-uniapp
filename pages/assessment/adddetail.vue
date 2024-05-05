<template>
	<view class="common-layout">

		<view class="header">
			<view class="row">
				<a href="#">
					<h1>老人评估对象基本信息表</h1>
				</a>
			</view>
		</view>
		<view class="main">
			<view class="form-group">
				<view class="input-label">姓名</view>
				<input class="input-field" type="text" placeholder="请输入姓名" v-model="senior_name" />
			</view>

			<view class="form-group">
				<view class="input-label">性别</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'sexIndex')" :value="sexIndex" :range="gender"
						range-key="name">
						<view>{{ gender[sexIndex === 1 ? 1 : 0].name }}</view>
					</picker>
				</view>
			</view>
			
	<!-- 		<view class="form-group">
			    <view class="input-label">性别</view>
			    <view class="input-General">
			        <picker @change="bindPickerChange($event, 'sexIndex')" :value="sexIndex" range-key="name">
			            <view>{{ sexIndex === 1 ? '男' : '女' }}</view>
			            <picker-column :values="['女', '男']"></picker-column>
			        </picker>
			    </view>
			</view> -->

			<view class="form-group">
				<view class="input-label">出生日期</view>
				<view class="input-General">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view>{{ date }}</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">身高</view>
				<input class="input-field" type="number" placeholder="请输入身高(cm)" v-model.number="height" />
			</view>

			<view class="form-group">
				<view class="input-label">体重</view>
				<input class="input-field" type="number" placeholder="请输入体重(kg)" v-model.number="weight" />
			</view>

			<view class="form-group">
				<view class="input-label">民族</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'nationIndex')" :value="nationIndex" :range="nation"
						style="display: block;" range-key="name">
						<view>
							{{ nationIndex >= 0 ? nation[nationIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">宗教信仰</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'religiousIndex')" :value="religiousIndex"
						:range="religious" style="display: block;" range-key="name">
						<view>
							{{ religiousIndex >= 0 ? religious[religiousIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">文化程度</view>
				<view class="input-General">
					<!-- <view v-if="!culture.length" @click="getServerData('getlevel')">请选择</view> -->
					<picker @change="bindPickerChange($event, 'cultureIndex')" :value="cultureIndex" :range="culture"
						style="display: block;" range-key="name">
						<view>
							{{ cultureIndex >= 0 ? culture[cultureIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">居住情况</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'paymentIndex')" :value="paymentIndex" :range="payment"
						style="display: block;" range-key="name">
						<view>
							{{ paymentIndex >= 0 ? payment[paymentIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">婚姻情况</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'marriageIndex')" :value="marriageIndex" :range="marriage"
						style="display: block;" range-key="name">
						<view>
							{{ marriageIndex >=0 ? marriage[marriageIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">医疗支付情况</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'costIndex')" :value="costIndex" :range="cost"
						style="display: block;" range-key="name">
						<view>
							{{ costIndex >=0 ? cost[costIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>

			<view class="form-group">
				<view class="input-label">经济来源</view>
				<view class="input-General">
					<picker @change="bindPickerChange($event, 'economicIndex')" :value="economicIndex" :range="economic"
						style="display: block;" range-key="name">
						<view>
							{{ economicIndex >=0 ? economic[economicIndex].name : '请选择' }}
						</view>
					</picker>
				</view>
			</view>





			<!-- 其他表单项省略 -->

			<view style="margin-top: 30px; text-align: center">
				<button style="background-color:#3274ff; border-radius: 25px;width: 80%;color: #fff;margin-top: 50px;"
					@click="qtj()">点击进入下一项</button>
			</view>
		</view>
	</view>
</template>

<script>
	// import axios from "axios";
	// var level=[];
	// const requestTask = uni.request({
	// 	url: 'http://192.168.101.8:8088/api/getlevel', //仅为示例，并非真实接口地址。
	// 	method: 'POST',
	// 	success: function(res) {
	// 		console.log(res.data);
	// 		level=res.data.listdata;
	// 		// 使用map方法将数组转换为对象数组，对象的key为name
	// 		// let level = culture.map(item => {
	// 		//   return { name: item.title };
	// 		// });
	// 	}
	// });

	// 中断请求任务
	// requestTask.abort();

	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}

	export default {
		data() {
			return {
				level: [],
				// array: [],
				gender: [{
					name: '男',
					value: 1
				}, {
					name: '女',
					value: 0
				}],
				sexIndex: -1,


				nation: [],
				nationIndex: -1,


				// nation: [{
				// 	name: '汉'
				// }, {
				// 	name: '苗'
				// }, {
				// 	name: '其他'
				// }],
				// nationIndex: 0,

				// religion: [{
				// 	name: '1'
				// }, {
				// 	name: '2'
				// }, {
				// 	name: '其他'
				// }],
				// religionIndex: 0,
				religious: [],
				religiousIndex: -1,
				culture: [],
				/* 				culture: [{
									name: '小学'
								}, {
									name: '初中'
								}, {
									name: '高中'
								},{
									name: '其他'
								}], */
				cultureIndex: -1,

				payment: [],
				paymentIndex: -1,


				// live: [{
				// 	name: '独居'
				// }, {
				// 	name: '与子女同住'
				// }, {
				// 	name: '养老院'
				// }, {
				// 	name: '其他'
				// }],
				// liveIndex: 0,


				marriage: [],
				// marriage: [{
				// 	name: '未婚'
				// }, {
				// 	name: '已婚'
				// }, {
				// 	name: '其他'
				// }],
				marriageIndex: -1,

				// medical: [{
				// 	name: '未支付'
				// }, {
				// 	name: '已支付'
				// }, {
				// 	name: '其他'
				// }],
				// medicalIndex: 0,
				cost: [],
				costIndex: -1,


				// economic: [{
				// 	name: '种槟榔'
				// }, {
				// 	name: '割橡胶'
				// }, {
				// 	name: '其他'
				// }],
				// economicIndex: 0,
				economic: [],
				economicIndex: -1,

				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
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
		mounted() {
			this.getServerData('getlevel')
			// this.getServerData('getB')
			this.getServerData('getmarital')
			this.getServerData('getnation')
			this.getServerData('getpayment')
			this.getServerData('getcost')
			this.getServerData('geteconomic')
			this.getServerData('getreligious')
			// this.startDate = this.getDate('start')
			// this.endDate = this.getDate('end')
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
			bindPickerChange: function(e, prop) {
				console.log('culture');
				// if (prop === 'cultureIndex' || prop === "marriageIndex") {
				// 	this[prop] = parseInt(e.detail.value)
				// 	return;
				// }
				if (['cultureIndex', "marriageIndex", "nationIndex", "paymentIndex", "costIndex", "economicIndex"]
					.includes(prop)) {
					this[prop] = parseInt(e.detail.value)
					return;
				}
				this[prop] = e.detail.value
			},


			bindDateChange: function(e) {
				console.log('bindDateChange');
				this.date = e.detail.value;
			},

			qtj() {
				let data = {
					senior_name: this.senior_name,
					senior_gender: this.gender[this.sexIndex].value,
					// senior_gender: this.sexIndex === 1 ? '男' : '女',
					senior_dob: this.date,
					height: this.height,
					weight: this.weight,
					ethnic: this.nation[this.nationIndex].name,
					religion: this.religious[this.religiousIndex].name,
					culture: this.culture[this.cultureIndex].name,
					payment: this.payment[this.paymentIndex].name,
					marriage: this.marriage[this.marriageIndex].name,
					medical: this.cost[this.costIndex].name,
					economic: this.economic[this.economicIndex].name,
					code: this.code,
					codetime: this.codetime,
					reasons: this.reasons
				}
				console.log(data)
				uni.request({
					url: 'http://192.168.101.11:8088/api/add_seniorc',
					method: 'POST',
					header: {
						'Authorization': uni.getStorageSync('token') // 设置Authorization字段
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
							uni.navigateTo({
								url: './addlinkman'
							});
						}
					},
					fail(err) {
						console.log('err', err);
					}
				});
			},

			getlevel() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "title"
					},
					success(res) {
						console.log('requestTask', res);
						_this.culture = res.data.data.listdata;
					}
				})
			},
			getmarital() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "marital"
					},
					success(res) {
						_this.marriage = res.data.data.listdata;
						// _this.marriageIndex = 0;
					}
				})
			},
			getnation() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "nation"
					},
					success(res) {
						console.log('success', res);
						_this.nation = res.data.data.listdata;
						// _this.nationIndex = 0;
					}
				})
			},

			getpayment() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "payment"
					},
					success(res) {
						console.log('success', res);
						_this.payment = res.data.data.listdata;
						// _this.nationIndex = 0;
					}
				})
			},
			getcost() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "cost"
					},
					success(res) {
						console.log('success', res);
						_this.cost = res.data.data.listdata;
						// _this.nationIndex = 0;
					}
				})
			},
			geteconomic() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "economic"
					},
					success(res) {
						console.log('success', res);
						_this.economic = res.data.data.listdata;
						// _this.nationIndex = 0;
					}
				})
			},
			getreligious() {
				const _this = this;
				console.log('_this', _this);
				uni.request({
					url: 'http://192.168.101.11:8088/api/getdictionary',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						"codename": "religious"
					},
					success(res) {
						console.log('success', res);
						_this.religious = res.data.data.listdata;
						// _this.nationIndex = 0;
					}
				})
			},
			getServerData(apiName) {
				this[apiName]();
			},
		}
	};
</script>

<style scoped>
	.common-layout {
		height: 100%;
		width: 700rpx;
		margin: 0 auto;
		/* background: #063ea5; */
	}

	.header {
		height: 140rpx;
		margin-bottom: 10rpx;
	}

	.row {
		background-color: #7e1818;
		height: 110rpx;
		width: 100%;
		text-align: center;
		line-height: 100rpx;
	}

	a {
		text-decoration: none;
		color: black;
	}

	.main {
		padding: 0rpx 10px;

	}

	.form-group {
		height: 100rpx;
		width: 100%;
		/* background-color: #eb5d5d; */
		padding-top: 0rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #807e7e;
	}

	.form-group .input-label {
		padding-left: 10rpx;
		font-weight: bold;
	}

	.form-group .input-field {
		border: none;
		/* width: 180rpx; */
		height: 100rpx;
		outline: none;
		text-align: right;
	}

	.input-General {
		/* height: 100rpx;
  text-align: center;
  line-height: 100rpx; */
		display: flex;
		align-items: center;
		/* padding-right: 10px; */
	}
</style>