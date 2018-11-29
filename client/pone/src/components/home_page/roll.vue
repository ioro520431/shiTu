<template>
	<div>
		<div class="clear"></div>
		<div class="top_div"><span class="span_star">星厨食堂</span><span class="span_right">></span></div>
		<mt-swipe class="meal" :auto="8000" :show-indicators="false">
			<mt-swipe-item >
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1213394987,852086620&fm=26&gp=0.jpg" />
					</router-link>
					<h4>高汤卤蛋</h4>
					<p>【高汤不浪费，卤蛋美味】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3020601253,2165584172&fm=26&gp=0.jpg" />
					</router-link>
					<h4>蛋包煎饺</h4>
					<p>【金黄的饺子，好看好吃】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="http://img2.imgtn.bdimg.com/it/u=1560569143,3417120245&fm=26&gp=0.jpg" />
					</router-link>
					<h4>咖喱蟹</h4>
					<p>【招待客人，撑得起场面】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3711847665,4180805470&fm=26&gp=0.jpg" />
					</router-link>
					<h4>啤酒鸭</h4>
					<p>【啤酒清香味，好饭下饭】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1334278238,2180404708&fm=11&gp=0.jpg" />
					</router-link>
					<h4>海青菜饭团</h4>
					<p>【一个人的饭团时光】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=268231528,4031075615&fm=26&gp=0.jpg" />
					</router-link>
					<h4>蟹粉豆腐</h4>
					<p>【豆腐搭配蟹，金黄的美味】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=483960011,3771447195&fm=26&gp=0.jpg" />
					</router-link>
					<h4>培根炒圆白菜</h4>
					<p>【培根控的福利！营养好吃】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3779561364,405850077&fm=15&gp=0.jpg" />
					</router-link>
					<h4>银鱼肉馄饨</h4>
					<p>【银鱼馅馄饨，味道鲜美】</p>
				</div>
			</mt-swipe-item>
		</mt-swipe>
		
			<div class="top_div"><span class="span_star">美食诱惑</span><span class="span_right">></span></div>
		<mt-swipe class="meal" :auto="8000" :show-indicators="false">
			<mt-swipe-item >
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341742623110104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>香蕉牛奶</h4>
					<p>【香蕉的美味】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341731578510104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>香炸萝卜条</h4>
					<p>【大海蔚蓝】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341671358110104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>粉丝扇贝</h4>
					<p>【鲜香的大海味道】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341540896410104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>生鱼奶</h4>
					<p>【鱼汤，好饭下饭】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341511142210104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>红烧鱼</h4>
					<p>【简直很美味】</p>
				</div>
				<div class="duck">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154341401245410104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>红烧牛肉面</h4>
					<p>【在家能做出的美味】</p>
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/20181128154340779132910104261.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>蛋糕</h4>
					<p>【培根控的福利！营养好吃】</p>
				</div>
				<div class="duck">
					
					<router-link to='/menu'>
					<img src="https://i3.meishichina.com/attachment/recipe/2018/11/28/2018112815433962578539724956.jpg?x-oss-process=style/c320" />
					</router-link>
					<h4>鸟巢汤面</h4>
					<p>【银鱼馅，味道鲜美】</p>
				</div>
			</mt-swipe-item>
		</mt-swipe>
		
		
	</div>
</template>

<script>
	export default {
		name: 'roll',
		data() {
			return {
           
			}
		},
		methods: {

		}

	}
</script>

<style scoped>
	.clear {
		clear: both;
	}
	
	.crab {
		display: inline;
		width: 48%;
		height: 200px;
		float: left;
	}
	
	.duck {
		display: inline;
		width: 48%;
		height: 200px;
		float: left;
	}
	
	.crab img {
		margin-top: 10px;
		width: 100%;
		height: 150px;
	}
	
	.duck img {
		margin-top: 10px;
		margin-left: 20px;
		width: 100%;
		height: 150px;
	}
	
	.crab h4 {
		margin: 0px 0px 0px 6px;
		text-align: left;
	}
	
	.duck h4 {
		margin: 0px 0px 0px 22px;
		text-align: left;
	}
	
	.crab p {
		margin: 0px 0px 0px 0px;
		text-align: left;
		font-size: 12px;
	}
	
	.duck p {
		margin: 0px 0px 0px 16px;
		text-align: left;
		font-size: 11px;
	}
	
	.meal {
		height: 240px;
	}
	
	.top_div {
		padding-top: 5px;
		
		display: flex;
		justify-content: space-between;
		border-top: 1px solid thistle;
	}
</style>