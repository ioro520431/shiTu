<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='cook_item'>
			<div>
				<h2>世间唯美食不可辜负矣</h2>
				<el-row>
					<el-col :span='8' class='left_img'>
						<img :src="info.m_img" alt="" />
					</el-col>
					<el-col :span='16' class='right_box'>
						<div class="info1">
							<h1>{{info.m_name}}</h1>
							<el-button>收藏</el-button>
							<div class="tips">
								<span v-for="item in info.tip" :key='item'>{{item}}</span>
							</div>
						</div>
						<div class="info2">
							<el-row>
								<el-col :span='4' class='short'>
									<i>工艺</i>
									<span class="info_title">{{info.craft}}</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>难度</i>
									<span class="info_icon diff"></span>
									<span class="info_time diff_time"></span>
									<span class='info_text'>{{info.difficulty}}</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>人数</i>
									<span class="info_icon pepo"></span>
									<span class="info_time pepo_time"></span>
									<span class='info_text'>{{info.p_num}}人</span>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span='4' class='short'>
									<i>口味</i>
									<span class="info_title">{{info.flavor}}</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>准备时间</i>
									<span class="info_icon ready"></span>
									<span class="info_time ready_time"></span>
									<span class='info_text'>{{info.ready_time}}</span>
								</el-col>
								<el-col :span='10' class='long'>
									<i>烹饪时间</i>
									<span class="info_icon cook"></span>
									<span class="info_time cook_time"></span>
									<span class='info_text'>{{info.make_time}}</span>
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
			<el-col :span='18'>
				<div class='cook_stuff'>
					<p class="top_text">
						<strong>“</strong>{{info.m_desc}}
						<strong>”</strong>
					</p>
					<h2>用料</h2>
					<div class="stuff_box">
						<div class="main_stuff">
							<p>主料</p>
							<ul>
								<li v-for="(item,index) in info.main_ma" :key='index'>
									<router-link to='#' class='stuff_img'>
										<img src="../assets/test011.jpg" alt="" />
									</router-link>
									<p class="stuff_text">
										<router-link to='#'>{{item.name}}</router-link>
										<span>{{item.num}}</span>
									</p>
								</li>
							</ul>
						</div>
						<div class="more_stuff">
							<p>辅料</p>
							<ul>
								<li v-for="(item,index) in info.assist_ma" :key='index'>
									<router-link to='#'>{{item.name}}</router-link>
									<span>{{item.num}}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class='measure'>
					<h3>{{info.m_name}}的做法</h3>
					<div>
						<div class="measure_item" v-for="(item,index) in info.step" :key='index'>
							<p class="serial">{{index+1}}.</p>
							<div class='measure_content'>
								<p class="measure_text">{{item.stepNum}}</p>
								<p class="measure_img">
									<img :src="item.stepImg" alt="" />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="finished">
					<h3>{{info.m_name}}成品图</h3>
					<div>
						<el-carousel arrow="never" trigger="click">
							<el-carousel-item v-for='(item,index) in info.finished' :key='index'>
								<img :src="item" />
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
				<div class="skill" v-if="info.skill">
					<h3>烹饪技巧</h3>
					<div>
						<p v-for="(item,index) in info.skill" :key='index'>{{index+1}}、{{item}}</p>
					</div>
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
			let _this = this;
			_this.$http.get('/cook_book', {
				params: {
					menuNum: _this.$route.query.menuId
				}
			}).then(response => {
				_this.info = response.data;
			})
		},
		data(){
			return {
				info:''
			}
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
		width: 100%;
		min-height: 452px;
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
	
	.info1>.tips>span {
		display: inline-block;
		height: 32px;
		line-height: 32px;
		font-size: 14px;
		color: white;
		padding: 0 8px;
		background-color: #60a531;
		border: 1px solid #46811d;
		margin-right: 5px;
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
		font-size: 22px;
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
		min-height: 54px;
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
		border-bottom: 1px solid #DCDCDC;
	}
	
	.main_stuff>p,
	.more_stuff>p {
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
	
	ul,
	li {
		list-style: none;
	}
	
	.main_stuff>ul,
	.more_stuff>ul {
		width: 674px;
		display: inline-block;
		font-size: 0;
		vertical-align: top;
	}
	
	.main_stuff li {
		display: inline-block;
		width: 336px;
		height: 79px;
		vertical-align: top;
		border-bottom: 1px solid #DCDCDC;
	}
	
	.main_stuff li:nth-of-type(2n-1) {
		border-right: 1px solid #DCDCDC;
	}
	
	.stuff_img {
		display: inline-block;
		width: 50px;
		height: 50px;
		padding: 14px 0 14px 14px;
		vertical-align: top;
	}
	
	.stuff_img>img {
		display: inline-block;
		width: 50px;
		height: 50px;
	}
	
	.stuff_text {
		display: inline-block;
		width: 252px;
		height: 51px;
		padding: 14px 10px 14px 10px;
		line-height: 51px;
	}
	
	.stuff_text>a {
		font-size: 14px;
		text-decoration: none;
		color: #8B4513;
	}
	
	.stuff_text>span {
		font-size: 12px;
		float: right;
		color: #A9A9A9;
	}
	
	.more_stuff li {
		display: inline-block;
		width: 312px;
		height: 27px;
		vertical-align: top;
		border-bottom: 1px solid #DCDCDC;
		padding: 14px 10px 14px 14px;
		line-height: 27px;
	}
	
	.more_stuff li:nth-of-type(2n-1) {
		border-right: 1px solid #DCDCDC;
	}
	
	.more_stuff a {
		font-size: 14px;
		text-decoration: none;
		color: #8B4513;
	}
	
	.more_stuff span {
		font-size: 12px;
		float: right;
		color: #A9A9A9;
	}
	
	.measure {
		margin-top: 20px;
		background-color: white;
	}
	
	.measure>h3,
	.finished>h3,
	.skill>h3 {
		width: 734px;
		height: 66px;
		padding-left: 24px;
		line-height: 67px;
		font-size: 24px;
		font-weight: normal;
		border-bottom: 1px solid #DCDCDC;
		color: #8B4513;
	}
	
	.measure>div {
		width: 100%;
		margin-top: 20px;
	}
	
	.measure_item {
		width: 100%;
		font-size: 0;
	}
	
	.serial {
		display: inline-block;
		width: 100px;
		height: 50px;
		vertical-align: top;
		font-style: italic;
		font-size: 50px;
		color: #8B4513;
		text-align: center;
	}
	
	.measure_content {
		display: inline-block;
		width: 638px;
		padding-right: 20px;
	}
	
	.measure_text {
		width: 638px;
		padding: 10px 20px 10px 0;
		font-size: 14px;
		line-height: 26px;
		color: #808080;
	}
	
	.measure_img>img {
		width: 538px;
	}
	
	.finished {
		background-color: white;
		padding-bottom: 20px;
	}
	
	.finished>div {
		width: 638px;
		margin-left: 100px;
		padding-right: 20px;
		margin-top: 20px;
	}
	
	.el-carousel__item>img {
		width: 635px;
		height: 508px;
		margin-top: -37px;
	}
	
	.skill {
		background-color: white;
	}
	
	.skill>div {
		padding: 10px 10px 10px 100px;
		line-height: 24px;
		font-size: 14px;
	}
	
	.skill p {
		color: #808080;
		padding: 5px 0;
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
	
	.finished .el-carousel__container {
		min-height: 434px;
	}
</style>