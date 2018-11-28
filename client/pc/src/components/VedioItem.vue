<template>
	<router-link :to="'/vedio_layer?vedio_id='+info.v_id" class='underline_none'>
		<div class="big_box">
			<div class="vedio_img">
				<img :src="info.v_pic" />
				<p></p>
				<div></div>
			</div>
			<div class="vedio_name">
				<p class="name">{{info.v_name}}</p>
				<p class="play_time">{{info.v_time}}</p>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		name:'VedioItem',
		props:{
			info:Object
		}
	}
</script>

<style scoped>
	.underline_none {
		text-decoration: none;
	}
	.big_box {
		transition: all 0.3s linear;
	}
	.big_box:hover {
		box-shadow: 0px 4px 12px 3px rgba(169,169,169,.4);
	}
	.vedio_img {
		position: relative;
		width: 100%;
		height: 182px;
	}
	.vedio_img>img {
		width: 100%;
	}
	.vedio_img>p {
		position: absolute;
		z-index: 1;
		width: 100%;
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
	.vedio_name>.name {
		color: #8B4513;
		font-weight: bold;
	}
	.play_time {
		font-size: 12px;
		margin-top: 5px;
		color: gray;
	}
</style>