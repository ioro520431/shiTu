<template>
	<div class="content">
		<el-col :span='18' :offset='3'>
			<broadCast></broadCast>
			<div class="top">
				<h2>
					八月，清热利湿，及时补水
					<router-link to='#'>更多食材<i class="el-icon-arrow-right"></i></router-link>
				</h2>
				<div class="box">
					<el-tabs v-model="activeName">
						<el-tab-pane label="水果" name="first">
							<foodMaterial :list='list.fruit'></foodMaterial>
						</el-tab-pane>
						<el-tab-pane label="蔬菜" name="second">
							<foodMaterial :list='list.vegetable'></foodMaterial>
						</el-tab-pane>
						<el-tab-pane label="五谷" name="third">
							<foodMaterial :list='list.grain'></foodMaterial>
						</el-tab-pane>
						<el-tab-pane label="生鲜" name="fourth">
							<foodMaterial :list='list.fresh'></foodMaterial>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<div class="middle">
				<hot></hot>
			</div>
			<div class="bottom">
				<h2>健康新闻</h2>
				<router-link to='#'>
					更多健康资讯<em class="el-icon-arrow-right"></em>
				</router-link>
				<div class="healthy_view">
					<el-row :gutter='20' class='healthy_case'>
						<el-col :span='12'>
							<healthy :mainInfo='healItems[0]'></healthy>
						</el-col>
						<el-col :span='12'>
							<healthy :mainInfo='healItems[1]'></healthy>
						</el-col>
					</el-row>
					<el-row :gutter='20' class='healthy_case'>
						<el-col :span='12'>
							<healthy :mainInfo='healItems[2]'></healthy>
						</el-col>
						<el-col :span='12'>
							<healthy :mainInfo='healItems[3]'></healthy>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-col>
	</div>
</template>

<script>
	import broadCast from './Broadcast.vue';
	import foodMaterial from './FoodMaterial.vue';
	import hot from './Hot.vue';
	import healthy from './Healthy.vue';
	
	export default {
		name: 'Home',
		mounted: function() {
			this.$store.commit('changeTopFlag', 1)
			let _this = this;
			_this.$http.get('/home',{
				params:{
					fruit:'612',
					vegetable:'611',
					grain:'||63',
					fresh:'||62'
				}
			}).then(response=>{
				_this.list = response.data;
			})
		},
		components: {
			broadCast,
			foodMaterial,
			hot,
			healthy
		},
		data() {
			return {
				activeName: 'first',
				list: '',
				healItems:[
				{	kind:'011',
					title:'饮食小常识'},
				{	kind:'012',
					title:'饮食禁忌'},
				{	kind:'021',
					title:'新鲜资讯'},
				{	kind:'022',
					title:'食品安全'}
				]
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		min-width: 1349px;
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
		padding: 0 20px;
		background-color: white;
	}
	
	.middle {
		width: 100%;
		height: 804px;
	}
	
	.bottom {
		position: relative;
		width: 1011px;
		margin-bottom: 50px;
	}
	
	.bottom h2 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
	}
	
	.bottom>a {
		position: absolute;
		display: inline-block;
		width: 84px;
		height: 48px;
		top: 36px;
		right: 0;
		font-size: 12px;
		line-height: 48px;
		color: #A9A9A9;
		text-decoration: none;
	}
	
	.bottom>a:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	
	.healthy_box>a:hover em {
		text-decoration: underline;
	}
	
	.healthy_view {
		width: 100%;
	}
	
	.healthy_case {
		height: 160px;
		margin-bottom: 20px;
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