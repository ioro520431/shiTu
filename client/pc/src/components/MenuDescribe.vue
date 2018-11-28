<template>
	<header>
		<div class='content'>
			<el-col :span='18' :offset='3'>
				<div class="box_top">
					<div class="box_left">
						<h1>我的菜单</h1>
						<p>暂无简介</p>
						<span>最后修改：2018-04-12 17:42</span>
					</div>

					<div class="box_right">
						<div class="user">
							<a href="#" class="img">
								<img src="../../static/img/wicon03.png" />
								<span class="masker"></span>
							</a>

							<div class="info">
								<h4>
								<a href="#">Liuliujuan</a>
								<a href="#" class="focus"></a>
							</h4>
								<span>菜谱：0 / 关注：1 / 粉丝：0</span>

							</div>
						</div>
						<div class="btns">
							<a href="#" class="add">收藏菜单</a>

							<div class="enjoy">
								<img src="../../static/img/wenjoy.gif" />
							</div>
						</div>
					</div>

				</div>
				<h3>如果你不知道做什么，你就做饭。</h3>
				<div class="ccc">
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
		</div>
	</header>
</template>

<script>
	import FoodItem from './FoodItem.vue'
	export default {
		name: 'MenuDescribe',
		mounted: function() {
			this.$store.commit('changeTopFlag', 4)
		},
		data() {
			return {}
		},
		components: {
			FoodItem
		}
	}
</script>

<style scoped>
	header {
		width: 100%;
		min-width: 1349px;
	}
	
	.content {
		width: 100%;
		margin-bottom: 40px;
		overflow: auto;
		overflow: hidden;
	}
	
	.box_top {
		height: 192px;
		width: 990px;
		background-color: white;
		margin-top: 20px;
	}
	
	.box_left {
		width: 630px;
		float: left;
		background: url(../assets/wline.jpg) right center no-repeat;
		height: 192px;
		overflow: hidden;
	}
	
	.box_left h1 {
		line-height: 40px;
		font-size: 24px;
		color: #333;
		padding-top: 16px;
		text-indent: 30px;
		font-family: Microsoft Yahei;
		font-weight: normal;
	}
	
	.box_left p {
		line-height: 26px;
		color: #666;
		padding: 4px 30px;
		font-size: 14px;
	}
	
	.box_left span {
		line-height: 26px;
		color: #999;
		padding: 2px 30px;
		font-size: 12px;
	}
	
	.box_right {
		width: 360px;
		float: left;
		overflow: hidden;
		height: 192px;
	}
	
	.user {
		height: 70px;
		padding: 24px 0px 24px 30px;
	}
	
	.img {
		display: block;
		height: 70px;
		width: 70px;
		float: left;
		position: relative;
		border-radius: 35px;
		overflow: hidden;
	}
	
	.user img {
		height: 74px;
		width: 74px;
	}
	
	.info {
		float: left;
		padding-left: 10px;
		width: 240px;
		height: 70px;
	}
	
	.info h4 {
		height: 22px;
		line-height: 22px;
		position: relative;
		font-weight: normal;
	}
	
	.info h4 a {
		font-size: 14px;
		color: #ff3232;
		display: inline-block;
		vertical-align: top;
		padding-right: 10px;
		height: 22px;
		text-decoration: none;
	}
	
	.focus {
		display: block;
		height: 25px;
		width: 55px;
		background: url(../assets/focus1.jpg) 0px 0px no-repeat;
	}
	
	.focus:hover {
		color: red;
	}
	
	.info span {
		line-height: 24px;
		display: block;
		color: #666;
		padding-top: 4px;
		font-size: 14px;
	}
	
	.btns {
		padding-left: 30px;
	}
	
	.add {
		height: 44px;
		width: 140px;
		display: Block;
		background: #ff3232;
		border: 1px solid #e90808;
		line-height: 44px;
		color: #fff;
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}
	
	a {
		text-decoration: none;
	}
	
	.enjoy {
		/*float: right;*/
		margin-left: 155px;
		margin-top: -46px;
	}
	
	h3 {
		height: 120px;
		line-height: 120px;
		font-size: 24px;
		color: #222;
		text-align: center;
		font-family: Microsoft Yahei;
		display: block;
		font-weight: normal;
	}
	.item_row {
		margin-bottom: 20px;
	}
</style>