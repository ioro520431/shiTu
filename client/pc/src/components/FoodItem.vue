<template>
	<div class="item_box">
		<router-link to='/common' class='underline_none'>
			<span class="tip">抵抗力<em></em></span>
			<div class="box">
				<div class="curtain">
					<span class="tips">抵抗力,抵抗力,抵抗力,抵抗力</span>
					<p class="time">9步/大概十分钟</p>
					<p class="way">炸/甜味</p>
				</div>
				<img src="../../static/img/test001.jpg" />
			</div>
			<div class="text">
				<div class="top">
					<p class="name">香酥反沙馒头条</p>
					<p class="state">
						<span>0评论</span>
						<span>0人气</span>
					</p>
					<!--<p class="user">老方小雨</p>-->
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'FoodItem'
	}
</script>

<style scoped>
	.item_box {
		position: relative;
		width: 100%;
		height: 332px;
		font-size: 0;
	}
	.item_box:hover {
		box-shadow: 0px 4px 12px 3px rgba(169,169,169,.4);
	}
	.underline_none {
		text-decoration: none;
	}
	.box {
		overflow: hidden;
		position: relative;
		height: 238px;
	}
	
	.tip {
		position: absolute;
		z-index: 3;
		display: inline-block;
		height: 32px;
		padding: 0 10px;
		line-height: 32px;
		top: 8px;
		right: -6px;
		background-color: #60a531;
		font-size: 12px;
		color: white;
		box-shadow: 1px 1px 1px 0 #A9A9A9;
	}
	
	.tip em {
		background-image: url(../assets/gxarrow.png);
		display: inline-block;
		width: 6px;
		height: 6px;
		position: absolute;
		right: 0;
		bottom: -6px;
	}
	
	.box img {
		position: relative;
		z-index: 2;
		width: 100%;
	}
	
	.box .curtain {
		position: absolute;
		z-index: 3;
		background-color: rgba(0, 0, 0, .5);
		width: 100%;
		height: 300px;
		right: -100%;
		top: 0;
		opacity: 0;
		transition: all .5s linear;
		padding-top: 50px;
	}
	
	.tips {
		position: absolute;
		z-index: 3;
		display: inline-block;
		height: 32px;
		padding: 0 10px;
		line-height: 32px;
		top: 8px;
		right: 0px;
		background-color: #60a531;
		font-size: 12px;
		color: white;
	}
	
	.box:hover .curtain {
		right: 0;
		opacity: 1;
	}
	
	.text {
		width: 100%;
		height: 98px;
		transition: all .5s;
	}
	
	.top {
		padding: 15px;
		width: 87%;
		height: 68px;
	}
	
	.top {
		background-color: white;
	}
	
	.text p {
		margin-bottom: 7px;
	}
	
	.top .name {
		font-size: 14px;
		font-weight: bold;
		color: 	#808080;
	}
	.top .name:hover {
		color: #8B4513;
	}
	.top .state {
		font-size: 12px;
		color: #A9A9A9;
	}
	
	.top .user {
		font-size: 12px;
		color: #8B4513;
	}
	.curtain p {
		font-size: 14px;
		margin-top: 50px;
		background-image: url(../assets/list_style1_icons.png);
		background-repeat: no-repeat;
		padding-left: 100px;
		color: white;
	}
	
	.curtain .time {
		background-position: 50px -132px;
	}
	
	.curtain .way {
		background-position: 50px -49px;
	}
</style>