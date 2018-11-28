<template>
	<div class="item_box">
		<router-link :to="'/detail?ma_id='+maInfo.ma_id" class='underline_none'>
			<div class="img">
				<img :src="maInfo.ma_pic" alt="" />
				<p v-if="maInfo.ma_tip_green.length!=0&&maInfo.ma_tip_red!=0">
					<el-row :gutter='10' class='tips'>
						<el-col :span='8' class='tip tip_green' v-for='(item,index) in maInfo.ma_tip_green' :key="index+'green'">
							<span>{{item}}</span>
						</el-col>
						<el-col :span='8' class='tip tip_red' v-for='(item,index) in maInfo.ma_tip_red' :key="index+'red'">
							<span>{{item}}</span>
						</el-col>
					</el-row>
				</p>
			</div>
			<div>
				<a href="javaScript:void(0)" class="name">{{maInfo.ma_name}}</a>
				<p class="text">{{maInfo.introduce}}...</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'MaterialItem',
		props:{
			maInfo:Object
		}
	}
</script>

<style scoped>
	.item_box {
		width: 100%;
		height: 332px;
		font-size: 0;
		background-color: white;
	}
	.item_box:hover {
		box-shadow: 0px 4px 12px 3px rgba(169,169,169,.4);
	}
	.underline_none {
		text-decoration: none;
	}
	.img {
		position: relative;
		overflow: hidden;
	}
	.img>img {
		width: 100%;
	}
	.img>p {
		position: absolute;
		display: inline-block;
		width: 100%;
		height: 300px;
		background-color: rgba(0,0,0,.7);
		top: 0;
		right: -100%;
		opacity: 0;
		transition: all .65s linear;
	}
	.img:hover p{
		opacity: 1;
		right: 0;
	}
	.tips {
		margin-top: 50px;
		padding:0 20px;
	}
	.tip {
		margin-bottom: 10px;
	}
	.tip>span {
		display: inline-block;
		width: 100%;
		height: 26px;
		line-height: 26px;
		text-align: center;
		color: white;
		font-size: 12px;
	}
	.tip_green>span {
		background-color: #60a531;
	}
	.tip_red>span {
		background-color: red;
	}
	.name {
		display: inline-block;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		color: #8B4513;
		padding: 12px 0 0 10px;
	}
	.text {
		font-size: 12px;
		padding: 6px 10px 0 10px;
		color: gray;
		line-height: 22px;
	}
</style>