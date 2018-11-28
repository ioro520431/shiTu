<template>
	<header>
		<div class="content">
			<el-col :span='18' :offset='3'>
				<div class="top">
					健康饮食，食材百科
				</div>
				<div class="center">
					<div class="sc_center">
						<img :src="info.ma_pic" :alt="info.ma_name" />
					</div>
					<div class="cen_left">
						<h1>{{info.ma_name}}</h1>
						<p class="p2">
							【别名】：{{info.alias}}<br> 
							【食量建议】：{{info.appetite}}<br> 
							【适宜人群】：{{info.suit}}<br>
							<span>【禁忌人群】</span>：{{info.taboo}}
						</p>
					</div>
					<div class="cen_right">
						<ul>
							<li class="green" v-for="(item,index) in info.ma_tip_green" :key='index'>
								<router-link to="#">{{item}}</router-link>
							</li>
							<li class="red" v-for="(item,index) in info.ma_tip_red">
								<router-link to="#">{{item}}</router-link>
							</li>
						</ul>
					</div>
				</div>

				<div class="middle_box">
					<h2 class="title1">
    	 				<router-link to="#">{{info.ma_name}}的做法大全</router-link>
					</h2>

					<el-row :gutter='20'>
						<el-col :span='18'>
							<el-row :gutter='20'>
								<el-col :span='8' class='menu_view' v-for='(item,index) in list' :key='index'>
									<menuItem :menuInfo='item'></menuItem>
								</el-col>
							</el-row>
						</el-col>

						<el-col :span='6' class='right_view'>

							<div class="chose_items">
								<strong class="title1">{{info.ma_name}}的百科知识</strong>
								<strong class="title2">{{info.ma_name}}介绍</strong>
								<p>{{info.introduce}}</p>
								<strong class="title2">{{info.ma_name}}的营养价值</strong>
								<p>{{info.ma_value}}</p>

								<strong class="title2">{{info.ma_name}}的食用效果</strong>
								<div v-for="(item,index) in info.ma_eat">
									<p>{{index+1}}.{{item.title}}</p>
									<p>{{item.text}}</p>
								</div>
								<strong class="title2">{{info.ma_name}}的食用禁忌</strong>
								<p v-for="(item,index) in info.eat_taboo">{{index+1}}.{{item}}</p>

								<strong class="title2"><a href="#">{{info.ma_name}}的搭配宜忌</a></strong>
								<ul class="clearfix">

									<li class="ji" v-for="(item,index) in info.ma_taboo">
										<div class="t">忌</div>
										<p>
											<router-link to='#'>{{item}}</router-link>
										</p>
									</li>

								</ul>
								<strong class="title2">{{info.ma_name}}的选购</strong>

								<p>{{info.ma_shop}}</p>

								<strong class="title2">{{info.ma_name}}的存储</strong>
								<p v-for="item in info.storage">{{item}}</p>

								<strong class="title2">{{info.ma_name}}的烹饪小技巧</strong>
								<p v-for="item in info.ma_skill">{{item}}</p>
							</div>

						</el-col>
					</el-row>

				</div>
			</el-col>
		</div>
	</header>
</template>

<script>
	import menuItem from './MenuItem.vue'
	export default {
		name: 'Detail',
		mounted: function() {
			let _this = this;
			this.$store.commit('changeTopFlag', 2);
			_this.$http.get('/detail', {
					params: {
						ma_id: _this.$route.query.ma_id
					}
				}).then(response => {
					console.log(response.data);
					_this.info = response.data.marterial;
					_this.list = response.data.menus;
				})
		},
		components: {
			menuItem
		},
		data() {
			return {
				info:'',
				list:''
			}
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
		overflow: auto;
		overflow: hidden;
	}
	
	.top {
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		font-size: 24px;
		color: #222;
	}
	
	.center {
		width: 100%;
		height: 210px;
		background-color: white;
	}
	
	.sc_center {
		height: 210px;
		width: 210px;
		float: left;
		display: block;
	}
	
	.cen_left {
		height: 210px;
		width: 480px;
		padding-left: 20px;
		float: left;
	}
	
	.cen_left h1 {
		height: 44px;
		line-height: 36px;
		padding-top: 20px;
		color: #333;
		font-size: 32px;
		font-family: Microsoft Yahei;
		font-weight: normal;
	}
	
	.p1 {
		font-size: 12px;
		color: #999;
		line-height: 30px;
		padding-left: 4px;
		padding-bottom: 6px;
	}
	
	.p2 {
		color: #999;
		line-height: 30px;
		padding-bottom: 10px;
		font-size: 14px;
		color: #666;
	}
	
	.p2 span {
		color: #ff3232;
	}
	
	.cen_right {
		height: 140px;
		width: 300px;
		float: left;
		padding-top: 70px;
	}
	
	.cen_right li {
		display: inline-block;
		vertical-align: top;
		margin-right: 8px;
		height: 30px;
		margin-bottom: 8px;
		font-size: 12px;
	}
	
	.cen_right li a {
		font-size: 14px;
		line-height: 28px;
		display: inline-block;
		vertical-align: top;
		padding: 0px 8px;
		color: #fff;
		text-align: center;
		text-decoration: none;
	}
	
	.green a {
		background: #60a531;
		border: 1px solid #46811d;
	}
	
	.green a:hover {
		background: green;
		text-decoration: none;
		color: #EEEEEE;
	}
	
	.red a {
		background: #FF3232;
		border: 1px solid #e90808;
	}
	
	.red a:hover {
		background: #FF0000;
		text-decoration: none;
		color: #EEEEEE;
	}
	
	.title1 {
		line-height: 120px;
		font-size: 24px;
		text-align: center;
		font-family: Microsoft Yahei;
	}
	
	.title1 a {
		color: #222;
		font-weight: normal;
		text-decoration: none;
	}
	
	.title1 a:hover {
		text-decoration: underline;
	}
	
	.menu_view {
		margin-bottom: 20px;
	}
	.right_view {
		height: 700px;
	}
	.chose_items {
		height: 650px;
		width: 230px;
		background-color: white;
		padding: 14px 0 6px 14px;
		margin-bottom: 20px;
		/*font-size: 0;*/
		overflow-y: auto;
		overflow-x: hidden;
		padding-bottom: 20px;
		position: absolute;
		right: 0;
	}
	
	.chose_items:hover {
		width: 716px;
		z-index: 999;
	}
	
	.chose_items .title1 {
		font-size: 24px;
		line-height: 50px;
		height: 55px;
		padding-left: 20px;
		font-family: Microsoft Yahei;
		color: #333;
		border-bottom: 1px solid #eee;
		display: inline-block;
		font-style: normal;
		font-weight: normal;
		margin-top: -6px;
	}
	
	.chose_items strong.title2 {
		font-size: 18px;
		font-family: Microsoft Yahei;
		color: #ff3232;
		line-height: 30px;
		height: 30px;
		padding-left: 20px;
		padding-top: 20px;
		display: block;
		font-weight: bold;
	}
	
	.chose_items p {
		padding: 10px 20px;
		line-height: 24px;
		font-size: 14px;
		color: #666;
	}
	
	.title2 a {
		text-decoration: none;
	}
	
	.clearfix {
		margin-top: 10px;
	}
	
	li.ji div.t {
		color: #ff3232;
		margin-left: 20px;
	}
	
	div.t {
		height: 50px;
		line-height: 65px;
		color: #60a531;
		font-size: 24px;
		padding-right: 20px;
		font-family: Microsoft Yahei;
	}
	
	a.img img {
		width: 50px;
		height: 50px;
	}
	
	ul li * {
		display: inline-block;
		vertical-align: top;
		margin-top: 10px;
	}
	
	span.add {
		width: 28px;
		background: url(../assets/add.jpg) 2px 20px no-repeat;
		height: 50px;
	}
	
	.chose_items ul li p {
		height: 50px;
		line-height: 50px;
		padding: 0px;
		padding-left: 10px;
	}
	
	ul li a {
		color: #666;
		font-size: 14px;
		text-decoration: none;
	}
	
	li a:hover {
		color: red;
		text-decoration: underline;
	}
</style>