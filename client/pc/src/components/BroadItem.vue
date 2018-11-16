<template>
	<div class="item">
		<h1>今日晚餐推荐：炊烟起，人相聚</h1>
		<ul>
			<li v-for="item in list">
				<div>
					<a href="#">
						<img :src="item.srcs" />
					</a>
					<div class="text">
						<a href="#">{{item.title}}</a>
						<i>{{item.text}}</i>
						<span>
							<a href="#">{{item.tip}}</a>
							<em></em>
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'BroadItem',
		props:{
			list:Array
		}
	}
</script>

<style scoped>
	.item {
		position: relative;
		display: inline-block;
	}
	.item h1 {
		width: 100%;
		height: 120px;
		position: absolute;
		text-align: center;
		line-height: 120px;
		left: 0;
		top: -120px;
		font-size: 24px;
		font-weight: normal;
	}
	.item li {
		position: relative;
		display: inline-block;
	}
	.item img {
		width: 337px;
		height: 337px;
	}
	.text {
		position: absolute;
		width: 297px;
		height: 58px;
		padding: 10px 20px;
		bottom: 0;
		background-color: rgba(255,255,255,.7);
	}
	.text>a {
		font-size: 24px;
		text-decoration: none;
		color: black;
		display: block;
	} 
	.text>a:hover {
		text-decoration: underline;
		color: #8B4513;
	}
	.text i {
		display: block;
		font-style: normal;
		font-size: 12px;
		margin-top: 6px;
		color: dimgray;
	}
	.text span {
		position: absolute;
		height: 30px;
		padding: 0 14px;
		background-color: #60a531;
		line-height: 30px;
		top: -6px;
		right: 10px;
	}
	.text span a {
		text-decoration: none;
		font-size: 12px;
		color: white;
	}
	.text span a:hover {
		text-decoration: underline;
	}
	.text span em {
		position: absolute;
		display: block;
		width: 6px;
		height: 6px;
		top: 0;
		right: -6px;
		background-image: url(../assets/gxarrow1.png);
	}
</style>