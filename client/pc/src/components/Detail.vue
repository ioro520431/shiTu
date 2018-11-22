<template>
	<header>
		<div class="content">
			<el-col :span='18' :offset='3'>
				<div class="top">
					健康饮食，食材百科
				</div>
				<div class="center">
					<div class="sc_center">
						<img src="../../static/img/work01.jpg" alt="橘子" />
					</div>
					<div class="cen_left">
						<h1>橘子
					<a href="#"></a>
					</h1>
						<p class="p1"></p>
						<p class="p2">
							【别名】：橘柑、柑橘、桔柑子<br> 【食量建议】：每天1~3个
							<br> 【适宜人群】：一般人群均可食用
							<br>
							<span>【禁忌人群】</span>：风寒咳嗽、痰饮咳嗽者不宜食用。
						</p>
					</div>
					<div class="cen_right">
						<ul>
							<li class="green">
								<a href="#">气虚质</a>
							</li>
							<li class="green">
								<a href="#">气郁质</a>
							</li>
							<li class="green">
								<a href="#">湿热质</a>
							</li>
							<li class="green">
								<a href="#">特秉质</a>
							</li>
							<li class="green">
								<a href="#">阴虚质</a>
							</li>
							<li class="green">
								<a href="#">血瘀质</a>
							</li>
							<li class="green">
								<a href="#">平和质</a>
							</li>
							<li class="red">
								<a href="#">痰湿质</a>
							</li>
							<li class="red">
								<a href="#">阳虚质</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="middle_box">
					<h2 class="title1">
    	 <a href="#">橘子的做法大全</a></h2>

					<el-row :gutter='20'>
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

						<el-col :span='6'>

							<div class="chose_items">
								<strong class="title1">橘子的百科知识</strong>
								<strong class="title2">橘子介绍</strong>
								<p>橘子是芸香科柑桔属的一种水果，亦可俗称为“桔子”。“橘”（jú）和“桔”（jié）都是现代汉语规范字。 当“桔”读jú时，是“橘”的俗字。橘子色彩鲜艳、酸甜可口，是秋冬季常见的美味佳果。 橘子味甘酸、性凉，入肺、胃经；具有开胃理气，止渴润肺的功效； 主治胸隔结气、呕逆少食、胃阴不足、口中干渴、肺热咳嗽及饮酒过度。
								</p>
								<strong class="title2">橘子的营养价值</strong>
								<p>橘子中含有丰富的糖分、蛋白质、氨基酸、柠檬酸、枸橼酸、果胶、胡萝卜素、纤维素以及矿物质。</p>

								<strong class="title2">橘子的食用效果</strong>
								<p>1.美容<br /> 2.消除疲劳 <br /> 橘子汉语丰富的柠檬酸，具有消除疲劳的作用。<br /> 3.预防便秘

									<br />橘子内侧薄皮含有膳食纤维及果胶，可以促进通便，并且可以降低胆固醇 。<br /> 4.抑制癌细胞

									<br /> 在鲜柑橘汁中，有一种抗癌活性很强的物质“诺米灵”，它能使致癌化学物质分解，抑制和阻断癌细胞的生长，能使人体内除毒酶的活性成倍提高，阻止致癌物对细胞核的损伤，保护基因的完好。
									<br /> 5.减肥

									<br /> 橘子内含的酵素能有效抑制制造脂肪的细胞，再加上含有降低体脂肪的食物纤维、以及容易产生饱足感，所以便有减肥功效。
									<br /> 6.预防心血管疾病

									<br /> 橘皮苷可以加强毛细血管的韧性，降血压，扩张心脏的冠状动脉，故橘子是预防冠心病和动脉硬化的食品，研究证实，食用柑橘可以降低沉积在动脉血管中的胆固醇，有助于使动脉粥样硬化发生逆转。
									<br />

								</p>
								<strong class="title2">橘子的食用禁忌</strong>
								<p>
									1.风寒咳嗽者、痰饮咳嗽者不宜食用。<br /><br /> 2.吃橘子前后1小时不要喝牛奶，因为牛奶中的蛋白质遇到果酸会凝固，影响消化吸收。
									<br /><br /> 3.橘子不宜多吃，吃完应及时刷牙涑口，以免对口腔牙齿有害。
									<br /><br /> 4.饭前或空腹时不宜食用。
								</p>

								<strong class="title2"><a href="#">橘子的搭配宜忌</a></strong>
								<ul class="clearfix">

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

									<li class="ji">
										<div class="t">忌</div>
										<a href="#" class="img"><img src="../../static/img/test01.jpg" /></a>
										<span class="add "></span>
										<a href="#" class="img"><img src="../../static/img/test03.jpg" /></a>
										<p>
											<a href="# ">橘子 + 大闸蟹，令患软痈</a>
										</p>
									</li>

								</ul>
								<strong class="title2">橘子的选购</strong>

								<p>橘子的底部有明显小圆圈的，为雌橘子，有小圆点的则为雄橘子。雌橘子多半比雄橘子要甜一些。橘子底部捏起来感觉软的，多为甜橘子，捏起来硬硬的，一般皮较厚，吃起来口感多半较酸。拿起橘子,侧面看,长柄的一端突出的比凹进去的酸。</p>

								<strong class="title2">橘子的存储</strong>
								<p>首先橘子上不能带水，有一只带水就易腐烂而影响其余的橘子。把橘子放到篮子里或纸箱中，放在屋内（周围不要有热源，如厨房、冰箱旁等就不行），要通风，但不能让风直接吹到它们，这样会失水份的。 橘子放冰箱有个缺点：果味会变酸。

									<br /> <br /> 把水烧开，把桔子放进去，泡10秒钟，捞出来，晾干后放入塑料袋，挤出空气，放进冰箱，可保存将近20天
								</p>

								<strong class="title2">橘子的烹饪小技巧</strong>
								<p>橘子不仅可以直接吃，还可以做成果酱、榨汁等。</p>
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
		components: {
			menuItem
		},
		data() {
			return {}
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
		width: 460px;
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
	
	.cen_left a {
		height: 26px;
		width: 26px;
		display: inline-block;
		vertical-align: top;
		margin: 15px 5px;
		background: url(../assets/car.jpg) left top no-repeat;
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