<template>
	<div class="case">
		<span class="tip"><a href="#">食品安全</a><em></em></span>
		<div class="img_box">
			<div class="images" :class="{topOne:flag==0,topTwo:flag==1,topThree:flag==2}">
				<a href=""><img src="../../static/img/test0001.jpg"/></a>
				<a href=""><img src="../../static/img/test0002.jpg"/></a>
				<a href=""><img src="../../static/img/test0003.jpg"/></a>
			</div>
		</div>
		<div class="titles">
			<p>
				<a @mouseover="change(0)" :class="{active:flag==0}" href="#">冻鱼保鲜保营养吗？</a>
			</p>
			<p>
				<a @mouseover="change(1)" :class="{active:flag==1}" href="#">哪些啤酒谣言还在飞？</a>
			</p>
			<p>
				<a @mouseover="change(2)" :class="{active:flag==2}" href="#">凉拌或油炸四季豆易中毒</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Healthy',
		data() {
			return {
				tabPosition: 'right',
				flag: 1
			};
		},
		methods:{
			change: function(num){
				this.flag = num;
			}
		}
	}
</script>

<style scoped>
	.case {
		position: relative;
		width: 100%;
		height: 160px;
		background-color: white;
		font-size: 0;
	}
	.tip {
		position: absolute;
		z-index: 3;
		display: inline-block;
		height: 32px;
		padding: 0 10px;
		line-height: 32px;
		top: -6px;
		right: 10px;
		background-color: #60a531;
	}
	.tip>a {
		font-size: 12px;
		color: white;
		text-decoration: none;
	}
	.tip>em {
		position: absolute;
		display: inline-block;
		width: 6px;
		height: 6px;
		background-image: url(../assets/gxarrow1.png);
		top: 0;
		right: -6px;
	}
	.tip>a:hover {
		text-decoration: underline;
	}
	.img_box {
		position: relative;
		display: inline-block;
		width: 160px;
		height: 160px;
		overflow: hidden;
	}
	.images {
		position: absolute;
		display: inline-block;
		width: 160px;
		height: 480px;
		top: 0;
		left: 0;
	}
	.topOne {
		top: 0px;
	}
	.topTwo {
		top: -160px;
	}
	.topThree {
		top: -320px;
	}
	.images img {
		width: 160px;
		height: 160px;
	}
	.titles {
		display: inline-block;
		width: 335px;
		height: 160px;
		vertical-align: top;
	}
	.titles>p {
		padding-left: 15px;
		height: 53px;
		line-height: 53px;
		border-bottom: 1px solid #D3D3D3;
	}
	.titles>p:last-of-type {
		border: none;
	}
	.titles a{
		color: #696969;
		font-size: 14px;
		text-decoration: none;
	}
	.titles a:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	.titles .active {
		font-size: 16px;
		font-weight: bold;
	}
</style>