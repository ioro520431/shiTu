<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='content'>
			<nav>
				<div class="clearFloat"></div>
				<ul>
					<li>
						<router-link to='/material?id=000' :class="{active_item:showBigTile==0}">家常菜谱</router-link>
					</li>
					<li>
						<router-link to='/material?id=100' :class="{active_item:showBigTile==1}">中华菜系</router-link>
					</li>
					<li>
						<router-link to='/material?id=200' :class="{active_item:showBigTile==2}">各地小吃</router-link>
					</li>
					<li>
						<router-link to='/material?id=300' :class="{active_item:showBigTile==3}">外国菜谱</router-link>
					</li>
					<li>
						<router-link to='/material?id=400' :class="{active_item:showBigTile==4}">烘焙</router-link>
					</li>
					<li>
						<router-link to='/material?id=500' :class="{active_item:showBigTile==5}">厨房百科</router-link>
					</li>
					<li>
						<router-link to='/material?id=600' :class="{active_item:showBigTile==6}">食材百科</router-link>
					</li>
				</ul>
				<div class="clearFloat"></div>
				<div class="item" v-show="showBigTile==0">
					<dl class="main">
						<dt>家常菜谱</dt>
						<dd>
							<router-link to='/material?id=011' :class='{active_kind:showSmallTitle==11}'>家常菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=012' :class='{active_kind:showSmallTitle==12}'>凉菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=013' :class='{active_kind:showSmallTitle==13}'>素食</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=014' :class='{active_kind:showSmallTitle==14}'>早餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=015' :class='{active_kind:showSmallTitle==15}'>午餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=016' :class='{active_kind:showSmallTitle==16}'>晚餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=017' :class='{active_kind:showSmallTitle==17}'>私家菜</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>每日三餐</dt>
						<dd>
							<router-link to='/material?id=021' :class='{active_kind:showSmallTitle==21}'>早餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=022' :class='{active_kind:showSmallTitle==22}'>午餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=023' :class='{active_kind:showSmallTitle==23}'>晚餐</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=024' :class='{active_kind:showSmallTitle==24}'>下午茶</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=025' :class='{active_kind:showSmallTitle==25}'>夜宵</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>人群</dt>
						<dd>
							<router-link to='/material?id=031' :class='{active_kind:showSmallTitle==31}'>老年人</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=032' :class='{active_kind:showSmallTitle==32}'>产妇</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=033' :class='{active_kind:showSmallTitle==33}'>孕妇</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=034' :class='{active_kind:showSmallTitle==34}'>宝宝食谱</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>功效</dt>
						<dd>
							<router-link to='/material?id=041' :class='{active_kind:showSmallTitle==41}'>疾病调理</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=042' :class='{active_kind:showSmallTitle==42}'>功能性调理</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=043' :class='{active_kind:showSmallTitle==43}'>脏腑调理</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=044' :class='{active_kind:showSmallTitle==44}'>人群膳食</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==1">
					<dl class="main">
						<dt>中华菜系</dt>
						<dd>
							<router-link to='/material?id=111' :class='{active_kind:showSmallTitle==11}'>川菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=112' :class='{active_kind:showSmallTitle==12}'>粤菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=113' :class='{active_kind:showSmallTitle==13}'>东北菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=114' :class='{active_kind:showSmallTitle==14}'>湘菜</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==2">
					<dl class="main">
						<dt>各地小吃</dt>
						<dd>
							<router-link to='/material?id=211' :class='{active_kind:showSmallTitle==11}'>四川小吃</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=212' :class='{active_kind:showSmallTitle==12}'>广东小吃</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=213' :class='{active_kind:showSmallTitle==13}'>北京小吃</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=214' :class='{active_kind:showSmallTitle==14}'>陕西小吃</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==3">
					<dl class="main">
						<dt>国家</dt>
						<dd>
							<router-link to='/material?id=311' :class='{active_kind:showSmallTitle==11}'>韩国料理</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=312' :class='{active_kind:showSmallTitle==12}'>日本料理</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=313' :class='{active_kind:showSmallTitle==13}'>法国菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=314' :class='{active_kind:showSmallTitle==14}'>意大利餐</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==4">
					<dl class="main">
						<dt>烘焙</dt>
						<dd>
							<router-link to='/material?id=411' :class='{active_kind:showSmallTitle==11}'>蛋糕面包</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=412' :class='{active_kind:showSmallTitle==12}'>饼干配方</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=413' :class='{active_kind:showSmallTitle==13}'>甜品点心</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=414' :class='{active_kind:showSmallTitle==14}'>烘焙常识</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=415' :class='{active_kind:showSmallTitle==15}'>烘焙原料</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==5">
					<dl class="main">
						<dt>厨房百科</dt>
						<dd>
							<router-link to='/material?id=511' :class='{active_kind:showSmallTitle==11}'>食材的选购及保存</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=512' :class='{active_kind:showSmallTitle==12}'>食材创意</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=513' :class='{active_kind:showSmallTitle==13}'>烹饪技巧</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=514' :class='{active_kind:showSmallTitle==14}'>美食专题</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==6">
					<dl class="more bottom_line">
						<dt>蔬果类</dt>
						<dd>
							<router-link to='/material?id=611' :class='{active_kind:showSmallTitle==11}'>蔬菜</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=612' :class='{active_kind:showSmallTitle==12}'>水果</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=613' :class='{active_kind:showSmallTitle==13}'>薯类淀粉</router-link>
						</dd>
					</dl>
					<dl class="more bottom_line">
						<dt>生鲜类</dt>
						<dd>
							<router-link to='/material?id=621' :class='{active_kind:showSmallTitle==21}'>畜肉</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=622' :class='{active_kind:showSmallTitle==22}'>禽肉</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=623' :class='{active_kind:showSmallTitle==23}'>鱼虾蟹贝</router-link>
						</dd>
					</dl>
					<dl class="more bottom_line">
						<dt>五谷</dt>
						<dd>
							<router-link to='/material?id=631' :class='{active_kind:showSmallTitle==31}'>谷类</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=632' :class='{active_kind:showSmallTitle==32}'>干豆</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=633' :class='{active_kind:showSmallTitle==33}'>坚果种子</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>食品与饮品</dt>
						<dd>
							<router-link to='/material?id=641' :class='{active_kind:showSmallTitle==41}'>速食食品</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=642' :class='{active_kind:showSmallTitle==42}'>小吃甜饼</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=643' :class='{active_kind:showSmallTitle==43}'>软饮料</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>维生素</dt>
						<dd>
							<router-link to='/material?id=651' :class='{active_kind:showSmallTitle==51}'>维生素A</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=652' :class='{active_kind:showSmallTitle==52}'>维生素B1</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=653' :class='{active_kind:showSmallTitle==53}'>维生素B2</router-link>
						</dd>
					</dl>
					<dl class="more">
						<dt>体质</dt>
						<dd>
							<router-link to='/material?id=661' :class='{active_kind:showSmallTitle==61}'>阳虚质</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=662' :class='{active_kind:showSmallTitle==62}'>阴虚质</router-link>
						</dd>
						<dd>
							<router-link to='/material?id=663' :class='{active_kind:showSmallTitle==63}'>气虚质</router-link>
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
											<router-link to="#" class="menu_item menu_active">
												新手尝试
											</router-link>
											<router-link to="#" class="menu_item">
												初中水平
											</router-link>
											<router-link to="#" class="menu_item">
												中级掌勺
											</router-link>
											<router-link to="#" class="menu_item">
												高级厨师
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择工艺" name="2">
											<router-link to="#" class="menu_item menu_active">
												炒
											</router-link>
											<router-link to="#" class="menu_item">
												蒸
											</router-link>
											<router-link to="#" class="menu_item">
												煮
											</router-link>
											<router-link to="#" class="menu_item">
												拌
											</router-link>
											<router-link to="#" class="menu_item">
												煎
											</router-link>
											<router-link to="#" class="menu_item">
												烘焙
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择口味" name="3">
											<router-link to="#" class="menu_item menu_active">
												家常味
											</router-link>
											<router-link to="#" class="menu_item">
												香辣味
											</router-link>
											<router-link to="#" class="menu_item">
												甜味
											</router-link>
											<router-link to="#" class="menu_item">
												酸甜味
											</router-link>
											<router-link to="#" class="menu_item">
												酸辣味
											</router-link>
											<router-link to="#" class="menu_item">
												麻辣味
											</router-link>
										</el-collapse-item>
										<el-collapse-item title="选择时间" name="4">
											<router-link to="#" class="menu_item menu_active">
												<5分钟</router-link>
													<router-link to="#" class="menu_item">
														<15分钟 </router-link>
															<router-link to="#" class="menu_item">
																<30分钟 </router-link>
																	<router-link to="#" class="menu_item">
																		<60分钟 </router-link>
																			<router-link to="#" class="menu_item">
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
			this.$store.commit('changeTopFlag', 2);
			this.showBigTile = parseInt(this.$route.query.id/100);
			this.showSmallTitle = this.$route.query.id%100;
		},
		data() {
			return {
				showBigTile: 0,
				showSmallTitle: 11,
				activeNames: ['1'],
				showMenu: true
			};
		},
		methods: {
			handleChange(val) {
			},
			changeMenu(flag) {
				this.showMenu = flag;
			}
		},
		components: {
			menuItem
		},
		watch: {
			queryValue(val, oldVal) {
				this.showBigTile = parseInt(val/100);
				this.showSmallTitle = val%100;
			},
		},
		computed: {
			queryValue() {
				return this.$route.query.id
			}
		}
	}
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
	}
	.content {
		min-height: 600px;
		margin-top: 20px;
		margin-bottom: 40px;
	}
	
	nav {
		width: 100%;
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
	
	.item_zh {
		background-color: white;
	}
	
	.item_zh .main {
		border: none;
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
	
	.more.bottom_line {
		border-bottom: 1px solid #DCDCDC;
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
		border: 1px solid rgba( 220, 220, 220, .5);
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
		border: 1px solid rgba( 220, 220, 220, .5);
	}
	
	.material_item span {
		position: absolute;
		display: inline-block;
		height: 20px;
		padding: 0 5px;
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
		color: #808080;
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