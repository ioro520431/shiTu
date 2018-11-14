<template>
	<header>
		<div class="top">
			<el-col :span='18' :offset='3'>
				<div class="content">
					<a href="/">
						<img src="../assets/logo.png" />
					</a>
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
						<a href="#">注册</a>
						<a href="#">登录</a>
					</div>
				</div>
			</el-col>
		</div>
		<div class="nav">
			<el-col :span='18' :offset='3'>
				<nav>
					<ul>
						<li>
							<a href="#"><strong class="active">首页</strong></a>
						</li>
						<li class="position itemOne">
							<a href="#"><strong>菜谱大全</strong></a>
							<i class="el-icon-arrow-down"></i>
							<div class="item">
								<div>
									<dl>
										<dt><a href="#">家常菜谱</a></dt>
										<dd><a href="#">家常菜</a></dd>
										<dd><a href="#">凉菜</a></dd>
										<dd><a href="#">素食</a></dd>
										<dd><a href="#">早餐</a></dd>
										<dd><a href="#">午餐</a></dd>
										<dd><a href="#">晚餐</a></dd>
										<dd><a href="#">私家菜</a></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><a href="#">中华菜系</a></dt>
										<dd><a href="#">川菜</a></dd>
										<dd><a href="#">粤菜</a></dd>
										<dd><a href="#">东北菜</a></dd>
										<dd><a href="#">湘菜</a></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><a href="#">各地小吃</a></dt>
										<dd><a href="#">四川小吃</a></dd>
										<dd><a href="#">广东小吃</a></dd>
										<dd><a href="#">北京小吃</a></dd>
										<dd><a href="#">陕西小吃</a></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><a href="#">外国菜谱</a></dt>
										<dd><a href="#">韩国料理</a></dd>
										<dd><a href="#">日本料理</a></dd>
										<dd><a href="#">法国菜</a></dd>
										<dd><a href="#">意大利餐</a></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><a href="#">烘焙</a></dt>
										<dd><a href="#">蛋糕面包</a></dd>
										<dd><a href="#">饼干配方</a></dd>
										<dd><a href="#">甜品点心</a></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><a href="#">厨房百科</a></dt>
										<dd><a href="#">烹饪技巧</a></dd>
										<dd><a href="#">美食专题</a></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><a href="#">食材百科</a></dt>
										<dd><a href="#">蔬菜</a></dd>
										<dd><a href="#">水果</a></dd>
										<dd><a href="#">谷类</a></dd>
									</dl>
								</div>
								<img src="../assets/menu_1.png" alt="" />
							</div>
						</li>
						<li class="position itemTwo">
							<a href="#"><strong>饮食健康</strong></a>
							<i class="el-icon-arrow-down"></i>
							<div class="item">
								<div>
									<dl>
										<dt><a href="#">饮食健康</a></dt>
										<dd><a href="#">饮食小常识</a></dd>
										<dd><a href="#">饮食小常识</a></dd>
										<dd><a href="#">食品安全</a></dd>
										<dd><a href="#">养生妙方</a></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><a href="#">功能性调理</a></dt>
										<dd><a href="#">清热去火</a></dd>
										<dd><a href="#">减肥</a></dd>
										<dd><a href="#">乌发</a></dd>
										<dd><a href="#">健脾开胃</a></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><a href="#">人群膳食</a></dt>
										<dd><a href="#">孕妇</a></dd>
										<dd><a href="#">老人</a></dd>
										<dd><a href="#">青少年</a></dd>
										<dd><a href="#">幼儿</a></dd>
									</dl>
								</div>
								<br />
								<div>
									<dl>
										<dt><a href="#">疾病调理</a></dt>
										<dd><a href="#">糖尿病</a></dd>
										<dd><a href="#">高血压</a></dd>
										<dd><a href="#">痛风</a></dd>
										<dd><a href="#">胃炎</a></dd>
									</dl>
								</div>
								<div>
									<dl>
										<dt><a href="#">脏腑调理</a></dt>
										<dd><a href="#">感冒</a></dd>
										<dd><a href="#">补血</a></dd>
										<dd><a href="#">腹泻</a></dd>
										<dd><a href="#">活血化瘀</a></dd>
									</dl>
								</div>
								<img src="../assets/menu_2.png" alt="" />
							</div>
						</li>
						<li>
							<a href="#"><strong>美食菜单</strong></a>
						</li>
						<li class="img">
							<a href="#"><strong>美食达人</strong></a>
							<img src="../assets/guan.png"/>
						</li>
						<li>
							<a href="#"><strong>菜谱视频</strong></a>
						</li>
						<li>
							<a href="#"><strong>微信小程序</strong></a>
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
		}
	}
</script>

<style scoped>
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
		background-color: cornflowerblue;
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
		color: #444;
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
		border-bottom: 4px solid red;
	}
	.item {
		padding-left:28px ;
		position: absolute;
		width: 1024px;
		height: 280px;
		background-color: #E1FFFF;
		display: none;
		box-shadow: 3px 3px 3px 1px #DCDCDC;
	}
	.itemOne .item {
		left: -88px;
	}
	.itemTwo .item {
		left: -216px;
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