<template>
	<el-row class='big_box'>
		<el-col :span='18' :offset='3' class='row'>
			<h2>先看看安装后效果</h2>
			<el-col :span='8' :offset='8' class='content'>
				<div id="img_box">
					<el-carousel arrow='never' indicator-position='none' height="150px">
						<el-carousel-item>
							<img src="../assets/app1.jpg"/>
						</el-carousel-item>
						<el-carousel-item>
							<img src="../assets/app3.jpg"/>
						</el-carousel-item>
						<el-carousel-item>
							<img src="../assets/app4.jpg"/>
						</el-carousel-item>
						<el-carousel-item>
							<img src="../assets/app5.jpg"/>
						</el-carousel-item>
						<el-carousel-item>
							<img src="../assets/app6.jpg"/>
						</el-carousel-item>
						<el-carousel-item>
							<img src="../assets/app8.jpg"/>
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'Phone',
		mounted: function() {
			this.$store.commit('changeTopFlag', 6);
		},
	}
</script>

<style scoped>
	.big_box {
		margin-bottom: 40px;
	}
	
	.big_box h2 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
	}
	
	.content {
		height: 600px;
		background-image: url(../assets/iphone6s.png);
		background-repeat: no-repeat;
	}
	
	#img_box {
		width: 219px;
		/*height: 390px;*/
		background-color: darkgray;
		margin: 64px 60px;
	}
	#img_box img {
		width: 219px;
		height: 390px;
	}
</style>
<style type="text/css">
	#img_box .el-carousel {
		height: 390px;
	}
	#img_box .el-carousel__item {
		height: 390px;
	}
	#img_box .el-carousel__container {
		height: 390px;
	}
</style>