<template>
	<div class="content">
		<el-col :span='18' :offset='3'>
			<broadCast></broadCast>
			<div class="top">
				<h2>
					八月，清热利湿，及时补水
					<a href="#">更多食材<i class="el-icon-arrow-right"></i></a>
				</h2>
				<div class="box">
					<el-tabs v-model="activeName">
						<el-tab-pane label="水果" name="first">
							<material :list='list[0]'></material>
						</el-tab-pane>
						<el-tab-pane label="蔬菜" name="second">
							<material :list='list[1]'></material>
						</el-tab-pane>
						<el-tab-pane label="五谷" name="third">
							<material :list='list[2]'></material>
						</el-tab-pane>
						<el-tab-pane label="生鲜" name="fourth">
							<material :list='list[3]'></material>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<div class="middle">
				<hot></hot>
			</div>
		</el-col>
	</div>
</template>

<script>
	import broadCast from './Broadcast.vue'
	import material from './Material.vue'
	import hot from './Hot.vue'
	export default {
		name: 'Home',
		components: {
			broadCast,
			material,
			hot
		},
		data() {
			return {
				activeName: 'first',
				list: [
					[{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						},
						{
							title: '橘子',
							src: '../../static/img/test01.jpg'
						}
					],
					[{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						},
						{
							title: '南瓜',
							src: '../../static/img/test02.jpg'
						}
					],
					[{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						},
						{
							title: '黑豆',
							src: '../../static/img/test03.jpg'
						}
					],
					[{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						},
						{
							title: '草鱼',
							src: '../../static/img/test04.jpg'
						}
					]

				]
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		overflow: auto;
		overflow: hidden;
	}
	
	.top {
		height: 312px;
	}
	
	.top h2 {
		position: relative;
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
	}
	
	.top h2>a {
		position: absolute;
		display: inline-block;
		width: 60px;
		height: 48px;
		font-size: 12px;
		line-height: 48px;
		text-decoration: none;
		color: #696969;
		right: 0;
		top: 50%;
		margin-top: -24px;
	}
	
	.top h2>a:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	
	.box {
		width: 971px;
		height: 192px;
		padding:0 20px;
		background-color: white;
	}
	
	.middle {
		width: 100%;
		height: 804px;
		/*background-color: darkgray;*/
	}
</style>
<style>
	.box .el-tabs__header {
		margin-bottom: 5px;
	}
	
	.box .el-tabs--top .el-tabs__item {
		color: #FA8072;
		height: 55px;
		line-height: 55px;
	}
	
	.box .el-tabs__item.is-active {
		color: #8B4513;
	}
	
	.box .el-tabs__active-bar {
		background-color: #8B4513;
	}
</style>