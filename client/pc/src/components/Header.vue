<template>
	<header>
		<div class="top">
			<el-col :span='18' :offset='3'>
				<div class="content">
					<router-link to='/'>
						<img src="../assets/logo.png" />
					</router-link>
					<div class="search">
						<div class="input">
							<el-input v-model='input' placeholder='请输入菜谱/食材/菜单/作者'></el-input>
						</div>
						<div class="btn">
							<el-button>搜索</el-button>
						</div>
					</div>
					<div class="user">
						<p>亲，您还未登录！</p>
						<router-link to='/registered'>注册</router-link>
						<router-link to='/login'>登录</router-link>
					</div>
				</div>
			</el-col>
		</div>
		<div class="nav">
			<el-col :span='18' :offset='3'>
				<nav>
					<ul>
						<li>
							<router-link to='/'><strong :class="{active:topFlag==1}">首页</strong></router-link>
						</li>
						<li class="position itemOne">
							<router-link to='/material?id=000'><strong :class="{active:topFlag==2}">菜谱大全</strong></router-link>
							<i class="el-icon-arrow-down"></i>
							<div class="item">
								<div>
									<dl>
										<dt><router-link to='/material?id=000'>家常菜谱</router-link></dt>
										<dd><router-link to='/material?id=011'>家常菜</router-link></dd>
										<dd><router-link to='/material?id=012'>凉菜</router-link></dd>
										<dd><router-link to='/material?id=013'>素食</router-link></dd>
										<dd><router-link to='/material?id=014'>早餐</router-link></dd>
										<dd><router-link to='/material?id=015'>午餐</router-link></dd>
										<dd><router-link to='/material?id=016'>晚餐</router-link></dd>
										<dd><router-link to='/material?id=017'>私家菜</router-link></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><router-link to='/material?id=100'>中华菜系</router-link></dt>
										<dd><router-link to='/material?id=111'>川菜</router-link></dd>
										<dd><router-link to='/material?id=112'>粤菜</router-link></dd>
										<dd><router-link to='/material?id=113'>东北菜</router-link></dd>
										<dd><router-link to='/material?id=114'>湘菜</router-link></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><router-link to='/material?id=200'>各地小吃</router-link></dt>
										<dd><router-link to='/material?id=211'>四川小吃</router-link></dd>
										<dd><router-link to='/material?id=212'>广东小吃</router-link></dd>
										<dd><router-link to='/material?id=213'>北京小吃</router-link></dd>
										<dd><router-link to='/material?id=214'>陕西小吃</router-link></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><router-link to='/material?id=300'>外国菜谱</router-link></dt>
										<dd><router-link to='/material?id=311'>韩国料理</router-link></dd>
										<dd><router-link to='/material?id=312'>日本料理</router-link></dd>
										<dd><router-link to='/material?id=313'>法国菜</router-link></dd>
										<dd><router-link to='/material?id=314'>意大利餐</router-link></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><router-link to='/material?id=400'>烘焙</router-link></dt>
										<dd><router-link to='/material?id=411'>蛋糕面包</router-link></dd>
										<dd><router-link to='/material?id=412'>饼干配方</router-link></dd>
										<dd><router-link to='/material?id=413'>甜品点心</router-link></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><router-link to='/material?id=500'>厨房百科</router-link></dt>
										<dd><router-link to='/material?id=513'>烹饪技巧</router-link></dd>
										<dd><router-link to='/material?id=514'>美食专题</router-link></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><router-link to='/material?id=600'>食材百科</router-link></dt>
										<dd><router-link to='/material?id=611'>蔬菜</router-link></dd>
										<dd><router-link to='/material?id=612'>水果</router-link></dd>
										<dd><router-link to='/material?id=631'>谷类</router-link></dd>
									</dl>
								</div>
								<img src="../assets/menu_1.png" alt="" />
							</div>
						</li>
						<li class="position itemTwo">
							<router-link to='/diet_health?id=100'><strong :class="{active:topFlag==3}">饮食健康</strong></router-link>
							<i class="el-icon-arrow-down"></i>
							<div class="item">
								<div>
									<dl>
										<dt><router-link to='/diet_health?id=000'>饮食健康</router-link></dt>
										<dd><router-link to='/diet_health?id=011'>饮食小常识</router-link></dd>
										<dd><router-link to='/diet_health?id=014'>美容瘦身</router-link></dd>
										<dd><router-link to='/diet_health?id=022'>食品安全</router-link></dd>
										<dd><router-link to='/diet_health?id=013'>养生妙方</router-link></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><router-link to='/diet_health?id=300'>功能性调理</router-link></dt>
										<dd><router-link to='/diet_health?id=311'>清热去火</router-link></dd>
										<dd><router-link to='/diet_health?id=312'>减肥</router-link></dd>
										<dd><router-link to='/diet_health?id=313'>乌发</router-link></dd>
										<dd><router-link to='/diet_health?id=314'>健脾开胃</router-link></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><router-link to='/diet_health?id=100'>人群膳食</router-link></dt>
										<dd><router-link to='/diet_health?id=111'>孕妇</router-link></dd>
										<dd><router-link to='/diet_health?id=112'>老人</router-link></dd>
										<dd><router-link to='/diet_health?id=113'>青少年</router-link></dd>
										<dd><router-link to='/diet_health?id=114'>幼儿</router-link></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><router-link to='/diet_health?id=200'>疾病调理</router-link></dt>
										<dd><router-link to='/diet_health?id=211'>糖尿病</router-link></dd>
										<dd><router-link to='/diet_health?id=212'>高血压</router-link></dd>
										<dd><router-link to='/diet_health?id=213'>痛风</router-link></dd>
										<dd><router-link to='/diet_health?id=214'>胃炎</router-link></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><router-link to='/diet_health?id=400'>脏腑调理</router-link></dt>
										<dd><router-link to='/diet_health?id=411'>感冒</router-link></dd>
										<dd><router-link to='/diet_health?id=412'>补血</router-link></dd>
										<dd><router-link to='/diet_health?id=413'>腹泻</router-link></dd>
										<dd><router-link to='/diet_health?id=414'>活血化瘀</router-link></dd>
									</dl>
								</div>
								<img src="../assets/menu_2.png" alt="" />
							</div>
						</li>
						<li>
							<router-link to='/Menu'><strong :class="{active:topFlag==4}">美食菜单</strong></router-link>
						</li>
						<li class="img">
							<router-link to='#'><strong :class="{active:topFlag==5}">美食达人</strong></router-link>
							<img src="../assets/guan.png"/>
						</li>
						<li>
							<router-link to='#'><strong :class="{active:topFlag==6}">菜谱视频</strong></router-link>
						</li>
						<li>
							<router-link to='#'><strong :class="{active:topFlag==7}">微信小程序</strong></router-link>
						</li>
					</ul>
				</nav>
			</el-col>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'Header',
		data() {
			return {
				input: ''
			}
		},
		methods:{
			changeTopFlag(num) {
				this.topFlag = num;
			}
		},
		computed:{
			topFlag(){
				return this.$store.state.topFlag;
			}
		}
	}
</script>

<style scoped>
	header {
		width: 100%;
		min-width: 1349px;
	}
	.top {
		width: 100%;
		height: 129px;
		background-color: #DEB887;
	}
	
	.content {
		width: 100%;
		height: 100%;
		font-size: 0;
	}
	
	.content img {
		margin-left: 60px;
		height: 129px;
	}
	
	.search {
		display: inline-block;
		width: 450px;
		height: 129px;
		vertical-align: top;
		line-height: 129px;
		margin-left: 80px;
	}
	
	.search .input {
		display: inline-block;
		float: left;
		width: 80%;
		height: 100%;
	}
	
	.search .btn {
		display: inline-block;
		float: left;
		width: 20%;
		height: 124px;
		margin-top: 5px;
	}
	
	.search button {
		width: 100%;
	}
	
	.user {
		display: inline-block;
		height: 129px;
		font-size: 12px;
		vertical-align: top;
		float: right;
		margin-right: 25px ;
	}
	
	.user p {
		display: inline-block;
		height: 28px;
		margin-top: 50px;
		line-height: 28px;
		padding: 0 5px;
		color: darkslategray;
	}
	
	.user a {
		display: inline-block;
		text-decoration: none;
		height: 28px;
		margin-top: 50px;
		line-height: 28px;
		padding: 0 10px;
		color: white;
		border-radius: 5px;
	}
	
	.user a:hover {
		text-decoration: underline;
		background-color: rgba(	139,69,19,.5);
	}
	.nav {
		width: 100%;
		height: 76px;
		box-shadow: 8px 2px 5px 1px #DCDCDC;
		background-color: white;
	}
	nav {
		width: 100%;
		height: 76px;
	}
	nav li {
		display: inline-block;
	}
	li>a {
		display: inline-block;
		height: 76px;
		text-decoration: none;
		font-size: 18px;
		padding: 0 26px;
		color: #8B4513;
	}
	li strong {
		height: 72px;
		line-height: 76px;
		display: inline-block;
	}
	.img,
	.position {
		position: relative;
	}
	.position i {
		position: absolute;
		right: 8px;
		top:50%;
		margin-top: -7px;
		font-weight: bold;
		font-size: 14px;
		color: #D3D3D3;
	}
	.img img {
		position: absolute;
		top: 8px;
		right: 0;
	}
	nav li:hover {
		background-color: #E1FFFF;
	}
	.active {
		border-bottom: 4px solid #8B4513;
	}
	.item {
		padding-left:28px ;
		position: absolute;
		z-index: 9999;
		width: 984px;
		height: 280px;
		background-color: #E1FFFF;
		display: none;
		box-shadow: 3px 1px 2px 1px #DCDCDC;
	}
	.itemOne .item {
		left: -93px;
	}
	.itemTwo .item {
		left: -222px;
	}
	.item div{
		margin-top: 15px;
		display: inline-block;
		width: 360px;
	}
	.item dd {
		display:  inline-block;
		padding: 0 10px;
		margin-top: 5px;
	}
	.item dt a {
		color: red;
		font-size: 18px;
	}
	.item a {
		font-size: 12px;
		text-decoration: none;
		color: darkgray;
		border-radius: 3px;
	}
	.item a:hover {
		color: white;
		background-color: red;
	}
	.item img {
		position: absolute;
		right: -50px;
		bottom: -30px;
	}
	.position:hover .item {
		display: block;
	}
	.position:hover i {
		display: none;
	}
</style>
<style type="text/css">
	.btn .el-button {
		background-color: rgba(	139,69,19,.5);
		color: white;
	}
</style>