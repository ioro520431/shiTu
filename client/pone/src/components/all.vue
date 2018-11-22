<template>
	<div class="hello">
		<mt-header fixed title="食徒"></mt-header>
		<mt-search class="search"></mt-search>
		<mt-swipe class="swipe" :auto="1000">
			<mt-swipe-item class="swipe-item">
				<img src="https://s1.st.meishij.net/r/231/00/2937731/a2937731_153760880194716.jpg" />
			</mt-swipe-item>
			<mt-swipe-item class="swipe-item">
				<img src="https://s1.st.meishij.net/r/172/188/7672172/a7672172_153783946525638.jpg" />
			</mt-swipe-item>
			<mt-swipe-item class="swipe-item">
				<img src="https://s1.st.meishij.net/r/231/00/2937731/a2937731_153760032691984.jpg" />
			</mt-swipe-item>
		</mt-swipe>

		<div class="button">
			<router-link to="/home">
				<mt-button class="button-chird">早餐</mt-button>
			</router-link>
			<router-link to="/menuTwo">
			<mt-button class="button-chird" >午餐</mt-button>
			</router-link>
			<router-link to="/dinner">
			<mt-button class="button-chird" >晚餐</mt-button>
			</router-link>
			<router-link to="/night">
			<mt-button class="button-chird" >夜宵</mt-button>
			</router-link>
			
		</div>

		<mt-swipe class="meal" :auto="0" :show-indicators="false">
			<mt-swipe-item>

				<div class="crab">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1213394987,852086620&fm=26&gp=0.jpg" />
					<h3>高汤卤蛋</h3>
					<p>【高汤不浪费，卤蛋美味】</p>
				</div>
				<div class="duck">
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3020601253,2165584172&fm=26&gp=0.jpg" />
					<h3>蛋包煎饺</h3>
					<p>【金黄外表的饺子，好看好吃】</p>
				</div>
			</mt-swipe-item>
			<mt-swipe-item>

				<div class="crab">
					<img src="http://img2.imgtn.bdimg.com/it/u=1560569143,3417120245&fm=26&gp=0.jpg" />
					<h3>咖喱蟹</h3>
					<p>【招待客人，撑得起场面】</p>
				</div>
				<div class="duck">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3711847665,4180805470&fm=26&gp=0.jpg" />
					<h3>啤酒鸭</h3>
					<p>【啤酒清香味，好饭下饭】</p>
				</div>
			</mt-swipe-item>
			<mt-swipe-item>

				<div class="crab">
					<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1334278238,2180404708&fm=11&gp=0.jpg" />
					<h3>海青菜饭团</h3>
					<p>【一个人的饭团时光】</p>
				</div>
				<div class="duck">
					<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=268231528,4031075615&fm=26&gp=0.jpg" />
					<h3>蟹粉豆腐</h3>
					<p>【豆腐搭配蟹，金黄的美味】</p>
				</div>
			</mt-swipe-item>
			<mt-swipe-item>

				<div class="crab">
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=483960011,3771447195&fm=26&gp=0.jpg" />
					<h3>培根炒圆白菜</h3>
					<p>【培根控的福利！营养好吃】</p>
				</div>
				<div class="duck">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3779561364,405850077&fm=15&gp=0.jpg" />
					<h3>银鱼肉馄饨</h3>
					<p>【银鱼馅馄饨，味道鲜美】</p>
				</div>
			</mt-swipe-item>
		</mt-swipe>

		<div class="special">
			<p>今日专题</p>
			<mt-swipe class="meal" :auto="0" :show-indicators="true">
				<mt-swipe-item>
					<div class="seasoning">
						<p>万能调料葱油做出来的美食</p>
						<p>据说好吃到六亲不认</p>
					</div>
				</mt-swipe-item>
				<mt-swipe-item>
					<div class="seasoning2">
						<p>7个技巧教你做鱼汤</p>
						<p>鱼汤要鲜不要腥</p>
					</div>
				</mt-swipe-item>
				<mt-swipe-item>
					<div class="seasoning3">
						<p>冬天最适合吃什么？</p>
						<p>这种平民食材一定要吃！</p>
					</div>
				</mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="intelligence">
			<mt-navbar v-model="selected" >
				<mt-tab-item id="1">
					<div class="page">
						推荐
					</div>
				</mt-tab-item>
				<mt-tab-item id="2">

					<div class="page">
						专题
					</div>
				</mt-tab-item>
				<mt-tab-item id="3">

					<div class="page">
						视频
					</div>
				</mt-tab-item>
				<mt-tab-item id="4">
					<div class="page">
						菜单
					</div>
				</mt-tab-item>
				<mt-tab-item id="5">
					<div class="page">
						食材
					</div>
				</mt-tab-item>
			</mt-navbar>
		</div>

		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell>
					<div>

						<div>
							<div class="gourd">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2939368800,2511241649&fm=26&gp=0.jpg" />
								<p>冬瓜海带炖豆腐</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=19658313,4276763199&fm=26&gp=0.jpg" />
									<span>满宝妈妈</span>
									<span>赞</span>
									<span>1295</span>
									<span>看</span>
									<span>13863</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://f10.baidu.com/it/u=3268544643,3923050016&fm=72" />
								<p>无敌绵软的蒸饼</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4221590388,2156910600&fm=26&gp=0.jpg" />
									<span>美美家的</span>
									<span>赞</span>
									<span>11275</span>
									<span>看</span>
									<span>81218</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>正确泡柠檬水</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2939368800,2511241649&fm=26&gp=0.jpg" />
								<p>蒜香脆皮肠</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688713517,4101243290&fm=26&gp=0.jpg" />
									<span>雪峰儿</span>
									<span>赞</span>
									<span>13931</span>
									<span>看</span>
									<span>107327</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div class="seasoning4">
							<p>想要减肥</p>
							<p>这几种食物，最好每天都吃~</p>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>正确泡柠檬水</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2939368800,2511241649&fm=26&gp=0.jpg" />
								<p>蒜香脆皮肠</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688713517,4101243290&fm=26&gp=0.jpg" />
									<span>雪峰儿</span>
									<span>赞</span>
									<span>13931</span>
									<span>看</span>
									<span>107327</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div class="seasoning5">
							<p>我得了一种病</p>
							<p>天冷了就想吃火锅~</p>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>正确泡柠檬水</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2939368800,2511241649&fm=26&gp=0.jpg" />
								<p>蒜香脆皮肠</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688713517,4101243290&fm=26&gp=0.jpg" />
									<span>雪峰儿</span>
									<span>赞</span>
									<span>13931</span>
									<span>看</span>
									<span>107327</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div class="seasoning6">
							<p>拌饺子馅窍门</p>
							<p>让饺子鲜美多汁，比饭店好一万倍~</p>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>正确泡柠檬水</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2939368800,2511241649&fm=26&gp=0.jpg" />
								<p>蒜香脆皮肠</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688713517,4101243290&fm=26&gp=0.jpg" />
									<span>雪峰儿</span>
									<span>赞</span>
									<span>13931</span>
									<span>看</span>
									<span>107327</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div class="special">
							<p>丝瓜炒蛋</p>
							<div class="seasoning">
								<p>万能调料葱油做出来的美食</p>
								<p>据说好吃到六亲不认</p>
							</div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>柠檬水的正确泡法</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div class="special">
							<p>水果拼盘</p>
							<div class="seasoning">
								<p>万能调料葱油做出来的美食</p>
								<p>据说好吃到六亲不认</p>
							</div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2494586647,553606981&fm=26&gp=0.jpg" />
								<p>爽口萝卜片</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选的三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4092234357,4258998959&fm=26&gp=0.jpg" />
									<span>甜盐蜜语</span>
									<span>赞</span>
									<span>8348</span>
									<span>看</span>
									<span>39706</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2375790224,2121352114&fm=26&gp=0.jpg" />
								<p>气血汤</p>
								<div class="dishes">
									<span class="dishesTwo">营养粥品</span>
									<span class="taste">一碗热粥照顾好自己</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1421441612,1072961501&fm=26&gp=0.jpg" />
									<span>y圆子y</span>
									<span>赞</span>
									<span>3742</span>
									<span>看</span>
									<span>39505</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4227793837,1835188812&fm=26&gp=0.jpg" />
								<p>柠檬水的正确泡法</p>
								<div class="dishes">
									<span class="dishesTwo">三餐精选</span>
									<span class="taste">优质精选三餐推荐</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610649619,2051082312&fm=26&gp=0.jpg" />
									<span>罐头视频</span>
									<span>赞</span>
									<span>6003</span>
									<span>看</span>
									<span>48837</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

						<div>
							<div class="gourd">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2272095210,316766716&fm=26&gp=0.jpg" />
								<p>西兰花炒蘑菇</p>
								<div class="dishes">
									<span class="dishesTwo">家常菜</span>
									<span class="taste">天涯海角最念的味道</span>
								</div>
								<div class="stars">
									<span>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg2.png"/>
	    				<img  src="../../build/timg1.png"/>
	    				<img  src="../../build/timg1.png"/>
	    			</span>
								</div>
								<div class="character">
									<img class="head" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1398199170,3315274661&fm=26&gp=0.jpg" />
									<span>菊娜</span>
									<span>赞</span>
									<span>7273</span>
									<span>看</span>
									<span>80492</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>

						<div class="line"></div>

					</div>
				</mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">

				<mt-cell>
					<div class="exclusive">
						<div>	
					    	
							<div class="seasoning17">
								<p>想要减肥</p>
								<p>这几种食物，最好每天都吃~</p>
							</div>
							<p class="introduce">7个技巧教你做鱼汤，鱼汤要鲜不要腥</p>
						</div>

						<div class="line"></div>

						<div>
							<div class="seasoning15">
								<p>掌握这几个窍门</p>
								<p>把豆腐做得漂亮又好吃~</p>
							</div>
							<p class="introduce">掌握这几个窍门，把豆腐做得漂亮又好吃</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning12">
								<p>为什么砂锅做饭好吃</p>
								
							</div>
							<p class="introduce">为什么砂锅做饭好吃</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning11">
								<p>吃到七、八分饱，到底是要吃多少？</p>
							
							</div>
							<p class="introduce">吃到七、八分饱，到底是要吃多少？</p>
						</div>
						<div class="line"></div>
						
						<div>
							<div class="seasoning14">
								<p>那些东西不能空腹吃？</p>
								
							</div>
							<p class="introduce">那些东西不能空腹吃？</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning13">
								<p>我得了一种病</p>
								<p>天冷了就想吃火锅~</p>
							</div>
							<p class="introduce">我得了一种病，天冷了就想吃火锅</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning16">
								<p>虾的正确打开方式</p>
								<p>怎么吃虾才算不抓瞎~</p>
							</div>
							<p class="introduce">虾的正确打开方式，怎么吃虾才算不抓瞎</p>
						</div>
						<div class="line"></div>
						
						<div>
							<div class="seasoning15">
								<p>冬季进补喝哪几种汤比较好？</p>
								
							</div>
							<p class="introduce">冬季进补喝哪几种汤比较好？</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning14">
								<p>20款黯然销魂饭</p>
								<p>快来尝尝~</p>
							</div>
							<p class="introduce">20款黯然销魂饭，快来尝尝</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning13">
								<p>山药到底有多补？</p>
								<p>看完你就知道了~</p>
							</div>
							<p class="introduce">山药到底有多补，看完你就知道了</p>
						</div>
						<div class="line"></div>
						
						<div>
							<div class="seasoning12">
								<p>坚果菜系</p>
								<p>满足你的冬日好美食</p>
							</div>
							<p class="introduce">坚果菜系，满足你的冬日好美食</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning11">
								<p>肯德基到底有多贵</p>
								<p>小伙凑齐一整只鸡！</p>
							</div>
							<p class="introduce">肯德基到底有多贵，小伙凑齐一整只鸡！</p>
						</div>
						<div class="line"></div>
						<div>
							<div class="seasoning16">
								<p>“蒸”是最健康的烹调方式</p>
							</div>
							<p class="introduce">“蒸”是最健康的烹调方式</p>
						</div>
						<div class="line"></div>
						
						
						
					</div>
				</mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell>
					<div>
						
						<div>
							<p class="introduce2">尝尝印度人最爱吃的咖喱饭</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//4ce0a6eeb24802f7f9f4cff911357c5c?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F5b89ecc8eaa02a42be55690e4417293c4dc719f17e7bfb3610a16292cad44020" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">爱吃糖蒜的收藏，这样腌制最是好</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//38981746d5566940d01b0716b3480eae?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F817799faf18eb5c02a5f8980c5dd36b84c3eb148122d7e57f693032a914057c9" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">农村地头上的野菜“马齿笕”</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//5059fbc1072909c333ed9dc5973ef2c0?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F93581275f041db096d58a88b85a2a974272d262ec9d75f2bc4c9b8d4f0eb8ac0" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">五花肉这样做，香而不腻，吃也吃不完</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//d7cd57ffe2a0cd991fd2d089ad4fc22d?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2Fa703da77b2bd981d26d44c6e0950e070b9a53a830a2deae18a9ff046ca32506b" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">鸡心这样做，麻辣爽口，一口一个吃不够</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//c1a8c33bfd00622c263039c3f1287f03?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F4f3af41cfba3290f2b29a445bdbe9e763dc934b63dd5a9e01f272547db1773fe" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">香煎鸡脯肉，香酥可口</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//9ee2dfabdabd034fce090751b98a0483?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F33345c128500bd3a0b6a12437fdc330b75186552a2e5d9245c86d8eb757831e8" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">香菇和肉馅的相遇，注定了彼此的交融</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//736658a4ec5ed7f0ac72f8ec8e7693c8?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F03e80fa56338d20742a37daba6235b14dd421c380bdcd22a204a2522d021948f" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">酱大骨这样做，香而不腻</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//d250ebd9fd30800a44e63aaf7f9606c3?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F0a79d0239998078050ad89ee8a6e519b280fcea994f555d6f7388b07b45c0f30" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">麻辣香锅的做法，香辣爽口</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//c524d085fe8d97c65c0a75e8e6131d3c?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F80a94d839e6e7429cae54b10d6478dded37fb7d190120577af69771b414f6461" type="video/mp4">
							</video>
						</div>
						<div>
							<p class="introduce2">带鱼这样做，味道鲜美，营养又好吃</p>
							<video width="100%" controls>
								<source src="https://vdse.bdstatic.com//03b928d8eb0137bd86201703507780e2?authorization=bce-auth-v1%2F40f207e648424f47b2e3dfbb1014b1a5%2F2017-05-11T09%3A02%3A31Z%2F-1%2F%2F548d42a134f9ce60f66aae4641ab7d1ab4807898fafcfb245a0590c8da939553" type="video/mp4">
							</video>
						</div>
						
						
					</div>
				</mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<mt-cell>
					
					<div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						<div >
							<span class="introduce3">我的菜单</span>
							<router-link to="/carte">
							<span class="introduce4">10篇菜谱</span>
							</router-link>
							<div class="cook">
								<img src="https://f12.baidu.com/it/u=4034341415,2070426534&fm=72" />
								<img src="https://f12.baidu.com/it/u=282628967,2157467217&fm=72" />
								<img src="https://f10.baidu.com/it/u=3228003746,855498245&fm=72" />
							</div>
						</div>
						
					</div>
				</mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="5">
				<mt-cell>
					<div>
						<div class="quarterly">当季推荐蔬菜</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f11.baidu.com/it/u=3972762415,1281352952&fm=72" />
								<p>大白菜</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">增强抵抗力</span>
									<span class="ash">解渴利尿</span>
									<span class="ash">通利肠胃</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2697662886,3928064012&fm=26&gp=0.jpg" />
								<p>白萝卜</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">促进消化</span>
									<span class="ash">保护肠道</span>
									<span class="ash">预防富贵病</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1314796758,2323924031&fm=26&gp=0.jpg" />
								<p>山药</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">滋肾益精</span>
									<span class="ash">降低血糖</span>
									<span class="ash">延年益寿</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=672847299,2434694649&fm=26&gp=0.jpg" />
								<p>芹菜</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">平肝降压</span>
									<span class="ash">镇静安神</span>
									<span class="ash">防癌抗癌</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2068940437,1860314424&fm=200&gp=0.jpg" />
								<p>藕</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">强健胃粘膜</span>
									<span class="ash">预防贫血</span>
									<span class="ash">改善肠胃</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2757366244,1381469222&fm=26&gp=0.jpg" />
								<p>南瓜</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">预防癌症</span>
									<span class="ash">保护胃粘膜</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1872079788,3527188825&fm=26&gp=0.jpg" />
								<p>尖椒</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">解热</span>
									<span class="ash">镇痛</span>
									<span class="ash">预防癌种</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2707139478,4186976030&fm=26&gp=0.jpg" />
								<p>卷心菜</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">杀菌</span>
									<span class="ash">防癌抗癌</span>
									<span class="ash">促进消化</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div class="quarterly">当季推荐水果</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1081605135,3773286624&fm=11&gp=0.jpg" />
								<p>橘子</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">美容</span>
									<span class="ash">消除疲劳</span>
									<span class="ash">预防便秘</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4149625710,222345383&fm=26&gp=0.jpg" />
								<p>火龙果</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">抗衰老</span>
									<span class="ash">保护胃粘膜</span>
									<span class="ash">美白皮肤</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3346043821,1369822546&fm=26&gp=0.jpg" />
								<p>猕猴桃</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">降低胆固醇</span>
									<span class="ash">降血脂</span>
									<span class="ash">抑制肿瘤</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4147341446,4177526874&fm=26&gp=0.jpg" />
								<p>柚子</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									
									<span class="ash">镇静安神</span>
									<span class="ash">防癌抗癌</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f12.baidu.com/it/u=3347894911,1191989177&fm=72" />
								<p>甘蔗</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">补充糖分</span>
									<span class="ash">健脾利尿</span>
									<span class="ash">润肠通便</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4048249683,3255737107&fm=26&gp=0.jpg" />
								<p>梨</p>
								<div class="dishes">
									<span class="green">较低热量</span>
									<span class="ash">降血压</span>
									<span class="ash">清肺</span>
									<span class="ash">开胃护肝</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div class="quarterly">当季推荐肉类</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f10.baidu.com/it/u=1337323803,3409185307&fm=72" />
								<p>牛肉</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									<span class="ash">增长肌肉</span>
									<span class="ash">增加免疫力</span>
									<span class="ash">促进康复</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f11.baidu.com/it/u=193870097,110504914&fm=72" />
								<p>羊肉</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">温补脾胃</span>
									<span class="ash">温补肝肾</span>
									<span class="ash">补血温经</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3959030092,3829339861&fm=26&gp=0.jpg" />
								<p>猪肝</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									<span class="ash">补肝明目</span>
									<span class="ash">补血</span>
									<span class="ash">去除毒素</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3518045924,4069424515&fm=26&gp=0.jpg" />
								<p>鲈鱼</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									
									<span class="ash">益肾安胎</span>
									<span class="ash">补肝益脾</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=665703746,890897705&fm=26&gp=0.jpg" />
								<p>鸡腿</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">强身健体</span>
									<span class="ash">提高免疫力</span>
									<span class="ash">补肾精</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f12.baidu.com/it/u=3992767458,1500423174&fm=72" />
								<p>鱿鱼</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									<span class="ash">防治贫血</span>
									<span class="ash">预防糖尿病</span>
									
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div class="quarterly">当季推荐五谷</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f10.baidu.com/it/u=579580824,1526707130&fm=72" />
								<p>黑豆</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">防老抗衰</span>
									<span class="ash">增加免疫力</span>
									<span class="ash">促进康复</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1482034891,4196127262&fm=200&gp=0.jpg" />
								<p>赤小豆</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">预防便秘米</span>
									<span class="ash">消除水肿</span>
									<span class="ash">健脾利胃</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1801331615,1262790331&fm=26&gp=0.jpg" />
								<p>玉米面（黄）</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">益肺宁心</span>
									<span class="ash">健脾开胃</span>
									<span class="ash">防癌</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3042571136,1080996475&fm=26&gp=0.jpg" />
								<p>冬枣</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									
									<span class="ash">解毒保肝</span>
									<span class="ash">调节免疫</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3335178484,3587386026&fm=200&gp=0.jpg" />
								<p>小米</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">强身健体</span>
									<span class="ash">提高免疫力</span>
								
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3987662671,3929812336&fm=26&gp=0.jpg" />
								<p>糯米</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">滋补佳品</span>
									<span class="ash">缓解虚寒</span>
									
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2318606581,2466610204&fm=200&gp=0.jpg" />
								<p>燕麦</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">降血糖</span>
									<span class="ash">润肠通便</span>
									<span class="ash">补充钙质</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1607776078,1169323822&fm=200&gp=0.jpg" />
								<p>核桃</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">补大脑</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1283152405,4062980101&fm=200&gp=0.jpg" />
								<p>玉米（鲜）</p>
								<div class="dishes">
									<span class="orange">中等热量</span>
									<span class="ash">减肥</span>
									<span class="ash">防癌抗癌</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=539982676,2064133991&fm=200&gp=0.jpg" />
								<p>花生</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									
									<span class="ash">抗衰老</span>
									<span class="ash">润肺止咳</span>
									<span class="ash">止血的作用</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://f12.baidu.com/it/u=186980814,3879909425&fm=72" />
								<p>荞麦</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">降血脂</span>
									<span class="ash">提高免疫力</span>
								
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						<div>
								<div>
							<div class="greens">
								<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3691188606,2859246098&fm=26&gp=0.jpg" />
								<p>腰果</p>
								<div class="dishes">
									<span class="red">较高热量</span>
									<span class="ash">保护心血管</span>
									<span class="ash">延缓衰老</span>
									<span class="ash">增加抵抗力</span>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="line"></div>
						</div>
						
					</div>
				</mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>

		<mt-tabbar class="Tabbar" fixed>
			<router-link to="/all">
				<mt-tab-item id="菜谱大全">
					<img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4119227573,3586244744&fm=200&gp=0.jpg"> 菜谱大全
				</mt-tab-item>
			</router-link>

			<router-link to="/health">
				<mt-tab-item id="饮食健康">
					<img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4119227573,3586244744&fm=200&gp=0.jpg"> 饮食健康
				</mt-tab-item>
			</router-link>

			<router-link to="/menu">
				<mt-tab-item id="美食菜单">
					<img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4119227573,3586244744&fm=200&gp=0.jpg"> 美食菜单
				</mt-tab-item>
			</router-link>

			<router-link to="/video">
				<mt-tab-item id="菜谱视频">
					<img slot="icon" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4119227573,3586244744&fm=200&gp=0.jpg"> 菜谱视频
				</mt-tab-item>
			</router-link>
		</mt-tabbar>

	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { Search } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';

	export default {
		name: 'All',
		data() {
			return {
				selected: "1"
			}
		},
		methods: {
			open() {
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});

				setTimeout(() => {
					Indicator.close();
				}, 2000)
			},
			handleChange(index) {

			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.search.mint-search {
		width: 100%;
		height: 60px;
	}
	
	.swipe .header {
		padding: 0;
		margin: 10px 0;
	}
	
	.swipe {
		background-color: aquamarine;
		width: 100%;
		height: 200px;
	}
	
	.swipe-item img {
		width: 100%;
		height: 200px;
	}
	
	.button {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 20px;
	}
	
	.button-chird {
		background-color: papayawhip;
	}
	
	.Tabbar {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.Tabbar a {
		color: #2C3E50;
		text-decoration: none;
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
		height: 180px;
	}
	
	.duck img {
		margin-top: 10px;
		margin-left: 20px;
		width: 100%;
		height: 180px;
	}
	
	.crab h3 {
		margin: 0px 0px 0px 6px;
		text-align: left;
	}
	
	.duck h3 {
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
		font-size: 12px;
	}
	
	.meal {
		height: 240px;
	}
	
	.special {
		width: 100%;
		height: 270px;
		position: relative;
	}
	
	.special p {
		font-weight: 600;
		font-size: 20px;
		text-align: left;
	}
	
	.seasoning {
		width: 100%;
		height: 220px;
		background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2887804734,366070458&fm=26&gp=0.jpg");
	}
	
	.seasoning p:first-child {
		position: absolute;
		right: 20px;
		bottom: 40px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning p:nth-child(2) {
		position: absolute;
		right: 20px;
		bottom: 20px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
	.seasoning2 {
		width: 100%;
		height: 220px;
		background-image: url("data:image/jpeg;base64,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");
	}
	
	.seasoning2 p:first-child {
		position: absolute;
		right: 20px;
		bottom: 40px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning2 p:nth-child(2) {
		position: absolute;
		right: 20px;
		bottom: 20px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
	.seasoning4 {
		width: 100%;
		height: 180px;
		margin-top: 15px;
		background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2543714107,4066648041&fm=26&gp=0.jpg");
		position: relative;
	}
	
	.seasoning4 p:first-child {
		position: absolute;
		left: 20px;
		top: 30px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning4 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 60px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
	.seasoning3 {
		width: 100%;
		height: 220px;
		background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAFMAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxcKKQ0o6UYpgIaSlIptAAelNpxHFJjigBppKdTTQAUlLRQAlFLSUAFJS0YoASkp4GOccUjHJzigBtLRiloASilooATFGKWigBtFLRQAlLgUYoxQAqDL4rsPDwxYyqfSuRgH75a7nSIwunsccmmgOWMgt9bWQ9A9df9vjnJK4wRXH6on+lsw7Gi0vmjbk8U07CsdBPaI0m8DrWeNNL3f8AsmpBqa7eTUf9pqJBg0rId2aN2Y9OtMLjOK5F5mnuyxPermsakbghFPFZ1ty+acn2EjYB/cEH0rIk6mtRmxEfpWVIeTSYyu33qmUYFQ/xVYx0xSA7LwBbrLqc5ftCa5XUP+QhcY/56N/Ou/8Ah5p0kks84QhDCQDXB6iu3UrlT2kb+dW17qF1KdIacRSYzUDEpKdiui0LwJ4k8SWputL0ySa3BI8zIVSR6ZPNAHOCkIq9qelXujX0llf27wXEZ+ZG6iqg5FAGn4fkMd2xB/hrdy2STmsTR7VnJlVsYrY8wqcZrixMfeTMai1JASTxTZCzDJ4ApjOUwVPzVFNclh296wjHUzSIpSvVfxqDJGaPMy4z0pcgscCulaK5psRZzTzu2Be1MYbRnFa3h7TJdf1S1s40OZHAbA6Duazld2sSz6Y8LBx4V0zzPvfZkz+QrQc80ltCtrZQwL92NAo/AUyRucV1y0R0xJ46eeWqKNuKWSQRxvIxwFUk1cRM+cPHyoPG2p7R/wAtf6CubCe2K0Nf1H+0vEF/dhuJJmI+meKoIpk6Hp615dVtyZxvVk64XqRUo2NwCaqo4BK45q5a20t1cRwxKWkc7VVRyTWFmSKIlx1or3Pw58OtOtNGhS/hWW6b53YjoT2orqWDm1ds0VKR8xNikzxSMeaAK9I6g6ikwaDkUmTQAEZo56UhyKM0AIetIaDTTQAZooptADs0maTNJmgB1GabmjNAD88YpppM0ZoAXNLmmU4HmgBaWkNJmgB1FJRQAtJilpKACg0UUAOiJ8xfrXoukRBtH3d8V5yhwwNd1oN+v9nGMnnFOIHN6rxcOPessnFampYe5kx61mMhzSAYZGHeojM2ae+FqAnJoAcfmOTVi34cVWBq1bj5xQBdnOIqznrVuIswg1mOKbArqMk1KuQopi48zmpdvQZ4pAex/DTUrf8AsKWE482JDn6ZryjUmEmqXTdjKx/Wuu8GzrZaRqV2WxhNo/KuHkcvK79ySa0k/dQluO2imnFICaBWYxQpdgqjJJ4Ar6t+F+kXGgeDLOyuZS8rgzbCMeXu52182+FNLvNS8QWn2W2aYRSpJJxwFBBOa+udO2ljJj+EAewxSaasCsfO/wAZ9Hvo/G0l40D/AGaeNfLkxwSOorgbXSbi6mWJF+Zq+xNY0mz1eze3vIEmjbsw6fSuGg+GthZX4uLf/Vr0U8mrhGOxLbRzGp/CNtL8JQ3MV0n2hVDSDHHIzjNebyx+TuD9R617X46XxBa6EIz5hsI8YbA49M4rw/UZ5JsqQA2eopYinzRRmveKst0MfLVRpz1z1pjo4zzUWx2OACa5lTsVy2JGmPWtXQy9xeLGqBmk+VQfWqN5o15Y20NxMoEcoyuDXSeGntI9LkLJm7DZjYdQackktQexoeH/AABqXiHX5dOdltljXfJJjIAPTFe3eFPAWmeEYD9nzNcMPnmccn6elcf4A1OeDW0887vPGxj/ACr1qRgBzTpOMo3SKSKcrgVWDB2yDRcy7iQOlU03Bs5xQ3dlmmmaxvGl62n+DdSuFba4hIU+54rSW4AA71neJdMPiTw7c6akghaTGHYZAwc1p00Jex8wGQ5zxTlcmvWtL+DYF3u1O+DwA/diGC3412Nn8N/DFlcJMlnvZegdiw/I1yrDSe+hhySZ4x4f8H6v4icfZbVli7zScL/9evafB3w9sfDai4nIuL3H3yOF+grqoUit4xHDGsaDoFGKeZgOnJraFCENVuXGmlqyzuFFVd7nnOKK2uanxiRg0ClNAUnnFADWFMqQrTdpxQAnBFNxQaSgBCaQ06koAbikpxFIVoAbRTwjHoCaeLaU9InP/ATQBDRUrQSL1jYfUUzYfSgBtFO21Yt9OvLs4t7WaX/cQn+VAXKtJWpJ4d1iJdz6ZdqvqYW/wqg8LxHbIjIfRhiizFdEeaKXb6UhGKBi5ozSUtAC0UmaCaAFpCaSigAzzWnp940XGazKcpKHIoA0rht7lvWqU7FV4p6zgrg1DNhl4oAqsxY80g60HrSUAPBFW7cgMDVIVZibAoA0JpiYwBVGQ1J5me9QStwTmgCButPTc7BR1qPqatWv7uQMeooA25Z2stCFqvDSctWHWs/+kRFnPOOKy2GGNNgNIpVXcwGaBQ5KgH3pAfQPw+jg8LeDLi8WNJJbhQxY+w4/Dmuw8CauL/Sykku6eNiGyeSOoryvwn4hiv8Aw8unswDBdpBNTWKX+jaqssEjiNjglemK6KlPnp3j0M4StK0up7dcXyxyjB9iKVZQ3zKcg1z9k7XmnxznO5hzmrVvO8TY/Q1yRldXN3G2hs3UcWoWL2d0olgkGGVu4rhNV+Efh6/RmtDNaS9ir7lz9DXbRSrKODg+lSZIrVMzaR86+KfAN94bsmluoTJGGws0Yyp+vpXDQRTiXKqcZr7AuIYry2kt50EkUg2spHUVwk/wj0ie4Eq3lyg3ZaMYwR6dKGkw1R4tqaTx6FEbibeD9xc9K0PBGgS6pOCj4ycAGvoqLw1osViLQabbGHbtKtGDmq2l+FdF0FSbO0WMAkjvisqkFJCsyDw/4bs9JgR3UPOOS57H2rWur3jAbC+tZF/qtw9vLJbJtVegPesNLq51BMl9re3SuWriIwVolJG9JfQ8/vF496bFdQyn/WCueXT1aQmVWST+8DwavwWfldGyK5ViJt6DOhSSEDg5p/2iJelZKSCMYxk07zXHPArrhWYjU+1Kei1Isrt0AFYgnI6uBUyXOP461VRPqBsBSfvNSmRErOFwSPvVG8/vWqYGibkZ60ViyX0aNhnAP1oqfaLuB8sdOlO34GMU3bSVqApYNTDSmmE0ANI5pMcU8Ak4r0zwR8IdQ8QpHfamWsrA8gEfPIPYdhQlcTZ5ta2dxezLDbQyTSt0RFJJ/Ku/0L4M+JdWCyXSJYwnvLy35CvfdD8KaJ4YtxFptjGjAcyEZZvqa1HkY9+KLpBqzy3TPgVodsFOo3s9y3dVO0fpXU2nw18IWAGzSInI7yDcf1rpd2DTnOVpczHyozofD+h2wxDpVquPSMVaWx04DAsYB/wAU7JpRn0pcz7hyoa2maZKMPYW5HugrPuvBXhi/BE+j2pz38sVqjNSLmmpMOVHJQfCPwhDei5TTwSP4GJK/lXUw6PY6fGEtrGFEH91RVtDVuPleafMxWRSjhtp0w0KfQqKyNX8D6DrEZW50+Fie4UZroXiC5ZR9aReRkGi7CyPDvEfwIjbfLo1wYz1Eb8ivKtc8C+INCdvtVjI0Y/5aRjcK+ubrWLS1YpI4Zh1C9q57VtV+1RlFhVkPGMZrjr46jR+J3fZHVRwlWrsrI+R/KkwT5bce1RkEdRX08NLhmXaLeBFPbYKpXPg3Qro/wClW8bn0VQK4I5xFvWFl6nW8saWktfQ+baK99ufhr4akDbLJ1LdCrniuX1T4QsFZtNuGLZ4WTpXTTzOhN21RhPAVYq+jPKqK19Y8MatobkX1nIij+MDKn8ayK74yjJXi7nHKLi7NBUgGRUY61Oi5WqEQstNO4e9SuuKjNAETfSmVOQDSFAaAIhTlfHeneWKPKoAQvmmE1MIqPKoAhAJNWYhtNNC4qWPrQBsWEPmxOW7CsmdSJW+tbWnsViYYzkVlXYxK2PWqewFfFKw3DFFKVPWkA6zvJrCYPGxGPQ16P4X8aRl1iuyHB4w1eYyGkidkcFTimpOOwmkz6t0LVIp7eMSbUiPC88VryhHmPlrkDuK+b/DvjC40+e3S4Z5LVXBdN3GK+itEvoNRtI7m3KtGwBBBqGtdNik9PMvRw5GQeanBdOG+YUjfKcqcUqTZPzDFAEyyL6VKGWoxsIzxS4WgQ8uoqvM3mAqOlSECmEbRk1MlcDLubdfJKAcYrmraSOC6a2IIb0rrZvmBrntUs8SCdB86nqK469K60GPEpjba3zKehNSBz6DHtTAVlgjY8EjFAUpxXHGm+gFlDGR0GadiL0FVvpwaaXPfg1005rZoRa/cj+EU0yqPugVSMhB5qWCaPPzV1Ra6ASNKx6A1kaprKWI2FgZT0FSat4it7VGgtQHn6E/3a42SSWeUvMQ7HqTXJisWoe7DViuWJNQeVy7SZJ96KriJD/yzX86K8q0nqOx44Hp++q+aeCccV9QA4nJoxTealgjMs8cY6uwX86APXvhB8OotVK6/qsO62RsW0TDh2H8R9hXvTjygEAAA4AFUNFsY9I0GwsYFwkMKqMfSrLSEkk032El1Ec5qF2xSPLzgUzOe1c1Sso6I0jFsMk9BTskjBNIDRXM60maKCFGBTg4FMzRWfMyuVEwkFPDiq4xml78VaqSRLii0sgq9EQUBBrJBq1bSEOBng10UqzbsyJQsXj0rlNW1WQPJBbMQi/fcf0robstIBAhxu+8R2FZMllAdRitlUbFG5h61GL55R5YO1zowqgpc01c5ORJAQ75APIBFTpucZICqPaul1lbW2hCJGpnk4TPb3qKHSolsA8jYY84NeJPL5Ko4Rd+56qxkXBSasYWXc/KMKKURrxUt0BDIVyMe1UjNjOTXE4csrM3TurovIUHanrOi9hmslrtufSoxe4XB61vBxRnKLZrXiwX9u8U8KSIwwVKgjFeI+Pfh8NLDanpSFrUnMkQ/g9x7V6wt9g8mpTIl5GYSgkVhgr1zXdQryg+ZM56tFTVmfLY61chwV5r2OT4LW1zqb3LXckNq7bvJUDI9ga22+FfhxLYKtq+4DG/zTmvRlmNGJ5qwdR9j5+lXmq7DmvbLv4PadM7NDqkkAxwhUPg/WuI8QfDXWNHfdAUvYcE7ouCPqDWlPG0J6KRMsJVj0OJopzoyMVZSCOoNNxXWc4o61IqE01RU8eKAAR8U1lqzjimMtMCrt5qWFMtQRzU0PDc0AbenQyeUSqg8c1k3sf74n3rXtLsRW7deR2rKu5ASTjBqnsIokYpGPy4pGbJpM81AxBbuxzSm2ZfSgu3rQGYnk0ASxhhx0r0z4ceLZdGuhaXEjGzl4wf4D615ku5ulbWmO8RGapJMD6kt5xcLuVgynoR3q0owORXl/gTxWbaP7HfMTD/AMs3P8Psa9IhvYrgr5TBwe4OaGrBctg4qQGm8YoWlYCQcmoLhiVOKsAcZqu/OahgVUbcvuKgnjDA5FI0nlTHPQ9afLmVQFPB6msXqhmZJECgVDgA08KxXnqKsPGFGPSmrg8GsPY21AqM3saYWDcGrMqbTnHBqF48g+tVyKa7MRSmZkbBHFPgmjOFYYPrU21ZF2P+BqpLA0TFccHvRC9+V7gUdY0RbgmeDiTuB3rmnR43KOpVh2Ndms0iLgcj3qrcLb3a/vY8N9Kxr4RTfNHRhY5XLDjGaK2G0+Pd8rHFFcf1Wp2Hyo+fwacppFUk4qZEGPevfEMwadEzxyqy8FTkV13hv4deIfEzq1taNFbnrPMNq49vWvaPDHwe0LQwk+o/6ddDnMg+QH2FO3cV+x1/hLWY9e8L2GoonLxBXVhjaw4NXbg+WzD9Kes0FtEIreNUQcBVGBUTmOc7gdre9TJ3vYaXcrAc0/NPMRH/ANamlSK82UZRep0JpiUYoApGkRCAzAE+tRdLcpajsUYqvJdKv3Rn3NZtxqBZiFOSPToKwq4inT3N6eHnM2WkjQZZgKi+3W2cecv51zctw7HlifaqxiMzYycd8VxSzB30R1xwEbe8ztY2VwCpBB7ipjcRWaiSZgPQdzXHRTPaALG75H+0cVHcXNzcOHeQkjpmumnmEVqou5k8A76y0O6W5X7xI3Hk1n3V9a287XIcGQjaBmuX33coZvOdZCOSOhqhLJOvySZPv61dbMXy6RNKWBjf4jZu9T+1XfnbTkcDJq2urMygSLwBwM1zsTYxk1K0pVSc8150cVVu5N7nZKhCyilsTTSmaZjzjqaqs4JyemaQzhLbOfmY1UuLwLCE6Acn60aWu9ylF7Inklj54GKz7i8jjBAqhc6gEU88Vitdvd3KwQktJIwVQO5NVFN7D5OrOis0uNSmCW6krnDP2FdxpmlLaptiXdIRlnY1b0Dw0dP01Y22rIVG446mnatbJptg8zzFpDwuOK6fq1SMeeS904pV41J8kWUZ7h0Vizj5TjaDVE3sk5KjkDv2rFjnmvJ35Plg8tXQQNCsKiMYIHQ15t+Z7na6apra4QwgHc5PPrSSwQOCHQY9TUM822Tc74QdvWqpnNw2922xjoueWp8ySDlb1uUbnwR4a1e4Lzab5sp6sjFSfyry7xf8PZdOumn0eCaSzPJRuWQ+3qK9x0+5tgx+0QlhjgqcY/CpYbmyWCQND5shbKF+BivUwtecYqSnp2Zx18PCTacde58rzaXf2sYkns7iKM/xPGQPzqOMV9Caw0E1pcWvlf6POhRom5APtXz/AHMDWl5NbsCDG5U/hXrYXFKtfyPMxWFdCz6MevSmsaapOKRjXZc5BjetCvzTT1pp60gNCKQletR3BL8d6hiJp0mc5pgVyuDTcc1M3IqPtikA2nKBmm47UoFAFmEjPFa1oGJHFY8H3hW5ZnYRk8VcRM7LS4GFpkFRx3rOTxbqfh/UPOtZjtU8xNyrCoBfCNMBjiuc1KYyyNzkVpLYlHv3hb4k6X4jiWN5VtrsfeikOPy9a7aKRWAIOc18aq7RTpJGcMrAj619Z6BNNc+HtPuJ08uaSFWZT2OKwLN132pVbeKaokk4B4qCRJFfFS2Mhukzkjk1Sha4gmG4Exk81l+I/GmkeHZ1tby4xMRkooyfxrCPxP0LqLoL7EVnYDvpwAuapB+a5XVfiTo1rYQzef5okHyiPk1gN8WtJEW5YJt/90im0I9NDh12t3qF/lBUnp0NeXr8XLdgc2kiHt3p9n8RLfULgRs7xM3A3dKm1ncZ6GZozn5hxU1td28reTL8wPeuahd5lDg7gecg1ajJRgamSU9gcTdnsDAwIO6NvusKbHYJJklaLbUGjj2ON8R6g1ds543Z1U8daqE1J8ktGSnbQqnS4/7oorT3rRV+xK5j5x8MfDrXvE0im2tWitz1nlG1fw9a9u8LfCPQfDwS4vgL67HO6QfKp9hXa/aUiQR26KiDgBRgVWkuO7tWvNbYnlvuXTcRwoI4EVFHQAYFVJbgk8tUAkeU4jU49anhsiTlzk1Duy9ERoXlPA4q5DbEcmpo4lXoKnAoUUhXIWgBHHBqu6un8R/GrzcCqs/INDBFRpXH90/hSGxmu3WRlChRxTrWJprn5/8AVjkirup3q2WmyyjggYUe9ctWMZRbnsjoptqSUd2c7JBLeXrWluc4++/ZR6VFdabLaqVZSqr/ABHv71raAgCsnVx80rerHtVPxDqBurr+z4SAiDdK+egryamHpew9rLd7f5HpQqz9r7OOyMONPOkbacRr95/X2FDPg7V4UdhVmSSAWqJEMYP5CqrMOgBzXmOkdvODOoHNRmbJ+UcCo5ASxyabvVSQatXTCyJzezEEK2wYwdvGaqSFmAG4496bJMFFQNPkdac5N6NjjG2yIpLwQPtcn2pJL0MmM9qztRk3DK8t2xU+neGdXv4hNKFtYyOPNPzH8BWXs3LY6OaKV5MufaVCcnhax7y9+9k8V0S+FZiu03gbjnCf/XrOvPBVw5Iiv4ef74P9M1tZOyZmpwvucXfX3JGeK7D4UaWl5qc+sXKbo7UbIcjq56n8B/OuT13wpq+nfOYhcRE48yA7gPqOor1DRbf/AIRvw7Z2MfEqpvlYd3PJ/wAK7oThRhzsyrt1I8kOp6D9oTGSwA6nmuE8R6hLqd8LWA5GSF54A7mobm+llYFGK+uDUNtEYd00g/ev69hWGJx7xEeRKy/Myw2DVB87eo2KBYRHCnKA4z6+prTnaG2gxtIY9PU1mIcXJ5OBzVu1DX2ofaZctFCN2B7Vy0le66s6KndjPs7ebuulPHKx/wCNQXlsrASbtpJ7dqvPdW7Su65C5JG7rism+uhjI4zkinKMWhwcriPfrHGqgnAHU1TuNUKHKtWFd3+0EFskHoKq2zy6hcrDECWb9Pc1UYO12auNjdjunuXCRruZuKv3XgXw9qU0FzLpuJlX96Q5/eN6kCtPRtKh0+AZO5zyzEda1BMoZtnAUcsRThiZxTUHZP7zlqwjN6q9jDj8L6FEhit9KiBxg4QdPfNZmo/D7Qb75riIQN0/cfKf8P0ro5r7cxjh6/xGmwxLIfmckn1qI4ipGWkncboRcfeWh5zqvwu0kRMbC/uo5McCVQ4P5Yrz3UvDGq6bLtltZHX+/GpYV9HSJb5CY3P2UDk1aFky24mkjCoxwNnTPua9ChmFeLfN7yOOtg6DWmjPlXa8TFXUqw6gjBFKSTX0j4j+Gtn4nsRNGoS5PPmogDZ9/UV414j+Huu+Gy7zWrTW6/8ALWMZwPcdRXt0a6mldWZ5VSg4PR3RyDUw4pzUytzATvTwM0gGTUiigByLg1o20mBzVFRirEZxVIC5LcMFPNZ80meafI5qB+Rmm2IZbyrDeQzMm5UcMV9QD0r6f8N69b+JNDivLIssa/IVYYwR2r5cPPWvQfh348h8MrLYXysbOV94dRkof8KhjPouyjYRnJpzRZkyRVHQNVstUtFuLK6SeJh1B6VsYBpbgeEfG3w08d3BrsKkowEU2B0PY146yZr7B8Qabbapp01ndxiSGRcMDXiuo/CImdzp+oKFJ+VJl5H40XA8oCcUba6TXfB+r+H8td2+Yc4EqcrXPlaAGAU8cUmKWkM9B8D+JWDrp9zISf8AlmSevtXpsUYmKlR1r55sxMbuEQZ80uAuOuc19LaJYPBYRSXH39gzn1rLktPQd9CSWNYbY5HJGBWSLsW0y5fbu4B960r2UySE/wAI6CuL8Z3D2+k7kByXHzD+GnVpKordSGrnbLeMyg9fcUV5fp/jtobNY7lS8i8bh3FFc3PiloT7x7WHlmOI1wPWrMNhnDSHJq+IBHwFxTwBXfY0uRpCqDgVKMUYooEOBp4qIdafnFACtzVaUcGrG6mOoIJpMaMW51KOwDHcNxPSsS71htTk2kBYkYMR64rA1nVPO1GVC3COQKgS6xHhepr5jE42c5OC+E+io4SMIqXU6qG+l063xniY7yc847cVneYyq5PLytlj7dqz2vJJ2G9snuTVmNxtJJHHeuec3USitkWo8mvVk+4Io9ad5hSPPG5qgT55ju6LyaZcTHcSBwCQKqPux5gtd2HNKoXHeqk8uDkGoZJ+5OKz7i9Ud/pWTlc2jAszXGAeahtkuL+cQW6FnP5D61Bp8FxrmpR2NopLv1PZR3Jr0608NjSrREtE3MPvk9WPrWsMPUqLmSujOrXhS91vUxtN0S309RLJtmuBzubov0FaJmypaQ4X07mpNSg+wwI8xAZudvvWLva6be5Ihz/31WdTmpy5HuZwXtVz3Lj3bzHbEAFFRIi5+bJPvUckoXAAC56AUx5UjG6R9oxnHc1i5a3Zuo2VkK8eHyjPuPQDmlljVv8AWyhXxj61Wjmnuz+4URxdN5/p61oWMsGnyh1hWeY9JJecfQVtSSm7S0QptxV1qzGuEktZ1cZCevarAu0JLFgR6VrXGiXmqu8oYMx+9uPBPtXK6ppl3pkpDggDtmqq4arS95R90qnVp1fdb1LruCHZDnIx9Kqm5lgXaspx1wDwaqJKVi3seT0zVJ7xTLwcge/WuW8ntodMaZcnv2jiZ5DyT8qjqax7jVpJIm3sMjgfSm3c5cnJyf5Vh3EwRjuPB4xXZShzaDaSQ25umZvl5LHAFeveEfBSWGkxz3rql3MNzA9gegrz7wJov9oeKEuLwf6JZqJ2J6Mf4R+f8q9gW6tL3UlLSDb/AHe/0Ir0FTpqKU9b9DzMRVm3aHTqTT6GRF8lwsaY+dsdB7Vx99LvvFtbZ/kBILHqfc1v69q5kt3jhIWFTjA6tXLKCkoRTulc/Nj19K8/HSoqXLSRpgoVOXmqM0wkcMYRFI9z/EfWmSXAiASMFp34AHaop52hDKw+ZDtABzk0RoYI9z83D/eP90elcbdndnRYvW0JhBJcGU/eb09hU5mdU2GTcmc4BrOE21ccg02S5G3rxWsGrXMpRu9TqbPWIbFRln2Y5RuefaqGra9HeAqqAqRjkVykl7lsbsCrVraTXa7t3lx/3yO3tXfHF1ZQ5b2iYPDU4S53ueSfEDw/FY3Y1Czj2QzMQ6KOFb1HpXLWOj6lqbEWNhc3OOvlRM2PyFfSi6ZYrCyvmSFuGDjO6pRdiGLy7dBDAowoRcD8q6o5ooQUbXZxzy/2k3JaI+fz4B8Uxwec2iXQXrjbz+XWsNreWFyksbI4OCrKQQa+kpLydyT5iogHBJwT+VC6bY3TZ1GGORSMhZl3n8j0qqeb3dpRCeV2V1I8C0bw/qWuT+VYWzS4+854VfqegpdU0W+0W8e2vYWjcHg4+Vh6g9xX0db2drFbLBY2yQwr0jjUKM96de+FdJ8Q6cLLUrWZsNvR0fBU8jiuiljp1Ktre6c9TCKFO9/ePlyTioiCa7nxl8NdY8Ls9yENzp4PEyDlR/tDt9elcTsOa9JSUtjhaa3IdhqXyvlzUyoMYFWYodwxigRq+DvFV34X1WOZJGNqzATRZ4I9R719K6ZqkV9DDNDIHhmQPGwPUV8rGz+avUPht4mjtYYdEvJhGVkLQyOeMH+Gs5XWpUVfQ9nnXzEINYN7ZurbgMj1FbbuNg2kHI7GqTykNg/kabV9g2MO5s1vbR7a4QSROMFWFeI+L/BF14fla5hBlsWbhh1T2NfRqJFIOgBrkfHk9tp+hXH2lQ0UiFMepI4qbtbhufOO2tvw14U1HxPqC21nERHn95MR8qCuk+H3giDxLdSXV/JtsoWwUB5c+n0r3rTLLT9LtVttPt44Yl7KMVpoScf4b+GGkeHZkun3XV0o4eToD7CuoueV2jgVoSsMVnTsCcUAY06/Ma4L4g3jQabFAuMSvz+Fd1fXEVtG8s0gRF5LE9K8a8Y69HrOqAW7breEYU+p7mkBhbxRUOaKYz7U+SQdjUT2/da8+8N/EfTNXRfLuVV+6k4NdzbanHMoO4EHuKdhDirKeRSVcBSUcYNRPB3XmgCBRzS0u0qaOtACUyRtsTH0BqTFMkTdE6+oIqZbaFR3PFtYTGoO4/vZxVNrvYCv6+ldHrelt50hxznmuRvIXi+Qr+NfI+zfU+rjUjK1jStrt5FwDxmtH7Uqxhd4z1Ncklw8Pyjpmpo70nPNLka2Bxuzs7K6X7MxHUnmq9zcARgbqyrG7xCxB5zUV3c4XrmiUnZRBU/euPubsKp5rEuL75jzmobu8Jz81aHgrRv+Eg8TQJIubSA+bOT0IHQfif61vRoX3NJyVOLkz1T4faImi6GNRu1C3d4N3zDlE7D+tdhHdI8ZkJwg5zWFe3QZyC58scADgY9BWZc3jGGVY5GC42qpb1rvWNjS92K0R4ksPKs3OT1ZFqV1/a+oyMzFbaL7x/kPqal0+1GoXQRFIjUcnoFHtWOsuVEEecA84HU+tdI1xF4f0Myq4a4m5GccVw4e1STq1Nlq/PyO2renFU4bvRGR4hms9Ok2ph5lGPYf/XrGhikbFze/xcpEe47E/wCFM8vz7g3uoMS3344m5LH1b29qSa4Msm8kkk9TXJXlzSbStfp2OulHlio3v5ls3Jc9cYHAHaj7b5RVmORjGKo5dgWzjHes27vlX5VJY98VEYyhqWoqbsdC3iia0jVIHGAO46Vz2p+ILm8kLSyliecVj3E7su4nCk9q6PQfBkt6UutQd47c8rEOGce/oK6vaVZq0paA4UaPvNamPbRX2pzeVawySk/3RwPqe1btv4JvCmZrqGNj1Cgtiu5it7SwhSC2SONB0RRVaa6ihLc5b1PaokoxOf63UnpBWONn8ESkEJeZbtmPA/nXKav4N163kLJaGeMc7oTu/TrXqBuHnb72B+tOKyKpKOc+tFKvyu6Lcp9Wc1oKT6X4fhSePypJ8NID1x2BHbirC6g8dyZIzhjxWrNZPepiVh6Kz8GsSfTLm1Yts81B1ZDnH4VhXdSpPmWxtSdPl5XuWXufNAdz3yBUUWfN3BjuznIqis2TgtVy3YAhsiue7bNGuVFwAxMsnUp90H19asBAy72fLHnFVzKxTGByOtMDuAAK3ja/c55XaLIiMnsvrWJql7Db7lR8gd89at6lqYhtzDEeg+ZvWuVtbebXNdt7BDnzG5x2Uda6OSMvdivUUE170jotB0+S/YXtzlYP4EP8XufaupKheDxGoyR/Stuy8NLbxJ5jhggwIxwKxfEPyXcen2gwcDI9CfWrrYWrThz1NOyOeOIhVqcsCg9w05Z3OIl6D1pnnIIt8iZ7KB3q9eaQ9rZqXbESpkn0Gf51RskEi/anGF+7Cp/nXJUp1KcrT0OmE4SjeJNDbiFxNP8ANNj5V7J/9ep44MyGRicscjNKi7juc4X1qwGhHQkj6UQhfVmcpsnjygG1cknHFaJ1pYLJUQ4mHoM/nWLcyCI4Q5BGQelUmlLA8/jXZDETotqBzyoRqWcjTu9UuL8FZWXZjBXAwRXkHjjwbFZhtT0yLbETmaFei+49vavSc/3WwaS4SOW2aOUBlIww9RW2HxNWM+du/cmth6coctrHgEUXrVuJMCtHXNL/ALM1SWKMHySd0Z9vSqsEMk0qxRIzyMcKqjJP0FfSQmpxUlszwZwcJOLEwBThgkcV1Fr8PvEd1GHNksIIyPOkVT+WciquoeDde05S8unyOg/iiIcfpzU+0g3a4+SW9hbHxtremIqJdmWJeAkvP61tQfFe4XAuLFWPqr159cb0YqykEdQR0qozGqsibs9Om+LM20/Z9PAbtueuI8SeKtU8SSqLuQCFTlYk6A1kAml2ZNFgua/hnxNf+HZnNuFkhc5aN+lejaf8U7KUKLy3lt2HdRuFeTIu081ZBGKEgue0N8QtFlQsLwDjoQax774k6TByjSSt6KteXORjiqM9NiNzxL4wu9eJhUGG1z9wHlvrXNjim7qQtUgSAZ7UU1XwKKYGakk9pKJIZGjYdGU4ruPDfxU1bR2SO7Y3EI7/AMVc3LaqTVGW25PGKuwH0x4Z+Jula0ihbgJL3Vjg13trqkc6ghwwPcGviNRNbuHjZkYdGU4Ndn4c+J+r6KyR3Lm4hHHJ+YUAfWwaOUdQaY8B/h5rzLwx8TtM1lFUTqkvdGOCK9AtNVjnQFXDA+9KwFjDL1pQQfrU4eOUdqY0GOnNILmFrGiC7zLH97uK4nUNEYMQyDI9RXqGDjFYup6ZJNlkJzXBiMKn70Ed1DEtaSZ5Zc6HvU/usGsyTR1Un5XBru7uC8t2OUBA9RWbNcn/AJaW/wCVefKk0ejCu+5zKW5gAUZGao3rOCQBXS3M8BUjynH4VgXTjcdkLn61zSotPQ64YhdTAnjZm5r07wXbLo3hsSBB590fMZu+Ow/Ln8a83uIriVufkHtXoMl4IIooVbaERV69gKWInKnBJdSrqtp0NqbUeodgB2qk98CSqnGeprFe63nOcipbaRZJlDdO9cXPJj9mkasE4jfeE7dRT7+7+0OJJAuFH7uMHgY/z0qlcXEagBe/pVSa7G3Krk4x9KtSaXLcFC7vYe2+TdLK+WJycnk0JJHGnmykbewNZ7XRlyXHOeFFUb26Zjl26U4JJ3NuVvQs32ptMWSIlI/TuaxprkIMAkse3rUE15klVPQdq7L4YeG11nUpNWvU32lqwEasOHk/+t/UV2UaEqstSK1aNCm5djW8HeCpVRL/AFGLdOw3RwsOEHYn3/lXU3vmW0hiK4b9AK6oFM7BjgdK4zxFqSG6NvAoMmdpK9zW+Mw0KNLm5tTx6OIqYitqtClLfnJjjGXNUwhY7mbc3c9qnNhJbwhirkuMlwDg/T2qIqoXcxwo614tSM1pJHq03H7JahbYuEUAd2PAqKW+d5PLgUu/tVQyzXmVi+SJeGfsPYe9XoFjgQoi+WD1Y9W+tVFvZEtW16jY4duXuiznH3VPA/xrRtdGN/ZloZAHB+6GwMVmzv5bFCQfoetT2GtNp8bhWQA84IzXXhfZxqctVaGNX2jjem9TE1nwzd2VwzhSCeeejfjVCEvH8jjaw6iunvvG8skBhaONvVgOCK5S5v4rpjn5W/hI7VniKVBS/cyudWHlXlH97EuG52getJLc7Yjg9uTSaTo17qQ80/ubf/now+99B3rfXw9p6ptkEsx7/Nj+VYwhLcVSrCLtueealdgKf0re+FVvHLrV/qMxG23iAye24n/CtfUPBGmXfO6W3GP4H3fzo0jwwNHtbuOwupJRKVZt4xjHuK7qElS1Su10MalSNSDje1zqrjxXAGZY0Yr0BrkzdG4vbu+kJyzbFP8AP+lRtGY5Qsh2tnp71FLmGOKEDoMt7nvXHicZWrL3+hrRw1Kl8HU2ry5fUdPgt0ynmOWkOeNgpUCu6KqgRrhVHtVCF/kAX0xzVuBgq5NOVR1ZJyIcVBWiX5oixAIwMcCkYpFHtCg47DvVc3DtyW6e9Ir5ikkY47CtrpvQxUX1K8srSMSQB/Sqksm07eKaZcbjnvVOSUO/Jx71zrU6eWw6e92LgE59arR6iCwDE46ZqpdXKqSOKXSoJtVuTbxgBP42I4UetaxUr3E7WudD4YSyvpb231C0S4tmjB+dMgEHjn3BP5VfstI0rRJZZNNs0heQkl+rAegJ6D6VPbxw2FssECgIo692Pqajlu8nYq5J6VpUxk/ZqmnZHKsPGVR1LCm7cyAITkmnPqDR/KWBPdqpPIsCklhuI5NZE1w9wxCHEYOGeuaE5RV7nWqUZdDWEVvrl19mfTILxz13opx75PSuU8W/CWezE19pihYtgItwd2G7gEnp9a37O/lsXBtyY/pyT9TWy+u3t7/rptkYHJAwP/rk16WExsIRd27/AIHHisHKclZK34nzy9rLDM0UsTJIvVWGCKVF56V7zHd2s97hLSOSUAjeVBYDGDz2ryfxD4ZuNEuC8f7+zZj5ciZO0Z4DccHFevhsbCs7bHlYjBzoq+6OedMUBuKV3G3FQ767TiJC3FV5OaeW4qNqBkDAUwintUZbipAKKTdRQBczucc04wqwyVJ9aaIlB5z9KkjPUA9fWtAKslvuHC5qjLadeK2mO18FeMdRTCquCNozQBgAS27h42KsOhU4IrsvDnxN1fRXVLhzcQj1PzCsGW2545FUpLbJOBikB9J+F/idpesqqicJL3RjgivQrTVI51BVww+tfESiWCQPGzKwPBU4IrtfDfxP1jRHSO4c3MA9T8w/xoA+tgySCkaM/UV5n4X+J2l60iqtwqS90Y4Ir0C11OOdQVcMD70rAOnsYZwQyjNYN94dRslVx9K6oMkg4NIU/EVLgnuVGbWx5ne6DJHnCZFc7e2LR5zGR+FezS20co5UZrLutEt5MlkH5VhLDxZvHENbnixsGkkyRgVsXtsJbdJgN3yjkda7W98MxEHYuPpWN/Ydzbudh3RnqprnrYNSjY7KGM5WcXdiW3kUduoOKbHeyJhtwzXR6jo8qsXjB91Nc7LYKrtgFW9D0zXj1cLZnrU68ZIe168hBc4HammbzGCDPPU1TkjliBBJBHarNkpKbjxnmuf2dmdKkrXRJLIsahR+dY13Ozk8cVrzRs2ax7ldrYrSktRc6RSihlvLqG2hGZJXCKPcmvf9NgtNA0S3021cgQrhm2/fY9W/OvLfAWmrLqc+qSkKLYbYs/3z1P4D+ddvPf4GN3Fb1cT7L3YnFWputJX2RuDVxZ208jHMxHynd198e1c5ZxtLOHkYK0pGCeSF9h6moprlZ1+dv3akZ9/apLDUkSZcRJ5gJPmEElfTFcrre1lFTei/pjjR9nGTitWddqN7baVpflnY0mMbTzz71xMbPqUpeRjHbKfmYdT7Cq+o3v269KKWECn5jk9O/wCJqNrpm2pGNkS8Ko7U8XifayXZbIeGw3s4+b3ZsSzKQkcQCRKMBRUE8rdA361nfaCeGPNLI6Qw755CpPKKOtYRhz3Zta1kLPdPjk496y570Bj82f5VBe6gHJI+VR0FYFzel2OOB9acaTm9DohFJamjd3xJwGz9K63w54VJjS/1VTg/NHbnjjsW/wAKo+A/DDX7/wBs3gLW8bYhUjhmHf6D+f0r0KeG4cfu1LKO/YV0qg4rRXOPE4rX2cX6kDTl8IgAx+AAqtNMIsjOT/Oobm4W3BAOW7mq0ZP+sflz0HpXJKpZ67mcKWl+hcV9zAz5IP8AAP60+Qxtyo24PyqOgqo2VIYvio2uGbc2/wCUcEkdapVGlZlcl3dFmWC3uW2shZv7w6VnXOkyI2+OVGIGdppTfSTSeXBgKvVuwrqNLsNOvLTZ5rmZhgsH5B+ldVCgsS2luRUqvDq72ONjkZPlfhh1FTeeByf0rW1jQRZZJ+aMkBZBw3PtnmsHUNPutPZw3zBPvDuPesquFq0nqjWnVp1VeLLRuMr6VNO4S0K57AdawReB8DNW7m6yuc574rOEtGy3DVFO6udjbc/WqdzdAQD1J61S1S8BJZfvZyQO1YV9qsiw4XnBGa0oUXJlz2Ls80k93HBCGkklIVFHUk9vzr1/Q/Ch0zQhCZFNyyhnPbd6H6Vyfw50BLW3GvalGBM/NtG/8I/vfU110+vtAzkORzk5716MYUI/xDz686s3y0uhn3cNzbKWkjJxxwM+39azJ52s42807ZD1U9Vror3xdbDTn8n55Ao+Zl4U/wBcetea3l5Nqt75MUh5G53PRV9T71x18NRhJKm7nVhZVZp+0jYvfb2vZW+YrCp+ZvX2FSeeVVQBhR0FZTXKwukaJiFDwM8/X61pQ3geItJ/qhyc1xTi5Ox225VctL/qhI52r1I9abFLPqD+VC3lwR8NI3Rf8TVWJm1Q7i3k2ScFu7ewq5JeR+UsEKCKFOirVWjS9TPWRfMkdrF5VmYzASNxY/Mx9Sf6VbfUopnjzCsJ2bGOOG+ornTMB90kH6UxtUeGHKsBIDjOB0raniJGU6MWcV428Of2Jdi6tmDWVw52jvG3Xb9PSuQMhzXtWmeHR4qkjTUldrWVyMA4bofmH04rM8QfBC/t902iXaXSdRDL8r/n0P6V9PhKkqtNSkrM+bxtKNKq4xZ5UHyKO9WNR0fUdFuTBqFnNbSDtIuM/Q96rBgR05rpOURxnpUDKxPFWgu41bS3GV+Xgc0WuBmrbSsMhSRRXSQWi+Svyk/QdKKrkFcxXbLrz0p21lVfl685qRoUZyUJx2z16UjsyKo/DFAEDljkg8e3alBYA9xUxy6jCjjp70BQxHI7DHtQBAQ2Mc80xog2eMVK+EHBJAbGf8/Soy2SelAytJbnPA4qlJAQelaokAH+NDBJB0yaQGKplt5A8bsjDkMpwRXb+G/ijq+iukdyxuYB6n5h/jXMS2hIytU3gOelID6e8L/EzStbjUJcKsvdGOCPwrvbXUo5lBVwR9a+IFaW2kEkTsjjkMpwRXc+Gvipq+jMkV2TcwDv/EP8aYH1mHSQdaRkP1rzfwx8StK1uNRHcKJO6McEfhXd22pRyqCrgg+9KwEzwq3bBqpJajuv41pB0kHvSFCOnIpDTOT1TSmkXcnB7Yrkr6x+YrcRYPZwP516o8Kt7VmXukxzKcoPrXPWw6mdVHEuB5LdacVXP3lPQ1Ha2wWMcV1+saK9hBJcREhR1A6GuN1C9a0m8hVy/cKOleNiMNOL0Pbw1R1o+6NvSsUZJPFchqV8i5+bmrmoz6nd5EKKyHuhzWGbB5Ll4p1yyjJOelXQw9tZGs4uKu2eg+HJzb+G7ZgcebukY++T/QVYl1DJJDYyapaIo/si2t0OVjXaw/E0y9sjGsrq2VXlVHWuGvh7zckXCpGyTLQvgcrnPvViG58sM24jjg4rnklIHXFXEnZ/vc4561yunZm9jWSbemFUgDn8ajluQg4HNZr3gJBT5SOtEYeUl26U+S+rGopblwXX8WMkjj2qtcXLsS7MWYdz2pXbYuMVm3VwSuwDv2rSMW9OgaIrXVzubAP1NLo2mTa9rVtplvnMrgM391f4mP0FU5T1J/GvTfhppX9l6bJrM6gT3YKQg9RGO4+pH6Cu+lCMdZbHNiKzjB8u/Q7a8W10jTYbaDKQQIESNR1wOOayl19pLOSHoD1J9PSotUufOZlDYXPSsiSJjMttGecfMfT1rmxGIm6jdPRbHLQw8OT39XuTw5uZWnb/AFaHC57tUhkIbJPOeuahldVVYoQQqjAH9atQWxSATyOC+MhccKPU1y06fM7I3nK25Xmdi5XOAOue1UnlNwxSL5Y1+++P88025na7n8mI4VR8z+g9aqPOGxBb52Jk59T61nLdtG8Ik013sQRRfJGOvqataTqc9m5kXGADyff/ACKyyhYjIB3HGWNKwSFNn3snOemKui5wlzRZU4xlHlaOobxfNMnly28UhTlQRt5/CsbUNdkupZbl41QkH5V6CsV71g52tgbcHA5pkUpnJULvJ424zXZLEVpxtKVzCGHpU3dRKM1+FumH3c849Ksy6jutvlbk0z/hD9Vvr0yAxQxngbmycfh/jWxD4ItYEVbvUZJD/EsShf1Oaz5Yb3NpTicDqV/iXIYj3FWPC2nDX9aEcgP2aH95M3bA6D8a624+GNncRzyDU50Y5MCGMHb/AL3r+lW/D3hqfw9ZSwIPPlkcs7qNpYdhXU6tOnT93VmDnzuyOnnvkEaxqCI1UKigYArmtbJESurEEn5hmr1z9pwTLDIg7llP86xbxnkGGJIHrXmTnKT943owUXdGdNI6WflrktI2NvXP0pwzYwGFNrSyYMre/p9B0qZURSrnllGFHbPrUYh3PubqatTsrHQ7N3Y22iEkwaT7nVqmghOqTtyY7GFsMR1c+g/xp8sYSHy87d332749KjjneIqsahY14CgcVcZpa9TOV5bGpOAtsFiT5VGFC9FFV1jfbnaTnv2q/YTF49yoAakvJYooWZgAT6Vv9XU4897HM6rT5bGZMu35iNvHUdKoKjTzplf3YOT71Y3SXDFpMhOyf41ZjhwQq/WoUEncbm0rHXeHblFvIA5CkD5fQZ4xXbLKDXmmkMy65bMclNwyPYV6JlT0Ne/gKrnB36Hg4+mozVuoX+mWGrWxt7+0huYm/hkQNXlvij4J204e58PXBgk6/ZpjlD9G6ivWISc9eKnzzXemee0fIWpaLqWh3zWmpWslvMvOGHB9wehFXLJVlhA2/dJJPfpnH5A19K+J/Dun+KNMksr2IcgmKUD5om7EGvmcxT6XqVxayHDwTFWH+0pxWkSWb0LYiXaoYH3oqS2vHiixGvDHdgjOM0VvYg5SJRglmOMc4/z6ZpjMGPA3DHX1NTNE5jEigqq4OB/Dz/LmqrDBYgEKuD/Ouc0HbgVHPy9Ofp/+qoyTuxxnBIH602PDN7Eduf8AIpzx4k5OMHGCOcf5xQAkq53sPuk8+3aqxUgDsKt/KySbmIAyeP0/mKrngOeCOlICI7c9c+lN+bPSgldwyMHtTm+bkN060hk0WeAQelLJbLIMqBmo45TwvUY6VJHJ2wfagCjNaspPFUXhIroDIGUA4NVpbdXHy0AYscktvKJInZHXkMpwRXdeGviprGiskd0xuoB6/eH+NcjJbEc4qo8RBpAfUfhf4l6TrqKqXCpL3jc4Iru7fUUkAKsCPrXxAjywSCSN2R15DKcEV3Xhr4q6xorJFdsbu3Hr94fjTEfWSyJIPegoR05FeaeGPiZpOuIqx3KpL3jc4YV3trqKSqCrgiiwyae1inRkkQEMMEGuc1bwfaX9v5bIGx90kZI/HrXVCRJPY0pT05FRKClujWlXqUneDseUXPgue0iMcDqqY52JyfxJNc7ceHDbBlETZJyWPJJr3OWFJR8w59azbnSo5AcoCPYVm6Mehu8ZUl8TPEoEl0uXeils/eXsRXQxLDqECS2+NynLKeortLjw5byEkRj8qx7vw00DebbZRx3WuSrhnujenilscpc6ZDscsNsg6BuM1kPGYBhsg9j2NdjNGJB5N9HsYdJB0P8AhWbe6SyxHPzxg5BHpXl1qFj1KGIXVnOwxtPKR/D3rWWP92ABxio7Oy8pnXHQ1o+TiOuV9jqqVFcx7wFV9zWVIMDJUk1t3wVVJJ5xXN3F0oDKwNa0YO5m6mha0fTG1vXILFOEJ3St/dQdT/nua9dvpI0jWCABIYVCIg6ACuL8A2q22mz6pIoDznZGT/cB/qf5Vs3F8G3ksQT0wanEVP8Al2jLlcpcxaad2ZQMbgfv96quxt9x/jk6+y1At5tOMcdarSXJdi2PeuVu63NEtS/G6lS2CX6AUl7cusCWqZ8xjll/ln6c1Ut70wzK+QcHPPSqst4GDspO4n5ifT0ppqxSi2yczx26mFDuHVm/vH/CqDzYk3ICB/d7USSISWzxTAI4l864OF7L3NOEXN+RrpEmNy5VSRhF7Y6nNZ13elN/aopr+V52Y7VQjG0dBWLe3RdioI57mt4Uk3ZbDtbc07MTapfC2iJHGWY9h3Nd3pumQ2yqsSHJ7t39zVHwr4f+wWUM2xnubtA75XBRf7vNdZcottajAxJ3HtUVYOTdtEjCdZJ2XUqTTLbJ5SHLnv602C3Cy72+aQ9T2H0qKFQN1wwO5uEB7D1qdJflIPGOSRXPKWvKTay0LAx6lUHU+tV2uJJZfJtEJI5Pt9agEr3U4hi4HduyitKDy418qEYXqT3Y+9XF32M5Ll9S9pVojShLjMhI5OPl+lXtW8M2d/DtSNU9l4/Ks2NnjYMpII7iujtb1GtRJK6qR1ya9vBRpTpunNHl4idWE1UgzzLVvCF7p2XRTLH1+XqKwFTBznDDtXrV/rKyKY4CMHgsRXH6tpEd7maIrHOAT04b6/415+Lw1OMv3LuenhcXOStVVjkZyS2T1qNB5koAOSTzTLiUwu0ci7WU4INPtiyyFuQCMfWuSMe56D0RqfaEs0Cp8zY4C1RkMs77peT1CjoKmWMc8cnqaswWp++Qa6ZVG1ZbHNotRkNtkY/U1ehtiuMnp7dRUsUAAJI/OtSx0xpWWSQgRg5x3NaUqMqjskc1WsorVkmk2YBa5YfN0XI6VrxzTl9q8juacsKHCRDag7VajiC4AHFfQ4eiqcFFHh16jqT5mTQM7MMthauq/GKqKMcCntKsSFmIAHUmug5xbq6itbaSeZwkcalmY9ABXyvqGqC+168vvLJjup3YewZs/nzXdfEn4gDVjNouky5tkP7+ZT/rD/dHtXnNuwACE7vmBxn88fpVxEzpLO5KW4IK7WJZQVJIHpxRVeyaEWwLzOpJzhVzRWxBlQTbFO4NjByCM5x/k1VuHU/u0Gccfr/n9KmjKlGYk/KG4I5wMZ/H/GqZDOdxBVgScZx71gWKGQrjBBAwCO3NTSo7xIWwRjr3xz/hVZJFWUALk5Bx696nkkcWrgfwHbgdcD/9ZpARliN20A9j7n/69MCYQnacHpSSSsDlVxnn/wCv+lKs+VwR1/nQAx4WKbsHHT8R1qNl+f0zyTVgTNJGd2cjHOeSMGoLqTJyvBPOB0B70ACqVyeOmevOKcCpf5cnFQDeF5GCOKkUnnk9M0hk2M8g/pSjcMY59DUXzswanEEYI69qQxzDsRVaSFSeKnZjjk81E3U9aBFGSEg9OKgeOtMgEc1E8AbpQBnI8kLh43ZGXkMpwRXdeGfinrOiMkd0xu7cf3j8wH9a42SAjtUBjoA+ovDHxN0jXEVUuFSbHMbnBFd3bakkqgq4IPvXxCjyQuHjZkZTwynBFdv4b+KOtaIyxzubq3HZj8w/GncR9arKjjnilK8ccivMPDHxQ0nW1VROI5scxucEV3trqccygo4IPvRYC68at1HPrUL2+RyMirCzI45/MU7b3U5FJoaZg3ujw3Kn5RmubudIuLPd5PzR/wBxhkV37KG6jmoZLcMMEBhWFSjGZvTrSieWyxhJmZ4TGe4HIqpcXIUEKrH8K9HvNIilBIUZ+lc1faSY84T9K8+eAV7nfDGXVmed6g9zLkLGVHqTXPzWUjt+8b8BXoN7Z4z8tc7c2TM5wtEaChsaqvzHURlbSxgtIjhYo1UY9QOtZ9xc4Iy3NQ2l8EMcE7YfoD60t7ASzMq4X72QO1eXVwrTbO6nVixPtPcnmnPcgAYPP86ypmliHAyvrTFuCSu7B9awdJo3Vnsa6zZXHFNJIwMjnrVUSpj5SeOtCO0vyjn3rPkNYk7HaNzc+i+tV53MpBduT0HoKncbYxn71UWceYSOTitI66Id0tSpdyhFKheAP1qlYWcuranbWce7dM4BKjO0dz+AyaluiTkk8113gawt7W2l1mSQ+YxaBE28Y4JNdsWqcOZmE5vZbnrNjp0SpExGcKBgjmud1yaObWfs0ZKqv3se3JNbFhqJMJ2gqACcHsB6+9ckLk5a5Jw8j5X1wK0x1SEaMYx66nnYWnP2kpS6G7Fo81zGZEICjjb6CsnUWFu32aEl2Y4yOprd03Ukg0KeQOpmAyRuycnjmuftB+9e7kOWOQgP865MRToxhHk3erNqMqjlLm2Ww6OM2cfldZG5dv6VdhLADIFRJ87Z/nVrEarlm5PYVhSpa8xVSp0JluSmDgH61DNdvKuCeOwqrNLlscDHpSB8D3rpUntfQw5VuPVzuJJpHcnjNMLdaYzZOQeaXkWjmdcsFbUPPxndww9TSW1sTjIrYvgk0m0gdiKILcIKUqTcrRNvb2hqQRWo3c/dFWiFH3efQVKLRmyW+VT29abK0VsuBjNdlPBu15HJPEXdkPhTLAyEfSty0YzYjjHyD7zdqx9PsJ72UO+Vj9K662t0giCKMAV6eGoqK0RwYir0FiiCDpUoFKBVHVtXstFsJb2+nSGCMZZmP+ea7jibuWbi6htIHmnkWONBuZmOAB614H8QvirLrUz6VokjR2Gdsk68NN7D0X+dYnj74k3niud7S0L2+lq3EecNL7t/hXF2kDTS5AyF5oEa9pCzrgdeP5j/AOtVmFdhU4Y54GB3wRTYF+Yr0LDsOhznj8hV9dnyyOCXK7uDgjHAz+NaJEsaL0r9xmQHBwB7Cil/cKi+YJGYjP7vAxyeuTnP/wBaiq1FoV4tjKAzN85DDnsO/wCpH4VE06K/lD5TwFY+mMY/P+VSODEUy+OAMDse4OffOQetV7jbvDMpIyR+PB/qPxrMZDtRHzn5sfjVhdhj6KPlwfTryPpyKps4ypXPPAB9alL4V4yePu89fY/p/KkMQny2GW3f4ZNQFeMZ7/lUsjeZGSSQQcHPQjHB9u9RIPlIwQ3P6f5NACo5KFCq7cHkdaRhv2kr8w6n1oJV2yF6j9KVX3Yz1NIACM4yT3/WnhFCfeBOOlNEkiuOcEd/XmpMByO2F7n/AD2/lQMcq5OAMnGRSnGcEU05UKoJPpmlJOeTgj1NIYhGe1RNwM8+1OLoEIOcnj+dNd1Y7s/XjpQBCR9achIpA+4kHgDvS5IPUelAEpjV8evfNVpbI8kdKsq+PftTvMz0oEZEkJU8ioWQ1suiucmq0lrkZXFAGarPG4dGKsDkEHBFdl4d+Jet6GyJJKbqAfwufmH41yjxFTyKiZKAPpXwt8VNK1kLG0win7xvwa9DtNUinUMkgOemDXxKNyMGUkEcgiuu8O/EbWtCdUeU3MA/hc8gexp3EfXizLIOfzFP255U5FeTeFvippesBY2m8qfvHJwa9EtNUinUMjg59DQBpMgbgiq01gsynofrVhZlcc8+9SDp8pzSaGmcrfeHhKSNuDWBeeG2hB2AFq9FdQ/UVWltQ3v9ahwRpGo0ePXnhmZ2LEHNJbmexUQ3imSPoH7j/GvVpLCNjgrg+hrLvdCimU/IK5qmGT1R1U8U1ozz+fTVlQS2zgg+nesm4sTk7l2tXX3Wgz2bmS2Yr6jsfwrPeVCfLvITGf74GR/9avNq0Gj0aWITOXaGVFxzV+whO3cw5rUfT8qXiZZEPQiiG32R88VwSjZ2Z3KreOhn3CncRWdMnlgn1rXvHSEE9a5q/wBRDHYgJPtRSg29A59Cv895fRWsODLM4RR7k4r0rMOnWFrYRMsjW6Bdy9N3c89815xoUUp8QWkx+XbJkCu6QYYGRd244UE08Y3Hlguo6ST959C1DflHyM7MEYJzjPeo2m8xh/dHAHtWf5vT86ck4HII4rgk5S0ZtZLVG3buGjaNmwhx3qXeC2FACjgYrLhlyKuRcjGea0jrZM5p6F5JxnB6YqWJxJJx0rOdHwcHI9qdbMyBsAk9M11wtdJnOyxM2ZCfelV8gc9KhkyEZjxzgD1pkTYTnvQ37wW0J3cBSe9VPOJ6niiSXrn8KqM/I9N1Zt3ZcULOxaVPdh/OuhWOKEcDn1rm43M13GOytuJ9hVx72aeYQxrk92HavWwatFyOLFO7SLtzdZOyMFmPQCptP0aSaQS3CknsPStLR7CFEBKZc9WbrXQxxIqjAFelCjfWR5861tIlW3tlhQALirGKecCuJ8dfELT/AAhZlCRPfuP3Vup5+regrpOZs1fFPi3TPCmmtdX0wB5Eca8vIfQCvmjxj421PxhfmW6cx2qE+TbKflT3Pqfes3Xdf1HxHqcl/qM5llboOioPRR2FU7S1kup1ijGSxx9KAGRRNK4VRk10tpppto9rg7s+v5fr/KtDT9CWwSJpky8gAKtxwQrHn0AatDyUmt2yoy65YZ756/jkD/69aRh3JcjONoEdlwACVC5HzY9fT7ufrURjfzQoDBlYKeQcGt0wB5Xfa37zcAcADOc8H1zkfj6VGLVXlUld7bV6LwcAAf5/CtLE3MIBWAaRo1JHQ0Vv2doog2tHDJjo0jYPIBxx6EkfXNFILnNXMkbjLZORtOOCccZP8/rULZnUA5Z9mMnuR0P1xgVKtuZMgMq7jtGcfLwc/lwKYEXjJO0k8d8Y4rIsgUHIBBwGzn09f5U4HAG5cZGc479P8/jU6oMKSw55HoecHmjgDa646YPsc5z+FAFd2VkwDhd5ypHOPX0pixuTuB+YYI5wQassMRFdoBxnJPr/AJ/lTY4pDnIHAPsaQFcZkBQ4z2IH1/xprrsfGVyQCMdx/jU0g+bkbTgEc4PT0oA8wEscADGenU0AQFsn5t27PGf5U9XVcHcQOT/n9abLFiReDlsfhx/9eoH3EYHfIpDLUkgG0rnoQfrUOFxkE5PY9qONvLHPWk4BHO4cEYoAXBUAH065ppO7A6DBwKRiHGeOc9qTIKkkj04NIBcdhxjP86RSM45/ClVwScnJFR9DyOc0AT54GDTgCB14qEMOh6U9pFQbf60DHluetIzcDFRl896Vct6fSgBj4J5qCSNe1SkkH19qY2d3+FAis0ZqIoau7aa0XFAFIbkYFSQR0IrrvD3xG1rQmVGlNzAP4XPI+hrl2Qg1GVoA+kPC/wAVtM1YJG83kznrHIcH/wCvXolnq8FwoKSA59DXxSMqcgkEdCK6vQPiBrOhuqmZriAfwOecexouB9epOrjnBp+A3Q1474X+K1hqWyKSXypj/BJwfw9a9Isdbt7pAVkBz70xGuygjBFRNF6cj0NPScMOoNP4PQ0rDuUZbZJBgrg+9YuoaBHMD8grpmAPBFMKHtyPQ1EoJ7lxm0eZ3Xh6e1cvbsyH/ZNZdxBqAyCR9dtery26ScEYPvWRfaOsgOFrkqYOEuh2U8XJHlFzYzyE+ZKSPQcVnvYKhwFrvtQ0aRCcLWONKcv8ymsPq/LokdSxF1qzG0m0ZNQik28An+RqxdXDBmyST9eldHa2CxEHbyKw9Y0+SKZ9hOCelcGPoOMoyO3BV1JSTM77Xx68Uq3gDDBqiQxJVhgD2pjgxBW6g/pXMqSZ1cxvW98xwo/OtezlV5FEk2wd8DNchb3QXq238KuR6htfANZum4u9iJK+h2TSxhwIWbnj5jU/nFFAJzjuBXMWuobpU+b8K2RcAoM8L/OnBvVmc6drIsyvvBAPA6VDvOAPbNQCYAN83FRSz5IGcY/Wk5dRKJOW3N1HHWqksgwGYjAJ5pWkEaCRmCqMkk8UWuny6u6MQyWwOc9C/wD9at6NGU3ZIznNQV2FjHNdswiBAY/M3t6V1em6WkKgY57mprDTkgjVUQAD2rbggCgcV9DQoKEUjxa9dzbsLbwhAOKt52ryab8saZbgV418Sfi2LQy6P4flDXAys10vIj9Qvqfft/LqOU2viN8Ubfw2j6dprJPqjDnusPu3v7V87Xt9daleS3d5O81xK255HOSTUMkkk8rSSOzyOcszHJJ9Sav6dpzXMg35CdzikBHY2Et5KFQYHcntXb6XpFvYW/mNjzPKcjPXcPpzgYH5motLEVjLbBUVlD5Zhk5HBP4jj88VsWR3osLt86uqNtwRuO4/iMMV/P2raEUiJMdqUjGVGVX8yPco2HIX93g4x15z78VEtofLSTcBG+du0Y4OG/TPPpx9atxIfOEbAAHLOGOep46deeO+f5X2G5YQuNgAVEOcrnaevX+6Pr37VrYgzrdHRZZJMZVuVIAAyVBH9P8ADnLvsxNwEbIMjSRbSeHOAAB+Y/75FTDapKRlsrncW4B7jOOowcnH07g0iSNJukKsRkzFictymW/p9OPQ0AUJzIsp/wBFSUnkknHJ546cd/xoq+jzoMW84VSFLZ6klQc9D2xx26dqKLBc4Vl8py6EY7jHX1/DnFNwzEocfdAVj19cZ/Snq4XggMowevbOfyzmmuGeHcqgk9Cvp7/p+dc5oJICCSB8uM8e/r6VA/c8bVxk+vXH6VI7hWAcDkAH8hj/AD9acOzPyrgHjAx7f1+lIBoyy8YA78Z79f1FLG7RZKvhiCxweo/yKXarJwCrE4GOnbGaY4aMFWBDDoCOQPY0xjJVEj7mwD+XP+GaiGI1OM5AyAf8/SnuGdSU6jkYHXimlcrwMDnBPqCfz7UgGv8APAX3YC//AKh/n0FQlvmORle4zVjycgsFbaTn5fp/T8agKEnIznGT7c/p6UhiHlSx5AH5Z6U2P5wewBA+72pyr82Shw5HAH+fWgoFxtI5XdnsOM8UAMUkt1A9vXtTM4I7H9aUxkH5hkdOPrSk4wQMHPT+RpAIOBkd8HmlyMfMP0puRzgH8+lNYE9+3c0AP3oGwMjtUkirtLDJPv0FRhRwuOelSgkY29fX9aAGopz85xVhdhAUDkkZ9KhdXB4Offpkf5OaTZhcZOTxjPQ0DFYcgjoOtRMDnAFPfeXbI3E9aQkEMSSD1/GgBirkHBp+CTimg4PIP0p3HUE+xxQAjRBgP0qu8BB4q2DnmnEZB/woEZjJioytaDxAg+tQNDQBUwVOR19RXUaD481jRHVfONxAP4JDyPoa55ozzURSgD6F8L/Faw1HZFJL5Ux/gk4P4etekWOuW90gKyA596+MOQcium0Lx1rGiMqiYzwj+CQ8j6GncD6+SdXHUGngg9K8c8LfFSx1DZFJL5U3/POTg/h616VYa3b3aAq4596ANkqG4Ipnk56Hj0NNSYMODUoYUrBcrSWCSfeUVTm0WJuiitgScU1nIPABHvSshqTOan0cICRxWJqWneenA+YDBruZQsnGMfWqj2St2rmxNCNaPKzpoV3TdzyW70l0c5jOT7VlzaefQV6xqFgFG4IGA7EVzNxbWjMVkXy29+leRPDTpux6lPFKR57NZvGe/sah8t9+OQf513M2jBvmQgjqKz5dGkJ+7kVlqt0dSqpmBau0UgJyCCPpXSxz7oxz2qt/Y7dWFN8uWMlWBIHANY1ImqkplqSZR3/Ko9zP83OKr+ZscIiGSY/dQevvXS6NocjMLi7O+U9B/CvsKqhhZVWYV68aaK9hokmoSxz3i4jTlIe31PvXY2tksagKuAKmtrQIAMVoRQ+1fRUaEaa0PCrYiVRjYYQO1TySRW0LSyuqIoySxwAKhvr610uzkuruZIYYl3O7nAAr5y+IvxQufE8smn6a7waUDgno0/19B7fnXScxr/En4tPqJl0jw/MUteVmulODJ7L6D37/AM/IQCxoVSxq/b2+BuYUgHWdjvG5ulbUGEXao27QwPr0HP1HpVIOT0OM9KsCY8bsodxPB5HH+ANUgNS2KnYWBWNUIPbA5LAH1I+UexHpWras6SGNSuViDA+jDkD8yRj0ftjFc3bzMrbScg/wA4PT+n9K0baYtMjq33zkZzjkj9BwfpxWsWQ0bRlmQK+z92P3m5pziTBJx04x1A47cZNX/tE6xpt2B/KE+OBxnjPbHC5/H145ue1XVYIoTcPGm1AsYYbW+XufqGNapddwWGP9wzSlR12HeCF55xgYx35q09SbFu4AgtyyFvLC8Z+8fmJGQMeg7f3ahSVpXlQFZA+5VDYII3KfX/aPufxqWGSOREg+dkcnBzn7xyuPxH61XSNUZHjaMozKzll6qCBvAHbP4+nFUwsQSyR3TmR3WNuepHOTnPT3x+FFW0uYIRieGMu2DtfOV4AI446gn8aKAscZDAfKJzh1BIYmnyIRLIU4DMfl59Tgfp+tQRBnwFxu3Z4/lVkgOvPzE5JI6DmuYsgKqGXPCgZUgf596ZsbfhlIDYG3Hf8AzmrSGPleTnAzjODz/wDWprEk+YMqWy2c9uuPzBoGQZ+U5BbockcDrx+ZH4Upk2/KMEY6gfj0/wA96UKGOU54xgn6cfTA/WkaCQLuwwQ8HPH1/maAGMhCptIDMOc9OvIz2+lN3ySbsNw/IPHXP/1qkYDgA4544qAuoBy3Ug5Pb/63FIBrh8NtOBnOfqB/Q/rURYthWUBj3HGOP/rVZl2rhguFYcg8/n6/hUbcEZHYDjv7fjSGPhVWQk8YyCBzjjH6f59ahVwdyEKVOBnp04z9eetNedmXYPlJGMr3Pv8AhUcmSQRxkBRz2P8An9KAJcZUKEGC2eBn/P8A9aoXUryvrQrNkbTmh3LZI9j+ZoAbgY6c+4oDAAgDOfWlLgfKeRwDSZB+Zs0gFX5mAJNPGflJ5BPQ03uCfu8f5+lPZsheeccn0HQfy/WgB4kR25WkkGA7gZB6iq43Z4BzxjHapY5c/Lu+Un8qYx3m7kzgAjI6U0MGIHA5wPz6UrAgZUAdc/X1/pTA2CMdhnj9DSAVlO/pgDnr0puBnkHH8qfGyscNnGCT9MUxzlumAQKAJAOOCP8APGaQtgc8VECd3Jz9alYZJwcjrQAmR60hX5Tg0oAznqKTPPUY9BQBEQD1qJox2qdsgZI74puMDPtmgRVZMVGV9quMMn2qMx+1AFXBByK6bQvHWr6I6L5xnhH8DnkfQ1z5jphWgD6D8LfFOx1LZFJL5U3/ADzk4P4etej2WswXSgq4OfevjPkHIPSuo0Hx5q+iuqmU3EI/hc8j6Gi4H1ukwYcGpAQa8i8L/FKw1LZFJL5Ux6pJwf8A69ejWWrwXKgq4OfemI1yAetJgjpyPQ1GkoYcGpA2aVh3I5YllXB4PvWDqGiiTJC10ZwRzTSnHHI9DWcqaluXGo47Hns+jzQsTGWU+xquRex8Haw91r0OS2jf7y4NZ8+mKQcLXNLCxOmOJfU4hnuGUgxqKoywyzN5a8sfSu0/sC4updqYRO7kdK0E8O2lqgCrlu7HqahYOLexq8XZHLaNoiQfOQGkPVq6y2tQijipIrNYzwKtomK7KdKMFZHHUqub1ESMVU1jWrHQNNlvr+dYYIxks38h6mqXifxXpnhXTHu7+YL2SMctIfQCvmXxl431LxjqJluXMdqhPk26n5UHqfU+9amRe8ffEO+8Y3hiQtBpkbfu4M8t/tN6n27VxaqWNKqFzV6GAKMmkA2GHGCRVsAEAA+tMJG0DGDnOBUkcW4ZBBz6nFMCdIirAZ6HAPbP19OKnRM5YAnCnP4gr/WnRRkFVZAfMXIIGcDvj0I5/wAmnRo6uka4DHg9Bz061SAjhAEpCqTll+UAksDxj9R/npfgiWZtnl/ON0YHOCM+g7ZYdOxNV4ZdzgsSpAzyMkYPBH+A61Kk4g/eBWYpjayZJU5GW9cZx+HFUhGlDAIykiZZG/eA7sg7iuF44+XD+3WtRxGQWHI84kkghcgYP/jxLdzyeuTiC22m2MUisApO0btuIw33z75XGff6ip5MWwYo3yRzZRu28IxY4PbIA+gxmtESLIjRSTELsdlGMf3QMHHsTwPqc0y2b5mHDKQWIPft+OQQMeuPYGNJRJcyb9xACyNjjjGfp/FjIH8s1LCs28RSIBkgHJJIyT+Y5BOPSquFjatRb+TvlaRGck4VCehx/Sis2PyJ4w0tkJ2X5QxY5AB4HGR05445opiOFTCZyAfSpVlw/I2g8rg46fT3xVESlRknr3HWrUaKYBKXC5PHv/nFc9yi0hAh+XaxznkY5P8ATioWJKcqwB7dMetLBMMPlNwf17cH8R1ppc7CgI2tlRn8P8BSAYzbfugcNkjPX0p5x9lEgBbDYLH6dP0qJ3Y9EwevPf3xTnVtoCksoBAx0oGRDKklz3yMdQeRUTwgz8jG45OB688f57VIy7M4bcQByD7+tN43fNjruYdscnj8KQCxsSAu3cTlsYzjGf6Clki2OwI2sNuB3AAOf1/lSrGoUsWIkQHB9eQM/qaS6Ox1XYNo4UA54xwf896AKrRop3A5XGP1prMGA2kZ4GP8f896mmUOgU/K4weuOnf+tQyjbhV6dMn8z+tIZFlQTz168f59KduLN3z970/zxTnGWyDlupPr35qLqSR16Aj0oACwLH3zjjrSZH0GetAQMTnt6f5+tNb1PfsKQEobK4B5xwKVmG4lUx6AH86hUknrg0/ORj3JoAUEdfTtTVfccA9e9M3FTj8DSDBOOKALW/5SpHXqf500KTyeBn8MUBsqQQMgH+dC7iRyc8A/5/CmBJCgk3Ho2MjJ/Oo2IZ8EYFNLlCpVjuA9OnWmn5iD/k0ABwMcjPrUi84GfxqPnGPQYxQmSducDHHtSGSMx2g80wYYk0hUjqORxilXkjPYGgALfLgZOKbnuOaUj04pMYPvQAfnSU4joMU3jp3oAaQDTClSkelNIyKBEDRkHkYqMirRFMKZoArglTkHBHQiuq0Dx9rGiOqmU3EA/hc8j6GuZZKYVoA+ifDHxP0/VAkbTeXN3Rzg16FZ6vDcKCrg59K+MwSpBUkEdCK6zw/8QNX0V1R5GuYB/C55H0NO4H1isoYcGpA1eU+Gfibp2qKqGbZL3R+DXf2msQzqCrg596BGxuo3AdhVZLlGHBFO8wHpQMnM2BgVEWz1pAC3SlIVBljQAcVynjXx1p3hDTy8zCS7cHybdT8zn+g96yvH3xMsfC9u9rbMlxqTD5YgeE92/wAK+cdV1a91rUJb6/naaeQ5LMensPQUAWfEfiTUfE+qPfahMXcn5EH3Yx6AVlpGWNOihZyOK0YLYjAA5PSkBHFAEHPWpQ2BxT1XGSRx1FPMORkDkdf8KYEewPk47dqtW0PGB1OcH6YP/wBao1Ur0bH17VZgXBLBlCY5BPbvxTQy9H5SBc/MAwXkdAOD9MEg9/0pzWsbzwoWVeVUhjyOMA56cEEe2PrSgsyKAF3BMA+uQQefxquFmDYL8KSw9SPz+p+uaoQx4VjcAAlCudwPHAPP+e1SWzPGwVcFmBRSR6g4/X+VWBABkAgg+idTkjv6nHoCPxoCZuFUNuTLlSTwOMj8T/QVViTQ09xtZzkgoQNx4G/p/j7D6GrkzpNJGFcGNy4UkcEZIU/XgnAPXPvUNpBFcW0EZYbMySlTxu+VgT1zjqPTA780kJZJo0eLcZDuCDnc7INuD7HnOR1+tWIlihkW5UAu6/Ky7hluxAI/vAEAj6Gp4Vw1ud2Cx8x5A2QBuwMk8HGG6jFMZ9jBopBNPDOec8Bn+6eD1GPwzSJc+WogwHhjhAfyjwXJyF+vP6kelUBbVb0DbYw/uF4HzH6+ox1orNfUBA7RySqXB+bq2D6D0+lFO4HJPGMYPHfnofeldHCBhnGMAnuPT86jFyxG3jgdzUqXIKgMRuY/SuYobbllb5h8ucHPNSElQdpJ9DjPt/jTEkG7jD46E9ae0jPHggtjn6f55/OgQFkVSMMRnPXrSuytCSX/AIs8enf/AAqIOyopBO3PQf5+tQkZyeen5d6BkrBMYIKtyPTNMM5iJZcfNg89+P5UsMjl84BA5yc8Y6/pUZJI2gdf5CkA5Jm4YkbS24+/P/6qHZR8gUFcgkZ6+w/z61ArYTGGzyAR/n3pzkq7kDb8uPxOc/1oAkkK4fbjaeUP44A/KopgNu0LzuwOf8+tQOedvXGMe1PV2ZNh+YAEgUhkeWYnJAzyaaMIQwbkcipJIuWwMHJxg9eKj2FTjB9uKAEDbcbh096RvmwR3ApxVOAQQSeKRQpx6ZxQAzOGBHahiR+NPK8DBAPvSeWc460gI8FjnpTwu00/GMfrihwMj0/nQAKSTgdKkZ3CdQCepHf0P61F0J5yOe9Kc87fpzQA0EhsNxzn6VJv3AjAB9cU1gdxbpmmgc8elAAQRx05pVO0gknPWnHLcjgDgU0qccigB/mB927JJ7mk7Hac5AqNVPUcY61IuezEAigBrnHP/wCqjkZz24+lOI4Hr3pv8JxQMM8YJz9KeR8qnv060zGBkVIvIIxwRjP8qAGEYOO1Jj86kKnaCRimt0HHWgBh+lJxTuM0h46dKAGkA0xo6k70tAisUphFWiAaaYwelAFZSyMGUkMOhB6V1OiePtX0gqryG4iHZj8w/GubMeKYVoA9w0T4rafcBVuJTA/cScfr0rtbTxjplwgZb6DH/XQV8sYo5FFwPqq9+JHh7S4SZ9TgLAfcRtzH8BXl/iz403moRva6HG1tE3BuH++R7DtXk3Jp6RMxxii4Cyyy3MzSyu0kjnLMxySfrUsFuXYZqaG2xjPWraqR900APhgwAgUEnGB9RU+xSnBwAc/hTgDEYT8u5xvyD29D+Ipo+X5RyM/MD3x/+s/nTGOaJWQhQFI65/HpQsbHJ4G7uPr3pWcBV/e84GPbHPp/nNRq7Bj0wWyMEcZpiHyJg7iScgEHPFMjALqRkeuRmnZJTOVXoDxn/PSkVg2FHABPI79sfpTAuPA52iGTcu0Anpzn17cj9KfBbSTXSK4ZVYgOeBgZw30GO/rVWCSSLMYIB+8Dn26fyP4Vp6Scgo8pWIo25Cc5xj/HP4GqSuJl6R4BaQA4kdVClhn735j+737YPeqHkvKkhXO1vljI6sQcgAdc4P6cVPe4095WJ3jajIc4G7I3gY64ORWfBczQGMrtc78iMk9c8E9PU/lVsRr2hEcLqyglI/8AVqSCRyCD2JIcHHsaalzLFIkfl+Y8Y3AL3GduFHbpn1496fFMkkDxKFLxAJvHJAHAI9cZH4EjsKpQCS3uRv5LJlCh3bcclvzB9+tUI0VZ2AKMxDsZPNz82Pmy3pjB/Qj3qaLbPCxEh/fIQhz8w2kHc3GcnH61HBIAkUh8ssd0kmGxlNoXI7Akkn/gX0qP93BMsYkYbFKHoOckgjj3HX0poRfNo7ktalYkJ5EhwWPr09MflRRDeRtEoeVEZQAQUJ7deDRVWEefiIgHPXsR3p8cbbc9R0PPSm5O0jJx6U9fuFuhFcpoEbfOAeueavqFOSygHPB+lRRKJUDN19Rx2pTlREwY5KZoEI8PH7xcEfwn09KieBl5VsnHzHjg1I5Jk6n75HWpIyZDMG52E4PfjNAEEcJVDzhj8uPUZ5/KpkgWUR8k5OCAOR05/l+dKxwqEADPOB7AVOqKL0DHHlM347T/AICgDPniVWLZG0dB65HA/n+VNeMM/H/LP72OpyKsy4kePIHIXp9P/rVRkc5Ldy2c0DImj5yuCT79R2qSOPByQBgkD8f6U6XhR/ujPvxTU5kizznqfpSAfMuVdVwV6bgO/wBfQCqpYAde+B+H+RVlvmcKehG41WxgPjtjH40DFMah1yBwM9aaVUL6HofapG+Z0Q9MGoVdgzLnI96QEj2xMXmc5BwcfSmCEBcck+w4qwRiMY7yfyUf4mmKxAVhwc/0pgRMo2kdPU/lTMHZ1zjjFSzMcFu5aoQcpj9aQDRjPIx+NObCkYORgU3+Jh6A4pqf/XpAPfrn1pmWx65pFJ4+tGSGOKAHkkHpSbiPlNN7DnvijvQBICBgelOB2gknmo6eCTnPegYh657fXpTc+lK3Qj0NJ2FAEkYyw+uMUqkqepwTSJxj3PNOJ+97GmA5j+7Ydf6f55qEk5wfpT26moyeT9aQBigelIeuKTJzigB3OaXIOc/WmbiQM00EkigBxIozmmNwTj1pKAHk004NNyaKBC7RSiMGm5p68mgCaKBWbFWVjWPsM1HEOE9zj+VODE5zQMfuAqRCrfL90+p6ZquSfLz70+M8H6UAXUikDo42EBtpAYDBz0pHBG9ixKjnpgZ/yaNKAllkVgMbSf6/0p+pnZO6rgBAoHFVbQQzzBubOWIGPlGAf880igbGYbflPB/KqwYkBu+7FWIWzGF4w4w3HXmmBL5R8tTghizKy46Yx/ifyqLa/mBV5VT68GnxTSCckuzFmy245yef8ajkJEaYOMj8uaYiXBCHgt1zyTn/ADmnRszSHysqxOcE9AcfyqqzscEn1GPwpFlfej55PJouBv8AmLO5gYEZcLlm5J27Tx+Aqu1u+fOwzA5HPf8AH2psKiXJcZOM9e+RWrGPkKdV86RSD3wAc/XIrVK5JFp5njK7fm8v94N3BI2s+33zjNQFspGrMBGyhT3wDyR+eePep4BhkXcTuhfJz1whYfkTVKJsWkUnUnqDyCQWA4/AUAaMW+M24kClWBVgxwH2k9fTjofr1pZpBmZk5RhuiP8AEo4znH0z7VavB5enWU6Eh3iEpwf4sZzVWaMRrMqk8xo2T15VR/U1QiI3U0DGIRRgL2dRn9aKmnnb905ALPEpY5PJxj19hRT1DQ//2Q==");
	}
	
	.seasoning3 p:first-child {
		position: absolute;
		right: 20px;
		bottom: 40px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning3 p:nth-child(2) {
		position: absolute;
		right: 20px;
		bottom: 20px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
	.seasoning5 {
		width: 100%;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1994043819,1493946987&fm=26&gp=0.jpg");
		position: relative;
	}
	
	.seasoning5 p:first-child {
		position: absolute;
		left: 20px;
		top: 30px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning5 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 60px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
	.seasoning6 {
		width: 100%;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1882069410,777828628&fm=26&gp=0.jpg");
		position: relative;
	}
	
	.seasoning6 p:first-child {
		position: absolute;
		left: 20px;
		top: 100px;
		font-size: 18px;
		font-weight: 300;
		color: #2F4F4F;
	}
	
	.seasoning6 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 130px;
		font-size: 14px;
		color: #2F4F4F;
		font-weight: 100;
	}
	
	.intelligence {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 15px;
	}
	
	.page {
		width: 100%;
		height: 100%;
		color: black;
		text-decoration: none;
		margin: 0px 15px;
		font-size: 20px;
	}
	
	.page:hover {
		font-size: 24px;
		font-weight: bold;
	}
	
	.gourd {
		width: 100%;
		height: 150px;
		margin-top: 15px;
	}
	
	.gourd img {
		width: 150px;
		height: 150px;
		float: left;
	}
	
	.gourd p:nth-child(2) {
		display: inline;
		font-size: 18px;
		font-weight: 400;
		margin-left: -65px;
	}
	
	.dishesTwo {
		font-size: 12px;
		color: white;
		background-color: hotpink;
		font-weight: 100;
		width: 60px;
		height: 20px;
		display: inline-block;
		position: absolute;
		top: 10px;
		left: 0px;
	}
	
	.dishes {
		position: relative;
		height: 20px;
		width: 200px;
		margin-left: 160px;
		line-height: 20px;
	}
	
	.taste {
		border: 1px solid hotpink;
		font-size: 10px;
		color: hotpink;
		margin: 10 0 0 -20px;
		display: inline-block;
		height: 18px;
		width: 130px;
		position: absolute;
		top: 10px;
		left: 60px;
	}
	
	.character {
		width: 100%;
		height: 20px;
		margin: 80px 0 0 -70px;
	}
	
	.head {
		width: 20px !important;
		height: 20px !important;
		border-radius: 50%;
		display: inline-block;
		margin: 0 0 0 10px;
	}
	
	.character span {
		font-size: 10px;
	}
	
	.clear {
		clear: both;
	}
	
	.stars {
		margin-top: 20px;
		position: relative;
	}
	
	.stars span {
		position: absolute;
		left: 160px;
	}
	
	.stars img {
		width: 14px;
		height: 14px;
	}
	
	.line {
		width: 100%;
		height: 1px;
		background-color: rgba(47, 79, 79, 0.2);
		margin-top: 15px;
	}
	
	.seasoning10 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1882069410,777828628&fm=26&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning10 p:first-child {
		position: absolute;
		left: 20px;
		top: 100px;
		font-size: 18px;
		font-weight: 300;
		color: #2F4F4F;
	}
	
	.seasoning10 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 130px;
		font-size: 14px;
		color: #2F4F4F;
		font-weight: 100;
	}
	
	.seasoning11 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2732077257,2981955176&fm=200&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning11 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning11 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
    .seasoning12 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1871342239,3881447977&fm=26&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning12 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: black;
	}
	
	.seasoning12 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: black;
		font-weight: 100;
	}
	
	.seasoning13 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=70217792,2961862629&fm=26&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning13 p:first-child {
		position: absolute;
		left: 40px;
		top: 120px;
		font-size: 18px;
		font-weight: 300;
		color: black;
	}
	
	.seasoning13 p:nth-child(2) {
		position: absolute;
		left: 40px;
		top: 150px;
		font-size: 14px;
		color: black;
		font-weight: 100;
	}
	
	.seasoning14 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3375382878,3796653660&fm=26&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning14 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: black;
	}
	
	.seasoning14 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: black;
		font-weight: 100;
	}
	
	.seasoning15 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=470725052,922728224&fm=200&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning15 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: black;
	}
	
	.seasoning15 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: black;
		font-weight: 100;
	}
	
	.seasoning16 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3076468897,1827288962&fm=26&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning16 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: black;
	}
	
	.seasoning16 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: black;
		font-weight: 100;
	}
	
	.seasoning17 {
		width: 360px;
		height: 180px;
		background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3663759289,2965310241&fm=200&gp=0.jpg");
		position: relative;
		margin-top: 15px;
		display: inline-block;
	}
	
	.seasoning17 p:first-child {
		position: absolute;
		left: 20px;
		top: 20px;
		font-size: 18px;
		font-weight: 300;
		color: white;
	}
	
	.seasoning17 p:nth-child(2) {
		position: absolute;
		left: 20px;
		top: 50px;
		font-size: 14px;
		color: white;
		font-weight: 100;
	}
	
   .introduce{
   	font-size: 16px;
   	color: black;
   	font-weight: 500;
   	text-align: left;
   	margin-top: 5px;
   }
   .introduce2{
   	font-size: 18px;
   	color: black;
   	font-weight: 600;
   	text-align: left;
   	margin-top: 15px;
   }
   .introduce3{
   	font-size: 16px;
   	color: black;
   	font-weight: 600;
   	text-align: left !important;
    margin: 15px 0 10px 0px;
   	display: inline-block;
   }
    .introduce4{
   	font-size: 12px;
   	color: black;
   	display: inline-block;
   	text-align: right !important;
   	margin: 15px 0 10px 230px;
   }
    .cook img{
    	width: 32%;
    	height: 120px;
    }
    .quarterly{
    	width: 100%;
    	height: 10px;
    	font-size: 13px;
    	color: rgba(0,0,0,.5);
    	background-color: rgba(0,0,0,.2);
    	padding: 8px;
    	text-align: left;
    	margin-top: 10px;
    }
    .greens{
    	margin-top: 10px;
    	position: relative;
    }
    .greens img{
    	width: 150px;
		height: 150px;
		float: left;
    }
    .greens p{
    	display: inline;
		font-size: 18px;
		font-weight: 400;
		position: absolute;
		top: 0px;
		left: 167px;
		color: #000000;
		text-align: left;
		
    }
    .green{
    	background-color:chartreuse;
    	display: inline-block;
    	width: 90px;
    	margin-top: 60px;
    	
    	line-height: 25px;
    	height: 25px;
    	color: white;
    	font-size: 16px;
    }
    .orange{
    	background-color:orange;
    	display: inline-block;
    	width: 90px;
    	margin-top: 60px;
    	
    	line-height: 25px;
    	height: 25px;
    	color: white;
    	font-size: 16px;
    }
    .red{
    	background-color:red;
    	display: inline-block;
    	width: 90px;
    	margin-top: 60px;
    	
    	line-height: 25px;
    	height: 25px;
    	color: white;
    	font-size: 16px;
    }
    .ash{
    	display: inline-block;
    	width: 90px;
    	margin-top: 10px;
    	line-height: 25px;
    	
    	height: 25px;
    	color: rgba(0,0,0,.8);
    	font-size: 16px;
    	background-color: rgba(0,0,0,.2);
    }
   
    
    
</style>