<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='cook_item'>
			<div>
				<h2>世间唯美食不可辜负矣</h2>
				<el-row>
					<el-col :span='8' class='left_img'>
						<img src="../../static/img/test00001.jpg" alt="" />
					</el-col>
					<el-col :span='16' class='right_box'>
						<div class="info1">
							<h1>南瓜肉松小餐包</h1>
							<el-button>收藏</el-button>
						</div>
						<div class="info2">
							<el-row>
								<el-col :span='4' class='short'>
									<i>工艺</i>
									<span class="info_title">烘焙</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>难度</i>
									<span class="info_icon diff"></span>
									<span class="info_time diff_time"></span>
									<span class='info_text'>初中水平</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>人数</i>
									<span class="info_icon pepo"></span>
									<span class="info_time pepo_time"></span>
									<span class='info_text'>初中水平</span>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span='4' class='short'>
									<i>口味</i>
									<span class="info_title">咸鲜味</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>准备时间</i>
									<span class="info_icon ready"></span>
									<span class="info_time ready_time"></span>
									<span class='info_text'>30分钟</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>烹饪时间</i>
									<span class="info_icon cook"></span>
									<span class="info_time cook_time"></span>
									<span class='info_text'>小于数小时</span>
								</el-col>
							</el-row>
						</div>
						<div class="info3">
							<img src="../assets/test010.jpg" class="user_img" />
							<div>
								<span class="user_name">哲哉丶</span><br />
								<span>菜谱：5　/　关注：20　/　粉丝：27</span>
							</div>
						</div>
					</el-col>
				</el-row>
			</div>
			<el-col :span='18' class='cook_stuff'>
				<p class="top_text">
					<strong>“</strong> 这是根据阿呜511老师的南瓜老面包配方调整做的南瓜肉松小餐包，本身南瓜中种面包的松软微甜，加上肉松芝士的微咸，好吃极了。
					<strong>”</strong>
				</p>
				<h2>用料</h2>
				<div class="stuff_box">
					<div class="main_stuff">
						<p>主料</p>
						<ul>
							<li>
								<router-link to='#' class='stuff_img'>
									<img src="../assets/test011.jpg" alt="" />
								</router-link>
								<p>
									<router-link to='#'></router-link>
									<span></span>
								</p>
							</li>
							<li>
								<router-link to='#' class='stuff_img'>
									<img src="../assets/test011.jpg" alt="" />
								</router-link>
								<p>
									<router-link to='#'></router-link>
									<span></span>
								</p>
							</li>
							<li></li>
						</ul>
					</div>
					<div class="more_stuff"></div>
				</div>
			</el-col>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		name: 'CookBook',
		mounted: function() {
			this.$store.commit('changeTopFlag', 2);
		}
	}
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
		margin-bottom: 40px;
	}
	
	.cook_item h2 {
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		color: #8B4513;
	}
	
	.left_img {
		height: 452px;
	}
	
	.left_img img {
		height: 452px;
	}
	
	.right_box {
		height: 452px;
		background-color: white;
	}
	
	.info1 {
		width: 649px;
		height: 164px;
		padding-left: 25px;
	}
	
	.info1 h1 {
		padding: 28px 0;
		font-weight: normal;
		display: inline-block;
	}
	
	.info2 {
		width: 674px;
		height: 172px;
		border-top: 1px solid #DCDCDC;
	}
	
	.info2>div {
		height: 85px;
		border-bottom: 1px solid #DCDCDC;
	}
	
	.short {
		height: 85px;
		padding: 18px 0 18px 20px;
	}
	
	.info2 i {
		font-style: normal;
		display: block;
		font-size: 12px;
		color: darkgray;
	}
	
	.info_title {
		display: block;
		font-size: 24px;
		color: #8B4513;
	}
	
	.long {
		height: 85px;
		border-left: 1px solid #DCDCDC;
		padding: 18px 0 18px 20px;
	}
	
	.info_icon {
		display: inline-block;
		width: 30px;
		height: 30px;
		background-image: url(../assets/cpinfo_icons.gif);
		background-repeat: no-repeat;
	}
	
	.info_time {
		display: inline-block;
		width: 135px;
		height: 20px;
		background-image: url(../assets/processing.gif);
		background-repeat: no-repeat;
	}
	
	.info_text {
		display: inline-block;
		height: 30px;
		line-height: 30px;
		vertical-align: top;
		font-size: 12px;
		color: #8B4513;
		margin-top: 3px;
	}
	
	.diff {
		background-position: -3px -37px;
	}
	
	.diff_time {
		vertical-align: top;
		margin-top: 8px;
		background-position: 0 -120px;
	}
	
	.pepo {
		background-position: -3px -110px;
	}
	
	.pepo_time {
		vertical-align: top;
		margin-top: 8px;
		background-position: 0 -120px;
	}
	
	.ready {
		background-position: -3px -2px;
	}
	
	.ready_time {
		vertical-align: top;
		margin-top: 8px;
		background-position: 0 -120px;
	}
	
	.cook {
		background-position: -3px -72px;
	}
	
	.cook_time {
		vertical-align: top;
		margin-top: 8px;
		background-position: 0 -120px;
	}
	
	.info3 {
		width: 654px;
		height: 75px;
		padding: 20px 0 20px 20px;
	}
	
	.user_img {
		width: 70px;
		border-radius: 50%;
	}
	
	.info3>div {
		vertical-align: top;
		display: inline-block;
		margin-left: 15px;
		margin-top: 10px;
	}
	
	.info3 span {
		margin-bottom: 12px;
		display: inline-block;
		font-size: 12px;
	}
	
	.user_name {
		color: #8B4513;
	}
	
	.cook_stuff {
		background-color: white;
		margin-top: 20px;
	}
	
	.top_text {
		height: 54px;
		padding: 20px 24px 10px;
		font-size: 14px;
		line-height: 24px;
		color: #8B4513;
	}
	
	.top_text>strong {
		font-size: 24px;
		color: #DCDCDC;
	}
	
	.cook_stuff h2 {
		height: 67px;
		padding-left: 30px;
		line-height: 67px;
		font-weight: normal;
		border-bottom: 1px solid #DCDCDC;
	}
	
	.main_stuff {
		height: 317px;
		/*background-color: dimgray;*/
		border-bottom: 1px solid #DCDCDC;
	}
	
	.main_stuff>p {
		display: inline-block;
		width: 48px;
		height: 22px;
		background-color: #8B4513;
		color: white;
		font-size: 12px;
		line-height: 22px;
		text-align: center;
		margin: 14px 5px 14px 25px;
		border: 1px solid darkslategray;
		vertical-align: top;
	}
	ul,li {
		list-style: none;
	}
	.main_stuff>ul {
		width: 674px;
		display: inline-block;
		font-size: 0;
		vertical-align: top;
	}
	.main_stuff li {
		display: inline-block;
		width: 337px;
		height: 79px;
		background-color: lightcoral;
	}
	.stuff_img {
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 14px 0 14px 14px;
	}
	.stuff_img>img {
		display: inline-block;
		width: 50px;
		height: 50px;
	}
	.more_stuff {
		height: 111px;
		/*background-color: lightgray;*/
	}
</style>
<style type="text/css">
	.info1 .el-button {
		height: 50px;
		padding: 0 25px;
		vertical-align: top;
		margin: 28px 0 0 200px;
		background-color: #8B4513;
		color: white;
		font-size: 16px;
		letter-spacing: 2px;
	}
</style>