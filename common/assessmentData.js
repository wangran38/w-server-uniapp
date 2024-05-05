import {
	uuid,
	copyJson,
} from "./util";

const a01 = {
	name: "评估信息",
	type: "category",
	children: [{
			name: "评估编号",
			type: "input",
			inputType: "text",
		},
		{
			name: "评估基准日期",
			type: "input",
			inputType: "date",
			defaultInputText: "$currentDate",
			defaultInputValue: "$currentDate",
		},
		{
			name: "评估原因",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "首次评估",
					type: "option",
					inputType: "radio",
				},
				{
					name: "常规评估",
					type: "option",
					inputType: "radio",
				},
				{
					name: "即时评估",
					type: "option",
					inputType: "radio",
				},
				{
					name: "因对评估结果有疑问进行的复评",
					type: "option",
					inputType: "radio",
				},
				{
					name: "其他",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const a02 = {
	name: "评估对象基本信息",
	type: "category",
	children: [{
			name: "姓名",
			type: "input",
			inputType: "text",
		},
		{
			name: "性别",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "男",
					type: "option",
					inputType: "radio",
				},
				{
					name: "女",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "出生日期",
			type: "input",
			inputType: "date",
			defaultInputText: "$currentDate",
			defaultInputValue: "$currentDate",
		},
		{
			name: "身高",
			type: "input",
			inputType: "text",
			placeholder: "请填写身高（cm）",
		},
		{
			name: "体重",
			type: "input",
			inputType: "text",
			placeholder: "请填写体重（kg）",
		},
		{
			name: "民族",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "请选择",
					value: "",
					type: "option",
					inputType: "radio",
				},
				{
					name: "汉",
					type: "option",
					inputType: "radio",
				},
				{
					name: "少数民族",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "宗教信仰",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "请选择",
					value: "",
					type: "option",
					inputType: "radio",
				},
				{
					name: "无",
					type: "option",
					inputType: "radio",
				},
				{
					name: "有",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "文化程度",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "请选择",
					value: "",
					type: "option",
					inputType: "radio",
				},
				{
					name: "文盲",
					type: "option",
					inputType: "radio",
				},
				{
					name: "小学",
					type: "option",
					inputType: "radio",
				},
				{
					name: "初中",
					type: "option",
					inputType: "radio",
				},
				{
					name: "高中/技校/中专",
					type: "option",
					inputType: "radio",
				},
				{
					name: "大学专科及以上",
					type: "option",
					inputType: "radio",
				},
				{
					name: "不详",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "居住情况(多选)",
			type: "input",
			inputType: "checkboxPop",
			children: [{
					name: "独居",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "与配偶居住",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "与子女居住",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "高中/技校/中专",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "大学专科及以上",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "不详",
					type: "option",
					inputType: "checkbox",
				},
			],
		},
		{
			name: "婚姻状况",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "未婚",
					type: "option",
					inputType: "radio",
				},
				{
					name: "已婚",
					type: "option",
					inputType: "radio",
				},
				{
					name: "丧偶",
					type: "option",
					inputType: "radio",
				},
				{
					name: "离婚",
					type: "option",
					inputType: "radio",
				},
				{
					name: "未说明",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "医疗费用支付方式（多选）",
			type: "input",
			inputType: "checkboxPop",
			children: [{
					name: "城镇职工基本医疗保险",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "城乡居民基本医疗保险",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "自费",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "公务员补助",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "企业补充保险",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "公费医疗及医疗照顾对象",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "医疗救助",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "大病保险",
					type: "option",
					inputType: "checkbox",
				},
			],
		},
		{
			name: "经济来源(多选)",
			type: "input",
			inputType: "checkboxPop",
			children: [{
					name: "退休金/养老金",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "子女补贴",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "亲友资助",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "国家普惠型补贴",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "个人储蓄",
					type: "option",
					inputType: "checkbox",
				},
				{
					name: "其他补贴",
					type: "option",
					inputType: "checkbox",
				},
			],
		},
		//近30天内照护风险事件
	],
};

const a03 = {
	name: "信息提供者及联系人信息表",
	type: "category",
	children: [{
			name: "信息提供者的姓名",
			type: "input",
			inputType: "text",
		},
		{
			name: "信息提供者与老年人的关系",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "本人",
					type: "option",
					inputType: "radio",
				},
				{
					name: "配偶",
					type: "option",
					inputType: "radio",
				},
				{
					name: "子女",
					type: "option",
					inputType: "radio",
				},
				{
					name: "其他亲属",
					type: "option",
					inputType: "radio",
				},
				{
					name: "雇佣照顾者",
					type: "option",
					inputType: "radio",
				},
				{
					name: "村(居)民委员会工作人员",
					type: "option",
					inputType: "radio",
				},
				{
					name: "其他",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "联系人姓名",
			type: "input",
			inputType: "text",
		},
		{
			name: "联系人电话",
			type: "input",
			inputType: "text",
		},
	],
};

const a04 = {
	name: "疾病诊断(可多选)",
	type: "category",
	children: [{
		name: "信息提供者与老年人的关系",
		type: "input",
		inputType: "checkboxPop",
		children: [{
				name: "高血压病I10～I15",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "冠心病I25",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "糖尿病E10～E14 ",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "肺炎J12～J18",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "慢性阻塞性肺疾病J44",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "脑出血I60～I62",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "脑梗塞I63",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "尿路感染（30天内）",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "帕金森综合征G20～G22",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "慢性肾衰竭N18～N19",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "肝硬化K74",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "消化性溃疡K20～K31",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "肿瘤C00～D48",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "截肢（6个月内）",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "骨折（3个月内）M84",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "癫痫G40",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "甲状腺功能减退症E01～E03",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "白内障H25～H26",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "青光眼H40～H42",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "骨质疏松症M80～82",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "痴呆F00～F03",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "其他精神和行为障碍F04～F99",
				type: "option",
				inputType: "checkbox",
			},
			{
				name: "其他",
				type: "option",
				inputType: "checkbox",
			},
			//需补充用药情况
		],
	}, ],
};

const a05 = {
	name: "健康相关问题",
	type: "category",
	children: [{
			name: "压力性损伤",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "无",
					type: "option",
					inputType: "radio",
				},
				{
					name: "I期：皮肤完好，出现指压不会变白的红印",
					type: "option",
					inputType: "radio",
				},
				{
					name: "Ⅱ期：皮肤真皮层损失、暴露，出现水疱",
					type: "option",
					inputType: "radio",
				},
				{
					name: "Ⅲ期：全层皮肤缺失，可见脂肪、肉芽组织以及边缘内卷",
					type: "option",
					inputType: "radio",
				},
				{
					name: "IV期：全层皮肤、组织缺失，可见肌腱、肌肉、腱膜，以及边缘内卷，伴随隧道、 潜行",
					type: "option",
					inputType: "radio",
				},
				{
					name: "不可分期：全身皮肤、组织被腐肉、焦痂掩盖，无法确认组织缺失程度，去除腐 肉、焦痂才可判断损伤程度",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "关节活动度",
			type: "input",
			inputType: "radioPop",
			children: [{
					name: "无",
					type: "option",
					inputType: "radio",
				},
				{
					name: "是",
					type: "option",
					inputType: "radio",
				},
				{
					name: "无法判断",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const b01 = {
	name: "自理能力",
	type: "category",
	subIndexVisible: true,
	children: [{
			name: "进食：使用适当的器具将食物送入口中并咽下",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立使用器具将食物送进口中并咽下，没有呛咳",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成，或独立使用辅具，没有呛咳",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：进食中需要少量接触式协助，偶尔(每月一次及以上)呛咳",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：在进食中需要大量接触式协助，经常(每周一次及以上)呛咳",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助进食，或吞咽困难，或留置营养管",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "修饰：洗脸、刷牙、梳头、刮脸、剪指(趾)甲等",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "洗澡：清洗和擦干身体",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "穿/脱上衣：穿/脱上身衣服、系扣、拉拉链等",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "穿/脱裤子和鞋袜：穿/脱裤子、鞋袜等",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "小便控制：控制和排出尿液的能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：可自行控制排尿，排尿次数、排尿控制均正常",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：白天可自行控制排尿次数，夜间出现排尿次数增多、排尿控制较差，或自行使用尿布、尿垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：白天大部分时间可自行控制排尿，偶出现（每天<1次，但每周>1次）尿失禁，夜间控制排尿较差，或他人少量协助使用尿布、尿 垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：白天大部分时间不能控制排尿（每天≥1次，但尚非完全失控），夜间出现尿失禁，或他人大量协助使用尿布、尿垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：小便失禁，完全不能控制排尿，或留置导尿管",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "大便控制：控制和排出粪便的能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：可正常自行控制大便排出",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：有时出现(每周<1次)便秘或大便失禁，或自行使用开塞露、 尿垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：经常出现(每天<1次，但每周>1次)便秘或大便失禁，或他人 少量协助使用开塞露、尿垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：大部分时间均出现(每天≥1次)便秘或大便失禁，但尚非完全 失控，或他人大量协助使用开塞露、尿垫等辅助用物",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：严重便秘或者完全大便失禁，需要依赖他人协助排便或清洁皮肤",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "如厕：上厕所排泄大小便，并清洁身体",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要他人协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const b02 = {
	name: "基础运动能力",
	type: "category",
	subIndexVisible: true,
	children: [{
			name: "床上体位转移：卧床翻身及坐起躺下",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要他人协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "床椅转移：从坐位到站位，再从站位到坐位的转换过程",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立完成，不需要他人协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：主要依靠他人协助，自身能给予配合",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "平地行走：双脚交互的方式在地面行动，总是一只脚在前",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：独立平地步行50m左右，不需要协助，无摔倒风险",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：能平地步行50m左右，存在摔倒风险，需要他人监护或 指导，或使用拐杖、助行器等辅助工具",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：在步行时需要他人少量扶持协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：在步行时需要他人大量扶持协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全不能步行",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "上下楼梯：双脚交替完成楼梯台 阶连续的上下移动",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "3分：可独立上下楼梯(连续上下10个～15个台阶)，不需要协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：在他人指导或提示下完成",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：需要他人协助，但以自身完成为主",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：主要依靠他人协助，自身能给予配合；或者完全依赖他 人协助，且不能给予配合",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const b03 = {
	name: "精神状态",
	type: "category",
	subIndexVisible: true,
	children: [{
			name: "时间定向：知道并确认时间的能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：时间观念（年、月）清楚，日期（或星期几）可相差一天",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：时间观念有些下降，年、月、日（或星期几）不能全部分清(相差两 天或以上)",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：时间观念较差，年、月、日不清楚，可知上半年或下半年或季节",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：时间观念很差，年、月、日不清楚，可知上午、下午或白天、夜间",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：无时间观念",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "空间定向：知道并确认空间的能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：能在日常生活范围内单独外出，如在日常居住小区内独自外出购物等",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：不能单独外出，但能准确知道自己日常生活所在地的地址信息",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：不能单独外出，但知道较多有关自己日常生活的地址信息",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：不能单独外出，但知道较少自己居住或生活所在地的地址信息",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：不能单独外出，无空间观念",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "人物定向：知道并确认人物的能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：认识长期共同一起生活的人，能称呼并知道关系",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：能认识大部分共同生活居住的人，能称呼或知道关系",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：能认识部分日常同住的亲人或照护者等，能称呼或知道关系等",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：只认识自己或极少数日常同住的亲人或照护者等",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：不认识任何人(包括自己)",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "记忆：短时、近期和远期记忆能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：总是能保持与社会、年龄所适应的记忆能力，能完整的回忆",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：出现轻度的记忆紊乱或回忆不能（不能回忆即时信息，3个词语 经过5分钟后仅能回忆0个～1个）",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：出现中度的记忆紊乱或回忆不能（不能回忆近期记忆，不记得上 一顿饭吃了什么）",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：出现重度的记忆紊乱或回忆不能（不能回忆远期记忆，不记得自 已的老朋友）",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：记忆完全紊乱或者完全不能对既往事物进行正确的回忆",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "理解能力：理解语言信息和非语言信息的能力(可借助平时使用助听设备等)，即理解别人的话",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：能正常理解他人的话",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：能理解他人的话，但需要增加时间",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：理解有困难，需频繁重复或简化口头表达",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：理解有严重困难，需要大量他人帮助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全不能理解他人的话",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "表达能力：表达信息能力，包括口头的和非口头的，即表达自己的想法",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：能正常表达自己的想法",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：能表达自己的需要，但需要增加时间",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：表达需要有困难，需频繁重复或简化口头表达",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：表达有严重困难，需要大量他人帮助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全不能表达需要",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "攻击行为：身体攻击行为(如打/踢/推/咬/抓/摔 东西)和语言攻击行 为(如骂人、语言威胁、尖叫)",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "1分：未出现",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：近一个月内出现过攻击行为",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "抑郁症状：存在情绪低落、兴趣  减退、活力减退等症状，甚至出现妄想、 幻觉、自杀念头或自 杀行为",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "1分：未出现",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：近一个月内出现过负性情绪",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "意识水平：机体对自身和周围环境的刺激做出应答反应的能力程度，包括清醒和持续的觉醒状态",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "2分：神志清醒，对周围环境能做出正确反应",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：嗜睡，表现为睡眠状态过度延长。当呼唤或推动老年人的肢体时可唤醒，并能进行正确的交谈或执行指令，停止刺激后又继续入睡；意识模糊，注意力涣散，对外界刺激不能清晰的认识，空间和时间定向力障碍，理解力迟钝，记忆力模糊和不连贯",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态；或者昏迷：意识丧失，随意运动丧失，对一般刺激全无反应",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const b04 = {
	name: "感知觉与社会参与",
	type: "category",
	subIndexVisible: true,
	children: [{
			name: "视力：感受存在的光线，并感受物体的大小、形状的能力。在个体的最好矫正视力下进行评估",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "2分：视力正常",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：能看清楚大字体，但看不清书报上的标准字体；视力有限，看不清报纸大标题，但能辨认物体",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：只能看到光、颜色和形状；完全失明",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "听力：能辨别声音的方位、音调、音量和音质的有关能力（可借助平时使用助听设备等）",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "2分：听力正常",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：在轻声说话或说话距离超过2米时听不清；正常交流有些 困难，需在安静的环境或大声说话才能听到",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：讲话者大声说话或说话很慢，才能部分听见；完全失聪",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "执行日常事务：计划、安排并完成日常事务，包括但不限于洗衣服、小金额购物、服药管理",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：能完全独立计划、安排和完成日常事务，无需协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：在计划、安排和完成日常事务时需要他人监护或指导",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：在计划、安排和完成日常事务时需要少量协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：在计划、安排和完成日常事务时需要大量协助",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：完全依赖他人进行日常事务",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "使用交通工具外出",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "3分：能自己骑车或搭乘公共交通工具外出",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：能自己搭乘出租车，但不会搭乘其他公共交通工具外出",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：当有人协助或陪伴，可搭乘公共交通工具外出",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：只能在他人协助下搭乘出租车或私家车外出；完全不能出门，或者外出完全需要协助",
					type: "option",
					inputType: "radio",
				},
			],
		},
		{
			name: "社会交往能力",
			type: "input",
			inputType: "radioList",
			children: [{
					name: "4分：参与社会，在社会环境有一定的适应能力，待人接物恰当",
					type: "option",
					inputType: "radio",
				},
				{
					name: "3分：能适应单纯环境，主动接触他人，初见面时难让人发现智力问题，不能理解隐喻语",
					type: "option",
					inputType: "radio",
				},
				{
					name: "2分：脱离社会，可被动接触，不会主动待他人，谈话中很多不适词句，容易上当受骗",
					type: "option",
					inputType: "radio",
				},
				{
					name: "1分：勉强可与他人接触，谈吐内容不清楚，表情不恰当",
					type: "option",
					inputType: "radio",
				},
				{
					name: "0分：不能与人交往",
					type: "option",
					inputType: "radio",
				},
			],
		},
	],
};

const originAssessmentGb2022 = {
	// #ifdef H5
	id: uuid(),
	// #endif
	name: "老年人能力评估国内标准2022版",
	type: "category",
	children: [{
			name: "老年人基本信息",
			type: "category",
			children: [a01, a02, a03, a04, a05],
		},
		{
			name: "老年人能力评估",
			type: "category",
			children: [b01, b02, b03, b04],
		},
	],
};

const originAssessmentFlatList = [];
const originAssessmentTreeList = [
	originAssessmentGb2022
];

// #ifdef H5
fixAssessment(originAssessmentGb2022, originAssessmentFlatList, 0, 0);
function fixAssessment(node, list, parentId = null, level = 0) {
	node.id = node.id || uuid();
	node.pid = parentId;
	node.level = level;
	const clonedNode = copyJson(node);
	delete clonedNode.children;
	list.push(clonedNode);

	// 遍历子节点  
	if (node.children) {
		node.children.forEach((child) => {
			// 递归调用函数，为子节点分配 id 和 level  
			fixAssessment(child, list, node.id, level + 1);
		});
	}
}
// #endif

// export const assessmentFlatList = originAssessmentFlatList;
// export const assessmentTreeList = originAssessmentTreeList;

export const assessmentFlatList = [{
	"id": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
	"name": "老年人能力评估国内标准2022版",
	"type": "category",
	"pid": 0,
	"level": 0
}, {
	"name": "老年人基本信息",
	"type": "category",
	"id": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"pid": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
	"level": 1
}, {
	"name": "评估信息",
	"type": "category",
	"id": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
	"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"level": 2
}, {
	"name": "评估编号",
	"type": "input",
	"inputType": "text",
	"id": "61c516a7-2d8a-4f47-b76a-b0925f865355",
	"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
	"level": 3
}, {
	"name": "评估基准日期",
	"type": "input",
	"inputType": "date",
	"defaultInputText": "$currentDate",
	"defaultInputValue": "$currentDate",
	"id": "e07f8cf2-bc40-4231-bc3c-373dfddf772e",
	"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
	"level": 3
}, {
	"name": "评估原因",
	"type": "input",
	"inputType": "radioPop",
	"id": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
	"level": 3
}, {
	"name": "首次评估",
	"type": "option",
	"inputType": "radio",
	"id": "c1ff1135-a7dc-48fa-9827-e36d82bff336",
	"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"level": 4
}, {
	"name": "常规评估",
	"type": "option",
	"inputType": "radio",
	"id": "2b698434-5a56-4954-ae81-76c5c14f3706",
	"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"level": 4
}, {
	"name": "即时评估",
	"type": "option",
	"inputType": "radio",
	"id": "70e378bb-a767-4ad6-8287-1367b2f0478e",
	"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"level": 4
}, {
	"name": "因对评估结果有疑问进行的复评",
	"type": "option",
	"inputType": "radio",
	"id": "894cfb79-894a-455d-a6f0-c2e0304c7d61",
	"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"level": 4
}, {
	"name": "其他",
	"type": "option",
	"inputType": "radio",
	"id": "f5317225-506c-42e1-873e-56c8d0bcbef5",
	"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
	"level": 4
}, {
	"name": "评估对象基本信息",
	"type": "category",
	"id": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"level": 2
}, {
	"name": "姓名",
	"type": "input",
	"inputType": "text",
	"id": "cc4664a2-a0e9-4ea5-bb2a-ab94bdbbed5b",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "性别",
	"type": "input",
	"inputType": "radioPop",
	"id": "62a49263-a218-4965-a7ea-a17d7159f880",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "男",
	"type": "option",
	"inputType": "radio",
	"id": "4fdd4645-66c4-4ae7-b85c-0cc6106de1ba",
	"pid": "62a49263-a218-4965-a7ea-a17d7159f880",
	"level": 4
}, {
	"name": "女",
	"type": "option",
	"inputType": "radio",
	"id": "a33ac476-b82f-4823-8ede-56defa04065b",
	"pid": "62a49263-a218-4965-a7ea-a17d7159f880",
	"level": 4
}, {
	"name": "出生日期",
	"type": "input",
	"inputType": "date",
	"defaultInputText": "$currentDate",
	"defaultInputValue": "$currentDate",
	"id": "46c92903-b424-4a3c-9779-b34b7d5789b1",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "身高",
	"type": "input",
	"inputType": "text",
	"placeholder": "请填写身高（cm）",
	"id": "6d9b2a85-3846-4939-bbc0-b9cad438fb50",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "体重",
	"type": "input",
	"inputType": "text",
	"placeholder": "请填写体重（kg）",
	"id": "3190b6f6-f739-4b5d-a3ad-10a11fa34404",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "民族",
	"type": "input",
	"inputType": "radioPop",
	"id": "ea482cf9-1960-4a14-b040-08c54ca01caa",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "请选择",
	"value": "",
	"type": "option",
	"inputType": "radio",
	"id": "25e5c33f-3955-4df3-8abd-c310f40e0e5d",
	"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
	"level": 4
}, {
	"name": "汉",
	"type": "option",
	"inputType": "radio",
	"id": "80e404ed-fd98-4984-aa36-e52bfe21f5ac",
	"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
	"level": 4
}, {
	"name": "少数民族",
	"type": "option",
	"inputType": "radio",
	"id": "cc6963e8-b78c-4217-b8c9-206030cc9b08",
	"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
	"level": 4
}, {
	"name": "宗教信仰",
	"type": "input",
	"inputType": "radioPop",
	"id": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "请选择",
	"value": "",
	"type": "option",
	"inputType": "radio",
	"id": "2918bec1-7aed-4861-80c1-33ca5d6f007a",
	"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
	"level": 4
}, {
	"name": "无",
	"type": "option",
	"inputType": "radio",
	"id": "267f6500-7f49-43c7-b8c6-4272ef1324cf",
	"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
	"level": 4
}, {
	"name": "有",
	"type": "option",
	"inputType": "radio",
	"id": "dc267e3d-5d0b-40d0-809e-c76cb2ae60a8",
	"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
	"level": 4
}, {
	"name": "文化程度",
	"type": "input",
	"inputType": "radioPop",
	"id": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "请选择",
	"value": "",
	"type": "option",
	"inputType": "radio",
	"id": "03887180-d020-4b69-884d-37d650b38aa2",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "文盲",
	"type": "option",
	"inputType": "radio",
	"id": "6ab63045-d020-49b1-9c45-5403062005f5",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "小学",
	"type": "option",
	"inputType": "radio",
	"id": "24e1fc71-dcbb-44ba-b3fc-4a694a2728f5",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "初中",
	"type": "option",
	"inputType": "radio",
	"id": "64a925f1-da92-4e3e-83ed-b3cc915394ee",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "高中/技校/中专",
	"type": "option",
	"inputType": "radio",
	"id": "425ed443-695e-4972-abac-821309fe6bc3",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "大学专科及以上",
	"type": "option",
	"inputType": "radio",
	"id": "955fe3cf-d83b-4c35-a9d8-aed99146640f",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "不详",
	"type": "option",
	"inputType": "radio",
	"id": "ff3f1399-3d62-4e8f-9060-b3c796cf6f2b",
	"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
	"level": 4
}, {
	"name": "居住情况(多选)",
	"type": "input",
	"inputType": "checkboxPop",
	"id": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "独居",
	"type": "option",
	"inputType": "checkbox",
	"id": "741d776e-d9b3-4410-a341-8b95b24baf1d",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "与配偶居住",
	"type": "option",
	"inputType": "checkbox",
	"id": "c0b1c17b-1098-4708-89fe-2d55a4163912",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "与子女居住",
	"type": "option",
	"inputType": "checkbox",
	"id": "66eb2015-9f93-433f-baca-362a19228e77",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "高中/技校/中专",
	"type": "option",
	"inputType": "checkbox",
	"id": "2a45fa8e-269f-4bb8-83d6-272a6c9d794a",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "大学专科及以上",
	"type": "option",
	"inputType": "checkbox",
	"id": "89eea87d-55b7-453d-9dc1-e0a3d136ea06",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "不详",
	"type": "option",
	"inputType": "checkbox",
	"id": "27bcc180-477e-4d05-b5be-0d4ddc2536fd",
	"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
	"level": 4
}, {
	"name": "婚姻状况",
	"type": "input",
	"inputType": "radioPop",
	"id": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "未婚",
	"type": "option",
	"inputType": "radio",
	"id": "7b8fa5b3-eab6-44fb-88ad-bea1995f4e32",
	"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"level": 4
}, {
	"name": "已婚",
	"type": "option",
	"inputType": "radio",
	"id": "320ae24d-b6a0-4d0d-b267-c704269c5e7e",
	"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"level": 4
}, {
	"name": "丧偶",
	"type": "option",
	"inputType": "radio",
	"id": "19ce45b2-fc31-4cae-a6a8-80a07ad19457",
	"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"level": 4
}, {
	"name": "离婚",
	"type": "option",
	"inputType": "radio",
	"id": "d8a4f59c-63d2-42e5-820e-63839ed429d6",
	"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"level": 4
}, {
	"name": "未说明",
	"type": "option",
	"inputType": "radio",
	"id": "c9609d4a-e8f1-4aad-ac37-0c9b60635f64",
	"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
	"level": 4
}, {
	"name": "医疗费用支付方式（多选）",
	"type": "input",
	"inputType": "checkboxPop",
	"id": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "城镇职工基本医疗保险",
	"type": "option",
	"inputType": "checkbox",
	"id": "4d3d33e1-9ee3-4678-926a-a222893eae17",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "城乡居民基本医疗保险",
	"type": "option",
	"inputType": "checkbox",
	"id": "6dda5dde-b6a6-47b3-a483-ec1f3e6e0768",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "自费",
	"type": "option",
	"inputType": "checkbox",
	"id": "e89e9cec-42e0-4d4d-8128-a1cf126906a9",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "公务员补助",
	"type": "option",
	"inputType": "checkbox",
	"id": "09e4468a-5f54-425b-a1de-29d384fc8d66",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "企业补充保险",
	"type": "option",
	"inputType": "checkbox",
	"id": "640868a2-8b0a-4de7-8d03-c737f519a38a",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "公费医疗及医疗照顾对象",
	"type": "option",
	"inputType": "checkbox",
	"id": "3c305a0e-4337-42f3-babc-c07fdb47edad",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "医疗救助",
	"type": "option",
	"inputType": "checkbox",
	"id": "3a0a0c0c-43d1-4ca3-a955-9d55455eecd7",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "大病保险",
	"type": "option",
	"inputType": "checkbox",
	"id": "20ae4339-991f-4491-8daf-269998b9bad9",
	"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
	"level": 4
}, {
	"name": "经济来源(多选)",
	"type": "input",
	"inputType": "checkboxPop",
	"id": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
	"level": 3
}, {
	"name": "退休金/养老金",
	"type": "option",
	"inputType": "checkbox",
	"id": "06dbec16-5a7b-440e-aac0-a32c5e583b65",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "子女补贴",
	"type": "option",
	"inputType": "checkbox",
	"id": "c1fa2047-a91e-4584-b058-2701d82380c9",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "亲友资助",
	"type": "option",
	"inputType": "checkbox",
	"id": "9d2c23c1-f2fa-45c5-964c-bf4c544f9dc7",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "国家普惠型补贴",
	"type": "option",
	"inputType": "checkbox",
	"id": "93cb99a1-0cb4-4c33-9170-abf8d628bcb5",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "个人储蓄",
	"type": "option",
	"inputType": "checkbox",
	"id": "30fb32bb-9cc4-47d0-ac45-eae8d865f34b",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "其他补贴",
	"type": "option",
	"inputType": "checkbox",
	"id": "5805a6f5-79b1-40ef-a30d-5c43e3486ff1",
	"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
	"level": 4
}, {
	"name": "信息提供者及联系人信息表",
	"type": "category",
	"id": "091894f7-f9d4-457e-920d-55f20c6c461d",
	"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"level": 2
}, {
	"name": "信息提供者的姓名",
	"type": "input",
	"inputType": "text",
	"id": "31d116fb-6270-462b-87ff-7a5696a17dae",
	"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
	"level": 3
}, {
	"name": "信息提供者与老年人的关系",
	"type": "input",
	"inputType": "radioPop",
	"id": "78996777-a9f5-4190-a998-2887d1a5e943",
	"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
	"level": 3
}, {
	"name": "本人",
	"type": "option",
	"inputType": "radio",
	"id": "0191f5ba-4ac4-4ed9-9592-c033b7b1105f",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "配偶",
	"type": "option",
	"inputType": "radio",
	"id": "66bc89ca-a496-4be1-9f4d-89b836ec31d9",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "子女",
	"type": "option",
	"inputType": "radio",
	"id": "fa0a6aab-3112-4e6a-b833-b6babaa95e11",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "其他亲属",
	"type": "option",
	"inputType": "radio",
	"id": "82a34788-9870-480c-bd2c-fe95fc15fc37",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "雇佣照顾者",
	"type": "option",
	"inputType": "radio",
	"id": "e30c2947-9615-464f-97fa-88df2a81e004",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "村(居)民委员会工作人员",
	"type": "option",
	"inputType": "radio",
	"id": "22cf5908-8293-48a6-984b-d5f17db890ef",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "其他",
	"type": "option",
	"inputType": "radio",
	"id": "34ff4929-31d4-4094-8db9-4e7a7096f177",
	"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
	"level": 4
}, {
	"name": "联系人姓名",
	"type": "input",
	"inputType": "text",
	"id": "c177905c-43f3-4135-a92d-735fe7c64816",
	"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
	"level": 3
}, {
	"name": "联系人电话",
	"type": "input",
	"inputType": "text",
	"id": "4a54345f-968e-4975-b4f5-937eaff60ad4",
	"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
	"level": 3
}, {
	"name": "疾病诊断(可多选)",
	"type": "category",
	"id": "f6bbf476-b593-4aad-9caf-281c22860f6b",
	"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"level": 2
}, {
	"name": "信息提供者与老年人的关系",
	"type": "input",
	"inputType": "checkboxPop",
	"id": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"pid": "f6bbf476-b593-4aad-9caf-281c22860f6b",
	"level": 3
}, {
	"name": "高血压病I10～I15",
	"type": "option",
	"inputType": "checkbox",
	"id": "dfe1e22b-b8cc-4bd7-835b-e03c9fcfa369",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "冠心病I25",
	"type": "option",
	"inputType": "checkbox",
	"id": "d7b2d03a-7e01-4df0-863f-04915d4ca998",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "糖尿病E10～E14 ",
	"type": "option",
	"inputType": "checkbox",
	"id": "28cde1b3-c04e-4df5-a678-a0695b80af95",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "肺炎J12～J18",
	"type": "option",
	"inputType": "checkbox",
	"id": "4a07994f-7515-49bb-8e11-140435b60845",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "慢性阻塞性肺疾病J44",
	"type": "option",
	"inputType": "checkbox",
	"id": "da3e9747-44f8-40e2-bc24-cea3790fcf37",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "脑出血I60～I62",
	"type": "option",
	"inputType": "checkbox",
	"id": "45076c81-8b34-4542-8444-16cf2f2b4492",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "脑梗塞I63",
	"type": "option",
	"inputType": "checkbox",
	"id": "965ddbea-f10e-4e8a-9ad8-c0fbc33516e7",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "尿路感染（30天内）",
	"type": "option",
	"inputType": "checkbox",
	"id": "b21d6b53-9dad-41c3-b3b8-f98d2127b391",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "帕金森综合征G20～G22",
	"type": "option",
	"inputType": "checkbox",
	"id": "fcf5e242-dca8-4be9-884b-e208d6e581fe",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "慢性肾衰竭N18～N19",
	"type": "option",
	"inputType": "checkbox",
	"id": "37e25ae9-76ea-4418-857b-ef18aacc5261",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "肝硬化K74",
	"type": "option",
	"inputType": "checkbox",
	"id": "fff6db44-8e69-4ad3-a558-cd7dbe08ebbd",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "消化性溃疡K20～K31",
	"type": "option",
	"inputType": "checkbox",
	"id": "d8903a4d-4930-4ac1-84e6-e82c0826fea5",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "肿瘤C00～D48",
	"type": "option",
	"inputType": "checkbox",
	"id": "1c2c7c82-94d3-4a6c-9612-a89cc99b94c7",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "截肢（6个月内）",
	"type": "option",
	"inputType": "checkbox",
	"id": "0b85be8a-1925-4b1d-a330-3cb467a1b25b",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "骨折（3个月内）M84",
	"type": "option",
	"inputType": "checkbox",
	"id": "b60016cb-60c6-4431-a7c2-886ab1b4888e",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "癫痫G40",
	"type": "option",
	"inputType": "checkbox",
	"id": "0ea72a3e-39ed-4403-a76c-3b05ac7827d5",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "甲状腺功能减退症E01～E03",
	"type": "option",
	"inputType": "checkbox",
	"id": "8838aa9b-cd75-465a-b676-67d55fafac33",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "白内障H25～H26",
	"type": "option",
	"inputType": "checkbox",
	"id": "bc8168b5-fa20-4dd0-ad40-ba3ece08f5fd",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "青光眼H40～H42",
	"type": "option",
	"inputType": "checkbox",
	"id": "50c3fccb-483c-4b75-872d-8312a15fe550",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "骨质疏松症M80～82",
	"type": "option",
	"inputType": "checkbox",
	"id": "27afafe3-8175-4f2c-a4a5-e616361d78d8",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "痴呆F00～F03",
	"type": "option",
	"inputType": "checkbox",
	"id": "d882bd39-035c-4d86-87c5-6c3e4fb73db4",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "其他精神和行为障碍F04～F99",
	"type": "option",
	"inputType": "checkbox",
	"id": "d576cea9-cc5c-4883-a306-e2032d013a16",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "其他",
	"type": "option",
	"inputType": "checkbox",
	"id": "40d855cc-7c17-4350-9a24-7b37a8b4c61f",
	"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
	"level": 4
}, {
	"name": "健康相关问题",
	"type": "category",
	"id": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
	"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
	"level": 2
}, {
	"name": "压力性损伤",
	"type": "input",
	"inputType": "radioPop",
	"id": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"pid": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
	"level": 3
}, {
	"name": "无",
	"type": "option",
	"inputType": "radio",
	"id": "d0b88f89-7b20-478e-9c22-387bbacda3e3",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "I期：皮肤完好，出现指压不会变白的红印",
	"type": "option",
	"inputType": "radio",
	"id": "e64f02cc-e0eb-4073-a553-6c17135d02f5",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "Ⅱ期：皮肤真皮层损失、暴露，出现水疱",
	"type": "option",
	"inputType": "radio",
	"id": "843c103b-f54a-458b-b846-78d9181a8f59",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "Ⅲ期：全层皮肤缺失，可见脂肪、肉芽组织以及边缘内卷",
	"type": "option",
	"inputType": "radio",
	"id": "055271b2-3eb5-4e5b-918b-b01037d6f73a",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "IV期：全层皮肤、组织缺失，可见肌腱、肌肉、腱膜，以及边缘内卷，伴随隧道、 潜行",
	"type": "option",
	"inputType": "radio",
	"id": "e76fd218-648e-44a2-b2d8-0ef396404be7",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "不可分期：全身皮肤、组织被腐肉、焦痂掩盖，无法确认组织缺失程度，去除腐 肉、焦痂才可判断损伤程度",
	"type": "option",
	"inputType": "radio",
	"id": "d0c86200-6b26-4052-9e7b-f9c9cd8c9947",
	"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
	"level": 4
}, {
	"name": "关节活动度",
	"type": "input",
	"inputType": "radioPop",
	"id": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
	"pid": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
	"level": 3
}, {
	"name": "无",
	"type": "option",
	"inputType": "radio",
	"id": "fe588e0f-22a0-47ff-a50c-781584dbd28e",
	"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
	"level": 4
}, {
	"name": "是",
	"type": "option",
	"inputType": "radio",
	"id": "50191eef-8379-4006-a8e1-23378b31a775",
	"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
	"level": 4
}, {
	"name": "无法判断",
	"type": "option",
	"inputType": "radio",
	"id": "f49db8be-11cc-4ad6-8573-f731b3d1494e",
	"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
	"level": 4
}, {
	"name": "老年人能力评估",
	"type": "category",
	"id": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
	"pid": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
	"level": 1
}, {
	"name": "自理能力",
	"type": "category",
	"subIndexVisible": true,
	"id": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
	"level": 2
}, {
	"name": "进食：使用适当的器具将食物送入口中并咽下",
	"type": "input",
	"inputType": "radioList",
	"id": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立使用器具将食物送进口中并咽下，没有呛咳",
	"type": "option",
	"inputType": "radio",
	"id": "f80d5037-40b5-48f6-b4b5-f4dd731cb67f",
	"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成，或独立使用辅具，没有呛咳",
	"type": "option",
	"inputType": "radio",
	"id": "29e4ce49-724a-4262-8b4c-9ec28d222f4f",
	"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"level": 4
}, {
	"name": "2分：进食中需要少量接触式协助，偶尔(每月一次及以上)呛咳",
	"type": "option",
	"inputType": "radio",
	"id": "9dc9a6c1-d6d8-45f6-8d96-8fb582e2850a",
	"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"level": 4
}, {
	"name": "1分：在进食中需要大量接触式协助，经常(每周一次及以上)呛咳",
	"type": "option",
	"inputType": "radio",
	"id": "945a3575-f53f-4ff0-9c4a-bdada3ac7bac",
	"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助进食，或吞咽困难，或留置营养管",
	"type": "option",
	"inputType": "radio",
	"id": "c7dbd499-b5bd-4bf7-a693-1387e1d5f6ff",
	"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
	"level": 4
}, {
	"name": "修饰：洗脸、刷牙、梳头、刮脸、剪指(趾)甲等",
	"type": "input",
	"inputType": "radioList",
	"id": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立完成，不需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "4c2d3549-9f8e-444b-b8a0-21ed2237bbc5",
	"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "1bfd6b25-ea2e-44aa-a8f4-e277fdadec5f",
	"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "f1d1c03e-1c4e-486d-ab90-bd363b4d3d81",
	"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "d66920e0-d79b-42b5-bafe-4b5e3c31270c",
	"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "bb5c0b17-ad54-47fd-a893-e4e3667a82b4",
	"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
	"level": 4
}, {
	"name": "洗澡：清洗和擦干身体",
	"type": "input",
	"inputType": "radioList",
	"id": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立完成，不需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "3dc93e87-afdd-47a1-9930-eb1de3b06e31",
	"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "d2830970-069d-40c8-92c5-7ec5f45710b8",
	"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "89d744fa-a408-4c3f-850d-355cce3a3c2e",
	"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "d983d115-dc1e-4187-88b1-5714a56d2600",
	"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "49e4b2dc-876f-449b-9d88-c8fe35bcc781",
	"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
	"level": 4
}, {
	"name": "穿/脱上衣：穿/脱上身衣服、系扣、拉拉链等",
	"type": "input",
	"inputType": "radioList",
	"id": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立完成，不需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "e05666dd-cf09-4144-beda-8ac2a0b03cbb",
	"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "b4b589bb-6f3b-4a1b-934f-f4794d5d88d3",
	"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "6d0a2c7f-5db1-4337-be4d-b3549623c44d",
	"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "91dbd3c2-504c-44f2-a549-0969fdc8761c",
	"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "a77fa239-cd6f-434b-b581-7ccc1c3f8922",
	"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
	"level": 4
}, {
	"name": "穿/脱裤子和鞋袜：穿/脱裤子、鞋袜等",
	"type": "input",
	"inputType": "radioList",
	"id": "21820d98-daea-40f0-85f1-ee70993233b0",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立完成，不需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "29948b74-dfc8-4bb2-9ebb-e65ccb8d8906",
	"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "06ea41ce-6fcb-4991-99c8-029d678e0c4f",
	"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "80229800-ee56-4f18-9934-d677f647dc44",
	"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "ec4ca4a3-d59a-41f6-86b5-c67974e5d74c",
	"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "076ec9d1-4d03-4014-88d2-d881e19e8413",
	"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
	"level": 4
}, {
	"name": "小便控制：控制和排出尿液的能力",
	"type": "input",
	"inputType": "radioList",
	"id": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：可自行控制排尿，排尿次数、排尿控制均正常",
	"type": "option",
	"inputType": "radio",
	"id": "eb8f8d90-a686-4440-8b0d-c0e59701663e",
	"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"level": 4
}, {
	"name": "3分：白天可自行控制排尿次数，夜间出现排尿次数增多、排尿控制较差，或自行使用尿布、尿垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "099d40b3-9924-4f4d-901e-1bfd129ecac7",
	"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"level": 4
}, {
	"name": "2分：白天大部分时间可自行控制排尿，偶出现（每天<1次，但每周>1次）尿失禁，夜间控制排尿较差，或他人少量协助使用尿布、尿 垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "9585fc7e-847e-4f36-af8d-ce5c37782377",
	"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"level": 4
}, {
	"name": "1分：白天大部分时间不能控制排尿（每天≥1次，但尚非完全失控），夜间出现尿失禁，或他人大量协助使用尿布、尿垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "dd8549c8-564b-41f4-9f7d-4f8d86f49902",
	"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"level": 4
}, {
	"name": "0分：小便失禁，完全不能控制排尿，或留置导尿管",
	"type": "option",
	"inputType": "radio",
	"id": "3c4a260a-faf2-4301-b53f-67410639105f",
	"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
	"level": 4
}, {
	"name": "大便控制：控制和排出粪便的能力",
	"type": "input",
	"inputType": "radioList",
	"id": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：可正常自行控制大便排出",
	"type": "option",
	"inputType": "radio",
	"id": "ca3c1ebe-ea2e-4308-b498-d4f21d92135a",
	"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"level": 4
}, {
	"name": "3分：有时出现(每周<1次)便秘或大便失禁，或自行使用开塞露、 尿垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "8a313bbc-6f19-4b02-a095-994f201b706b",
	"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"level": 4
}, {
	"name": "2分：经常出现(每天<1次，但每周>1次)便秘或大便失禁，或他人 少量协助使用开塞露、尿垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "8772659f-abdf-4ca2-999b-d2ffc0dc7b33",
	"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"level": 4
}, {
	"name": "1分：大部分时间均出现(每天≥1次)便秘或大便失禁，但尚非完全 失控，或他人大量协助使用开塞露、尿垫等辅助用物",
	"type": "option",
	"inputType": "radio",
	"id": "c91d25c7-4c33-490b-ac19-b39409fa23dc",
	"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"level": 4
}, {
	"name": "0分：严重便秘或者完全大便失禁，需要依赖他人协助排便或清洁皮肤",
	"type": "option",
	"inputType": "radio",
	"id": "ff984461-aa3f-43be-9f27-2a1a3847db8b",
	"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
	"level": 4
}, {
	"name": "如厕：上厕所排泄大小便，并清洁身体",
	"type": "input",
	"inputType": "radioList",
	"id": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
	"level": 3
}, {
	"name": "4分：独立完成，不需要他人协助",
	"type": "option",
	"inputType": "radio",
	"id": "11764f7d-ea03-4994-9488-4af7db65e8f2",
	"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "8d7d73bb-327e-4ade-8979-bdb8e81e892a",
	"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "ebe155fb-8b42-4491-a4aa-18fbed293ad0",
	"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "f5c9bdad-6837-4e3f-85be-4bd85709fc83",
	"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "aca2763b-6fd7-4831-b2b5-931e7c23fb71",
	"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
	"level": 4
}, {
	"name": "基础运动能力",
	"type": "category",
	"subIndexVisible": true,
	"id": "99d61f41-86f1-4453-b938-d7def0639adb",
	"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
	"level": 2
}, {
	"name": "床上体位转移：卧床翻身及坐起躺下",
	"type": "input",
	"inputType": "radioList",
	"id": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
	"level": 3
}, {
	"name": "4分：独立完成，不需要他人协助",
	"type": "option",
	"inputType": "radio",
	"id": "b1993034-237e-411d-a386-f8da8fb92af5",
	"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "2e8eccfa-add3-4dda-8c78-e3a21141be2f",
	"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "1860fc46-5ae6-481b-9c59-e282437669b2",
	"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "9014aa72-10d8-4965-8ed1-0b11bad901b1",
	"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "78148c33-2cac-4ab2-b7a6-de7673f37e72",
	"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
	"level": 4
}, {
	"name": "床椅转移：从坐位到站位，再从站位到坐位的转换过程",
	"type": "input",
	"inputType": "radioList",
	"id": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
	"level": 3
}, {
	"name": "4分：独立完成，不需要他人协助",
	"type": "option",
	"inputType": "radio",
	"id": "a98e0bc3-5304-4b26-9eb3-cd06592a0bd9",
	"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"level": 4
}, {
	"name": "3分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "0f63f087-5f72-48fc-b9b7-57e24f25bb29",
	"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"level": 4
}, {
	"name": "2分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "e574d56d-c38d-4e6f-b95c-7ca8088339ea",
	"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"level": 4
}, {
	"name": "1分：主要依靠他人协助，自身能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "a2ccee2c-3491-4f5b-9a84-19f250412ca7",
	"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"level": 4
}, {
	"name": "0分：完全依赖他人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "ebaffa82-5aaa-4403-bbb9-d9f73b3495ba",
	"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
	"level": 4
}, {
	"name": "平地行走：双脚交互的方式在地面行动，总是一只脚在前",
	"type": "input",
	"inputType": "radioList",
	"id": "5072b731-079f-4240-81d0-715909ac30cf",
	"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
	"level": 3
}, {
	"name": "4分：独立平地步行50m左右，不需要协助，无摔倒风险",
	"type": "option",
	"inputType": "radio",
	"id": "2d415b7c-87f1-4277-92c1-3ffd3c727c97",
	"pid": "5072b731-079f-4240-81d0-715909ac30cf",
	"level": 4
}, {
	"name": "3分：能平地步行50m左右，存在摔倒风险，需要他人监护或 指导，或使用拐杖、助行器等辅助工具",
	"type": "option",
	"inputType": "radio",
	"id": "f68c5b67-1009-42f6-8ca5-85e853a310b3",
	"pid": "5072b731-079f-4240-81d0-715909ac30cf",
	"level": 4
}, {
	"name": "2分：在步行时需要他人少量扶持协助",
	"type": "option",
	"inputType": "radio",
	"id": "c1f259dd-75e1-4959-8d1a-1950030a2b61",
	"pid": "5072b731-079f-4240-81d0-715909ac30cf",
	"level": 4
}, {
	"name": "1分：在步行时需要他人大量扶持协助",
	"type": "option",
	"inputType": "radio",
	"id": "3b8ccbbd-5703-46c9-bc6e-b0c6cc94914e",
	"pid": "5072b731-079f-4240-81d0-715909ac30cf",
	"level": 4
}, {
	"name": "0分：完全不能步行",
	"type": "option",
	"inputType": "radio",
	"id": "eb204d69-b7ed-45e1-8a76-d4db28c31582",
	"pid": "5072b731-079f-4240-81d0-715909ac30cf",
	"level": 4
}, {
	"name": "上下楼梯：双脚交替完成楼梯台 阶连续的上下移动",
	"type": "input",
	"inputType": "radioList",
	"id": "c03fc942-6644-4ae9-9adb-f438d8438450",
	"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
	"level": 3
}, {
	"name": "3分：可独立上下楼梯(连续上下10个～15个台阶)，不需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "2e215d35-abab-4f00-9198-11361cfe10f0",
	"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
	"level": 4
}, {
	"name": "2分：在他人指导或提示下完成",
	"type": "option",
	"inputType": "radio",
	"id": "8601f5c5-3962-453e-88cc-0122dacc7f1e",
	"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
	"level": 4
}, {
	"name": "1分：需要他人协助，但以自身完成为主",
	"type": "option",
	"inputType": "radio",
	"id": "a13d6fe5-4fd9-4ead-8343-44c42bfab98b",
	"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
	"level": 4
}, {
	"name": "0分：主要依靠他人协助，自身能给予配合；或者完全依赖他 人协助，且不能给予配合",
	"type": "option",
	"inputType": "radio",
	"id": "78b83571-4f9f-46db-9c80-2534334902e5",
	"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
	"level": 4
}, {
	"name": "精神状态",
	"type": "category",
	"subIndexVisible": true,
	"id": "11edad40-ac5d-4b83-a946-793820827671",
	"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
	"level": 2
}, {
	"name": "时间定向：知道并确认时间的能力",
	"type": "input",
	"inputType": "radioList",
	"id": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：时间观念（年、月）清楚，日期（或星期几）可相差一天",
	"type": "option",
	"inputType": "radio",
	"id": "3ed1a27e-b02f-4582-a679-ea190f995bc2",
	"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"level": 4
}, {
	"name": "3分：时间观念有些下降，年、月、日（或星期几）不能全部分清(相差两 天或以上)",
	"type": "option",
	"inputType": "radio",
	"id": "6cefd909-2889-443d-9e14-52824770d4e7",
	"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"level": 4
}, {
	"name": "2分：时间观念较差，年、月、日不清楚，可知上半年或下半年或季节",
	"type": "option",
	"inputType": "radio",
	"id": "e42198a0-d3e9-4bbf-9c91-eebb04423d4a",
	"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"level": 4
}, {
	"name": "1分：时间观念很差，年、月、日不清楚，可知上午、下午或白天、夜间",
	"type": "option",
	"inputType": "radio",
	"id": "abb3c868-12f7-4ca0-adc0-0a76d2a49421",
	"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"level": 4
}, {
	"name": "0分：无时间观念",
	"type": "option",
	"inputType": "radio",
	"id": "700863df-bb16-4ab2-ad58-5651634a6de6",
	"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
	"level": 4
}, {
	"name": "空间定向：知道并确认空间的能力",
	"type": "input",
	"inputType": "radioList",
	"id": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：能在日常生活范围内单独外出，如在日常居住小区内独自外出购物等",
	"type": "option",
	"inputType": "radio",
	"id": "c65304ba-ccca-49cf-b1cc-351969e4e4f7",
	"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"level": 4
}, {
	"name": "3分：不能单独外出，但能准确知道自己日常生活所在地的地址信息",
	"type": "option",
	"inputType": "radio",
	"id": "6acc1d8d-e246-402f-8d06-ee44e2777a5b",
	"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"level": 4
}, {
	"name": "2分：不能单独外出，但知道较多有关自己日常生活的地址信息",
	"type": "option",
	"inputType": "radio",
	"id": "76cc3534-f0bf-4284-b42e-5ef69a52ea36",
	"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"level": 4
}, {
	"name": "1分：不能单独外出，但知道较少自己居住或生活所在地的地址信息",
	"type": "option",
	"inputType": "radio",
	"id": "c5d5882f-bcea-4bf9-b0a7-fd21a12b6a0f",
	"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"level": 4
}, {
	"name": "0分：不能单独外出，无空间观念",
	"type": "option",
	"inputType": "radio",
	"id": "02bdee50-730e-45f7-afb2-d4ca2dcc0414",
	"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
	"level": 4
}, {
	"name": "人物定向：知道并确认人物的能力",
	"type": "input",
	"inputType": "radioList",
	"id": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：认识长期共同一起生活的人，能称呼并知道关系",
	"type": "option",
	"inputType": "radio",
	"id": "8761e3dd-5098-42d1-8450-7e9bdfd36a33",
	"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"level": 4
}, {
	"name": "3分：能认识大部分共同生活居住的人，能称呼或知道关系",
	"type": "option",
	"inputType": "radio",
	"id": "c4632a4c-1e85-4511-8127-cc86f9d8b3c2",
	"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"level": 4
}, {
	"name": "2分：能认识部分日常同住的亲人或照护者等，能称呼或知道关系等",
	"type": "option",
	"inputType": "radio",
	"id": "7f3e28ca-b16d-45a8-a46c-0bd5a46b5a1b",
	"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"level": 4
}, {
	"name": "1分：只认识自己或极少数日常同住的亲人或照护者等",
	"type": "option",
	"inputType": "radio",
	"id": "65713c99-5a71-4269-a131-f05593254e7a",
	"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"level": 4
}, {
	"name": "0分：不认识任何人(包括自己)",
	"type": "option",
	"inputType": "radio",
	"id": "a636566c-8052-4a57-a26a-c87a8c940ad3",
	"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
	"level": 4
}, {
	"name": "记忆：短时、近期和远期记忆能力",
	"type": "input",
	"inputType": "radioList",
	"id": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：总是能保持与社会、年龄所适应的记忆能力，能完整的回忆",
	"type": "option",
	"inputType": "radio",
	"id": "ff7ae3f3-7f61-411a-ac16-ca3ddbc573b1",
	"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"level": 4
}, {
	"name": "3分：出现轻度的记忆紊乱或回忆不能（不能回忆即时信息，3个词语 经过5分钟后仅能回忆0个～1个）",
	"type": "option",
	"inputType": "radio",
	"id": "1073d916-8e59-49e0-95eb-3b8da35afb79",
	"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"level": 4
}, {
	"name": "2分：出现中度的记忆紊乱或回忆不能（不能回忆近期记忆，不记得上 一顿饭吃了什么）",
	"type": "option",
	"inputType": "radio",
	"id": "84160f19-3ba1-41fb-a357-b2d8965b16a0",
	"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"level": 4
}, {
	"name": "1分：出现重度的记忆紊乱或回忆不能（不能回忆远期记忆，不记得自 已的老朋友）",
	"type": "option",
	"inputType": "radio",
	"id": "971c5eb5-bf86-4226-ad55-b736ff742469",
	"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"level": 4
}, {
	"name": "0分：记忆完全紊乱或者完全不能对既往事物进行正确的回忆",
	"type": "option",
	"inputType": "radio",
	"id": "0fc11b3d-052e-41d5-8efa-72f91896ab31",
	"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
	"level": 4
}, {
	"name": "理解能力：理解语言信息和非语言信息的能力(可借助平时使用助听设备等)，即理解别人的话",
	"type": "input",
	"inputType": "radioList",
	"id": "501c224e-fa4d-46ce-b381-171103e09afb",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：能正常理解他人的话",
	"type": "option",
	"inputType": "radio",
	"id": "786d5a4d-4359-4b99-96e2-a9c63a506bfc",
	"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
	"level": 4
}, {
	"name": "3分：能理解他人的话，但需要增加时间",
	"type": "option",
	"inputType": "radio",
	"id": "44e97f30-3d9a-46b9-b61b-ed32838d976f",
	"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
	"level": 4
}, {
	"name": "2分：理解有困难，需频繁重复或简化口头表达",
	"type": "option",
	"inputType": "radio",
	"id": "ca69b13d-6d24-4bff-9534-6bb3aa7e863a",
	"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
	"level": 4
}, {
	"name": "1分：理解有严重困难，需要大量他人帮助",
	"type": "option",
	"inputType": "radio",
	"id": "04415c6d-9339-45c7-9cf6-75361522b1ad",
	"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
	"level": 4
}, {
	"name": "0分：完全不能理解他人的话",
	"type": "option",
	"inputType": "radio",
	"id": "89883fa2-9a53-4f15-bdea-6a7923635b21",
	"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
	"level": 4
}, {
	"name": "表达能力：表达信息能力，包括口头的和非口头的，即表达自己的想法",
	"type": "input",
	"inputType": "radioList",
	"id": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "4分：能正常表达自己的想法",
	"type": "option",
	"inputType": "radio",
	"id": "ac0c5b27-9c68-44c9-9a6d-74551e9e6d5c",
	"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"level": 4
}, {
	"name": "3分：能表达自己的需要，但需要增加时间",
	"type": "option",
	"inputType": "radio",
	"id": "005d4ad4-9c5f-4254-a74e-43cd7a8fef6d",
	"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"level": 4
}, {
	"name": "2分：表达需要有困难，需频繁重复或简化口头表达",
	"type": "option",
	"inputType": "radio",
	"id": "be9c4c24-072c-4a55-bcb9-8dd4fb471a98",
	"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"level": 4
}, {
	"name": "1分：表达有严重困难，需要大量他人帮助",
	"type": "option",
	"inputType": "radio",
	"id": "d17eefdf-0b18-4a51-9a6e-9f1222cdf9ce",
	"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"level": 4
}, {
	"name": "0分：完全不能表达需要",
	"type": "option",
	"inputType": "radio",
	"id": "180fe32c-9be5-427c-a3ca-09f942553d61",
	"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
	"level": 4
}, {
	"name": "攻击行为：身体攻击行为(如打/踢/推/咬/抓/摔 东西)和语言攻击行 为(如骂人、语言威胁、尖叫)",
	"type": "input",
	"inputType": "radioList",
	"id": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "1分：未出现",
	"type": "option",
	"inputType": "radio",
	"id": "da54267e-653d-440a-b8a2-1babbe19c1f0",
	"pid": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
	"level": 4
}, {
	"name": "0分：近一个月内出现过攻击行为",
	"type": "option",
	"inputType": "radio",
	"id": "c33b0997-1bec-455f-a842-ff6c1e1e32ac",
	"pid": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
	"level": 4
}, {
	"name": "抑郁症状：存在情绪低落、兴趣  减退、活力减退等症状，甚至出现妄想、 幻觉、自杀念头或自 杀行为",
	"type": "input",
	"inputType": "radioList",
	"id": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "1分：未出现",
	"type": "option",
	"inputType": "radio",
	"id": "f276c694-1983-45dc-ab77-093cdf58b555",
	"pid": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
	"level": 4
}, {
	"name": "0分：近一个月内出现过负性情绪",
	"type": "option",
	"inputType": "radio",
	"id": "93762e37-520b-40a1-b350-f8754450307c",
	"pid": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
	"level": 4
}, {
	"name": "意识水平：机体对自身和周围环境的刺激做出应答反应的能力程度，包括清醒和持续的觉醒状态",
	"type": "input",
	"inputType": "radioList",
	"id": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
	"pid": "11edad40-ac5d-4b83-a946-793820827671",
	"level": 3
}, {
	"name": "2分：神志清醒，对周围环境能做出正确反应",
	"type": "option",
	"inputType": "radio",
	"id": "f9e0c72d-811a-4e9e-b7fc-a46e588e9058",
	"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
	"level": 4
}, {
	"name": "1分：嗜睡，表现为睡眠状态过度延长。当呼唤或推动老年人的肢体时可唤醒，并能进行正确的交谈或执行指令，停止刺激后又继续入睡；意识模糊，注意力涣散，对外界刺激不能清晰的认识，空间和时间定向力障碍，理解力迟钝，记忆力模糊和不连贯",
	"type": "option",
	"inputType": "radio",
	"id": "0428fa20-f870-4322-a54a-ca502881b8da",
	"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
	"level": 4
}, {
	"name": "0分：昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态；或者昏迷：意识丧失，随意运动丧失，对一般刺激全无反应",
	"type": "option",
	"inputType": "radio",
	"id": "fcb38aca-31c2-4c21-998f-a1f32dd4c50c",
	"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
	"level": 4
}, {
	"name": "感知觉与社会参与",
	"type": "category",
	"subIndexVisible": true,
	"id": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
	"level": 2
}, {
	"name": "视力：感受存在的光线，并感受物体的大小、形状的能力。在个体的最好矫正视力下进行评估",
	"type": "input",
	"inputType": "radioList",
	"id": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
	"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"level": 3
}, {
	"name": "2分：视力正常",
	"type": "option",
	"inputType": "radio",
	"id": "57ab8c7e-a3fa-4e3c-8a2b-85cd37a5ea3e",
	"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
	"level": 4
}, {
	"name": "1分：能看清楚大字体，但看不清书报上的标准字体；视力有限，看不清报纸大标题，但能辨认物体",
	"type": "option",
	"inputType": "radio",
	"id": "c5633bde-e161-45b7-b243-d9749414c88f",
	"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
	"level": 4
}, {
	"name": "0分：只能看到光、颜色和形状；完全失明",
	"type": "option",
	"inputType": "radio",
	"id": "7822ec7a-bbf9-4db8-9e0d-39154c8b9426",
	"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
	"level": 4
}, {
	"name": "听力：能辨别声音的方位、音调、音量和音质的有关能力（可借助平时使用助听设备等）",
	"type": "input",
	"inputType": "radioList",
	"id": "5601f08f-1038-413d-baaa-edb76651b94b",
	"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"level": 3
}, {
	"name": "2分：听力正常",
	"type": "option",
	"inputType": "radio",
	"id": "facb2b94-0681-4f92-a3aa-40fb596cdf70",
	"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
	"level": 4
}, {
	"name": "1分：在轻声说话或说话距离超过2米时听不清；正常交流有些 困难，需在安静的环境或大声说话才能听到",
	"type": "option",
	"inputType": "radio",
	"id": "86d2a421-406e-44f4-855f-fcad9f18cc44",
	"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
	"level": 4
}, {
	"name": "0分：讲话者大声说话或说话很慢，才能部分听见；完全失聪",
	"type": "option",
	"inputType": "radio",
	"id": "e54a01c3-ddb7-45d8-8fab-07111f707271",
	"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
	"level": 4
}, {
	"name": "执行日常事务：计划、安排并完成日常事务，包括但不限于洗衣服、小金额购物、服药管理",
	"type": "input",
	"inputType": "radioList",
	"id": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"level": 3
}, {
	"name": "4分：能完全独立计划、安排和完成日常事务，无需协助",
	"type": "option",
	"inputType": "radio",
	"id": "c3c34410-af00-4208-aa0d-a00c1fd53992",
	"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"level": 4
}, {
	"name": "3分：在计划、安排和完成日常事务时需要他人监护或指导",
	"type": "option",
	"inputType": "radio",
	"id": "2a570c46-d4f6-4fca-afdf-8dd69e10898d",
	"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"level": 4
}, {
	"name": "2分：在计划、安排和完成日常事务时需要少量协助",
	"type": "option",
	"inputType": "radio",
	"id": "9a18a6c0-6dc4-4309-ba57-70a0f807f8a9",
	"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"level": 4
}, {
	"name": "1分：在计划、安排和完成日常事务时需要大量协助",
	"type": "option",
	"inputType": "radio",
	"id": "0bede700-569a-4f5e-a0b6-cae14ad0ba07",
	"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"level": 4
}, {
	"name": "0分：完全依赖他人进行日常事务",
	"type": "option",
	"inputType": "radio",
	"id": "d5917855-6297-4942-8aeb-eef59ee31dfa",
	"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
	"level": 4
}, {
	"name": "使用交通工具外出",
	"type": "input",
	"inputType": "radioList",
	"id": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
	"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"level": 3
}, {
	"name": "3分：能自己骑车或搭乘公共交通工具外出",
	"type": "option",
	"inputType": "radio",
	"id": "3a119c3e-02e7-47a2-9d0e-9121e2a8a82c",
	"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
	"level": 4
}, {
	"name": "2分：能自己搭乘出租车，但不会搭乘其他公共交通工具外出",
	"type": "option",
	"inputType": "radio",
	"id": "66eb3b56-09fd-484e-87fe-92f69b543710",
	"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
	"level": 4
}, {
	"name": "1分：当有人协助或陪伴，可搭乘公共交通工具外出",
	"type": "option",
	"inputType": "radio",
	"id": "5be25bb3-49a4-47cf-86c6-686c5152a9fa",
	"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
	"level": 4
}, {
	"name": "0分：只能在他人协助下搭乘出租车或私家车外出；完全不能出门，或者外出完全需要协助",
	"type": "option",
	"inputType": "radio",
	"id": "d792ecd8-01e1-4b97-9b4f-94fe3ba39a6e",
	"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
	"level": 4
}, {
	"name": "社会交往能力",
	"type": "input",
	"inputType": "radioList",
	"id": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
	"level": 3
}, {
	"name": "4分：参与社会，在社会环境有一定的适应能力，待人接物恰当",
	"type": "option",
	"inputType": "radio",
	"id": "b8a661dc-958c-465f-a1e0-560f834f478f",
	"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"level": 4
}, {
	"name": "3分：能适应单纯环境，主动接触他人，初见面时难让人发现智力问题，不能理解隐喻语",
	"type": "option",
	"inputType": "radio",
	"id": "16d27992-c573-45bb-be4a-0a66c705b2ee",
	"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"level": 4
}, {
	"name": "2分：脱离社会，可被动接触，不会主动待他人，谈话中很多不适词句，容易上当受骗",
	"type": "option",
	"inputType": "radio",
	"id": "ea93ab53-606b-4a01-a575-76203b305ea6",
	"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"level": 4
}, {
	"name": "1分：勉强可与他人接触，谈吐内容不清楚，表情不恰当",
	"type": "option",
	"inputType": "radio",
	"id": "fac58e0a-1f6e-4386-8d61-64cf24624b3b",
	"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"level": 4
}, {
	"name": "0分：不能与人交往",
	"type": "option",
	"inputType": "radio",
	"id": "1544ea1c-0c5a-4c2b-bee8-d72a88313607",
	"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
	"level": 4
}];
export const assessmentTreeList = [{
	"id": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
	"name": "老年人能力评估国内标准2022版",
	"type": "category",
	"children": [{
		"name": "老年人基本信息",
		"type": "category",
		"children": [{
			"name": "评估信息",
			"type": "category",
			"children": [{
				"name": "评估编号",
				"type": "input",
				"inputType": "text",
				"id": "61c516a7-2d8a-4f47-b76a-b0925f865355",
				"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
				"level": 3
			}, {
				"name": "评估基准日期",
				"type": "input",
				"inputType": "date",
				"defaultInputText": "$currentDate",
				"defaultInputValue": "$currentDate",
				"id": "e07f8cf2-bc40-4231-bc3c-373dfddf772e",
				"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
				"level": 3
			}, {
				"name": "评估原因",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "首次评估",
					"type": "option",
					"inputType": "radio",
					"id": "c1ff1135-a7dc-48fa-9827-e36d82bff336",
					"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
					"level": 4
				}, {
					"name": "常规评估",
					"type": "option",
					"inputType": "radio",
					"id": "2b698434-5a56-4954-ae81-76c5c14f3706",
					"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
					"level": 4
				}, {
					"name": "即时评估",
					"type": "option",
					"inputType": "radio",
					"id": "70e378bb-a767-4ad6-8287-1367b2f0478e",
					"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
					"level": 4
				}, {
					"name": "因对评估结果有疑问进行的复评",
					"type": "option",
					"inputType": "radio",
					"id": "894cfb79-894a-455d-a6f0-c2e0304c7d61",
					"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
					"level": 4
				}, {
					"name": "其他",
					"type": "option",
					"inputType": "radio",
					"id": "f5317225-506c-42e1-873e-56c8d0bcbef5",
					"pid": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
					"level": 4
				}],
				"id": "65ae8b14-5b29-4d27-a7e1-9ad47c588b40",
				"pid": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
				"level": 3
			}],
			"id": "97eaff6a-2436-457a-93a7-42be0c1e23e5",
			"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
			"level": 2
		}, {
			"name": "评估对象基本信息",
			"type": "category",
			"children": [{
				"name": "姓名",
				"type": "input",
				"inputType": "text",
				"id": "cc4664a2-a0e9-4ea5-bb2a-ab94bdbbed5b",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "性别",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "男",
					"type": "option",
					"inputType": "radio",
					"id": "4fdd4645-66c4-4ae7-b85c-0cc6106de1ba",
					"pid": "62a49263-a218-4965-a7ea-a17d7159f880",
					"level": 4
				}, {
					"name": "女",
					"type": "option",
					"inputType": "radio",
					"id": "a33ac476-b82f-4823-8ede-56defa04065b",
					"pid": "62a49263-a218-4965-a7ea-a17d7159f880",
					"level": 4
				}],
				"id": "62a49263-a218-4965-a7ea-a17d7159f880",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "出生日期",
				"type": "input",
				"inputType": "date",
				"defaultInputText": "$currentDate",
				"defaultInputValue": "$currentDate",
				"id": "46c92903-b424-4a3c-9779-b34b7d5789b1",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "身高",
				"type": "input",
				"inputType": "text",
				"placeholder": "请填写身高（cm）",
				"id": "6d9b2a85-3846-4939-bbc0-b9cad438fb50",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "体重",
				"type": "input",
				"inputType": "text",
				"placeholder": "请填写体重（kg）",
				"id": "3190b6f6-f739-4b5d-a3ad-10a11fa34404",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "民族",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "请选择",
					"value": "",
					"type": "option",
					"inputType": "radio",
					"id": "25e5c33f-3955-4df3-8abd-c310f40e0e5d",
					"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
					"level": 4
				}, {
					"name": "汉",
					"type": "option",
					"inputType": "radio",
					"id": "80e404ed-fd98-4984-aa36-e52bfe21f5ac",
					"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
					"level": 4
				}, {
					"name": "少数民族",
					"type": "option",
					"inputType": "radio",
					"id": "cc6963e8-b78c-4217-b8c9-206030cc9b08",
					"pid": "ea482cf9-1960-4a14-b040-08c54ca01caa",
					"level": 4
				}],
				"id": "ea482cf9-1960-4a14-b040-08c54ca01caa",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "宗教信仰",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "请选择",
					"value": "",
					"type": "option",
					"inputType": "radio",
					"id": "2918bec1-7aed-4861-80c1-33ca5d6f007a",
					"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
					"level": 4
				}, {
					"name": "无",
					"type": "option",
					"inputType": "radio",
					"id": "267f6500-7f49-43c7-b8c6-4272ef1324cf",
					"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
					"level": 4
				}, {
					"name": "有",
					"type": "option",
					"inputType": "radio",
					"id": "dc267e3d-5d0b-40d0-809e-c76cb2ae60a8",
					"pid": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
					"level": 4
				}],
				"id": "af4d3559-28fc-4e6b-b1a2-c27a4049d249",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "文化程度",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "请选择",
					"value": "",
					"type": "option",
					"inputType": "radio",
					"id": "03887180-d020-4b69-884d-37d650b38aa2",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "文盲",
					"type": "option",
					"inputType": "radio",
					"id": "6ab63045-d020-49b1-9c45-5403062005f5",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "小学",
					"type": "option",
					"inputType": "radio",
					"id": "24e1fc71-dcbb-44ba-b3fc-4a694a2728f5",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "初中",
					"type": "option",
					"inputType": "radio",
					"id": "64a925f1-da92-4e3e-83ed-b3cc915394ee",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "高中/技校/中专",
					"type": "option",
					"inputType": "radio",
					"id": "425ed443-695e-4972-abac-821309fe6bc3",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "大学专科及以上",
					"type": "option",
					"inputType": "radio",
					"id": "955fe3cf-d83b-4c35-a9d8-aed99146640f",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}, {
					"name": "不详",
					"type": "option",
					"inputType": "radio",
					"id": "ff3f1399-3d62-4e8f-9060-b3c796cf6f2b",
					"pid": "84cc10c4-eca5-4492-ba9d-460df2f09318",
					"level": 4
				}],
				"id": "84cc10c4-eca5-4492-ba9d-460df2f09318",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "居住情况(多选)",
				"type": "input",
				"inputType": "checkboxPop",
				"children": [{
					"name": "独居",
					"type": "option",
					"inputType": "checkbox",
					"id": "741d776e-d9b3-4410-a341-8b95b24baf1d",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}, {
					"name": "与配偶居住",
					"type": "option",
					"inputType": "checkbox",
					"id": "c0b1c17b-1098-4708-89fe-2d55a4163912",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}, {
					"name": "与子女居住",
					"type": "option",
					"inputType": "checkbox",
					"id": "66eb2015-9f93-433f-baca-362a19228e77",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}, {
					"name": "高中/技校/中专",
					"type": "option",
					"inputType": "checkbox",
					"id": "2a45fa8e-269f-4bb8-83d6-272a6c9d794a",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}, {
					"name": "大学专科及以上",
					"type": "option",
					"inputType": "checkbox",
					"id": "89eea87d-55b7-453d-9dc1-e0a3d136ea06",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}, {
					"name": "不详",
					"type": "option",
					"inputType": "checkbox",
					"id": "27bcc180-477e-4d05-b5be-0d4ddc2536fd",
					"pid": "8f362ead-596c-4765-abfa-0e3b38fe105e",
					"level": 4
				}],
				"id": "8f362ead-596c-4765-abfa-0e3b38fe105e",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "婚姻状况",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "未婚",
					"type": "option",
					"inputType": "radio",
					"id": "7b8fa5b3-eab6-44fb-88ad-bea1995f4e32",
					"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
					"level": 4
				}, {
					"name": "已婚",
					"type": "option",
					"inputType": "radio",
					"id": "320ae24d-b6a0-4d0d-b267-c704269c5e7e",
					"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
					"level": 4
				}, {
					"name": "丧偶",
					"type": "option",
					"inputType": "radio",
					"id": "19ce45b2-fc31-4cae-a6a8-80a07ad19457",
					"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
					"level": 4
				}, {
					"name": "离婚",
					"type": "option",
					"inputType": "radio",
					"id": "d8a4f59c-63d2-42e5-820e-63839ed429d6",
					"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
					"level": 4
				}, {
					"name": "未说明",
					"type": "option",
					"inputType": "radio",
					"id": "c9609d4a-e8f1-4aad-ac37-0c9b60635f64",
					"pid": "3d049558-726c-4fe4-a860-694cef4d21cb",
					"level": 4
				}],
				"id": "3d049558-726c-4fe4-a860-694cef4d21cb",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "医疗费用支付方式（多选）",
				"type": "input",
				"inputType": "checkboxPop",
				"children": [{
					"name": "城镇职工基本医疗保险",
					"type": "option",
					"inputType": "checkbox",
					"id": "4d3d33e1-9ee3-4678-926a-a222893eae17",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "城乡居民基本医疗保险",
					"type": "option",
					"inputType": "checkbox",
					"id": "6dda5dde-b6a6-47b3-a483-ec1f3e6e0768",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "自费",
					"type": "option",
					"inputType": "checkbox",
					"id": "e89e9cec-42e0-4d4d-8128-a1cf126906a9",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "公务员补助",
					"type": "option",
					"inputType": "checkbox",
					"id": "09e4468a-5f54-425b-a1de-29d384fc8d66",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "企业补充保险",
					"type": "option",
					"inputType": "checkbox",
					"id": "640868a2-8b0a-4de7-8d03-c737f519a38a",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "公费医疗及医疗照顾对象",
					"type": "option",
					"inputType": "checkbox",
					"id": "3c305a0e-4337-42f3-babc-c07fdb47edad",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "医疗救助",
					"type": "option",
					"inputType": "checkbox",
					"id": "3a0a0c0c-43d1-4ca3-a955-9d55455eecd7",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}, {
					"name": "大病保险",
					"type": "option",
					"inputType": "checkbox",
					"id": "20ae4339-991f-4491-8daf-269998b9bad9",
					"pid": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
					"level": 4
				}],
				"id": "eb13032f-8ccd-498e-a0b3-a060b0e54d59",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}, {
				"name": "经济来源(多选)",
				"type": "input",
				"inputType": "checkboxPop",
				"children": [{
					"name": "退休金/养老金",
					"type": "option",
					"inputType": "checkbox",
					"id": "06dbec16-5a7b-440e-aac0-a32c5e583b65",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}, {
					"name": "子女补贴",
					"type": "option",
					"inputType": "checkbox",
					"id": "c1fa2047-a91e-4584-b058-2701d82380c9",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}, {
					"name": "亲友资助",
					"type": "option",
					"inputType": "checkbox",
					"id": "9d2c23c1-f2fa-45c5-964c-bf4c544f9dc7",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}, {
					"name": "国家普惠型补贴",
					"type": "option",
					"inputType": "checkbox",
					"id": "93cb99a1-0cb4-4c33-9170-abf8d628bcb5",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}, {
					"name": "个人储蓄",
					"type": "option",
					"inputType": "checkbox",
					"id": "30fb32bb-9cc4-47d0-ac45-eae8d865f34b",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}, {
					"name": "其他补贴",
					"type": "option",
					"inputType": "checkbox",
					"id": "5805a6f5-79b1-40ef-a30d-5c43e3486ff1",
					"pid": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
					"level": 4
				}],
				"id": "8b5959ea-ffdc-4def-a63c-6b5c0b1196ce",
				"pid": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
				"level": 3
			}],
			"id": "02e5e73e-b820-40aa-96fa-6f5552e76d39",
			"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
			"level": 2
		}, {
			"name": "信息提供者及联系人信息表",
			"type": "category",
			"children": [{
				"name": "信息提供者的姓名",
				"type": "input",
				"inputType": "text",
				"id": "31d116fb-6270-462b-87ff-7a5696a17dae",
				"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
				"level": 3
			}, {
				"name": "信息提供者与老年人的关系",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "本人",
					"type": "option",
					"inputType": "radio",
					"id": "0191f5ba-4ac4-4ed9-9592-c033b7b1105f",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "配偶",
					"type": "option",
					"inputType": "radio",
					"id": "66bc89ca-a496-4be1-9f4d-89b836ec31d9",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "子女",
					"type": "option",
					"inputType": "radio",
					"id": "fa0a6aab-3112-4e6a-b833-b6babaa95e11",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "其他亲属",
					"type": "option",
					"inputType": "radio",
					"id": "82a34788-9870-480c-bd2c-fe95fc15fc37",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "雇佣照顾者",
					"type": "option",
					"inputType": "radio",
					"id": "e30c2947-9615-464f-97fa-88df2a81e004",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "村(居)民委员会工作人员",
					"type": "option",
					"inputType": "radio",
					"id": "22cf5908-8293-48a6-984b-d5f17db890ef",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}, {
					"name": "其他",
					"type": "option",
					"inputType": "radio",
					"id": "34ff4929-31d4-4094-8db9-4e7a7096f177",
					"pid": "78996777-a9f5-4190-a998-2887d1a5e943",
					"level": 4
				}],
				"id": "78996777-a9f5-4190-a998-2887d1a5e943",
				"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
				"level": 3
			}, {
				"name": "联系人姓名",
				"type": "input",
				"inputType": "text",
				"id": "c177905c-43f3-4135-a92d-735fe7c64816",
				"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
				"level": 3
			}, {
				"name": "联系人电话",
				"type": "input",
				"inputType": "text",
				"id": "4a54345f-968e-4975-b4f5-937eaff60ad4",
				"pid": "091894f7-f9d4-457e-920d-55f20c6c461d",
				"level": 3
			}],
			"id": "091894f7-f9d4-457e-920d-55f20c6c461d",
			"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
			"level": 2
		}, {
			"name": "疾病诊断(可多选)",
			"type": "category",
			"children": [{
				"name": "信息提供者与老年人的关系",
				"type": "input",
				"inputType": "checkboxPop",
				"children": [{
					"name": "高血压病I10～I15",
					"type": "option",
					"inputType": "checkbox",
					"id": "dfe1e22b-b8cc-4bd7-835b-e03c9fcfa369",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "冠心病I25",
					"type": "option",
					"inputType": "checkbox",
					"id": "d7b2d03a-7e01-4df0-863f-04915d4ca998",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "糖尿病E10～E14 ",
					"type": "option",
					"inputType": "checkbox",
					"id": "28cde1b3-c04e-4df5-a678-a0695b80af95",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "肺炎J12～J18",
					"type": "option",
					"inputType": "checkbox",
					"id": "4a07994f-7515-49bb-8e11-140435b60845",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "慢性阻塞性肺疾病J44",
					"type": "option",
					"inputType": "checkbox",
					"id": "da3e9747-44f8-40e2-bc24-cea3790fcf37",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "脑出血I60～I62",
					"type": "option",
					"inputType": "checkbox",
					"id": "45076c81-8b34-4542-8444-16cf2f2b4492",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "脑梗塞I63",
					"type": "option",
					"inputType": "checkbox",
					"id": "965ddbea-f10e-4e8a-9ad8-c0fbc33516e7",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "尿路感染（30天内）",
					"type": "option",
					"inputType": "checkbox",
					"id": "b21d6b53-9dad-41c3-b3b8-f98d2127b391",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "帕金森综合征G20～G22",
					"type": "option",
					"inputType": "checkbox",
					"id": "fcf5e242-dca8-4be9-884b-e208d6e581fe",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "慢性肾衰竭N18～N19",
					"type": "option",
					"inputType": "checkbox",
					"id": "37e25ae9-76ea-4418-857b-ef18aacc5261",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "肝硬化K74",
					"type": "option",
					"inputType": "checkbox",
					"id": "fff6db44-8e69-4ad3-a558-cd7dbe08ebbd",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "消化性溃疡K20～K31",
					"type": "option",
					"inputType": "checkbox",
					"id": "d8903a4d-4930-4ac1-84e6-e82c0826fea5",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "肿瘤C00～D48",
					"type": "option",
					"inputType": "checkbox",
					"id": "1c2c7c82-94d3-4a6c-9612-a89cc99b94c7",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "截肢（6个月内）",
					"type": "option",
					"inputType": "checkbox",
					"id": "0b85be8a-1925-4b1d-a330-3cb467a1b25b",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "骨折（3个月内）M84",
					"type": "option",
					"inputType": "checkbox",
					"id": "b60016cb-60c6-4431-a7c2-886ab1b4888e",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "癫痫G40",
					"type": "option",
					"inputType": "checkbox",
					"id": "0ea72a3e-39ed-4403-a76c-3b05ac7827d5",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "甲状腺功能减退症E01～E03",
					"type": "option",
					"inputType": "checkbox",
					"id": "8838aa9b-cd75-465a-b676-67d55fafac33",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "白内障H25～H26",
					"type": "option",
					"inputType": "checkbox",
					"id": "bc8168b5-fa20-4dd0-ad40-ba3ece08f5fd",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "青光眼H40～H42",
					"type": "option",
					"inputType": "checkbox",
					"id": "50c3fccb-483c-4b75-872d-8312a15fe550",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "骨质疏松症M80～82",
					"type": "option",
					"inputType": "checkbox",
					"id": "27afafe3-8175-4f2c-a4a5-e616361d78d8",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "痴呆F00～F03",
					"type": "option",
					"inputType": "checkbox",
					"id": "d882bd39-035c-4d86-87c5-6c3e4fb73db4",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "其他精神和行为障碍F04～F99",
					"type": "option",
					"inputType": "checkbox",
					"id": "d576cea9-cc5c-4883-a306-e2032d013a16",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}, {
					"name": "其他",
					"type": "option",
					"inputType": "checkbox",
					"id": "40d855cc-7c17-4350-9a24-7b37a8b4c61f",
					"pid": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
					"level": 4
				}],
				"id": "1eb2e1e3-4acc-4bde-a1e7-fc61a39ff683",
				"pid": "f6bbf476-b593-4aad-9caf-281c22860f6b",
				"level": 3
			}],
			"id": "f6bbf476-b593-4aad-9caf-281c22860f6b",
			"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
			"level": 2
		}, {
			"name": "健康相关问题",
			"type": "category",
			"children": [{
				"name": "压力性损伤",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "无",
					"type": "option",
					"inputType": "radio",
					"id": "d0b88f89-7b20-478e-9c22-387bbacda3e3",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}, {
					"name": "I期：皮肤完好，出现指压不会变白的红印",
					"type": "option",
					"inputType": "radio",
					"id": "e64f02cc-e0eb-4073-a553-6c17135d02f5",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}, {
					"name": "Ⅱ期：皮肤真皮层损失、暴露，出现水疱",
					"type": "option",
					"inputType": "radio",
					"id": "843c103b-f54a-458b-b846-78d9181a8f59",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}, {
					"name": "Ⅲ期：全层皮肤缺失，可见脂肪、肉芽组织以及边缘内卷",
					"type": "option",
					"inputType": "radio",
					"id": "055271b2-3eb5-4e5b-918b-b01037d6f73a",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}, {
					"name": "IV期：全层皮肤、组织缺失，可见肌腱、肌肉、腱膜，以及边缘内卷，伴随隧道、 潜行",
					"type": "option",
					"inputType": "radio",
					"id": "e76fd218-648e-44a2-b2d8-0ef396404be7",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}, {
					"name": "不可分期：全身皮肤、组织被腐肉、焦痂掩盖，无法确认组织缺失程度，去除腐 肉、焦痂才可判断损伤程度",
					"type": "option",
					"inputType": "radio",
					"id": "d0c86200-6b26-4052-9e7b-f9c9cd8c9947",
					"pid": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
					"level": 4
				}],
				"id": "1a24c7fb-0dd5-4b71-907e-d34dfd56637e",
				"pid": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
				"level": 3
			}, {
				"name": "关节活动度",
				"type": "input",
				"inputType": "radioPop",
				"children": [{
					"name": "无",
					"type": "option",
					"inputType": "radio",
					"id": "fe588e0f-22a0-47ff-a50c-781584dbd28e",
					"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
					"level": 4
				}, {
					"name": "是",
					"type": "option",
					"inputType": "radio",
					"id": "50191eef-8379-4006-a8e1-23378b31a775",
					"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
					"level": 4
				}, {
					"name": "无法判断",
					"type": "option",
					"inputType": "radio",
					"id": "f49db8be-11cc-4ad6-8573-f731b3d1494e",
					"pid": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
					"level": 4
				}],
				"id": "15eb7bdb-ee7c-477d-9a97-df62f8553167",
				"pid": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
				"level": 3
			}],
			"id": "6aaf8b4f-2b78-49ef-9a5e-3502c1114a38",
			"pid": "9eb42792-a823-42f3-9610-75bf44caa3a2",
			"level": 2
		}],
		"id": "9eb42792-a823-42f3-9610-75bf44caa3a2",
		"pid": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
		"level": 1
	}, {
		"name": "老年人能力评估",
		"type": "category",
		"children": [{
			"name": "自理能力",
			"type": "category",
			"subIndexVisible": true,
			"children": [{
				"name": "进食：使用适当的器具将食物送入口中并咽下",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立使用器具将食物送进口中并咽下，没有呛咳",
					"type": "option",
					"inputType": "radio",
					"id": "f80d5037-40b5-48f6-b4b5-f4dd731cb67f",
					"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成，或独立使用辅具，没有呛咳",
					"type": "option",
					"inputType": "radio",
					"id": "29e4ce49-724a-4262-8b4c-9ec28d222f4f",
					"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
					"level": 4
				}, {
					"name": "2分：进食中需要少量接触式协助，偶尔(每月一次及以上)呛咳",
					"type": "option",
					"inputType": "radio",
					"id": "9dc9a6c1-d6d8-45f6-8d96-8fb582e2850a",
					"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
					"level": 4
				}, {
					"name": "1分：在进食中需要大量接触式协助，经常(每周一次及以上)呛咳",
					"type": "option",
					"inputType": "radio",
					"id": "945a3575-f53f-4ff0-9c4a-bdada3ac7bac",
					"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助进食，或吞咽困难，或留置营养管",
					"type": "option",
					"inputType": "radio",
					"id": "c7dbd499-b5bd-4bf7-a693-1387e1d5f6ff",
					"pid": "90b74a13-f46c-4d23-9985-90101ffdca23",
					"level": 4
				}],
				"id": "90b74a13-f46c-4d23-9985-90101ffdca23",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "修饰：洗脸、刷牙、梳头、刮脸、剪指(趾)甲等",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "4c2d3549-9f8e-444b-b8a0-21ed2237bbc5",
					"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "1bfd6b25-ea2e-44aa-a8f4-e277fdadec5f",
					"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "f1d1c03e-1c4e-486d-ab90-bd363b4d3d81",
					"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "d66920e0-d79b-42b5-bafe-4b5e3c31270c",
					"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "bb5c0b17-ad54-47fd-a893-e4e3667a82b4",
					"pid": "68cdd2b5-050c-4788-81f4-35d53cc80035",
					"level": 4
				}],
				"id": "68cdd2b5-050c-4788-81f4-35d53cc80035",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "洗澡：清洗和擦干身体",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "3dc93e87-afdd-47a1-9930-eb1de3b06e31",
					"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "d2830970-069d-40c8-92c5-7ec5f45710b8",
					"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "89d744fa-a408-4c3f-850d-355cce3a3c2e",
					"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "d983d115-dc1e-4187-88b1-5714a56d2600",
					"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "49e4b2dc-876f-449b-9d88-c8fe35bcc781",
					"pid": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
					"level": 4
				}],
				"id": "e05dca0d-a245-45c4-878a-21b5a660a9b0",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "穿/脱上衣：穿/脱上身衣服、系扣、拉拉链等",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "e05666dd-cf09-4144-beda-8ac2a0b03cbb",
					"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "b4b589bb-6f3b-4a1b-934f-f4794d5d88d3",
					"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "6d0a2c7f-5db1-4337-be4d-b3549623c44d",
					"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "91dbd3c2-504c-44f2-a549-0969fdc8761c",
					"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "a77fa239-cd6f-434b-b581-7ccc1c3f8922",
					"pid": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
					"level": 4
				}],
				"id": "d3c47615-5fa4-462b-8fa6-2f35e2dec776",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "穿/脱裤子和鞋袜：穿/脱裤子、鞋袜等",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "29948b74-dfc8-4bb2-9ebb-e65ccb8d8906",
					"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "06ea41ce-6fcb-4991-99c8-029d678e0c4f",
					"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "80229800-ee56-4f18-9934-d677f647dc44",
					"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "ec4ca4a3-d59a-41f6-86b5-c67974e5d74c",
					"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "076ec9d1-4d03-4014-88d2-d881e19e8413",
					"pid": "21820d98-daea-40f0-85f1-ee70993233b0",
					"level": 4
				}],
				"id": "21820d98-daea-40f0-85f1-ee70993233b0",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "小便控制：控制和排出尿液的能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：可自行控制排尿，排尿次数、排尿控制均正常",
					"type": "option",
					"inputType": "radio",
					"id": "eb8f8d90-a686-4440-8b0d-c0e59701663e",
					"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
					"level": 4
				}, {
					"name": "3分：白天可自行控制排尿次数，夜间出现排尿次数增多、排尿控制较差，或自行使用尿布、尿垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "099d40b3-9924-4f4d-901e-1bfd129ecac7",
					"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
					"level": 4
				}, {
					"name": "2分：白天大部分时间可自行控制排尿，偶出现（每天<1次，但每周>1次）尿失禁，夜间控制排尿较差，或他人少量协助使用尿布、尿 垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "9585fc7e-847e-4f36-af8d-ce5c37782377",
					"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
					"level": 4
				}, {
					"name": "1分：白天大部分时间不能控制排尿（每天≥1次，但尚非完全失控），夜间出现尿失禁，或他人大量协助使用尿布、尿垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "dd8549c8-564b-41f4-9f7d-4f8d86f49902",
					"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
					"level": 4
				}, {
					"name": "0分：小便失禁，完全不能控制排尿，或留置导尿管",
					"type": "option",
					"inputType": "radio",
					"id": "3c4a260a-faf2-4301-b53f-67410639105f",
					"pid": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
					"level": 4
				}],
				"id": "5d0959d9-7828-4930-bcd4-1c04a04f7199",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "大便控制：控制和排出粪便的能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：可正常自行控制大便排出",
					"type": "option",
					"inputType": "radio",
					"id": "ca3c1ebe-ea2e-4308-b498-d4f21d92135a",
					"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
					"level": 4
				}, {
					"name": "3分：有时出现(每周<1次)便秘或大便失禁，或自行使用开塞露、 尿垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "8a313bbc-6f19-4b02-a095-994f201b706b",
					"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
					"level": 4
				}, {
					"name": "2分：经常出现(每天<1次，但每周>1次)便秘或大便失禁，或他人 少量协助使用开塞露、尿垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "8772659f-abdf-4ca2-999b-d2ffc0dc7b33",
					"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
					"level": 4
				}, {
					"name": "1分：大部分时间均出现(每天≥1次)便秘或大便失禁，但尚非完全 失控，或他人大量协助使用开塞露、尿垫等辅助用物",
					"type": "option",
					"inputType": "radio",
					"id": "c91d25c7-4c33-490b-ac19-b39409fa23dc",
					"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
					"level": 4
				}, {
					"name": "0分：严重便秘或者完全大便失禁，需要依赖他人协助排便或清洁皮肤",
					"type": "option",
					"inputType": "radio",
					"id": "ff984461-aa3f-43be-9f27-2a1a3847db8b",
					"pid": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
					"level": 4
				}],
				"id": "946da57d-83c7-40cb-b1ca-240cfe8f3221",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}, {
				"name": "如厕：上厕所排泄大小便，并清洁身体",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要他人协助",
					"type": "option",
					"inputType": "radio",
					"id": "11764f7d-ea03-4994-9488-4af7db65e8f2",
					"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "8d7d73bb-327e-4ade-8979-bdb8e81e892a",
					"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "ebe155fb-8b42-4491-a4aa-18fbed293ad0",
					"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "f5c9bdad-6837-4e3f-85be-4bd85709fc83",
					"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "aca2763b-6fd7-4831-b2b5-931e7c23fb71",
					"pid": "16bf6c41-3e88-469e-90ed-05903bc3104e",
					"level": 4
				}],
				"id": "16bf6c41-3e88-469e-90ed-05903bc3104e",
				"pid": "b060efa7-0829-42d6-b59b-768bca1d4a38",
				"level": 3
			}],
			"id": "b060efa7-0829-42d6-b59b-768bca1d4a38",
			"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
			"level": 2
		}, {
			"name": "基础运动能力",
			"type": "category",
			"subIndexVisible": true,
			"children": [{
				"name": "床上体位转移：卧床翻身及坐起躺下",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要他人协助",
					"type": "option",
					"inputType": "radio",
					"id": "b1993034-237e-411d-a386-f8da8fb92af5",
					"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "2e8eccfa-add3-4dda-8c78-e3a21141be2f",
					"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "1860fc46-5ae6-481b-9c59-e282437669b2",
					"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "9014aa72-10d8-4965-8ed1-0b11bad901b1",
					"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "78148c33-2cac-4ab2-b7a6-de7673f37e72",
					"pid": "a72fbcb3-c989-48bb-b487-ad413ff69322",
					"level": 4
				}],
				"id": "a72fbcb3-c989-48bb-b487-ad413ff69322",
				"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
				"level": 3
			}, {
				"name": "床椅转移：从坐位到站位，再从站位到坐位的转换过程",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立完成，不需要他人协助",
					"type": "option",
					"inputType": "radio",
					"id": "a98e0bc3-5304-4b26-9eb3-cd06592a0bd9",
					"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
					"level": 4
				}, {
					"name": "3分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "0f63f087-5f72-48fc-b9b7-57e24f25bb29",
					"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
					"level": 4
				}, {
					"name": "2分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "e574d56d-c38d-4e6f-b95c-7ca8088339ea",
					"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
					"level": 4
				}, {
					"name": "1分：主要依靠他人协助，自身能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "a2ccee2c-3491-4f5b-9a84-19f250412ca7",
					"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
					"level": 4
				}, {
					"name": "0分：完全依赖他人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "ebaffa82-5aaa-4403-bbb9-d9f73b3495ba",
					"pid": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
					"level": 4
				}],
				"id": "ff9a0b16-ba2d-4459-9a0c-914ffc5c6668",
				"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
				"level": 3
			}, {
				"name": "平地行走：双脚交互的方式在地面行动，总是一只脚在前",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：独立平地步行50m左右，不需要协助，无摔倒风险",
					"type": "option",
					"inputType": "radio",
					"id": "2d415b7c-87f1-4277-92c1-3ffd3c727c97",
					"pid": "5072b731-079f-4240-81d0-715909ac30cf",
					"level": 4
				}, {
					"name": "3分：能平地步行50m左右，存在摔倒风险，需要他人监护或 指导，或使用拐杖、助行器等辅助工具",
					"type": "option",
					"inputType": "radio",
					"id": "f68c5b67-1009-42f6-8ca5-85e853a310b3",
					"pid": "5072b731-079f-4240-81d0-715909ac30cf",
					"level": 4
				}, {
					"name": "2分：在步行时需要他人少量扶持协助",
					"type": "option",
					"inputType": "radio",
					"id": "c1f259dd-75e1-4959-8d1a-1950030a2b61",
					"pid": "5072b731-079f-4240-81d0-715909ac30cf",
					"level": 4
				}, {
					"name": "1分：在步行时需要他人大量扶持协助",
					"type": "option",
					"inputType": "radio",
					"id": "3b8ccbbd-5703-46c9-bc6e-b0c6cc94914e",
					"pid": "5072b731-079f-4240-81d0-715909ac30cf",
					"level": 4
				}, {
					"name": "0分：完全不能步行",
					"type": "option",
					"inputType": "radio",
					"id": "eb204d69-b7ed-45e1-8a76-d4db28c31582",
					"pid": "5072b731-079f-4240-81d0-715909ac30cf",
					"level": 4
				}],
				"id": "5072b731-079f-4240-81d0-715909ac30cf",
				"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
				"level": 3
			}, {
				"name": "上下楼梯：双脚交替完成楼梯台 阶连续的上下移动",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "3分：可独立上下楼梯(连续上下10个～15个台阶)，不需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "2e215d35-abab-4f00-9198-11361cfe10f0",
					"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
					"level": 4
				}, {
					"name": "2分：在他人指导或提示下完成",
					"type": "option",
					"inputType": "radio",
					"id": "8601f5c5-3962-453e-88cc-0122dacc7f1e",
					"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
					"level": 4
				}, {
					"name": "1分：需要他人协助，但以自身完成为主",
					"type": "option",
					"inputType": "radio",
					"id": "a13d6fe5-4fd9-4ead-8343-44c42bfab98b",
					"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
					"level": 4
				}, {
					"name": "0分：主要依靠他人协助，自身能给予配合；或者完全依赖他 人协助，且不能给予配合",
					"type": "option",
					"inputType": "radio",
					"id": "78b83571-4f9f-46db-9c80-2534334902e5",
					"pid": "c03fc942-6644-4ae9-9adb-f438d8438450",
					"level": 4
				}],
				"id": "c03fc942-6644-4ae9-9adb-f438d8438450",
				"pid": "99d61f41-86f1-4453-b938-d7def0639adb",
				"level": 3
			}],
			"id": "99d61f41-86f1-4453-b938-d7def0639adb",
			"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
			"level": 2
		}, {
			"name": "精神状态",
			"type": "category",
			"subIndexVisible": true,
			"children": [{
				"name": "时间定向：知道并确认时间的能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：时间观念（年、月）清楚，日期（或星期几）可相差一天",
					"type": "option",
					"inputType": "radio",
					"id": "3ed1a27e-b02f-4582-a679-ea190f995bc2",
					"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
					"level": 4
				}, {
					"name": "3分：时间观念有些下降，年、月、日（或星期几）不能全部分清(相差两 天或以上)",
					"type": "option",
					"inputType": "radio",
					"id": "6cefd909-2889-443d-9e14-52824770d4e7",
					"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
					"level": 4
				}, {
					"name": "2分：时间观念较差，年、月、日不清楚，可知上半年或下半年或季节",
					"type": "option",
					"inputType": "radio",
					"id": "e42198a0-d3e9-4bbf-9c91-eebb04423d4a",
					"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
					"level": 4
				}, {
					"name": "1分：时间观念很差，年、月、日不清楚，可知上午、下午或白天、夜间",
					"type": "option",
					"inputType": "radio",
					"id": "abb3c868-12f7-4ca0-adc0-0a76d2a49421",
					"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
					"level": 4
				}, {
					"name": "0分：无时间观念",
					"type": "option",
					"inputType": "radio",
					"id": "700863df-bb16-4ab2-ad58-5651634a6de6",
					"pid": "c26d025c-f522-4106-8721-8a515b7ca3af",
					"level": 4
				}],
				"id": "c26d025c-f522-4106-8721-8a515b7ca3af",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "空间定向：知道并确认空间的能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：能在日常生活范围内单独外出，如在日常居住小区内独自外出购物等",
					"type": "option",
					"inputType": "radio",
					"id": "c65304ba-ccca-49cf-b1cc-351969e4e4f7",
					"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
					"level": 4
				}, {
					"name": "3分：不能单独外出，但能准确知道自己日常生活所在地的地址信息",
					"type": "option",
					"inputType": "radio",
					"id": "6acc1d8d-e246-402f-8d06-ee44e2777a5b",
					"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
					"level": 4
				}, {
					"name": "2分：不能单独外出，但知道较多有关自己日常生活的地址信息",
					"type": "option",
					"inputType": "radio",
					"id": "76cc3534-f0bf-4284-b42e-5ef69a52ea36",
					"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
					"level": 4
				}, {
					"name": "1分：不能单独外出，但知道较少自己居住或生活所在地的地址信息",
					"type": "option",
					"inputType": "radio",
					"id": "c5d5882f-bcea-4bf9-b0a7-fd21a12b6a0f",
					"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
					"level": 4
				}, {
					"name": "0分：不能单独外出，无空间观念",
					"type": "option",
					"inputType": "radio",
					"id": "02bdee50-730e-45f7-afb2-d4ca2dcc0414",
					"pid": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
					"level": 4
				}],
				"id": "805d6228-be2d-4939-9f88-ad2eb1e129e1",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "人物定向：知道并确认人物的能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：认识长期共同一起生活的人，能称呼并知道关系",
					"type": "option",
					"inputType": "radio",
					"id": "8761e3dd-5098-42d1-8450-7e9bdfd36a33",
					"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
					"level": 4
				}, {
					"name": "3分：能认识大部分共同生活居住的人，能称呼或知道关系",
					"type": "option",
					"inputType": "radio",
					"id": "c4632a4c-1e85-4511-8127-cc86f9d8b3c2",
					"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
					"level": 4
				}, {
					"name": "2分：能认识部分日常同住的亲人或照护者等，能称呼或知道关系等",
					"type": "option",
					"inputType": "radio",
					"id": "7f3e28ca-b16d-45a8-a46c-0bd5a46b5a1b",
					"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
					"level": 4
				}, {
					"name": "1分：只认识自己或极少数日常同住的亲人或照护者等",
					"type": "option",
					"inputType": "radio",
					"id": "65713c99-5a71-4269-a131-f05593254e7a",
					"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
					"level": 4
				}, {
					"name": "0分：不认识任何人(包括自己)",
					"type": "option",
					"inputType": "radio",
					"id": "a636566c-8052-4a57-a26a-c87a8c940ad3",
					"pid": "846f4503-2052-4696-94bc-3ebf9dcddce1",
					"level": 4
				}],
				"id": "846f4503-2052-4696-94bc-3ebf9dcddce1",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "记忆：短时、近期和远期记忆能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：总是能保持与社会、年龄所适应的记忆能力，能完整的回忆",
					"type": "option",
					"inputType": "radio",
					"id": "ff7ae3f3-7f61-411a-ac16-ca3ddbc573b1",
					"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
					"level": 4
				}, {
					"name": "3分：出现轻度的记忆紊乱或回忆不能（不能回忆即时信息，3个词语 经过5分钟后仅能回忆0个～1个）",
					"type": "option",
					"inputType": "radio",
					"id": "1073d916-8e59-49e0-95eb-3b8da35afb79",
					"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
					"level": 4
				}, {
					"name": "2分：出现中度的记忆紊乱或回忆不能（不能回忆近期记忆，不记得上 一顿饭吃了什么）",
					"type": "option",
					"inputType": "radio",
					"id": "84160f19-3ba1-41fb-a357-b2d8965b16a0",
					"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
					"level": 4
				}, {
					"name": "1分：出现重度的记忆紊乱或回忆不能（不能回忆远期记忆，不记得自 已的老朋友）",
					"type": "option",
					"inputType": "radio",
					"id": "971c5eb5-bf86-4226-ad55-b736ff742469",
					"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
					"level": 4
				}, {
					"name": "0分：记忆完全紊乱或者完全不能对既往事物进行正确的回忆",
					"type": "option",
					"inputType": "radio",
					"id": "0fc11b3d-052e-41d5-8efa-72f91896ab31",
					"pid": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
					"level": 4
				}],
				"id": "07d1cd2a-7fa8-4738-beaa-6717b8bf7827",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "理解能力：理解语言信息和非语言信息的能力(可借助平时使用助听设备等)，即理解别人的话",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：能正常理解他人的话",
					"type": "option",
					"inputType": "radio",
					"id": "786d5a4d-4359-4b99-96e2-a9c63a506bfc",
					"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
					"level": 4
				}, {
					"name": "3分：能理解他人的话，但需要增加时间",
					"type": "option",
					"inputType": "radio",
					"id": "44e97f30-3d9a-46b9-b61b-ed32838d976f",
					"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
					"level": 4
				}, {
					"name": "2分：理解有困难，需频繁重复或简化口头表达",
					"type": "option",
					"inputType": "radio",
					"id": "ca69b13d-6d24-4bff-9534-6bb3aa7e863a",
					"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
					"level": 4
				}, {
					"name": "1分：理解有严重困难，需要大量他人帮助",
					"type": "option",
					"inputType": "radio",
					"id": "04415c6d-9339-45c7-9cf6-75361522b1ad",
					"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
					"level": 4
				}, {
					"name": "0分：完全不能理解他人的话",
					"type": "option",
					"inputType": "radio",
					"id": "89883fa2-9a53-4f15-bdea-6a7923635b21",
					"pid": "501c224e-fa4d-46ce-b381-171103e09afb",
					"level": 4
				}],
				"id": "501c224e-fa4d-46ce-b381-171103e09afb",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "表达能力：表达信息能力，包括口头的和非口头的，即表达自己的想法",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：能正常表达自己的想法",
					"type": "option",
					"inputType": "radio",
					"id": "ac0c5b27-9c68-44c9-9a6d-74551e9e6d5c",
					"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
					"level": 4
				}, {
					"name": "3分：能表达自己的需要，但需要增加时间",
					"type": "option",
					"inputType": "radio",
					"id": "005d4ad4-9c5f-4254-a74e-43cd7a8fef6d",
					"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
					"level": 4
				}, {
					"name": "2分：表达需要有困难，需频繁重复或简化口头表达",
					"type": "option",
					"inputType": "radio",
					"id": "be9c4c24-072c-4a55-bcb9-8dd4fb471a98",
					"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
					"level": 4
				}, {
					"name": "1分：表达有严重困难，需要大量他人帮助",
					"type": "option",
					"inputType": "radio",
					"id": "d17eefdf-0b18-4a51-9a6e-9f1222cdf9ce",
					"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
					"level": 4
				}, {
					"name": "0分：完全不能表达需要",
					"type": "option",
					"inputType": "radio",
					"id": "180fe32c-9be5-427c-a3ca-09f942553d61",
					"pid": "1eff1633-84b2-405b-90e4-c67872e5fa09",
					"level": 4
				}],
				"id": "1eff1633-84b2-405b-90e4-c67872e5fa09",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "攻击行为：身体攻击行为(如打/踢/推/咬/抓/摔 东西)和语言攻击行 为(如骂人、语言威胁、尖叫)",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "1分：未出现",
					"type": "option",
					"inputType": "radio",
					"id": "da54267e-653d-440a-b8a2-1babbe19c1f0",
					"pid": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
					"level": 4
				}, {
					"name": "0分：近一个月内出现过攻击行为",
					"type": "option",
					"inputType": "radio",
					"id": "c33b0997-1bec-455f-a842-ff6c1e1e32ac",
					"pid": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
					"level": 4
				}],
				"id": "d2049838-e8b7-4ca3-a0ad-0526b625b0ad",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "抑郁症状：存在情绪低落、兴趣  减退、活力减退等症状，甚至出现妄想、 幻觉、自杀念头或自 杀行为",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "1分：未出现",
					"type": "option",
					"inputType": "radio",
					"id": "f276c694-1983-45dc-ab77-093cdf58b555",
					"pid": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
					"level": 4
				}, {
					"name": "0分：近一个月内出现过负性情绪",
					"type": "option",
					"inputType": "radio",
					"id": "93762e37-520b-40a1-b350-f8754450307c",
					"pid": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
					"level": 4
				}],
				"id": "2ac7e419-3ac5-4e75-bc3a-5a839c4d92d0",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}, {
				"name": "意识水平：机体对自身和周围环境的刺激做出应答反应的能力程度，包括清醒和持续的觉醒状态",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "2分：神志清醒，对周围环境能做出正确反应",
					"type": "option",
					"inputType": "radio",
					"id": "f9e0c72d-811a-4e9e-b7fc-a46e588e9058",
					"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
					"level": 4
				}, {
					"name": "1分：嗜睡，表现为睡眠状态过度延长。当呼唤或推动老年人的肢体时可唤醒，并能进行正确的交谈或执行指令，停止刺激后又继续入睡；意识模糊，注意力涣散，对外界刺激不能清晰的认识，空间和时间定向力障碍，理解力迟钝，记忆力模糊和不连贯",
					"type": "option",
					"inputType": "radio",
					"id": "0428fa20-f870-4322-a54a-ca502881b8da",
					"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
					"level": 4
				}, {
					"name": "0分：昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态；或者昏迷：意识丧失，随意运动丧失，对一般刺激全无反应",
					"type": "option",
					"inputType": "radio",
					"id": "fcb38aca-31c2-4c21-998f-a1f32dd4c50c",
					"pid": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
					"level": 4
				}],
				"id": "b147530b-0b8a-474e-8b8e-7bc8500a6b59",
				"pid": "11edad40-ac5d-4b83-a946-793820827671",
				"level": 3
			}],
			"id": "11edad40-ac5d-4b83-a946-793820827671",
			"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
			"level": 2
		}, {
			"name": "感知觉与社会参与",
			"type": "category",
			"subIndexVisible": true,
			"children": [{
				"name": "视力：感受存在的光线，并感受物体的大小、形状的能力。在个体的最好矫正视力下进行评估",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "2分：视力正常",
					"type": "option",
					"inputType": "radio",
					"id": "57ab8c7e-a3fa-4e3c-8a2b-85cd37a5ea3e",
					"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
					"level": 4
				}, {
					"name": "1分：能看清楚大字体，但看不清书报上的标准字体；视力有限，看不清报纸大标题，但能辨认物体",
					"type": "option",
					"inputType": "radio",
					"id": "c5633bde-e161-45b7-b243-d9749414c88f",
					"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
					"level": 4
				}, {
					"name": "0分：只能看到光、颜色和形状；完全失明",
					"type": "option",
					"inputType": "radio",
					"id": "7822ec7a-bbf9-4db8-9e0d-39154c8b9426",
					"pid": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
					"level": 4
				}],
				"id": "cd0c8ac7-e775-4f84-b8bd-f8883966c3cb",
				"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
				"level": 3
			}, {
				"name": "听力：能辨别声音的方位、音调、音量和音质的有关能力（可借助平时使用助听设备等）",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "2分：听力正常",
					"type": "option",
					"inputType": "radio",
					"id": "facb2b94-0681-4f92-a3aa-40fb596cdf70",
					"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
					"level": 4
				}, {
					"name": "1分：在轻声说话或说话距离超过2米时听不清；正常交流有些 困难，需在安静的环境或大声说话才能听到",
					"type": "option",
					"inputType": "radio",
					"id": "86d2a421-406e-44f4-855f-fcad9f18cc44",
					"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
					"level": 4
				}, {
					"name": "0分：讲话者大声说话或说话很慢，才能部分听见；完全失聪",
					"type": "option",
					"inputType": "radio",
					"id": "e54a01c3-ddb7-45d8-8fab-07111f707271",
					"pid": "5601f08f-1038-413d-baaa-edb76651b94b",
					"level": 4
				}],
				"id": "5601f08f-1038-413d-baaa-edb76651b94b",
				"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
				"level": 3
			}, {
				"name": "执行日常事务：计划、安排并完成日常事务，包括但不限于洗衣服、小金额购物、服药管理",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：能完全独立计划、安排和完成日常事务，无需协助",
					"type": "option",
					"inputType": "radio",
					"id": "c3c34410-af00-4208-aa0d-a00c1fd53992",
					"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
					"level": 4
				}, {
					"name": "3分：在计划、安排和完成日常事务时需要他人监护或指导",
					"type": "option",
					"inputType": "radio",
					"id": "2a570c46-d4f6-4fca-afdf-8dd69e10898d",
					"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
					"level": 4
				}, {
					"name": "2分：在计划、安排和完成日常事务时需要少量协助",
					"type": "option",
					"inputType": "radio",
					"id": "9a18a6c0-6dc4-4309-ba57-70a0f807f8a9",
					"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
					"level": 4
				}, {
					"name": "1分：在计划、安排和完成日常事务时需要大量协助",
					"type": "option",
					"inputType": "radio",
					"id": "0bede700-569a-4f5e-a0b6-cae14ad0ba07",
					"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
					"level": 4
				}, {
					"name": "0分：完全依赖他人进行日常事务",
					"type": "option",
					"inputType": "radio",
					"id": "d5917855-6297-4942-8aeb-eef59ee31dfa",
					"pid": "76c89445-4332-4ed5-819d-633ac72fa9e8",
					"level": 4
				}],
				"id": "76c89445-4332-4ed5-819d-633ac72fa9e8",
				"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
				"level": 3
			}, {
				"name": "使用交通工具外出",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "3分：能自己骑车或搭乘公共交通工具外出",
					"type": "option",
					"inputType": "radio",
					"id": "3a119c3e-02e7-47a2-9d0e-9121e2a8a82c",
					"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
					"level": 4
				}, {
					"name": "2分：能自己搭乘出租车，但不会搭乘其他公共交通工具外出",
					"type": "option",
					"inputType": "radio",
					"id": "66eb3b56-09fd-484e-87fe-92f69b543710",
					"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
					"level": 4
				}, {
					"name": "1分：当有人协助或陪伴，可搭乘公共交通工具外出",
					"type": "option",
					"inputType": "radio",
					"id": "5be25bb3-49a4-47cf-86c6-686c5152a9fa",
					"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
					"level": 4
				}, {
					"name": "0分：只能在他人协助下搭乘出租车或私家车外出；完全不能出门，或者外出完全需要协助",
					"type": "option",
					"inputType": "radio",
					"id": "d792ecd8-01e1-4b97-9b4f-94fe3ba39a6e",
					"pid": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
					"level": 4
				}],
				"id": "f55e1f80-473e-4882-ba9b-9a599ed2c49c",
				"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
				"level": 3
			}, {
				"name": "社会交往能力",
				"type": "input",
				"inputType": "radioList",
				"children": [{
					"name": "4分：参与社会，在社会环境有一定的适应能力，待人接物恰当",
					"type": "option",
					"inputType": "radio",
					"id": "b8a661dc-958c-465f-a1e0-560f834f478f",
					"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
					"level": 4
				}, {
					"name": "3分：能适应单纯环境，主动接触他人，初见面时难让人发现智力问题，不能理解隐喻语",
					"type": "option",
					"inputType": "radio",
					"id": "16d27992-c573-45bb-be4a-0a66c705b2ee",
					"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
					"level": 4
				}, {
					"name": "2分：脱离社会，可被动接触，不会主动待他人，谈话中很多不适词句，容易上当受骗",
					"type": "option",
					"inputType": "radio",
					"id": "ea93ab53-606b-4a01-a575-76203b305ea6",
					"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
					"level": 4
				}, {
					"name": "1分：勉强可与他人接触，谈吐内容不清楚，表情不恰当",
					"type": "option",
					"inputType": "radio",
					"id": "fac58e0a-1f6e-4386-8d61-64cf24624b3b",
					"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
					"level": 4
				}, {
					"name": "0分：不能与人交往",
					"type": "option",
					"inputType": "radio",
					"id": "1544ea1c-0c5a-4c2b-bee8-d72a88313607",
					"pid": "24417fcb-5044-4f54-9aa0-7151139b8401",
					"level": 4
				}],
				"id": "24417fcb-5044-4f54-9aa0-7151139b8401",
				"pid": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
				"level": 3
			}],
			"id": "e0ec784f-8cfd-492d-8980-9475ad5c2a64",
			"pid": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
			"level": 2
		}],
		"id": "38c92dc5-4617-46a9-986d-ac60a77a0e3f",
		"pid": "f8684208-1050-4c0a-a04c-2a2e1194a13b",
		"level": 1
	}],
	"pid": 0,
	"level": 0
}];