<template>
	<div class="box">
		<router-link to='#' v-for='item in list'>
			<img :src="item.src" />
			<span class="text">
				<span class="block"></span>
			<span class="title">{{item.title}}</span>
			</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'FoodMaterial',
		props: {
			list: Array
		}
	}
</script>

<style scoped>
	.box {
		width: 976px;
		height: 132px;
		padding: 0;
	}
	
	a {
		position: relative;
		width: 117px;
		height: 117px;
		float: left;
		margin-right: 5px;
	}
	
	a img {
		width: 117px;
		height: 117px;
	}
	
	.text {
		position: absolute;
		display: inline-block;
		bottom: 0px;
		width: 117px;
		height: 28px;
		background-color: rgba(255, 255, 255, .8);
	}
	
	.block {
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 9px;
		background-color: #A9A9A9;
		cursor: pointer;
	}
	
	.title {
		display: inline-block;
		width: 24px;
		height: 28px;
		line-height: 28px;
		font-size: 12px;
		vertical-align: top;
		color: #CD5C5C;
	}
	
	.item:hover .title {
		color: #8B4513;
		text-decoration: underline;
	}
</style>