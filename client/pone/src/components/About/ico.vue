<template>
	<div class="myico">
		
	<div class="myico-div">
		
	<div class="myico-flex">
	  <img src="../../assets/icon/shoucang.png"/>
	  <p>收藏</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/dianzan.png"/>
	  <p>兴趣</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/bangzhu.png"/>
	  <p>作品</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/dingdan.png"/>
	  <p>课程</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/huangguan.png"/>
	  <p>菜篮</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/huiyuan.png"/>
	  <p>会员</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/qianbao.png"/>
	  <p>钱包</p>
	</div>
	
	<div class="myico-flex">
	  <img src="../../assets/icon/sousuo.png"/>
	  <p>厨币</p>
	</div>
	
	
	</div>
	
	</div>
</template>

<script>
	export default {
		name: 'myico',
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.myico {
		width: 90%;
		margin-left: 5%;
		
		border: 1px solid lightgray;
		box-shadow: 2px 2px 3px lightgray;
		background-color: white;
		opacity: 0.9;
		border-radius: 5px;

	}
	.myico-div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.myico-flex {
		width: 20%;
		height: 75px;
		margin-top: 15px;
		margin-left: 5px;
	}
	
	.myico-flex img {
		width: 40px;
		height: 40px;
	}
	
	..myico-flex p {
		font-size: 12px;
	} 
</style>