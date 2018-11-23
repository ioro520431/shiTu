<template>
	<div class="item_box">
		<router-link :to="'/cook_book?menuId='+menuInfo.m_id" class='underline_none'>
			<span class="tip" v-if="menuInfo.tip">{{menuInfo.tip[0]}}<em></em></span>
			<div class="box">
				<div class="img">
					<img :src="menuInfo.m_img" />
				</div>
				<div class="text">
					<div class="top">
						<p class="name">{{menuInfo.m_name}}</p>
						<p class="state">
							<span>{{menuInfo.comment}}评论</span>
							<span>{{menuInfo.browse}}人气</span>
						</p>
						<p class="user">老方小雨</p>
					</div>
					<div class="bottom">
						<p class="time">{{menuInfo.step.length}}步/{{menuInfo.make_time}}</p>
						<p class="way">{{menuInfo.craft}}/{{menuInfo.flavor}}</p>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'MenuItem',
		props:{
			menuInfo:Object
		}
	}
</script>

<style scoped>
	.item_box {
		position: relative;
		width: 100%;
		height: 332px;
		font-size: 0;
	}
	.underline_none {
		text-decoration: none;
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
	.item_box .img {
		overflow: hidden;
		position: relative;
		z-index: 2;
		width: 238px;
		height: 238px;
	}
	.item_box img {
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
	
	.bottom p {
		font-size: 14px;
		margin-top: 10px;
		background-image: url(../assets/list_style1_icons.png);
		background-repeat: no-repeat;
		padding-left: 45px;
		color: #8B4513;
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