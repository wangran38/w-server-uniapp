<template>
	<view class="content">
		<view v-for="(item, index) in formList" :key="index" style="width: 100%;">
			<!--单行显示-->
			<view class="form-group" v-if="['text', 'date', 'radioPop', 'checkboxPop'].includes(item.inputType)">
				<text class="form-name">{{ (assessment.subIndexVisible ? (index + 1) + '.' : '') + item.name }}</text>
				<view class="form-content" v-if="item.inputType === 'text'">
					<input class="form-input" v-model="item.inputText" :placeholder="item.placeholder || '请输入'"
						placeholder-style="text-align: right;" />
				</view>
				<view class="form-content" v-if="item.inputType === 'date'">
					<picker mode="date" :value="item.inputText" style="display: block; flex: 1;"
						@change="bindDateChange($event, item)">
						<view class="picker-text">
							{{item.inputText || item.placeholder || '请选择'}}
						</view>
					</picker>
					<view class="icon-wrapper">
						<image class="form-arrow-right" src="/static/arrow-right.png"></image>
					</view>
				</view>
				<view class="form-content" v-if="['radioPop', 'checkboxPop'].includes(item.inputType)">
					<picker mode="selector" :range="item.children" range-key="name" style="display: block; flex: 1;"
						@change="bindPickerChange($event, item)">
						<view class="picker-text">
							{{item.inputText || item.placeholder || '请选择'}}
						</view>
					</picker>
					<view class="icon-wrapper">
						<image class="form-arrow-right" src="/static/arrow-right.png"></image>
					</view>
				</view>
			</view>
			<!--多行显示-->
			<view class="form-group2" v-if="item.inputType === 'radioList'">
				<text class="form-name">{{ (assessment.subIndexVisible ? (index + 1) : '') + '.' + item.name }}</text>
				<view class="form-content">
					<radio-group @change="radioChange">
						<label class="radio-label" v-for="(item2, index2) in item.children" :key="index2">
							<radio class="radio" :value="item2.value"><text class="radio-text">{{ item2.name }}</text>
							</radio>
						</label>
					</radio-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		isBlank,
		assessmentUtil
	} from '@/common/util.js';
	
	export default {
		data() {
			return {
				//评估测试列表，根据id可组装出一套评估或者某个分组评估
				assessmentList: [{
					id: '', //编码
					pid: '', //父级编码
					name: '', //名称
					desc: '', //描述
					type: '', //类型，category-目录,input-输入项,option-针对输入项的选择项
					subIndexVisible: false,
					score: '', //分数
					inputType: '', //输入类型，text/radio/radioPop/radioList/radioText/checkbox/checkboxPop/checkboxList/checkboxText/date
					inputText: '', //需要显示的输入文本
					inputValue: '', //需要记录的值
					level: '', //级别
					sortIndex: '', //排序
				}],
				fullAssessment: this.$store.state.assessmentTreeList,
				assessment: {},
				formList: [],
			}
		},
		onLoad(options) {
			if (!options.id) {
				return;
			}
			const assessment = assessmentUtil.findElementById(this.fullAssessment, options.id);
			if (isBlank(assessment)) {
				return;
			}
			this.assessment = assessment;
			if (Array.isArray(assessment.children)) {
				this.formList = assessment.children;
			}
			uni.setNavigationBarTitle({
				title: assessment.name
			});
		},
		methods: {
			bindDateChange(e, data) {
				data.inputText = e.detail.value;
				data.inputValue = e.detail.value;
			},
			bindPickerChange(e, data) {
				const index = parseInt(e.detail.value);
				data.inputText = data.children[index].name;
				data.inputValue = data.children[index].name;
			},
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.detail.value) {
			                    this.current = i;
			                    break;
			                }
			            }
			        }
			
		}
	}
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
		padding-right: 20px;
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