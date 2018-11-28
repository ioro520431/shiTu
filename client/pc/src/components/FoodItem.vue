<template>
	<div class="item_box">
		<router-link :to="'/common?heal_id='+healItem.h_id" class='underline_none'>
			<div class="box">
				<img :src="healItem.h_pic" />
			</div>
			<div class="text">
				<div class="top">
					<p class="name">{{healItem.h_name}}</p>
					<p class="state">
						<span>{{healItem.h_common}}评论</span>
						<span>{{healItem.h_browse}}人气</span>
					</p>
					<p class="user">食徒健康咨询</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'FoodItem',
		props:{
			healItem:Object
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
	
	.box img {
		position: relative;
		z-index: 2;
		width: 100%;
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
		color: darkslategray;
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
		color: 	#808080;
	}
</style>