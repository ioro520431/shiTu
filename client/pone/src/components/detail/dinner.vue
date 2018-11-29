<template>
<div>
    <logo></logo>
    <div class="clear"></div>
    <div class="b-span"><span>丰盛晚餐</span></div>
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
	name: 'dinner',
	data() {
		return {
			blist: [{
					btitle: '上海老鸭汤面',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/201102/201102050917234.JPG?x-oss-process=style/p800',
					bp: '这几天过年营养过剩，因此一个人还是清淡一些为好，我自己做了碗美食“老鸭汤面”，这还是上海的一道不错的面食。“老鸭汤面”在上海很有名气，我吃过几次，味道非常棒！正好家里材料都有，做一碗清清胃口。'
				},
				{
					btitle: '什锦海鲜炒饭',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2013/09/04/20130904054448873477191.jpg?x-oss-process=style/p800',
					bp: '馋炒饭好久了，周末的时候都在做别的。周一和室友打球去了。好久没打球，回来后浑身酸痛，手腕都转不过来了。晚上也累的不想动，磨蹭着焖了一锅白米饭，剩下好多，今天也有炒饭吃了~用的是洋葱和干瑶柱粒炝锅，炒的时候再加新鲜的海鲜，还配了玉米粒和蘑菇。最后堆上蛋皮丝和葱花，一大盘香喷喷的炒饭，简单又好吃。'
				},
				{
					btitle: '日式海鲜丸子拉面',
					bsrc: 'https://i8.meishichina.com/attachment/recipe/2017/08/16/2017081615028894145967764886.jpg?x-oss-process=style/p800',
					bp: '蟹柳和名门卷本来就是熟的，煮时间太久就会软趴趴不好看，而且蟹柳还容易散，所以最后烫一下就可以了。材料方面，丸子的选项是随意的，爱怎么点就怎么点，没那么多规矩，可以煮个鸡蛋切开两边摆着，也可以煮个温泉蛋放着也很可爱，卤个牛展什么切片也行，我小心肝就喜欢炸猪扒拉面呢。'
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