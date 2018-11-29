<template>
	<div class="big_box">
		<el-row>
			<el-col :span='18' :offset='3' class='content'>
				<h3>
					<span class="left_line"></span>
					成为<strong>·</strong>食徒
					<span class="right_line"></span>
				</h3>
				<form class="registered_box">
					<el-input placeholder='请输入账号' v-model="u_name"></el-input>
					<el-input type='password' placeholder='请输入密码' v-model="pwd"></el-input>
					<el-input type='password' placeholder='请再次输入密码' v-model="repwd"></el-input>
					<el-input placeholder='昵称' v-model="name"></el-input>
					<el-radio v-model="sex" label="0">男</el-radio>
					<el-radio v-model="sex" label="1">女</el-radio>
					<div class="block">
						<el-cascader :options="options" v-model="selectedOptionsAddress" @change="addressChange" placeholder='选择居住地'>
						</el-cascader>
					</div>
					<el-cascader :options="options" v-model="selectedOptionsHome" @change="homeChange" placeholder='选择您的家乡'>
					</el-cascader>
					<el-date-picker v-model="dateValue" type="date" placeholder="生日">
					</el-date-picker>
					<div class="nl_loginitem">
					<label>
					<input class="rule" v-model="isAgree"  type="checkbox">我已阅读并同意<a href="#">食坊用户使用协议</a>
					</label>
					</div>
					<el-button class='button' @click='register' :disabled='!isAgree'>注册</el-button>
				</form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'registered',
		mounted: function() {
			this.$store.commit('changeTopFlag', 0)
		},
		components: {
		},
		data() {
			return {
				u_name:'',
				pwd:'',
				repwd:'',
				name:'',
				sex: '0',
				options: [{
					value: '云南省',
					label: '云南省',
					children: [{
						value: '昆明市',
						label: '昆明市',
						children: [{
							value: '西山区',
							label: '西山区'
						}, {
							value: '五华区',
							label: '五华区'
						}, {
							value: '盘龙区',
							label: '盘龙区'
						}, {
							value: '官渡区',
							label: '官渡区'
						}, {
							value: '东川区',
							label: '东川区'
						}, {
							value: '宜良县',
							label: '宜良县'
						}, {
							value: '嵩明县',
							label: '嵩明县'
						}, {
							value: '呈贡区',
							label: '呈贡区'
						}, {
							value: '安宁市',
							label: '安宁市'
						}]
					}, {
						value: '曲靖市',
						label: '曲靖市',
						children: [{
							value: '麒麟区',
							label: '麒麟区'
						}, {
							value: '马龙县',
							label: '马龙县'
						}, {
							value: '陆良县',
							label: '陆良县'
						}, {
							value: '师宗县',
							label: '师宗县'
						}, {
							value: '罗平县',
							label: '罗平县'
						}, {
							value: '富源县',
							label: '富源县'
						}, {
							value: '会泽县',
							label: '会泽县'
						}, {
							value: '沾益县',
							label: '沾益县'
						}, {
							value: '宣威市',
							label: '宣威市'
						}]
					}, {
						value: '玉溪市',
						label: '玉溪市',
						children: [{
							value: '红塔区',
							label: '红塔区'
						}, {
							value: '江川县',
							label: '江川县'
						}, {
							value: '澄江县',
							label: '澄江县'
						}, {
							value: '通海县',
							label: '通海县'
						}, {
							value: '华宁县',
							label: '华宁县'
						}, {
							value: '易门县',
							label: '易门县'
						}, {
							value: '峨山彝族自治区',
							label: '峨山彝族自治区'
						}, {
							value: '新平彝族傣族自治县',
							label: '新平彝族傣族自治县'
						}, {
							value: '元江哈尼族彝族傣族自治县',
							label: '元江哈尼族彝族傣族自治县'
						}]
					}, {
						value: '保山市',
						label: '保山市',
						children: [{
							value: '隆阳区',
							label: '隆阳区'
						}, {
							value: '施甸县',
							label: '施甸县'
						}, {
							value: '腾冲县',
							label: '腾冲县'
						}, {
							value: '龙陵县',
							label: '龙陵县'
						}, {
							value: '昌宁县',
							label: '昌宁县'
						}]
					}, {
						value: '昭通市',
						label: '昭通市',
						children: [{
							value: '昭阳区',
							label: '昭阳区'
						}, {
							value: '鲁甸县',
							label: '鲁甸县'
						}, {
							value: '巧家县',
							label: '巧家县'
						}, {
							value: '盐津县',
							label: '盐津县'
						}, {
							value: '大关县',
							label: '大关县'
						}, {
							value: '永善县',
							label: '永善县'
						}, {
							value: '绥江县',
							label: '绥江县'
						}, {
							value: '镇雄县',
							label: '镇雄县'
						}, {
							value: '宜良县',
							label: '宜良县'
						}]
					}, {
						value: '丽江市',
						label: '丽江市',
						children: [{
							value: '古城区',
							label: '古城区'
						}, {
							value: '玉龙纳西族自治县',
							label: '玉龙纳西族自治县'
						}, {
							value: '永胜县',
							label: '永胜县'
						}, {
							value: '华坪县',
							label: '华坪县'
						}, {
							value: '宁蒗彝族自治县',
							label: '宁蒗彝族自治县'
						}]
					}]
				}, {
					value: '四川省',
					label: '四川省',
					children: [{
						value: '成都市',
						label: '成都市',
						children: [{
							value: '青羊区',
							label: '青羊区'
						}, {
							value: '锦江区',
							label: '锦江区'
						}, {
							value: '金牛区',
							label: '金牛区'
						}, {
							value: '武侯区',
							label: '武侯区'
						}, {
							value: '龙泉驿站',
							label: '龙泉驿站'
						}, {
							value: '清白江区',
							label: '清白江区'
						}, {
							value: '新都区',
							label: '新都区'
						}, {
							value: '温江区',
							label: '温江区'
						}, {
							value: '都江堰市',
							label: '都江堰市'
						}, {
							value: '彭州市',
							label: '彭州市'
						}, {
							value: '双流县',
							label: '双流县'
						}, {
							value: '蒲江',
							label: '蒲江'
						}, {
							value: '大邑县',
							label: '大邑县'
						}, {
							value: '崇州市',
							label: '崇州市'
						}]

					}, {
						value: '自贡市',
						label: '自贡市',
						children: [{
							value: '大安区',
							label: '大安区'
						}, {
							value: '自流井市',
							label: '自流井市'
						}, {
							value: '贡井市',
							label: '贡井市'
						}, {
							value: '沿滩区',
							label: '沿滩区'
						}, {
							value: '荣县',
							label: '荣县'
						}, {
							value: '言顺县',
							label: '言顺县'
						}]
					}, {
						value: '攀枝花市',
						label: '攀枝花市',
						children: [{
							value: '东区',
							label: '东区'
						}, {
							value: '西区',
							label: '西区'
						}, {
							value: '仁和区',
							label: '仁和区'
						}, {
							value: '米易县',
							label: '米易县'
						}, {
							value: '盐边县',
							label: '盐边县'
						}]
					}, {
						value: '泸州市',
						label: '泸州市',
						children: [{
							value: '江阳区',
							label: '江阳区'
						}, {
							value: '纳溪区',
							label: '纳溪区'
						}, {
							value: '龙马潭区',
							label: '龙马潭区'
						}, {
							value: '泸县',
							label: '泸县'
						}, {
							value: '合江县',
							label: '合江县'
						}]
					}, {
						value: '德阳市',
						label: '德阳市',
						children: [{
							value: '广汉市',
							label: '广汉市'
						}, {
							value: '绵竹市',
							label: '绵竹市'
						}, {
							value: '罗江县',
							label: '罗江县'
						}, {
							value: '中江县',
							label: '中江县'
						}, {
							value: '愦阳市',
							label: '愦阳市'
						}]
					}]
				}, {
					value: '浙江省',
					label: '浙江省',
					children: [{
						value: '杭州市',
						label: '杭州市',
						children: [{
							value: '富阳市',
							label: '富阳市'
						}, {
							value: '淳安县',
							label: '淳安县'
						}, {
							value: '桐庐县',
							label: '桐庐县'
						}, {
							value: '临安市',
							label: '临安市'
						}, {
							value: '建德市',
							label: '建德市'
						}, {
							value: '余杭区',
							label: '余杭区'
						}, {
							value: '高新',
							label: '高新'
						}, {
							value: '西湖区',
							label: '西湖区'
						}, {
							value: '拱别区',
							label: '拱别区'
						}, {
							value: '江干区',
							label: '江干区'
						}, {
							value: '上城区',
							label: '上城区'
						}, {
							value: '下城区',
							label: '下城区'
						}]

					}, {
						value: '宁波市',
						label: '宁波市',
						children: [{
							value: '海曙区',
							label: '海曙区'
						}, {
							value: '江东区',
							label: '江东区'
						}, {
							value: '江北区',
							label: '江北区'
						}, {
							value: '镇海区',
							label: '镇海区'
						}, {
							value: '北仓区',
							label: '北仓区'
						}, {
							value: '余姚市',
							label: '余姚市'
						}, {
							value: '象山县',
							label: '象山县'
						}]
					}, {
						value: '温州市',
						label: '温州市',
						children: [{
							value: '鹿城区',
							label: '鹿城区'
						}, {
							value: '龙湾区',
							label: '龙湾区'
						}, {
							value: '瑞安市',
							label: '瑞安市'
						}, {
							value: '乐青市',
							label: '乐青市'
						}, {
							value: '永嘉县',
							label: '永嘉县'
						}, {
							value: '洞头县',
							label: '洞头县'
						}, {
							value: '平阳县',
							label: '平阳县'
						}]
					}, {
						value: '嘉兴市',
						label: '嘉兴市',
						children: [{
							value: '南湖区',
							label: '南湖区'
						}, {
							value: '秀洲区',
							label: '秀洲区'
						}, {
							value: '平湖市',
							label: '平湖市'
						}, {
							value: '海宁市',
							label: '海宁市'
						}, {
							value: '桐乡市',
							label: '桐乡市'
						}]
					}, {
						value: '丽水市',
						label: '丽水市',
						children: [{
							value: '莲都区',
							label: '莲都区'
						}, {
							value: '龙泉市',
							label: '龙泉市'
						}, {
							value: '青田县',
							label: '青田县'
						}, {
							value: '云和县',
							label: '云和县'
						}, {
							value: '庆元县',
							label: '庆元县'
						}, {
							value: '松阳县',
							label: '松阳县'
						}]

					}]

				}, {
					value: '江苏省',
					label: '江苏省',
					children: [{
						value: '南京市',
						label: '南京市',
						children: [{
							value: '玄武区',
							label: '玄武区'
						}, {
							value: '秦淮区',
							label: '秦淮区'
						}, {
							value: '建邺区',
							label: '建邺区'
						}, {
							value: '鼓楼区',
							label: '鼓楼区'
						}, {
							value: '浦口区',
							label: '浦口区 '
						}, {
							value: '雨花台区',
							label: '雨花台区'
						}, {
							value: '江宁区',
							label: '江宁区'
						}, {
							value: '六合区',
							label: '六合区'
						}, {
							value: '高淳区',
							label: '高淳区'
						}, {
							value: '栖霞区',
							label: '栖霞区'
						}]

					}, {
						value: '无锡市',
						label: '无锡市',
						children: [{
							value: '崇安区',
							label: '崇安区'
						}, {
							value: '南长区',
							label: '南长区'
						}, {
							value: '北塘区',
							label: '北塘区'
						}, {
							value: '锡山区',
							label: '锡山区'
						}, {
							value: '惠山区',
							label: '惠山区'
						}, {
							value: '滨湖区',
							label: '滨湖区'
						}]
					}, {
						value: '常州市',
						label: '常州市',
						children: [{
							value: '天宁区',
							label: '天宁区'
						}, {
							value: '云龙区',
							label: '云龙区'
						}, {
							value: '贾汪区',
							label: '贾汪区'
						}, {
							value: '泉山区',
							label: '泉山区'
						}, {
							value: '铜山区',
							label: '铜山区'
						}]
					}, {
						value: '苏州市',
						label: '苏州市',
						children: [{
							value: '姑苏区',
							label: '姑苏区'
						}, {
							value: '虎丘区',
							label: '虎丘区'
						}, {
							value: '昊中区',
							label: '昊中区'
						}, {
							value: '相城区',
							label: '相城区'
						}, {
							value: '昊江区',
							label: '昊江区'
						}]
					}, {
						value: '南通市',
						label: '南通市',
						children: [{
							value: '崇川市',
							label: '崇川市'
						}, {
							value: '通州区',
							label: '通州区'
						}, {
							value: '海安区',
							label: '海安区'
						}, {
							value: '如东县',
							label: '如东县'
						}, {
							value: '启东市',
							label: '启东市'
						}]

					}]
				}],
				selectedOptionsHome: [],
				selectedOptionsAddress: [],
				selectedOptions3: [],
				dateValue: '',
				isAgree: true
			};
		},
		methods: {
			addressChange(value) {
				console.log(this.selectedOptionsAddress);
			},
			homeChange(value) {
				console.log(this.selectedOptionsHome);
			},
			register(){
				if(this.pwd!=this.repwd){
					alert('两次密码不一致，请重新输入...');
				}else{
					let _this = this;
					_this.$http({
						method:'post',
						url:'/register',
						data:{
							u_name:_this.$md5(_this.u_name),
							u_pwd:_this.$md5(_this.pwd),
							name:_this.name,
							sex:_this.sex,
							address:_this.selectedOptionsAddress.join('-'),
							home:_this.selectedOptionsHome.join('-'),
							birthday:_this.dateValue.toString()
						}
					}).then(response=>{
						if(response.data.state==1){
							alert(response.data.msg)
							this.$router.replace('/login')
						}else{
							alert(response.data.msg)
						}
					})
				}
			}
		}
	};
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
	}
	.content {
		background-color: white;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	h3 {
		height: 43px;
		margin: 40px auto;
		line-height: 43px;
		text-align: center;
		font-size: 24px;
		font-weight: normal;
		color: #8B4513;
	}
	
	strong {
		font-weight: bolder;
	}
	
	.left_line,
	.right_line {
		display: inline-block;
		width: 91px;
		height: 9px;
		margin: 0 15px;
		vertical-align: middle;
	}
	
	.left_line {
		background-image: url(../assets/nl_title_left.png);
	}
	
	.right_line {
		background-image: url(../assets/nl_title_right.png);
	}
	
	.registered_box {
		width: 320px;
		margin: 50px auto 0;
	}
	
	a {
		text-decoration: none;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		background: transparent;
	}
</style>
<style type="text/css">
	.registered_box .el-input__inner {
		margin: 10px auto;
	}
	.nl_loginitem {
		font-size: 14px;
		line-height: 22px;
	}
	
	.nl_loginitem label {
		color: #666;
		font-size: 13px;
		line-height: 22px;
	}
	
	.nl_loginitem a {
		color: #ec5541;
	}
	.registered_box .el-cascader {
		width: 320px;
		line-height: 60px;
	}
	.registered_box .el-date-editor{
		width: 320px;
	}
	.registered_box .el-button {
		font-size: 15px;
		color: #fff;
		font-family: "Hiragino Sans GB", "冬青黑体", "Microsoft Yahei", "微软雅黑";
		background: #ec5541;
		margin: 16px 100px;
	}
</style>