<template>
<div>
    <logo></logo>
    <div class="clear"></div>
    <div class="b-span"><span>馋猫宵夜</span></div>
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
	name: 'nightsnack',
	data() {
		return {
			blist: [{
					btitle: '慕斯香蕉船冰淇淋',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/201007/201007231704451.jpg?x-oss-process=style/p800',
					bp: '今天，再为熬夜观战世界杯做款美食，叫做“慕斯香蕉船冰淇淋”。看美了、吃美了，才叫真的享受呦！四年才一次，朋友们，好好享受吧，呵呵！做这款甜点所使用的冰淇淋，可自制亦可购买现货，我用的是上次制作的香草冰淇淋和巧克力冰淇淋两款，摆放冰淇淋的多少要视船的大小而决定，建议不要太多，两至三球最好'
				},
				{
					btitle: '烤生蚝',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2017/02/22/2017022214877461640329218939.jpg?x-oss-process=style/p800',
					bp: '以前与好友出去吃宵夜，都离不开啤酒还有生蚝，生蚝一吃就吃几打的那种，现在家里有了各种做美食的工具，完全不用出去吃宵夜了，因为在家就能做得与宵夜档媲美的生蚝。调味料可以按照个人口味添加哦~'
				},
				{
					btitle: '什锦炒面',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/201007/201007231650023.jpg?x-oss-process=style/p800',
					bp: '昨天夜里看球赛饿了，自己做的炒面，感觉吃的挺美，今天拿来晒一晒，让大伙儿也解解馋，呵呵！各种菜丝，可自己看着来搭配，只要自己喜欢的都可以，最好能再放些韭黄最好，这个季节没有也可免掉。'
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