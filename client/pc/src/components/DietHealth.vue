<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='content'>
			<h2>午时是养心的最佳时机，适宜静养，吃完后有条件可以午间小憩一 下。</h2>
			<nav>
				<div class="clearFloat"></div>
				<ul>
					<li>
						<router-link to='/diet_health?id=000' :class="{active_item:showBigTile==0}">饮食健康</router-link>
					</li>
					<li>
						<router-link to='/diet_health?id=100' :class="{active_item:showBigTile==1}">人群膳食</router-link>
					</li>
					<li>
						<router-link to='/diet_health?id=200' :class="{active_item:showBigTile==2}">疾病调理</router-link>
					</li>
					<li>
						<router-link to='/diet_health?id=300' :class="{active_item:showBigTile==3}">功能性调理</router-link>
					</li>
					<li>
						<router-link to='/diet_health?id=400' :class="{active_item:showBigTile==4}">脏腑调理</router-link>
					</li>
				</ul>
				<div class="clearFloat"></div>
				<div class="item" v-show="showBigTile==0">
					<dl class="main">
						<dt>健康指南</dt>
						<dd>
							<router-link to='/diet_health?id=011' :class='{active_kind:showSmallTitle==11}'>饮食小常识</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=012' :class='{active_kind:showSmallTitle==12}'>饮食禁忌</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=013' :class='{active_kind:showSmallTitle==13}'>养生妙方</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=014' :class='{active_kind:showSmallTitle==14}'>美容瘦身</router-link>
						</dd>
					</dl>
					<dl class="main">
						<dt>饮食资讯</dt>
						<dd>
							<router-link to='/diet_health?id=021' :class='{active_kind:showSmallTitle==21}'>新鲜资讯</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=022' :class='{active_kind:showSmallTitle==22}'>食品安全</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==1">
					<dl class="main">
						<dt>人群膳食</dt>
						<dd>
							<router-link to='/diet_health?id=111' :class='{active_kind:showSmallTitle==11}'>孕妇</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=112' :class='{active_kind:showSmallTitle==12}'>老人</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=113' :class='{active_kind:showSmallTitle==13}'>青少年</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=114' :class='{active_kind:showSmallTitle==14}'>幼儿</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==2">
					<dl class="main">
						<dt>疾病调理</dt>
						<dd>
							<router-link to='/diet_health?id=211' :class='{active_kind:showSmallTitle==11}'>糖尿病</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=212' :class='{active_kind:showSmallTitle==12}'>高血压</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=213' :class='{active_kind:showSmallTitle==13}'>痛风</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=214' :class='{active_kind:showSmallTitle==14}'>胃炎</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==3">
					<dl class="main">
						<dt>功能性调理</dt>
						<dd>
							<router-link to='/diet_health?id=311' :class='{active_kind:showSmallTitle==11}'>清热去火</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=312' :class='{active_kind:showSmallTitle==12}'>减肥</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=313' :class='{active_kind:showSmallTitle==13}'>乌发</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=314' :class='{active_kind:showSmallTitle==14}'>健脾开胃</router-link>
						</dd>
					</dl>
				</div>
				<div class="item_zh" v-show="showBigTile==4">
					<dl class="main">
						<dt>脏腑调理</dt>
						<dd>
							<router-link to='/diet_health?id=411' :class='{active_kind:showSmallTitle==11}'>感冒</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=412' :class='{active_kind:showSmallTitle==12}'>补血</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=413' :class='{active_kind:showSmallTitle==13}'>腹泻</router-link>
						</dd>
						<dd>
							<router-link to='/diet_health?id=414' :class='{active_kind:showSmallTitle==14}'>活血化瘀</router-link>
						</dd>
					</dl>
				</div>
			</nav>
			<div class="main_content">
				<h2>身体健康，仍是饮食的重要目标</h2>
				<el-row :gutter='20'>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
					<el-col :span='6' class='item_row'>
						<foodItem></foodItem>
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import foodItem from './FoodItem.vue';
	export default {
		name:'DietHealth',
		mounted: function() {
			this.$store.commit('changeTopFlag', 3);
			this.showBigTile = parseInt(this.$route.query.id/100);
			this.showSmallTitle = this.$route.query.id%100;
		},
		data() {
			return {
				showBigTile: 0,
				showSmallTitle: 11
			};
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
		},
		components:{
			foodItem
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
		width: 961px;
		height: 120px;
		line-height: 120px;
		text-align: center;
		padding-left: 50px;
		background-image: url(../assets/Icon-Small.png);
		background-repeat: no-repeat;
		background-position: 115px 45px;
		font-weight: normal;
		color: #8B4513;
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
	.main_content>h2 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		color: #8B4513;
	}
	.item_row {
		margin-bottom: 20px;
	}
</style>