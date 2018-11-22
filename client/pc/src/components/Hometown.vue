<template>
	<div class="registered_box">
		<el-cascader :options="options" v-model="selectedOptions" @change="handleChange" placeholder='选择您的家乡'>
		</el-cascader>
	</div>
</template>

<script>
export default {
	 name: 'registered',
	data() {
			return {
				options: [{
					value: 'province',
					label: '云南省',
					children: [{
						value: 'shi',
						label: '昆明市',
						children: [{
							value: 'xishan',
							label: '西山区'
						}, {
							value: 'wuhua',
							label: '五华区'
						}, {
							value: 'panlong',
							label: '盘龙区'
						}, {
							value: 'guandu',
							label: '官渡区'
						}, {
							value: 'dongchuan',
							label: '东川区'
						}, {
							value: 'yiliang',
							label: '宜良县'
						}, {
							value: 'songming',
							label: '嵩明县'
						}, {
							value: 'chenggong',
							label: '呈贡区'
						}, {
							value: 'annig',
							label: '安宁市'
						}]
					}, {
						value: 'qujing',
						label: '曲靖市',
						children: [{
							value: 'qiling',
							label: '麒麟区'
						}, {
							value: 'malong',
							label: '马龙县'
						}, {
							value: 'luliang',
							label: '陆良县'
						}, {
							value: 'shizong',
							label: '师宗县'
						}, {
							value: 'kuopin',
							label: '罗平县'
						}, {
							value: 'fuyuan',
							label: '富源县'
						}, {
							value: 'huize',
							label: '会泽县'
						}, {
							value: 'zhaiyi',
							label: '沾益县'
						}, {
							value: 'xuanwei',
							label: '宣威市'
						}]
						}, {
						value: 'yuxi',
						label: '玉溪市',
						children: [{
							value: 'honhta',
							label: '红塔区'
						}, {
							value: 'jiangchuan',
							label: '江川县'
						}, {
							value: 'chengjiang',
							label: '澄江县'
						}, {
							value: 'tonghai',
							label: '通海县'
						}, {
							value: 'huaning',
							label: '华宁县'
						}, {
							value: 'yimen',
							label: '易门县'
						}, {
							value: 'eshan',
							label: '峨山彝族自治区'
						}, {
							value: 'xinpin',
							label: '新平彝族傣族自治县'
						}, {
							value: 'yuanjiang',
							label: '元江哈尼族彝族傣族自治县'
						}]
						}, {
						value: 'baoshan',
						label: '保山市',
						children: [{
							value: 'longyang',
							label: '隆阳区'
						}, {
							value: 'shidian',
							label: '施甸县'
						}, {
							value: 'dingbudaohang',
							label: '腾冲县'
						}, {
							value: 'tengchong',
							label: '龙陵县'
						}, {
							value: 'changning',
							label: '昌宁县'
						}]
						}, {
						value: 'zhaotong',
						label: '昭通市',
						children: [{
							value: 'zhaoyang',
							label: '昭阳区'
						}, {
							value: 'xundian',
							label: '鲁甸县'
						}, {
							value: 'qiaojiaxian',
							label: '巧家县'
						}, {
							value: 'yanjin',
							label: '盐津县'
						}, {
							value: 'daguan',
							label: '大关县'
						}, {
							value: 'yongshan',
							label: '永善县'
						}, {
							value: 'suijiang',
							label: '绥江县'
						}, {
							value: 'zhenxiong',
							label: '镇雄县'
						}, {
							value: 'yiliang',
							label: '宜良县'
						}]
						}, {
						value: 'lijiang',
						label: '丽江市',
						children: [{
							value: 'gucheng',
							label: '古城区'
						}, {
							value: 'yulong',
							label: '玉龙纳西族自治县'
						}, {
							value: 'yongsheng',
							label: '永胜县'
						}, {
							value: 'huaping',
							label: '华坪县'
						}, {
							value: 'ninglang',
							label: '宁蒗彝族自治县'
						}]
					}]
				}, {
					value: 'zujian',
					label: '四川省',
					children: [{
						value: 'chengdu',
						label: '成都市',
						children: [{
							value: 'qingyang',
							label: '青羊区'
						}, {
							value: 'jingjiang',
							label: '锦江区'
						}, {
							value: 'jinniu',
							label: '金牛区'
						}, {
							value: 'wuhou',
							label: '武侯区'
						}, {
							value: 'longquan',
							label: '龙泉驿站'
						},{
							value: 'qinbei',
							label: '清白江区'
						}, {
							value: 'xindu',
							label: '新都区'
						}, {
							value: 'weniang',
							label: '温江区'
						}, {
							value: 'diujiang',
							label: '都江堰市'
						}, {
							value: 'pengzhou',
							label: '彭州市'
						}, {
							value: 'shuangliu',
							label: '双流县'
						}, {
							value: 'pujiang',
							label: '蒲江'
						}, {
							value: 'dayi',
							label: '大邑县'
						}, {
							value: 'chongzhou',
							label: '崇州市'
							}]
					
					}, {
						value: 'zigongshi',
						label: '自贡市',
						children: [{
							value: 'daan',
							label: '大安区'
						}, {
							value: 'ziliu',
							label: '自流井市'
						}, {
							value: 'gongjin',
							label: '贡井市'
						}, {
							value: 'yantan',
							label: '沿滩区'
						}, {
							value: 'rongxian',
							label: '荣县'
						}, {
							value: 'yanshun',
							label: '言顺县'
						}]
					}, {
						value: 'panzhihua',
						label: '攀枝花市',
						children: [{
							value: 'dongqu',
							label: '东区'
						}, {
							value: 'xiqu',
							label: '西区'
						}, {
							value: 'renhe',
							label: '仁和区'
						}, {
							value: 'miyi',
							label: '米易县'
						}, {
							value: 'yanbian',
							label: '盐边县'
						}]
					}, {
						value: 'luzhou',
						label: '泸州市',
						children: [{
							value: 'jiangyang',
							label: '江阳区'
						}, {
							value: 'naxi',
							label: '纳溪区'
						}, {
							value: 'longmatan',
							label: '龙马潭区'
						}, {
							value: 'longxian',
							label: '泸县'
						}, {
							value: 'hejiang',
							label: '合江县'
						}]
					}, {
						value: 'deyang',
						label: '德阳市',
						children: [{
							value: 'guanghan',
							label: '广汉市'
						}, {
							value: 'mianzhu',
							label: '绵竹市'
						}, {
							value: 'luojiang',
							label: '罗江县'
						}, {
							value: 'zhanjiang',
							label: '中江县'
						}, {
							value: 'hanyang',
							label: '愦阳市'
						}]
					}]
					}, {
					value: 'zhejiang',
					label: '浙江省',
					children: [{
						value: 'hangzhou',
						label: '杭州市',
						children: [{
							value: 'fuyang',
							label: '富阳市'
						}, {
							value: 'chunan',
							label: '淳安县'
						}, {
							value: 'tonglu',
							label: '桐庐县'
						}, {
							value: 'linan',
							label: '临安市'
						}, {
							value: 'jiande',
							label: '建德市'
						},{
							value: 'yuhang',
							label: '余杭区'
						}, {
							value: 'gaoxin',
							label: '高新'
						}, {
							value: 'xihu',
							label: '西湖区'
						}, {
							value: 'gongbie',
							label: '拱别区'
						}, {
							value: 'jianggan',
							label: '江干区'
						}, {
							value: 'shangcheng',
							label: '上城区'
						}, {
							value: 'xiacheng',
							label: '下城区'
						}]
					
					}, {
						value: 'ninbo',
						label: '宁波市',
						children: [{
							value: 'haishu',
							label: '海曙区'
						}, {
							value: 'jiangdong',
							label: '江东区'
						}, {
							value: '江北区',
							label: '江北区'
						}, {
							value: 'zhenhai',
							label: '镇海区'
						}, {
							value: 'beicang',
							label: '北仓区'
						}, {
							value: 'yuyao',
							label: '余姚市'
						},{
							value: 'xiangshan',
							label: '象山县'
						}]
					}, {
						value: 'wenzhou',
						label: '温州市',
						children: [{
							value: 'lucheng',
							label: '鹿城区'
						}, {
							value: 'longwan',
							label: '龙湾区'
						}, {
							value: 'ruian',
							label: '瑞安市'
						}, {
							value: 'leqin',
							label: '乐青市'
						}, {
							value: 'yongjia',
							label: '永嘉县'
						}, {
							value: 'dongtou',
							label: '洞头县'
						}, {
							value: 'pinyang',
							label: '平阳县'
						}]
					}, {
						value: 'jiaxin',
						label: '嘉兴市',
						children: [{
							value: 'nanhu',
							label: '南湖区'
						}, {
							value: 'xiuzhou',
							label: '秀洲区'
						}, {
							value: 'pinhu',
							label: '平湖市'
						}, {
							value: 'haining',
							label: '海宁市'
						}, {
							value: 'tongxiang',
							label: '桐乡市'
						}]
					}, {
						value: 'lishuishi',
						label: '丽水市',
						children: [{
							value: 'liandu',
							label: '莲都区'
						}, {
							value: 'longquan',
							label: '龙泉市'
						}, {
							value: 'qintian',
							label: '青田县'
						}, {
							value: 'yunhe',
							label: '云和县'
						}, {
							value: 'qinyuan',
							label: '庆元县'
						}, {
							value: 'songyang',
							label: '松阳县'
						}]
					
					}]
					
					}, {
					value: 'jianfsu',
					label: '江苏省',
					children: [{
						value: 'nanjing',
						label: '南京市',
						children: [{
							value: 'xuanwuqu',
							label: '玄武区'
						}, {
							value: 'qinhuai',
							label: '秦淮区'
						}, {
							value: 'jianye',
							label: '建邺区'
						}, {
							value: 'gulou',
							label: '鼓楼区'
						}, {
							value: 'pukou',
							label: '浦口区 '
						},{
							value: 'yuhuatai',
							label: '雨花台区'
						}, {
							value: 'jiangning',
							label: '江宁区'
						}, {
							value: 'liuhe',
							label: '六合区'
						}, {
							value: 'gaochun',
							label: '高淳区'
						}, {
							value: 'xixia',
							label: '栖霞区'
							}]
					
					}, {
						value: 'wuxi',
						label: '无锡市',
						children: [{
							value: 'chongan',
							label: '崇安区'
						}, {
							value: 'nanzhang',
							label: '南长区'
						}, {
							value: 'beitang',
							label: '北塘区'
						}, {
							value: 'xishan',
							label: '锡山区'
						}, {
							value: 'huishan',
							label: '惠山区'
						}, {
							value: 'binhu',
							label: '滨湖区'
						}]
					}, {
						value: 'changzhou',
						label: '常州市',
						children: [{
							value: 'tianning',
							label: '天宁区'
						}, {
							value: 'yunlong',
							label: '云龙区'
						}, {
							value: 'jiawang',
							label: '贾汪区'
						}, {
							value: 'quanshan',
							label: '泉山区'
						}, {
							value: 'tongshan',
							label: '铜山区'
						}]
					}, {
						value: 'suzho',
						label: '苏州市',
						children: [{
							value: 'gusu',
							label: '姑苏区'
						}, {
							value: 'huqiu',
							label: '虎丘区'
						}, {
							value: 'haozhong',
							label: '昊中区'
						}, {
							value: 'xiangcheng',
							label: '相城区'
						}, {
							value: 'haojiang',
							label: '昊江区'
						}]
					}, {
						value: 'nantong',
						label: '南通市',
						children: [{
							value: 'chongchan',
							label: '崇川市'
						}, {
							value: 'tonfzhou',
							label: '通州区'
						}, {
							value: 'haian',
							label: '海安区'
						}, {
							value: 'rudong',
							label: '如东县'
						}, {
							value: 'qidong',
							label: '启东市'
						}]
					
					}]
				}],
				selectedOptions: [],
				selectedOptions2: [],
				selectedOptions3: []
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
		}
};
</script>

<style scoped>
	.registered_box {
		width: 320px;
		height: 60px;
		margin: 0px auto ;
	}
	</style>
	<style>
	.registered_box .el-cascader{
		width: 320px;
	}
</style>