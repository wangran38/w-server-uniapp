<template>
	<view class="container">
		<button class="assessment-btn" type="button" @click="gotoaddnumber">1.评估信息</button>
		<button class="assessment-btn" type="button" @click="gotoadddetail">2.评估信息对象基本信息</button>
		<button class="assessment-btn" type="button" @click="gotoaddlinkman">3.信息提供者及联系人信息表</button>
		<button class="assessment-btn" type="button" @click="gotoaddhealth">4.疾病诊断</button>
		<button class="assessment-btn" type="button" @click="gotoaddhealthrelated">5.健康相关问题</button>

		<!-- 		<button v-for="(item, index) in assessmentList" :key="index" 
			class="assessment-btn" type="button" @click="gotoOutline(item)">{{item.name}}
		</button> -->

		<button v-for="(item, index) in listdata" :key="index" class="assessment-btn" type="button"
			@click="gotoOutline(item)">{{item.kname}}
		</button>
	</view>
</template>

<script>
	import {
		getkpi
	} from '../../common/api/api.js';
	import {
		assessmentUtil
	} from '../../common/util.js'

	export default {
		data() {
			return {
				// assessmentList: assessmentUtil.getRootData(this.$store.state.assessmentFlatList),
				listdata: []
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			async initData() {
				const _this = this;
				// console.log('initData', this);
				// uni.request({
				// 	url: "/api/getkpi",
				// 	// url: "/api/getdictionary",
				// 	data: {
				// 		pid: 0
				// 	},
				// 	method: "POST",
				// 	success(res) {
				// 		_this.listdata = res.data.data.listdata;
				// 		console.log(_this.listdata)
				// 	}
				// });

				const a = await getkpi({
					"pid": 0
				});
				//console.log(a);
				_this.listdata = a.data.data.listdata;
				// const listdata = listdata.data.data.listdata;
				// console.log('initData', listdata);
			},
			gotoOutline(item) {
				uni.navigateTo({
					url: `/pages/assessment/outline?id=${item.id}`
				});
			},
			gotoaddnumber() {
				uni.navigateTo({
					url: `/pages/assessment/addnumber`
				});
			},
			gotoadddetail(item) {
				uni.navigateTo({
					url: `/pages/assessment/adddetail`
				});
			},
			gotoaddlinkman(item) {
				uni.navigateTo({
					url: `/pages/assessment/addlinkman`
				});
			},
			gotoaddhealth(item) {
				uni.navigateTo({
					url: `/pages/assessment/addhealth`
				});
			},
			gotoaddhealthrelated(item) {
				uni.navigateTo({
					url: `/pages/assessment/addhealthrelated`
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30px;
		height: 940px;
	}

	.assessment-btn {
		color: #fff;
		background-color: #457bf9;
		font-size: 18px;
		width: 100%;
		height: 60px;
		line-height: 60px;
		border-radius: 2px;
	}

	.assessment-btn:not(:first-child) {
		margin-top: 40px;
	}

	.assessment-btn:active {
		background-color: #2458d4;
	}
</style>