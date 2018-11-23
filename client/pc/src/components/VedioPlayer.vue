<template>
	<el-row class="box">
		<el-col :span='18' :offset='3'>
			<div class="vedio_view">
				<h2>看视频，学做菜</h2>
				<div class="view_player">
					<video src="https://vdse.bdstatic.com//4ce0a6eeb24802f7f9f4cff911357c5c?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F5b89ecc8eaa02a42be55690e4417293c4dc719f17e7bfb3610a16292cad44020" controls="controls">
						您的浏览器不支持 video 标签。
					</video>
					<div class="right_menu">
						<h3>相关视频</h3>
						<div>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
							<router-link to='#' class='underline_none'>
								<div class="vedio_item">
									<img src="../../static/img/tet002.jpg" alt="" />
									<p>左宗棠鸡的做法</p>
								</div>
							</router-link>
						</div>
					</div>
				</div>
				<div class="vedio_name">
					<p>左宗棠鸡的做法</p>
					<span>发布时间：2018-11-03</span>
				</div>
				<div class="vedio_content">
					<strong>视频内容</strong>
					<div>
						<p>1、鸡腿肉280g切丁，姜片5g，蒜末5g，小米椒适量切段，甜椒20g切块</p>
						<p>2、倒入鸡腿肉，蛋黄一个，盐2g，玉米淀粉25g，搅拌均匀</p>
						<p>3、放入白砂糖15g，白醋15g，生抽8g，淀粉5g，辣椒油10g搅拌均匀</p>
						<p>4、起锅倒入食用油200ml，大火烧至七成熟，放入鸡肉，大火炸至表面金黄</p>
						<p>5、另起锅倒入食用油5ml，倒入姜片，蒜末，小米椒，大火爆香</p>
					</div>
				</div>
			</div>
			<div class="more_vedio">
				<h2>相关菜谱视频</h2>
				<el-row :gutter='20'>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
					<el-col :span='8' class='more_item'>
						<vedioItem></vedioItem>
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import vedioItem from './VedioItem.vue'
	export default {
		name: 'VedioPlayer',
		mounted: function() {
			this.$store.commit('changeTopFlag', 5)
		},
		components:{
			vedioItem
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		min-width: 1349px;
		margin-bottom: 40px;
	}
	
	.vedio_view {
		width: 100%;
	}
	.more_vedio>h2,
	.vedio_view h2 {
		height: 120px;
		text-align: center;
		line-height: 120px;
		font-weight: normal;
		color: #8B4513;
	}
	
	.view_player {
		width: 100%;
		font-size: 0;
	}
	video {
		width: 750px;
		height: 420px;
	}
	.right_menu {
		display: inline-block;
		width: 261px;
		height: 420px;
		background-color: lightcoral;
		vertical-align: top;
		background-color: #F5F5F5;
	}
	.right_menu h3 {
		width: 231px;
		height: 25px;
		font-size: 20px;
		font-weight: normal;
		padding: 12px 15px;
		color: #8B4513;
		border-bottom: 1px solid #DCDCDC;
	}
	.right_menu>div {
		width: 261px;
		height: 346px;
		padding: 12px 0;
		overflow-y: scroll;
	}
	.underline_none {
		text-decoration: none;
	}
	.vedio_item {
		width: 222px;
		height: 66px;
		padding: 6px 10px;
		border: 1px solid #DCDCDC;
		background-color: #FFFFFF;
		margin-bottom: 5px;
	}
	.vedio_item>img {
		width: 120px;
		height: 66px;
	}
	.vedio_item>p {
		display: inline-block;
		width: 92px;
		font-size: 12px;
		font-weight: bold;
		color: #8B4513;
		padding-left: 10px;
		margin-top: 15px;
		vertical-align: top;
	}
	.vedio_name {
		width: 100%;
		height: 95px;
		padding-top: 25px;
	}
	.vedio_name>p{
		width: 100%;
		height: 42px;
		font-size: 28px;
		color: #8B4513;
	}
	.vedio_name>span {
		display: block;
		width: 100%;
		font-size: 14px;
		color: #808080;
	}
	.vedio_content {
		width: 100%;
		background-color: #F5F5F5;
	}
	.vedio_content>strong {
		display: block;
		padding: 30px 30px 0;
		font-size: 24px;
		color: #8B4513;
	}
	.vedio_content>div {
		padding: 10px 30px 30px;
	}
	.vedio_content>div>p {
		line-height: 26px;
		color: gray;
	}
	.more_item {
		margin-bottom: 20px;
	}
</style>