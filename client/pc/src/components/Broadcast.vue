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
				<div @mousemove="change(0)" :class="{active:flag==0}">
					<span>早餐时间</span>
				</div>
				<div @mousemove="change(1)" :class="{active:flag==1}">
					<span>午餐时间</span>
				</div>
				<div @mousemove="change(2)" :class="{active:flag==2}">
					<span>下午茶时间</span>
				</div>
				<div @mousemove="change(3)" :class="{active:flag==3}">
					<span>晚餐时间</span>
				</div>
				<div @mousemove="change(4)" :class="{active:flag==4}">
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
							srcs: '../../static/img/broadcast_z1.jpg',
							title: '紫米面煎饼馃子',
							text: '快手早餐，上班族首选',
							tip: '营养美味'
						},
						{
							srcs: '../../static/img/broadcast_z2.jpg',
							title: '茴香水饺',
							text: '皮薄馅厚，鲜香美味',
							tip: '营养丰富'
						},
						{
							srcs: '../../static/img/broadcast_z3.jpg',
							title: '西红柿炒鸡蛋青菜汤面',
							text: '一人份早餐，简单好吃',
							tip: '延年益寿'
						}
					],
					[{
							srcs: '../../static/img/broadcast_w1.jpg',
							title: '鲜辣土豆虾',
							text: '香辣爽口，营养下饭',
							tip: '补充钙质'
						},
						{
							srcs: '../../static/img/broadcast_w2.jpg',
							title: '红烧白鱼段',
							text: '鱼肉细嫩，补充蛋白',
							tip: '补脑益智'
						},
						{
							srcs: '../../static/img/broadcast_w3.jpg',
							title: '梅子卤鸡腿',
							text: '午餐给自己加个鸡腿',
							tip: '补充能量'
						}
					],
					[{
							srcs: '../../static/img/broadcast_x1.jpg',
							title: '桂花糯米糕',
							text: '桂花清香，又软又糯',
							tip: '补中益气'
						},
						{
							srcs: '../../static/img/broadcast_x2.jpg',
							title: '无泡打粉版铜锣烧',
							text: '做法简单，甜而不腻',
							tip: '补中益气'
						},
						{
							srcs: '../../static/img/broadcast_x3.jpg',
							title: '珍珠奶茶',
							text: '自制奶茶，甜蜜一下',
							tip: '补充能量'
						}
					],
					[{
							srcs: '../../static/img/broadcast_wan1.jpg',
							title: '爆炒羊心',
							text: '荤素搭配，补血养血',
							tip: '补血安神'
						},
						{
							srcs: '../../static/img/broadcast_wan2.jpg',
							title: '蒜香鳕鱼',
							text: '肉质细嫩，蛋白丰富',
							tip: '补脑益智'
						},
						{
							srcs: '../../static/img/broadcast_wan3.jpg',
							title: '菌菇肉丸汤',
							text: '鲜香滑嫩，晚上吃极好',
							tip: '延缓衰老'
						}
					],
					[{
							srcs: '../../static/img/broadcast_ye1.jpg',
							title: '剁椒炒乌冬面',
							text: '爽辣开胃，一口就上瘾',
							tip: '延缓衰老'
						},
						{
							srcs: '../../static/img/broadcast_ye2.jpg',
							title: '好吃的酱油炒饭',
							text: '食材搭配随意，好吃营养',
							tip: '补充能量'
						},
						{
							srcs: '../../static/img/broadcast_ye3.jpg',
							title: '小米南瓜羹',
							text: '健脾和胃，美味又营养',
							tip: '养胃首选'
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