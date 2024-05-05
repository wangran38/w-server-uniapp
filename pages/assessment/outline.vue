<template>
	<view class="container">
		<view class="list-wrapper" v-for="(item, index) in assessmentTreeList" :key="index">
			<view class="header"  @click="gotoOutline(item)">{{ item.kname }}</view>
			<view class="list" v-if="item.Children && item.Children.length > 0">
				<view v-for="(child, childIndex) in item.Children" :key="childIndex">
					<radio-group @change="event=>radioChange(event, item, child)">
						<label class="list-item">
							<radio :value="[senior_id, number_id, kpi_id, kpiinfo_id, child.score]"
								:checked="item.value === child.score" />
							{{ child.score + '分：' + child.title }}
						</label>
					</radio-group>
				</view>
			</view>
		</view>

		<view class="sc">
			<text>总计得分{{ total }}</text>
		</view>
		<button style="background-color:#457bf9 ; color: white;" @click="submitAssessmentData">提交</button>
	</view>
</template>

<script>
	import {
		getkpi,
		submitAssessment
	} from '../../common/api/api.js';
	import {
		assessmentUtil
	} from '../../common/util.js'

	export default {
		data() {
			return {
				assessmentTreeList: [],
				senior_id: 0,
				number_id: 0,
				kpi_id: 0,
				kpiinfo_id: 0,
				selectedItems: [],
				score: 0,
			};
		},
		onLoad(options) {
			this.initData(options.id);
			this.senior_id = options.senior_id ? parseInt(options.senior_id) : 0;
			this.number_id = options.number_id ? parseInt(options.number_id) : 0;
			this.kpi_id = options.kpi_id ? parseInt(options.kpi_id) : 0;
			this.kpiinfo_id = options.kpiinfo_id ? parseInt(options.kpiinfo_id) : 0;
		},
		computed: {
			// 计算属性，判断是否有选中的列表项
			isAnyItemSelected() {
				return this.selectedItems.length > 0;
			},
			total() {
				// 计算总分时对 item.value 进行处理，避免 NaN
				return this.assessmentTreeList.reduce((sum, item) => {
					// 使用 Number(item.value) 将 item.value 转为数字，避免 NaN
					return sum + Number(item.value || 0);
				}, 0);
			}
		},
		methods: {
			async initData(id) {
				let numid = Number(id); //字符串转数字number 
				// const a = getkpi({
				//   "pid": numid,
				//   "limit": 100,
				//   page: 1,
				//   header: {
				//     'Authorization': uni.getStorageSync('token') // 设置Authorization字段
				//   }
				// });
				//
				getkpi({
					"pid": numid,
					"limit": 100,
					page: 1
				}).then(response => {
					console.log(response.data);
					this.assessmentTreeList = response.data.data.listdata;
				}).catch(error => {
					console.error('Error fetching data:', error);
				});
				//
				// this.assessmentTreeList = a.data.data.listdata;
				// console.log('initData', a);
			},
			// gotoDetail(id) {
			//   console.log(id)
			//   if (id === "97eaff6a-2436-457a-93a7-42be0c1e23e5") {
			//     uni.navigateTo({
			//       url: `/pages/assessment/addnumber?id=${id}`
			//     });
			//   } else if (id === "02e5e73e-b820-40aa-96fa-6f5552e76d39") {
			//     uni.navigateTo({
			//       url: `/pages/assessment/add-detail?id=${id}`
			//     });
			//   } else if (id === "091894f7-f9d4-457e-920d-55f20c6c461d") {
			//     uni.navigateTo({
			//       url: `/pages/assessment/addsan?id=${id}`
			//     });
			//   }
			//   uni.navigateTo({
			//     url: `/pages/assessment/outline?id=${id}`
			//   });
			// },
			gotoOutline(item) {
				if (item.Children.length<1) { //既item.Children.length=0时不能跳转，>1可以跳转
					uni.navigateTo({
						url: `/pages/assessment/outline?id=${item.id}`
						// url: `/pages/assessment/outline`
					});
				}


			},
			radioChange(e, item, child) {
				item.value = child.score;
				const [senior_id, number_id, kpi_id, kpiinfo_id, score] = e.detail.value;
				this.senior_id = senior_id;
				this.number_id = number_id;
				this.kpi_id = kpi_id;
				this.kpiinfo_id = kpiinfo_id;
			},
			async submitAssessmentData() {
				const assessmentData = this.assessmentTreeList.map(item => {
					return {
						senior_id: this.senior_id,
						number_id: this.number_id,
						kpi_id: this.kpi_id,
						kpiinfo_id: this.kpiinfo_id,
						score: item.value
					};
				});
				uni.request({
					url: 'http://192.168.101.11:8088/api/add_score_record',
					method: 'POST', // 或者 'GET', 'PUT', 'DELETE' 等
					data: assessmentData, // 请求体数据
					header: {
						'Authorization': uni.getStorageSync('token'), // 设置 Authorization header 包含 token
						'Content-Type': 'application/json' // 设置 Content-Type header
						// 还可以添加其他自定义 header
					},
					success: (res) => {
						console.log(res.data);
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
						}
					},
					fail: (err) => {
						console.error(err);
					}
				});
				// try {
				//   const response = await submitAssessment(assessmentData);
				//   console.log('提交成功', response);
				//   // 在这里添加成功提示或其他逻辑
				// } catch (error) {
				//   console.error('提交失败', error);
				//   // 在这里添加失败提示或其他逻辑
				// }
			}
		},
		// onLoad(options) {
		// 	this.initData(options.id);
		// 	this.senior_id = options.senior_id ? parseInt(options.senior_id) : 0;
		// 	this.number_id = options.number_id ? parseInt(options.number_id) : 0;
		// 	this.kpi_id = options.kpi_id ? parseInt(options.kpi_id) : 0;
		// 	this.kpiinfo_id = options.kpiinfo_id ? parseInt(options.kpiinfo_id) : 0;
		// }
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20px 20px;
	}

	.list-wrapper {
		border-radius: 10px;
		background-color: #fff;
		overflow: hidden;
		width: 100%;
		box-shadow: 0 0 2px #ddd;
	}

	.list-wrapper:not(:first-child) {
		margin-top: 20px;
	}

	.header {
		background-color: #457bf9;
		font-size: 88%;
		font-weight: 700;
		// height: 60px;
		line-height: 50px;
		padding-left: 20px;
		color: #fff;
	}

	.list {
		padding: 6px 0;
	}

	.list-item {
		background-color: #eaecef;
		padding-left: 20px;
		margin: 20px 25px;
		border-radius: 4px;
		height: 68px;
		line-height: 30px;
		display: block;
	}

	.list-item:active {
		background-color: #ccc;
	}
</style>