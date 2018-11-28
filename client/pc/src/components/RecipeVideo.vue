<template>
	<el-row class="box">
		<el-col :span='18' :offset='3'>
			<h2>跟我学做菜吧</h2>
			<el-row :gutter='20'>
				<el-col :span='8' class='item' v-for='(item,index) in info' :key='index' v-if='index>=(page*pageSize+0)&&index<(page*pageSize+pageSize)'>
					<vedioItem :info='item'></vedioItem>
				</el-col>
			</el-row>
			<div id="foot_btn">
				<el-pagination background layout="prev, pager, next" :total="info.length" :page-size='12' @current-change='changePage'></el-pagination>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import vedioItem from './VedioItem.vue'
	export default {
		name:'RecipeVideo',
		mounted: function() {
			let _this = this;
			_this.$http.get('/recipe_vedio',{}).then(response=>{
				this.$store.commit('changeTopFlag', 5);
				_this.info = response.data;
			})
		},
		components:{
			vedioItem
		},
		data(){
			return {
				info:'',
				pageSize:12,
				page:0
			}
		},
		methods:{
			changePage(page){
				this.page = page-1
			}
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