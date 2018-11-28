<template>
	<el-row class='big_box'>
		<el-col :span="18" :offset='3'>
			<div class="snore">
				饮食健康新资讯
			</div>
			<div class="sleep">
				<p>{{info.h_name}}</p>
				<div class="personal">
					<img src="../assets/logo.png"  class="main_img"/>
					<span>来自：</span>
					<span>食味之徒</span>
					<span>2017-01-12</span>
					<span>/</span>
					<span>{{info.h_browse}}人看过</span>
					<span>/</span>
					<span>评论（{{info.h_common}}）</span>
				</div>
			</div>
			<div class="clear"></div>

			<div class="content">
				<div class="spacing">
					<p>{{info.h_title}}</p>
					<img :src="info.h_src" />
					<p v-for="(item,index) in info.h_text" :key='index'>{{item}}</p>
				</div>
			</div>
			<div class="boring"></div>

		</el-col>
		<el-col :span="3">
			<div class="grid-content bg-purple"></div>
		</el-col>
	</el-row>

</template>

<script>
	export default {
		name: 'Common',
		components: {

		},
		data() {
			return {
				activeName: 'first',
				info:''
			}
		},
		mounted: function() {
			this.$store.commit('changeTopFlag', 3);
			let _this = this;
			_this.$http.get('/heal_item',{
				params:{
					heal_id:_this.$route.query.heal_id
				}
			}).then(response=>{
				_this.info = response.data;
			})
		}
	}
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
	}
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.content {
		width: 100%;
		
	}
	.spacing {
		padding: 20px 20px;
	}
	.snore {
		line-height: 100px;
		text-align: center;
		font-weight: bold;
		font-size: 20px;
	}
	
	.sleep {
		width: 100%;
		height: 120px;
		background-color: white;
		padding-top: 20px;
	}
	
	.sleep p {
		font-size: 26px;
		text-align: center;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.personal {
		margin-left: 60px;
		float: left;
		position: relative;
	}
	
	.personal img {
		width: 40px;
		height: 60px;
	}
	
	.personal span:nth-child(2) {
		font-size: 16px;
		color: black;
		position: absolute;
		top: 20px;
	}
	
	.personal span:nth-child(3) {
		font-size: 16px;
		color: red;
		position: absolute;
		top: 20px;
		left: 86px;
	}
	
	.personal span:nth-child(4) {
		font-size: 13px;
		color: rgba(0, 0, 0, .5);
	}
	
	.personal span:nth-child(5) {
		font-size: 13px;
		color: rgba(0, 0, 0, .5);
	}
	
	.personal span:nth-child(6) {
		font-size: 13px;
		color: rgba(0, 0, 0, .5);
	}
	
	.personal span:nth-child(7) {
		font-size: 13px;
		color: rgba(0, 0, 0, .5);
	}
	
	.personal span:nth-child(8) {
		font-size: 13px;
		color: rgba(0, 0, 0, .5);
	}
	
	.clear {
		clear: both;
	}
	
	.content {
		margin-top: 40px;
		width: 100%;
		background-color: white;
	}
	
	.spacing p {
		text-indent: 32px;
		margin: 20px 0;
		font-size: 14px;
		color: rgba(0, 0, 0, .5);
		line-height: 26px;
	}
	
	.spacing img {
		padding: 5px 37px;
		width: 92%;
		height: 500px;
	}
	
	.boring {
		margin: 40px;
	}
</style>