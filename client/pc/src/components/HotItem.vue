<template>
	<div class="cases">
		<h2>最新菜谱</h2>
		<div class="menus">
			<div class="upper">
				<el-row :gutter='20'>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
				</el-row>
			</div>
			<div class="lower">
				<el-row :gutter='20'>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<menuItem></menuItem>
					</el-col>
					<el-col :span='6' class='menu'>
						<div class="hot_menu">
							<h2>热门栏目推荐</h2>
							<ul>
								<li>
									<router-link to='#'>最新菜谱</router-link>
									<router-link to='#'>家常菜</router-link>
								</li>
								<li>
									<router-link to='#'>凉菜</router-link>
									<router-link to='#'>素食</router-link>
									<router-link to='#'>早餐</router-link>
								</li>
								<li>
									<router-link to='#'>乌发</router-link>
									<router-link to='#'>高血压</router-link>
									<router-link to='#'>烘焙</router-link>
								</li>
								<li>
									<router-link to='#'>韩国料理</router-link>
									<router-link to='#'>川菜</router-link>
								</li>
								<li>
									<router-link to='#'>粤菜</router-link>
									<router-link to='#'>湘菜</router-link>
									<router-link to='#'>甜点</router-link>
								</li>
								<li>
									<router-link to='#' class='all'>进入菜谱大全>></router-link>
								</li>
							</ul>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import menuItem from './MenuItem.vue'
	export default {
		name: 'hotItem',
		components: {
			menuItem
		}
	}
</script>

<style scoped>
	.cases {
		width: 1011px;
		height: 804px;
		float: left;
		margin-right: 6px;
	}
	.cases h2 {
		width: 100%;
		height: 120px;
		text-align: center;
		line-height: 120px;
		font-weight: normal;
	}
	.menus {
		width: 100%;
		height: 684px;
	}
	.upper,
	.lower {
		width: 100%;
		height: 332px;
	}
	.lower {
		margin-top: 20px;
	}
	.menu {
		height: 332px;
	}
	.hot_menu {
		width: 100%;
		height: 332px;
		background-color: white;
		font-size: 0;
	}
	.hot_menu h2 {
		width: 224px;
		height: 50px;
		padding-left: 14px;
		font-size: 14px;
		line-height: 50px;
		text-align: left;
		color: #8B4513;
		border-bottom: 1px solid lightgray;
	}
	.hot_menu ul {
		width: 210px;
		padding: 14px;
	}
	.hot_menu li {
		height: 30px;
		margin-bottom: 10px;
	}
	.hot_menu li a {
		display: inline-block;
		height: 28px;
		line-height: 28px;
		padding: 0 10px;
		margin-right: 10px;
		font-size: 14px;
		text-decoration: none;
		border: 1px solid lightgray;
		color: #696969;
	}
	.hot_menu li a:hover {
		color: white;
		border: 1px solid #8B4513;
		background-color: #8B4513;
	}
	.hot_menu .all {
		display: inline-block;
		color: white;
		background-color: #8B4513;
		border: 1px solid #8B4513;
	}
</style>