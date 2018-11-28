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
							<router-link to='/material?id=014' :class='{active_kind:showSmallTitle==14}'>私家菜</router-link>
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
							<router-link to='/diet_health?id=200'>疾病调理</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=300'>功能性调理</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=400'>脏腑调理</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=100'>人群膳食</router-link>
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
				<el-row :gutter='20' v-if='showBigTile<6'>
					<el-col :span='6'>
						<div>
							<div class="chose_items">
								<div class="chose_item" v-for="(item,key) in choseItem" :key='item' v-if="item">
									<span>{{item}}</span>
									<i class="el-icon-close" @click="changeChoseItem(key)"></i>
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
											<a href="javascript:void(0)" class="menu_item" :class="{menu_active:dif_flag==index+1}" @click="setChoseItem('difficulty',index,item)" v-for="(item,index) in difficult" :key='index'>
												{{item}}
											</a>
										</el-collapse-item>
										<el-collapse-item title="选择工艺" name="2">
											<a href="javascript:void(0)" class="menu_item" :class="{menu_active:cra_flag==index+1}" @click="setChoseItem('craft',index,item)" v-for="(item,index) in craft" :key='index'>
												{{item}}
											</a>
										</el-collapse-item>
										<el-collapse-item title="选择口味" name="3">
											<a href="javascript:void(0)" class="menu_item" :class="{menu_active:fla_flag==index+1}" @click="setChoseItem('flavor',index,item)" v-for="(item,index) in flavor" :key='index'>
												{{item}}
											</a>
										</el-collapse-item>
										<el-collapse-item title="选择时间" name="4">
											<a href="javascript:void(0)" class="menu_item" :class="{menu_active:time_flag==index+1}" @click="setChoseItem('time',index,item)" v-for="(item,index) in make_time" :key='index'>
												{{item}}
											</a>
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
											<li v-for="(item,index) in material" :key='index'>
												<a href="javascript:void(0)" class="material_item" :class="{material_item_active:ma_flag==index+1}" @click="setChoseItem('material',index,item)">
													<span>应季</span>
													<strong>{{item}}</strong>
													<i>531</i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</el-col>
					<el-col :span='18'>
						<el-row :gutter='20'>
							<el-col :span='8' class='menu_view' v-for='(item,index) in menu_info' :key='index' v-if='index>=(page*pageSize+0)&&index<(page*pageSize+pageSize)'>
								<menuItem :menuInfo='item'></menuItem>
							</el-col>
						</el-row>
						<div id="foot_btn">
							<el-pagination background layout="prev, pager, next" :total="menu_info.length" :page-size='pageSize' @current-change='changePage'></el-pagination>
						</div>
					</el-col>
				</el-row>
				<div v-if='showBigTile==6'>
					<el-row :gutter='20'>
						<el-col :span='6' class='menu_view' v-for='(item,index) in ma_info' :key='index' v-if='index>=(page*pageSize+0)&&index<(page*pageSize+pageSize)'>
							<materialItem :maInfo='item'></materialItem>
						</el-col>
					</el-row>
					<div id="foot_btn">
						<el-pagination background layout="prev, pager, next" :total="ma_info.length" :page-size='pageSize' @current-change='changePage'></el-pagination>
					</div>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import menuItem from './MenuItem.vue';
	import materialItem from './MaterialItem.vue'
	export default {
		name: 'Material',
		mounted: function() {
			this.$store.commit('changeTopFlag', 2);
			this.showBigTile = parseInt(this.$route.query.id / 100);
			this.showSmallTitle = this.$route.query.id % 100;
			let _this = this;
			if(this.showBigTile==6){
				_this.$http.get('/material', {
					params: {
						ma_kind: _this.$route.query.id
					}
				}).then(response => {
					_this.ma_info = response.data;
				})
			}else{
				_this.$http.get('/menu', {
					params: {
						menu_kind: _this.$route.query.id
					}
				}).then(response => {
					_this.menu_info = response.data;
				})
			}
		},
		data() {
			return {
				showBigTile: 0,
				showSmallTitle: 11,
				activeNames: ['1'],
				showMenu: true,
				pageSize: 12,
				page: 0,
				menu_info: '',
				ma_info:'',
				difficult: ['初级入门', '新手尝试', '初中水平', '中级掌勺'],
				craft: ['炒', '蒸', '煮', '拌', '煎', '烘焙'],
				flavor: ['家常味', '香辣味', '甜味', '咸鲜味', '五香味', '奶香味'],
				make_time: ['<15分钟', '<30分钟', '<60分钟', '<90分钟', '<120分钟'],
				material: ['南瓜', '牛肉', '虾', '西红柿', '鸡腿', '胡萝卜'],
				dif_flag: 0,
				cra_flag: 0,
				fla_flag: 0,
				time_flag: 0,
				ma_flag: 0,
				choseItem: {
					difficulty: '',
					craft: '',
					flavor: '',
					time: '',
					material: ''
				}
			};
		},
		methods: {
			handleChange(val) {},
			changeMenu(flag) {
				this.showMenu = flag;
			},
			setChoseItem(key, index, item) {
				switch(key) {
					case 'difficulty':
						this.dif_flag = index + 1;
						break;
					case 'craft':
						this.cra_flag = index + 1;
						break;
					case 'flavor':
						this.fla_flag = index + 1;
						break;
					case 'time':
						this.time_flag = index + 1;
						break;
					case 'material':
						this.ma_flag = index + 1;
						break;
					default:
						break;
				};
				this.choseItem[key] = item;
			},
			changeChoseItem(key) {
				this.choseItem[key] = '';
				switch(key) {
					case 'difficult':
						this.dif_flag = 0;
						break;
					case 'craft':
						this.cra_flag = 0;
						break;
					case 'flavor':
						this.fla_flag = 0;
						break;
					case 'time':
						this.time_flag = 0;
						break;
					case 'material':
						this.ma_flag = 0;
						break;
					default:
						break;
				}
			},
			changePage(page) {
				this.page = page - 1;
			}
		},
		watch: {
			queryValue(val, oldVal) {
				this.showBigTile = parseInt(val / 100);
				this.showSmallTitle = val % 100;
				let _this = this;
				if(this.showBigTile==6){
					_this.$http.get('/material', {
						params: {
							ma_kind: val
						}
					}).then(response => {
						_this.ma_info = response.data;
					})
				}else{
					_this.$http.get('/menu', {
						params: {
							menu_kind: val
						}
					}).then(response => {
						_this.menu_info = response.data;
					})
				}
			},
			choseItem: {
				handler(val, oldVal) {
					let _this = this;
					_this.$http.get('/item_menu', {
						params: {
							menuKind: _this.$route.query.id,
							difficulty: val.difficulty,
							craft: val.craft,
							flavor: val.flavor,
							time: val.time,
							material: val.material
						}
					}).then(response => {
						_this.menu_info = response.data;
					})
				},
				deep: true
			}
		},
		computed: {
			queryValue() {
				return this.$route.query.id;
			}
		},
		components: {
			menuItem,
			materialItem
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
	
	#foot_btn {
		width: 100%;
		padding: 44px 0;
		text-align: center;
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
	
	#foot_btn .el-pagination .number.active {
		background-color: #8B4513;
	}
	
	#foot_btn .el-pagination .number:hover {
		color: lightcoral;
	}
	
	#foot_btn .el-pagination .number.active:hover {
		color: white;
	}
</style>