<template>
	<router-link to='/vedio_layer' class='underline_none'>
		<div class="vedio_img">
			<img src="../../static/img/tet002.jpg" />
			<p></p>
			<div></div>
		</div>
		<div class="vedio_name">
			<p>左宗棠鸡的做法</p>
		</div>
	</router-link>
</template>

<script>
	export default {
		name:'VedioItem'
	}
</script>

<style scoped>
	.underline_none {
		text-decoration: none;
	}
	.vedio_img {
		position: relative;
		width: 323px;
		height: 182px;
	}
	.vedio_img>img {
		width: 323px;
	}
	.vedio_img>p {
		position: absolute;
		z-index: 1;
		width: 323px;
		height: 182px;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.25);
	}
	.vedio_img>div {
		position: absolute;
		z-index: 2;
		width: 30px;
		height: 30px;
		left: 50%;
		top: 50%;
		margin-left: -15px;
		margin-top: -15px;
		background-image: url(../assets/20180918141145_205.png);
		background-size: 30px 30px;
	}
	.vedio_name {
		width: 293px;
		height: 44px;
		background-color: white;
		padding: 12px 15px;
	}
	.vedio_name>p {
		color: #8B4513;
		font-weight: bold;
	}
</style>