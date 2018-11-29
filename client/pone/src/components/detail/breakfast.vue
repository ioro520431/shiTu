<template>
<div>
    <logo></logo>
    <div class="clear"></div>
    <div class="b-span"><span>营养早餐</span></div>
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
	name: 'breakfast',
	data() {
		return {
			blist: [{
					btitle: '荷包蛋面条',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2018/11/28/2018112815433696738792058402959.jpg?x-oss-process=style/p800',
					bp: '这个面条是我家孩子最喜欢吃的一个家常味汤面条。 因为清淡，做法简单却又很好吃，也是我家的应急饭，平时我都是多压点面条冷冻保存在冰箱里，随吃随取，不用解冻，直接入开水锅煮熟就好了，这碗面十分钟就可以做好。'
				},
				{
					btitle: '青菜肉云吞',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2018/11/28/20181128154336702353069210340734.jpg?x-oss-process=style/p800',
					bp: '平时包的馄饨/云吞都是以猪肉或牛肉为主，吃得有些单调了。但我这次包的馄饨用的是牛肉馅和鳕鱼的结合，味道非常特别。这个小馄饨不仅好吃，营养更是杠杠的，补铁补DHA的同时还能摄入丰富的蛋白质哦~还有不少的绿叶菜，清爽解腻，完美的中和了肉、鱼的腻和柴，做出的小馄饨软软嫩嫩的，都要鲜掉眉毛啦！'
				},
				{
					btitle: '鸡蛋灌饼',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2018/11/27/20181127154330609923141011056824.jpg?x-oss-process=style/p800',
					bp: '不知道有没有像小圃一样的“懒人”朋友？超级不喜欢和面，其实我们不是真的“懒”，我们只是受不了那种满手都是黏黏的湿面粉弄半天才能弄干净的无力感，换句话说“就是怕麻烦！”哈哈~今天给大家分享一款比鸡蛋灌饼还美味营养的五珍粉早餐饼，请大家习惯下小圃的称呼哈，因为小圃家每天的早餐都离不开五珍粉，所以做早餐饼的时候都会加上一包，既能健脾祛湿，还能添加一丝枣香味，蛮不错的~这道早餐饼，手不沾油不沾面，而且做法超级简单，一次多做点，冷冻起来，早上做早餐非常快捷方便，上班族朋友可以收藏哦~'
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