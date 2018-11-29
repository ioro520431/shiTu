<template>
	<div>
			<div >
			<mt-navbar class="intelligence" v-model="selected" >
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg2.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
	    				<img  src="../../assets/food/timg1.png"/>
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

		</mt-tab-container>
	</div>
</template>

<script>
		export default {
		name: 'food',
		data() {
			return {
				selected:"1"
			}
		},
		methods: {
		}
	}
</script>

<style>
.mint-navbar .mint-tab-item.is-selected {
	border-bottom: 0px;
	font-size: 17px;
	color: #EC8348;
}
.is-selected {
	font-size: 17px;
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
		color: peru;
		text-decoration: none;
		margin: 0px 10px;
		font-size: 17px;
	}
	
	.page:hover {
		font-size: 20px;
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
		font-size: 17px;
		font-weight: 400;
		margin-left: -65px;
	}
	
	.dishesTwo {
		font-size: 12px;
		color: white;
		background-color: #f64646;
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
		top: 15px;
		margin-left: 160px;
		line-height: 20px;
	}
	
	.taste {
		border: 1px solid #f64646;
		font-size: 10px;
		color: #f64646;
		margin: 10 0 0 -20px;
		display: inline-block;
		height: 18px;
		width: 105px;
		position: absolute;
		top: 10px;
		left: 60px;
	}
	
	.character {
		width: 100%;
		height: 20px;
		margin: 80px 0 0 -5px;
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
		margin-top: 45px;
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

    
</style>