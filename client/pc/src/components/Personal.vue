<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='content'>
			<h2>欢迎来到我的美食空间</h2>
			<div class="info_box">
				<img src="../../static/img/test_user.jpg" />
				<div class="info_middle">
					<h2>哲哉丶</h2>
					<span>
						<i>男</i>
						<i>四川省成都市</i>
						<i>修改个人资料</i>
					</span>
				</div>
			</div>
			<div class="main_content">
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="我的菜谱" name="first">
						<el-row :gutter='20'>
							<el-col :span='6' class='row' v-for='item in 2' :key='item'>
								<menuItem></menuItem>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="我的收藏" name="second">
						<el-row :gutter='20'>
							<el-col :span='6' class='row' v-for='item in 2' :key='item'>
								<menuItem></menuItem>
							</el-col>
						</el-row>
					</el-tab-pane>
				</el-tabs>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import menuItem from './MenuItem.vue';
	export default {
		name: 'Personal',
		data() {
			return {
				activeName2: 'first'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components:{
			menuItem
		}
	}
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
	}
	
	.content {
		margin-bottom: 40px;
	}
	
	.content>h2 {
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
	}
	
	.info_box {
		height: 210px;
		background-color: white;
		font-size: 0;
	}
	
	.info_box>img {
		height: 210px;
	}
	
	.info_middle {
		display: inline-block;
		width: 551px;
		height: 210px;
		vertical-align: top;
		padding: 0 20px;
	}
	
	.info_middle>h2 {
		height: 58px;
		line-height: 58px;
		font-size: 26px;
		margin-top: 15px;
		font-weight: normal;
	}
	
	.info_middle>span {
		display: inline-block;
		width: 100%;
		padding: 12px 0;
	}
	
	.info_middle>span>i {
		display: inline-block;
		padding: 0 8px 0 8px;
		font-size: 12px;
		font-style: normal;
		border-right: 1px solid #DCDCDC;
	}
	
	.main_content {
		min-height: 500px;
		background-color: white;
		margin-top: 5px;
		background-color: #F5F5F5;
	}
	.row {
		margin-bottom: 20px;
		/*background-color: darkgray;*/
	}
</style>
<style type="text/css">
	.main_content .el-tabs__item {
		width:505px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 24px;
		color: lightcoral;
	}
	.main_content .el-tabs__item.is-active {
		color: #8B4513;
	}
</style>