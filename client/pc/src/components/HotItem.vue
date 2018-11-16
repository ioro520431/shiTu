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
									<a href="#">最新菜谱</a>
									<a href="#">家常菜</a>
								</li>
								<li>
									<a href="#">凉菜</a>
									<a href="#">素食</a>
									<a href="#">早餐</a>
								</li>
								<li>
									<a href="#">乌发</a>
									<a href="#">高血压</a>
									<a href="#">烘焙</a>
								</li>
								<li>
									<a href="#">韩国料理</a>
									<a href="#">川菜</a>
								</li>
								<li>
									<a href="#">粤菜</a>
									<a href="#">湘菜</a>
									<a href="#">甜点</a>
								</li>
								<li>
									<a href="#" class="all">进入菜谱大全>></a>
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
		color: white;
		background-color: #8B4513;
		border: 1px solid #8B4513;
	}
</style>