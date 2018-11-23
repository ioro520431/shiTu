<template>
	<el-row class="box">
		<el-col :span='18' :offset='3'>
			<h2>跟我学做菜吧</h2>
			<el-row :gutter='20'>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
				<el-col :span='8' class='item'>
					<vedioItem></vedioItem>
				</el-col>
			</el-row>
			<div id="foot_btn">
				<el-pagination background layout="prev, pager, next" :total="500" :page-size='12'></el-pagination>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import vedioItem from './VedioItem.vue'
	export default {
		name:'RecipeVideo',
		mounted: function() {
			this.$store.commit('changeTopFlag', 5)
		},
		components:{
			vedioItem
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		min-width: 1349px;
		margin-bottom: 40px;
	}
	.box h2 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
	}
	.item {
		margin-bottom: 20px;
	}
	#foot_btn {
		padding: 44px 0 ;
		text-align: center;
	}
</style>
<style>
	#foot_btn .el-pagination .number.active {
		background-color: #8B4513;
	}
	#foot_btn .el-pagination .number:hover {
		color: lightcoral;
	}
	#foot_btn .el-pagination .number.active:hover {
		color: white;
	}
</style>