<template>
	<div class="item_box">
		<span class="tip">抵抗力<em></em></span>
		<div class="box">
			<img src="../../static/img/test001.jpg" />
			<div class="text">
				<div class="top">
					<p class="name">香酥反沙馒头条</p>
					<p class="state">
						<span>0评论</span>
						<span>0人气</span>
					</p>
					<p class="user">老方小雨</p>
				</div>
				<div class="bottom">
					<p class="time">9步/大概十分钟</p>
					<p class="way">炸/甜味</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MenuItem'
	}
</script>

<style scoped>
	.item_box {
		position: relative;
		width: 100%;
		height: 332px;
		background-color: darkgray;
		font-size: 0;
		cursor: pointer;
	}
	.box {
		overflow: hidden;
		position: relative;
		height: 332px;
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
	.item_box img {
		position: relative;
		z-index: 2;
		width: 238px;
	}
	
	.text {
		position: absolute;
		z-index: 1;
		bottom: -94px;
		width: 238px;
		height: 188px;
		transition: all .5s;
	}
	
	.top,
	.bottom {
		padding: 15px;
		width: 208px;
		height: 64px;
	}
	
	.top {
		background-color: white;
	}
	
	.bottom {
		background-color: #E1FFFF;
	}
	
	.text p {
		margin-bottom: 7px;
	}
	
	.top .name {
		font-size: 14px;
		font-weight: bold;
	}
	
	.top .state {
		font-size: 12px;
		color: #A9A9A9;
	}
	
	.top .user {
		font-size: 12px;
		color: #8B4513;
	}
	
	.bottom p {
		font-size: 14px;
		margin-top: 10px;
		background-image: url(../assets/list_style1_icons.png);
		background-repeat: no-repeat;
		padding-left: 45px;
	}
	
	.bottom .time {
		background-position: 0 -132px;
	}
	
	.bottom .way {
		background-position: 0 -49px;
	}
	
	.item_box:hover .text {
		bottom: 0px;
	}
</style>