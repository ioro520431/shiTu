<template>
<div>
    <logo></logo>
    <div class="clear"></div>
    <div class="b-span"><span>美味午餐</span></div>
    <div class="b-p" v-for="(n,index) in blist" :key="index" >
    	<p class="b-title">{{blist[index].btitle}}</p>
      <img class="b-img"  :src="blist[index].bsrc" alt="馅饼" />
      	<p>{{blist[index].bp}}</p>
    </div>
        <br />
      	<br />
   <Footer></Footer>
   
</div>
</template>

<script>export default {
	name: 'lunch',
	data() {
		return {
			blist: [{
					btitle: '鸡蛋午餐肉卷饼',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2013/08/07/20130807104642968568956.jpg?x-oss-process=style/p800',
					bp: '我个人偏爱在全麦粉中加入面粉，基本上2:1的比例， 这样做出更健康；全麦粉和普通面粉混合，加入适量的水调成稀稠合适的面糊， 最后加入点几滴油让面饼做出来更湿润；鸡蛋加入点盐调味，再混入切好的小葱末， 打散后备用；先在电饼铛底部刷层油， 不要多， 放入面糊， 摊成薄饼后拿出；再倒入鸡蛋液， 也摊成薄饼， 当蛋液快要凝固时， 将刚摊好的全麦饼盖上去， 让它们粘合在一起；饼完全煎好后拿出来， 鸡蛋饼的一面朝下， 将午餐肉片摆放在一边， 卷起， 再切成小段即可。'
				},
				{
					btitle: '黑椒鸡扒',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2014/07/29/201407291406645288881.jpg?x-oss-process=style/p800',
					bp: '周日，睡到自然醒，悠哉悠哉地享受着慢生活。一杯清茶，一本小说，几缕微风，惬意的早晨。中午的午餐也延续着这情调，一份黑椒鸡扒，一碗青瓜沙律，一杯酸梅汤。简单但精致，看着赏心悦目，吃得有滋有味，越来越喜欢这样的慢生活。'
				},
				{
					btitle: '蔬菜午餐肉三明治',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2014/04/01/20140401085535720831117.jpg?x-oss-process=style/p800',
					bp: '午餐对于我们每个人来讲都很重要。一顿午餐，可以决定一天的心情，一顿午餐，也可以决定一天的精力，做个有精力好心情的你，一定不要错过一顿营养丰富的午餐。和大家分享一款营养美味的午餐，我自认为是色香味俱全哈！有蔬菜水果，有奶酪午餐肉，加上一杯牛奶或果汁，还有些许水果，像女王一样吃午餐，不是梦想哦~~~~'
				}
			

			]
		}
	}
}</script>

<style scoped>
	
	* {
	padding: 0;
	margin: 0;
}
.clear {
	clear: both;
}
.b-span {
	border: 1px solid transparent;
	padding-top: 10px;
}
span {
	display: block;
	width: 100%;
	padding: 10px 0;
	color: salmon;
	background-color: antiquewhite;
	margin-top: 10px;
	width: 80%;
	margin-left: 10%;
}

.b-img {
	width: 90%;
	height: 170px;
	margin-top: 15px;
	padding-bottom: 10px;
}

p {
	padding-top: 10px;
	border-top: 1px solid burlywood;
}
.b-title {
	color: sandybrown;
}
.b-p {
	width: 80%;
	margin: 10%;
}</style>