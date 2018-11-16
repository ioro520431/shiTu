<template>
	<div class="cases">
		<div class="prev_btn" @mouseover="stop" @mouseout="start" @click="prev"></div>
		<div class="views" @mouseover="stop" @mouseout="start">
			<span class="item">
			<a href="javaScript:void(0)" @mouseover="change(0)" :class="{item_active:flag==0}">最新</a>
			<span><span class="line"></span>最热：</span>
			<a href="javaScript:void(0)" @mouseover="change(1)" :class="{item_active:flag==1}">一小时</a>
			<a href="javaScript:void(0)" @mouseover="change(2)" :class="{item_active:flag==2}">今日</a>
			<a href="javaScript:void(0)" @mouseover="change(3)" :class="{item_active:flag==3}">七天</a>
			<a href="#">更多菜谱<i class="el-icon-arrow-right"></i></a>
			</span>
			<div class="view" :class="{leftOne:flag==0,leftTwo:flag==1,leftThree:flag==2,leftFour:flag==3}">
				<hotItem></hotItem>
				<hotItem></hotItem>
				<hotItem></hotItem>
				<hotItem></hotItem>
			</div>
		</div>
		<div class="next_btn" @mouseover="stop" @mouseout="start" @click="autoPlay"></div>
	</div>
</template>

<script>
	import hotItem from './HotItem.vue'
	export default {
		name: 'Hot',
		components: {
			hotItem
		},
		data() {
			return {
				flag: 0
			}
		},
		methods: {
			autoPlay: function() {
				this.flag = (this.flag + 1) % 4;
			},
			change: function(num) {
				this.flag = num;
			},
			stop: function() {
				clearInterval(this.timer);
				this.timer = '';
			},
			start: function() {
				clearInterval(this.timer);
				this.timer = setInterval(this.autoPlay, 5000);
			},
			prev: function() {
				this.flag = this.flag - 1;
				if(this.flag < 0) {
					this.flag = 3;
				}
			}
		},
		created() {
			this.timer = setInterval(this.autoPlay, 5000)
		}
	}
</script>

<style scoped>
	.cases {
		position: relative;
		width: 1011px;
		height: 804px;
	}
	
	.item {
		position: absolute;
		display: inline-block;
		width: 240px;
		height: 48px;
		top: 36px;
		right: 0;
		z-index: 2;
		line-height: 48px;
		font-size: 12px;
	}
	
	.views {
		width: 1011px;
		height: 804px;
		position: relative;
		overflow: hidden;
	}
	
	.item>a,
	.item>span {
		display: inline-block;
		padding-left: 2px;
		color: #A9A9A9;
	}
	
	.item>a {
		text-decoration: none;
	}
	
	.item .item_active {
		color: #8B4513;
		text-decoration: underline;
	}
	
	.line {
		display: inline-block;
		height: 14px;
		width: 1px;
		background-color: #A9A9A9;
		margin-top: -2px;
		vertical-align: middle;
		margin-right: 6px;
	}
	
	.view {
		position: absolute;
		width: 4068px;
		height: 804px;
		top: 0;
		transition: all .6s linear;
	}
	
	.leftOne {
		left: 0;
	}
	
	.leftTwo {
		left: -1017px;
	}
	
	.leftThree {
		left: -2034px;
	}
	
	.leftFour {
		left: -3051px;
	}
	
	.prev_btn,
	.next_btn {
		position: absolute;
		top: 397px;
		z-index: 10;
		width: 130px;
		height: 130px;
		background-image: url(../assets/index_arrow.gif);
		background-repeat: no-repeat;
		cursor: pointer;
	}
	
	.prev_btn {
		left: -130px;
		background-position: 0 0;
	}
	
	.next_btn {
		right: -130px;
		background-position: 0 -130px;
	}
	
	.prev_btn:hover {
		background-position: -130px 0;
	}
	
	.next_btn:hover {
		background-position: -130px -130px;
	}
</style>