<template>
<div>
	<logo></logo>
	<div class="b-span"><span>美食菜单</span></div>
	<div class="menu-div">
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/recipe/2017/11/06/20171106150994552057313.jpg?x-oss-process=style/c320"/>
		<p>馄饨皮的N种吃法</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/recipe/2017/10/16/20171016150814645373513.jpg?x-oss-process=style/c320"/>
		<p>贴心热饮，暖手又驱寒</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/recipe/2017/10/09/20171009150751786074913.jpg?x-oss-process=style/c320"/>
		<p>拔牙后吃这些也有胃口</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/recipe/2016/11/17/20161117147936327393813.jpg?x-oss-process=style/c320"/>
		<p>营养健康无黄油小零食</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/collect/2018/02/12/20180212151839474596910606182.jpg?x-oss-process=style/c320"/>
		<p>百变的滋味，家常凉菜</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/collect/2018/03/21/2018032115216195684921958079.jpg?x-oss-process=style/c320"/>
		<p>网红美食，到底有多好吃</p>
		</div>	
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/collect/2018/05/12/20180512152609786562010104261.jpg?x-oss-process=style/c320"/>
		<p>恋爱算什么，零食才是王道</p>
		</div>
		<div class="menu-div1">
		<img src="https://i3.meishichina.com/attachment/recipe/2016/02/15/c640_20160215145554152783413.jpg?x-oss-process=style/c320"/>
		<p>秋刀鱼的滋味</p>
		</div>
	</div>
	
	<Footer></Footer>
	<br />
	<br />
	<br />
</div>
</template>

<script>export default {
	name: 'menu',
	data() {
		return {

		}
	},
	methods: {

	}

}</script>

<style scoped>
.b-span {
	border: 1px solid transparent;
	padding-top: 10px;
}
span {
	display: block;
	width: 100%;
	padding: 10px 0;
	color: white;
	background-color: rosybrown;
	margin-top: 10px;
	width: 80%;
	margin-left: 10%;
}
.menu-div {
	margin-top: 15px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	border-top: 1px solid rosybrown;
	width: 90%;
	margin-left: 5%;
}
.menu-div1 {
	margin-top: 20px;
}
.menu-div1 img{
	width:140px;
	height: 110px;
	float: left;
	border-bottom: 15px solid transparent;
}

.menu-div1 p{
	text-align: center;
	font-size: 12px;
}
</style>