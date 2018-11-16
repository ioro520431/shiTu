<template>
	<div class="lunbo" @mouseout="start" @mouseover="stop">
		<div class="box">
			<p class="bgLeft"></p>
			<div @click="prev" class="prev_btn" :class="show?{btnFive: flag==0,btnOne: flag==1,btnTwo: flag==2,btnThree: flag==3,btnFour: flag==4}:''"></div>
			<div class="items" :class="{leftOne: flag==0,leftTwo: flag==1,leftThr: flag==2,leftFour: flag==3,leftFive: flag==4}">
				<broadItem v-bind:list='list[4]'></broadItem>
				<broadItem v-bind:list='list[0]'></broadItem>
				<broadItem v-bind:list='list[1]'></broadItem>
				<broadItem v-bind:list='list[2]'></broadItem>
				<broadItem v-bind:list='list[3]'></broadItem>
				<broadItem v-bind:list='list[4]'></broadItem>
				<broadItem v-bind:list='list[0]'></broadItem>
			</div>
			<div @click="autoPlay" class="next_btn" :class="show?{btnTwo: flag==0,btnThree: flag==1,btnFour: flag==2,btnFive: flag==3,btnOne: flag==4}:''"></div>
			<p class="bgRight"></p>
		</div>
		<div class="times">
			<span class="time4">4:00</span>
			<span class="time10">10:00</span>
			<span class="time14">14:00</span>
			<span class="time16">16:00</span>
			<span class="time21">21:00</span>
			<span class="time4_">4:00</span>
			<div class="item">
				<div @click="change(0)" :class="{active:flag==0}">
					<span>早餐时间</span>
				</div>
				<div @click="change(1)" :class="{active:flag==1}">
					<span>午餐时间</span>
				</div>
				<div @click="change(2)" :class="{active:flag==2}">
					<span>下午茶时间</span>
				</div>
				<div @click="change(3)" :class="{active:flag==3}">
					<span>晚餐时间</span>
				</div>
				<div @click="change(4)" :class="{active:flag==4}">
					<span>夜宵时间</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import broadItem from './BroadItem.vue'
	export default {
		name: 'Broadcast',
		data() {
			return {
				list: [
					[{
							srcs: '../../static/img/test1.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test1.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test1.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						}
					],
					[{
							srcs: '../../static/img/test2.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test2.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test2.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						}
					],
					[{
							srcs: '../../static/img/test3.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test3.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test3.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						}
					],
					[{
							srcs: '../../static/img/test4.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test4.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test4.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						}
					],
					[{
							srcs: '../../static/img/test5.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test5.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/test5.jpg',
							title: '回锅肉',
							text: '川菜明珠回锅肉!',
							tip: '营养丰富'
						}
					]
				],
				flag: 2,
				show: false
			}
		},
		components: {
			broadItem
		},
		methods: {
			autoPlay: function() {
				this.flag = (this.flag + 1) % 5;
			},
			change: function(num) {
				this.flag = num;
			},
			stop: function() {
				clearInterval(this.timer);
				this.timer = '';
				this.show = true;
			},
			start: function() {
				clearInterval(this.timer);
				this.timer = setInterval(this.autoPlay, 2000);
				this.show = false;
			},
			prev: function() {
				this.flag = this.flag - 1;
				if(this.flag < 0) {
					this.flag = 4;
				}
			}
		},
		created() {
			this.timer = setInterval(this.autoPlay, 5000)
		}
	}
</script>

<style scoped>
	.lunbo {
		position: relative;
		width: 1011px;
		height: 389px;
		margin-top: 120px;
	}
	
	.box {
		height: 337px;
		position: relative;
	}
	
	.bgLeft,
	.bgRight {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background-color: rgba(255, 255, 255, .6);
		z-index: 2;
	}
	
	.bgLeft {
		left: -1011px;
	}
	
	.bgRight {
		right: -1011px;
	}
	
	.prev_btn,
	.next_btn {
		position: absolute;
		width: 173px;
		height: 73px;
		top: 50%;
		margin-top: -36px;
		z-index: 3;
		background-image: url(../assets/zzw_bg.png);
		background-repeat: no-repeat;
		cursor: pointer;
	}
	
	.prev_btn {
		left: -60px;
		background-position: 0 6px;
	}
	
	.next_btn {
		right: -60px;
		background-position: -174px 6px;
	}
	
	.prev_btn.btnOne,
	.next_btn.btnOne {
		background-position-y: -68px;
	}
	
	.prev_btn.btnTwo,
	.next_btn.btnTwo {
		background-position-y: -141px;
	}
	
	.prev_btn.btnThree,
	.next_btn.btnThree {
		background-position-y: -215px;
	}
	
	.prev_btn.btnFour,
	.next_btn.btnFour {
		background-position-y: -289px;
	}
	
	.prev_btn.btnFive,
	.next_btn.btnFive {
		background-position-y: -364px;
	}
	
	.items {
		position: absolute;
		width: 7077px;
		height: 337px;
		top: 0;
		font-size: 0;
		transition: all .3s linear;
	}
	
	.leftOne {
		left: -1011px;
	}
	
	.leftTwo {
		left: -2022px;
	}
	
	.leftThr {
		left: -3033px;
	}
	
	.leftFour {
		left: -4044px;
	}
	
	.leftFive {
		left: -5055px;
	}
	
	.times {
		position: absolute;
		width: 300%;
		height: 48px;
		bottom: 0;
		left: -981px;
		background-color: white;
		background-image: url(../assets/kedulong.gif);
		background-position: 0 -4px;
		background-repeat: repeat-x;
		border-top: 4px solid #aaa;
	}
	
	.times>span {
		position: absolute;
		display: inline-block;
		width: 60px;
		height: 48px;
		font-size: 18px;
		line-height: 48px;
		color: #aaa;
	}
	
	.times>.time4 {
		left: 978px;
	}
	
	.times>.time10 {
		left: 1166px;
	}
	
	.times>.time14 {
		left: 1365px;
	}
	
	.times>.time16 {
		left: 1562px;
	}
	
	.times>.time21 {
		left: 1760px;
	}
	
	.times>.time4_ {
		left: 1969px;
	}
	
	.times .item {
		width: 992px;
		height: 48px;
		margin-left: 990px;
		font-size: 0;
	}
	
	.item>div {
		display: inline-block;
		width: 20%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		font-size: 0px;
		font-weight: bold;
		color: #8B4513;
		margin-top: -4px;
	}
	
	.item .active {
		vertical-align: top;
		font-size: 14px;
		border-top: 4px solid #8B4513;
		background-color: rgba(225, 255, 255, .5);
	}
</style>