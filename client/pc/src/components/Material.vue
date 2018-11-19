<template>
	<el-row>
		<el-col :span='18' :offset='3' class='content'>
			<nav>
				<div class="clearFloat"></div>
				<ul>
					<li>
						<router-link to='#' class="active_item">家常菜谱</router-link>
					</li>
					<li>
						<router-link to='#'>中华菜系</router-link>
					</li>
					<li>
						<router-link to='#'>各地小吃</router-link>
					</li>
					<li>
						<router-link to='#'>外国菜谱</router-link>
					</li>
					<li>
						<router-link to='#'>烘焙</router-link>
					</li>
					<li>
						<router-link to='#'>厨房百科</router-link>
					</li>
					<li>
						<router-link to='#'>食材百科</router-link>
					</li>
				</ul>
				<div class="clearFloat"></div>
				<div class="item">
					<dl class="main">
						<dt>家常菜谱</dt>
						<dd>
							<router-link to='#' class='active_kind'>家常菜</router-link>
						</dd>
						<dd>
							<router-link to='#'>凉菜</router-link>
						</dd>
						<dd>
							<router-link to='#'>素食</router-link>
						</dd>
						<dd>
							<router-link to='#'>早餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>午餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>晚餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>私家菜</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>每日三餐</dt>
						<dd>
							<router-link to='#'>早餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>午餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>晚餐</router-link>
						</dd>
						<dd>
							<router-link to='#'>下午茶</router-link>
						</dd>
						<dd>
							<router-link to='#'>夜宵</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>人群</dt>
						<dd>
							<router-link to='#'>老年人</router-link>
						</dd>
						<dd>
							<router-link to='#'>产妇</router-link>
						</dd>
						<dd>
							<router-link to='#'>孕妇</router-link>
						</dd>
						<dd>
							<router-link to='#'>宝宝食谱</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>功效</dt>
						<dd>
							<router-link to='#'>疾病调理</router-link>
						</dd>
						<dd>
							<router-link to='#'>功能性调理</router-link>
						</dd>
						<dd>
							<router-link to='#'>脏腑调理</router-link>
						</dd>
						<dd>
							<router-link to='#'>人群膳食</router-link>
						</dd>
					</dl>
				</div>
			</nav>
			<div class="middle_box">
				<h2>
					家常好味道，给你家一般的温暖
				</h2>
				<el-row :gutter='20'>
					<el-col :span='6'>
						<div>
							<div class="chose_items">
								<div class="chose_item">
									<span>南瓜</span>
									<i class="el-icon-close"></i>
								</div>
								<div class="chose_item">
									<span>南瓜</span>
									<i class="el-icon-close"></i>
								</div>
								<div class="chose_item">
									<span>南瓜</span>
									<i class="el-icon-close"></i>
								</div>
							</div>
							<div class="chose_menus">
								<div class="clearFloat"></div>
								<ul>
									<li :class="{menu_chose:showMenu}" @click="changeMenu(true)">普通筛选</li>
									<li :class="{menu_chose:!showMenu}" @click="changeMenu(false)">食材筛选</li>
								</ul>
								<div class="clearFloat"></div>
								<div v-show="showMenu">
									<el-collapse v-model="activeNames" @change="handleChange" accordion>
										<el-collapse-item title="选择难度" name="1">
											<router-link to="javaScript:void(0)" class="menu_item menu_active">
												新手尝试
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												初中水平
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												中级掌勺
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												高级厨师
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择工艺" name="2">
											<router-link to="javaScript:void(0)" class="menu_item menu_active">
												炒
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												蒸
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												煮
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												拌
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												煎
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												烘焙
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择口味" name="3">
											<router-link to="javaScript:void(0)" class="menu_item menu_active">
												家常味
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												香辣味
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												甜味
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												酸甜味
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												酸辣味
											</router-link>
											<router-link to="javaScript:void(0)" class="menu_item">
												麻辣味
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择时间" name="4">
											<router-link to="javaScript:void(0)" class="menu_item menu_active">
												<5分钟</router-link>
													<router-link to="javaScript:void(0)" class="menu_item">
														<15分钟 </router-link>
															<router-link to="javaScript:void(0)" class="menu_item">
																<30分钟 </router-link>
																	<router-link to="javaScript:void(0)" class="menu_item">
																		<60分钟 </router-link>
																			<router-link to="javaScript:void(0)" class="menu_item">
																				<90分钟 </router-link>
										</el-collapse-item>
									</el-collapse>
								</div>
								<div class="material" v-show="!showMenu">
									<div class="search_box">
										<el-input placeholder='请输入您要查找的食材'></el-input>
										<el-button class="el-icon-search"></el-button>
									</div>
									<p>按数量排序</p>
									<div class="material_view">
										<ul>
											<li>
												<router-link to="#" class="material_item material_item_active">
													<span>应季</span>
													<strong>南瓜</strong>
													<i>531</i>
												</router-link>
											</li>
											<li>
												<router-link to="#" class="material_item">
													<span>应季</span>
													<strong>牛肉</strong>
													<i>506</i>
												</router-link>
											</li>
											<li>
												<router-link to="#" class="material_item">
													<span>应季</span>
													<strong>虾</strong>
													<i>407</i>
												</router-link>
											</li>
											<li>
												<router-link to="#" class="material_item">
													<span>应季</span>
													<strong>西红柿</strong>
													<i>395</i>
												</router-link>
											</li>
											<li>
												<router-link to="#" class="material_item">
													<span>应季</span>
													<strong>鸡腿</strong>
													<i>297</i>
												</router-link>
											</li>
											<li>
												<router-link to="#" class="material_item">
													<span>应季</span>
													<strong>虾</strong>
													<i>407</i>
												</router-link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :span='18'>
						<el-row :gutter='20'>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
							<el-col :span='8' class='menu_view'>
								<menuItem></menuItem>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import menuItem from './MenuItem.vue'
	export default {
		name: 'Material',
		mounted: function() {
			this.$store.commit('changeTopFlag', 2)
		},
		data() {
			return {
				activeNames: ['1'],
				showMenu:true
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
			changeMenu(flag){
				this.showMenu = flag;
			}
		},
		components:{
			menuItem
		}
	}
</script>

<style scoped>
	.content {
		min-height: 600px;
		margin-top: 20px;
		margin-bottom: 40px;
	}
	
	nav {
		width: 100%;
		height: 240px;
		font-size: 0;
	}
	
	ul,
	li {
		list-style: none;
		display: inline-block;
	}
	
	nav>ul {
		width: 100%;
		height: 50px;
		background-color: #FFF8DC;
	}
	
	nav>li {
		height: 50px;
		float: left;
	}
	
	nav li>a {
		display: inline-block;
		height: 50px;
		line-height: 50px;
		padding: 0 24px;
		font-size: 14px;
		font-weight: bold;
		color: #A9A9A9;
		text-decoration: none;
	}
	
	nav li>a:hover {
		color: #8B4513;
		background-color: #FFFAF0;
	}
	
	.active_item {
		background-color: white;
		color: #8B4513;
	}
	
	.active_item:hover {
		background-color: white;
		color: #8B4513;
	}
	
	.item {
		width: 100%;
		height: 190px;
		background-color: white;
	}
	
	.main {
		width: 979px;
		height: 70px;
		padding: 10px 16px 14px;
		border-bottom: 1px solid #DCDCDC;
	}
	
	.more {
		display: inline-block;
		width: 304px;
		height: 71px;
		padding: 10px 16px 14px;
		border-right: 1px solid #DCDCDC;
	}
	
	.item .more:last-of-type {
		border: none;
	}
	
	dt {
		font-size: 24px;
		color: #8B4513;
	}
	
	dd {
		display: inline-block;
		margin-top: 10px;
	}
	
	dd>a {
		display: inline-block;
		height: 28px;
		line-height: 28px;
		font-size: 14px;
		text-decoration: none;
		padding: 0 8px;
		color: gray;
	}
	
	dd>a:hover {
		background-color: #8B4513;
		color: white;
	}
	
	.active_kind {
		background-color: #8B4513;
		color: white;
	}
	
	.middle_box h2 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		color: #8B4513;
	}
	
	.chose_items {
		width: 224px;
		background-color: white;
		padding: 14px 0 6px 14px;
		margin-bottom: 20px;
		font-size: 0;
	}
	
	.chose_item {
		display: inline-block;
		width: 75px;
		height: 32px;
		margin: 0 8px 8px 0;
		line-height: 32px;
		background-color: #8B4513;
		color: white;
		font-size: 12px;
		cursor: pointer;
		padding: 0 10px 0 15px;
	}
	
	.chose_item>span {
		display: inline-block;
		float: left;
	}
	
	.chose_item>i {
		display: inline-block;
		float: right;
		margin-top: 10px;
	}
	
	.chose_menus {
		width: 100%;
		height: 500px;
	}
	
	.chose_menus>ul {
		width: 100%;
		height: 50px;
	}
	
	.chose_menus>ul>li {
		width: 50%;
		height: 50px;
		float: left;
		line-height: 50px;
		text-align: center;
		color: #A9A9A9;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		background-color: #E1FFFF;
	}
	
	.chose_menus>ul>li:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	
	.chose_menus .menu_chose {
		color: #8B4513;
		background-color: white;
	}
	
	.menu_item {
		display: inline-block;
		width: 98px;
		height: 30px;
		margin: 0 8px 8px 0;
		line-height: 32px;
		background-color: white;
		border: 1px solid #DCDCDC;
		color: #8B4513;
		font-size: 12px;
		text-align: center;
		text-decoration: none;
	}
	
	.menu_item:hover {
		border: 1px solid #808080;
		background-image: url(../assets/liststyle1_icons.png);
		background-repeat: no-repeat;
		background-position: 66px -66px;
	}
	
	.chose_menus .menu_active {
		background-image: url(../assets/liststyle1_icons.png);
		background-repeat: no-repeat;
		background-position: 66px -34px;
		border: none;
	}
	.material {
		background-color: white;
		box-shadow: 1px 2px 3px 1px #DCDCDC;
	}
	.search_box {
		padding: 14px 0 10px 16px;
		border-bottom: 1px solid #DCDCDC;
	}
	.material>p {
		height: 50px;
		padding-left: 15px;
		line-height: 50px;
		font-size: 14px;
		border-bottom: 1px solid #DCDCDC;
		color: #8B4513;
	}
	.material_view {
		width: 224px;
		padding: 14px 0 6px 14px;
		background-color: #E1FFFF;
	}
	.material_view>ul {
		width: 224px;
	}
	.material_view li {
		width: 210px;
		height: 32px;
		margin: 0 8px 8px 0;
	}
	.material_item {
		position: relative;
		display: inline-block;
		width: 208px;
		height: 30px;
		border: 1px solid rgba(	220,220,220,.5);
		line-height: 30px;
		background-color: white;
	}
	.material_item:hover {
		background-image: url(../assets/liststyle1_icons.png);
		background-repeat: no-repeat;
		background-position: 176px -66px;
		border: 1px solid #A9A9A9;
	}
	.material_item_active {
		background-image: url(../assets/liststyle1_icons.png);
		background-repeat: no-repeat;
		background-position: 176px -34px;
	}
	.material_item.material_item_active:hover {
		background-image: url(../assets/liststyle1_icons.png);
		background-repeat: no-repeat;
		background-position: 176px -34px;
		border: 1px solid rgba(	220,220,220,.5);
	}
	.material_item span {
		position: absolute;
		display: inline-block;
		height: 20px;
		padding:0 5px;
		font-size: 12px;
		top: 5px;
		left: 5px;
		line-height: 20px;
		color: white;
		background-color: #60a531;
	}
	.material_item strong {
		display: inline-block;
		height: 30px;
		margin-left: 65px;
		font-weight: normal;
		font-size: 12px;
		vertical-align: top;
		color: #8B4513;
	}
	.material_item i {
		position: absolute;
		display: inline-block;
		height: 30px;
		right: 20px;
		font-style: normal;
		font-size: 12px;
		color: 	#808080;
	}
	.right_main {
		height: 1000px;
	}
	.menu_view {
		height: 332px;
		margin-bottom: 20px;
	}
</style>

<style type="text/css">
	.chose_menus .el-collapse-item__header {
		padding-left: 10px;
	}
	
	.chose_menus .el-collapse-item__content {
		padding: 14px 0 6px 14px;
		background-color: #E1FFFF;
	}
	.search_box .el-input {
		display: inline-block;
		width: 75%;
		height: 30px;
		vertical-align: middle;
	}
	.search_box .el-input__inner {
		height: 30px;
		font-size: 12px;
	}
	.search_box .el-button {
		height: 30px;
		line-height: 30px;
		padding: 0 10px;
		vertical-align: middle;
	}
</style>