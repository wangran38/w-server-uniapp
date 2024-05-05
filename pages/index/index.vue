<template>
	<view class="intro-wrapper">
		<image class="banner" mode="widthFix" src="/static/banner.png"></image>
		<view class="intro">本小程序通过一系列精心设计的题目与测试，全面评估老年人的日常生活能力、认知功能、身体健康及心理状态，帮助用户更准确地了解老年人的自理能力及潜在健康风险。</view>
		<view class="intro">无论是老年人本人还是其家人、照护者、医护人员，都能从中获取重要参考，为制定个性化的照护计划和健康管理方案提供有力支持。</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			
		}
	}
</script>

<style>
	.intro-wrapper {
		padding: 20px 30px 20px;
		font-size: 16px;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	.banner {
		background-color: #eee;
		width: calc(100vw - 60px);
		height: calc((100vw - 60px) / 16 * 9);
	}

	.intro {
		margin-top: 20px;
	}
</style>