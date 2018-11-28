<template>
	<div class="content">
		<el-col :span='18' :offset='3'>
			<div class="top">
				<p>
					菜单是你的一桌饭
					<router-link class="hot" to="#">最热</router-link>
					<router-link class="xin" to="#">最新</router-link>

				</p>
			</div>

			<div class="box" v-for='item in theme'>
				<div class="box-right">
					<router-link to="#">{{item.title}}</router-link>
					<p><span>{{item.em}}</span>{{item.left}}</p>
				</div>

				<div class="info">
					<dl>
						<dd><strong class="tag">{{item.time}}</strong></dd>
					</dl>
					<router-link class="author" to="#"><img :src="item.author">
						<strong>{{item.name}}</strong>
					</router-link>
				</div>
				<ul class="cplist">
					<li class="img" v-for='item in item.images' :key="item.id">
						<router-link to="/menuDescribe">
							<img :src="item.imgurl" />
							<div class="foot-text">{{item.txt}}</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div id="foot_btn">
				<el-pagination background layout="prev, pager, next" :total="500" :page-size='12'></el-pagination>
			</div>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: 'Menu',
		mounted: function() {
			this.$store.commit('changeTopFlag', 4)
		},
		data() {
			return {
				show: false,
				theme: [{
						title: '我的菜单',
						em: '9',
						left: '篇菜谱',
						time: '2018-02-04 16:14',
						name: 'Vio let',
						author: '../../static/img/wicon01.png',
						src: '../../static/img/test01.jpg',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]
					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-10-20 10:31',
						name: '娟娟溪流',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '12',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '杰米7148377',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'zero2014016',
						author: '../../static/img/wicon04.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '倾尽红城',
						author: '../../static/img/wicon05.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'MY慧',
						author: '../../static/img/wicon06.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '阿祕陀佛',
						author: '../../static/img/wicon07.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '过桥米线',
						author: '../../static/img/wicon01.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}, {
						title: '我的菜单',
						em: '11',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: '../../static/img/wmenu01.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}

						]

					}

				]
			}

		},
		methods: {
			showtxt: function() {
				this.show = true;
			},
			showtxtNo: function() {
				this.show = false;
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		min-width: 1349px;
		overflow: auto;
		overflow: hidden;
	}
	
	.top {
		height: 115px;
	}
	
	.top p {
		position: relative;
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		font-size: 24px;
	}
	
	.top a {
		font-size: 12px;
		font-family: 宋体;
		text-decoration: none;
		float: right;
		margin-left: 10px;
		color: #666;
	}
	
	.top .xin {
		color: red;
	}
	
	.top a:hover {
		color: red;
	}
	
	.box {
		width: 991px;
		height: 240px;
		padding-left: 20px;
		background-color: white;
		margin-top: 20px;
	}
	
	.box-right a {
		color: #333;
		font-size: 18px;
		font-family: Microsoft Yahei;
		font-weight: bold;
		text-decoration: none;
		display: inline-block;
		margin-top: 10px;
	}
	
	.box-right span {
		color: red;
	}
	
	.box-right p {
		float: right;
		margin-top: 18px;
		color: #999;
		font-size: 12px;
		margin-right: 27px;
	}
	
	.info {
		display: inline-block;
		margin-top: 20px;
	}
	
	.info dl dd strong.tag {
		color: #999;
		padding-right: 10px;
		line-height: 18px;
		text-indent: 0px;
		float: none;
		height: 18px;
		display: inline;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		display: inline-block;
	}
	
	.info a.author {
		height: 40px;
		width: 120px;
		text-decoration: none;
		margin-top: 105px;
		display: block;
	}
	
	.info a.author img {
		height: 40px;
		width: 40px;
	}
	
	.info a.author strong {
		font-size: 12px;
		color: #999;
		font-style: normal;
		font-weight: normal;
	}
	
	.cplist {
		display: inline-block;
		width: 816px;
		height: 160px;
		vertical-align: top;
		margin-top: 25px;
		margin-left: 24px;
	}
	
	.cplist li {
		display: inline-block;
		margin-left: 3px;
	}
	
	.cplist img {
		display: block;
		height: 160px;
		width: 160px;
	}
	
	.foot-text {
		height: 32px;
		line-height: 32px;
		color: #fff;
		text-align: center;
		display: inline-block;
		font-size: 14px;
		margin-left: 0px;
		position: absolute;
		margin-top: -32px;
		background: url(../assets/2.jpg)repeat;
		opacity: .7;
		width: 160px;
		font-size: 14px;
		display: none;
	}
	
	.img>a:hover .foot-text {
		display: block;
	}
	
	.block {
		width: 100%;
		height: 60px;
		/*margin-top: 20px;*/
		margin: 40px auto;
		margin-left: 20px;
	}
	#foot_btn {
		padding: 44px 0 ;
		text-align: center;
	}
</style>
<style type="text/css">
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