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
			<router-link to="/home"><mt-button class="button-chird">早餐</mt-button></router-link>
			<mt-button class="button-chird" @click="open">中餐</mt-button>
			<mt-button class="button-chird" @click="open">晚餐</mt-button>
			<mt-button class="button-chird" @click="open">夜宵</mt-button>
		</div>
		

		<mt-tabbar class="Tabbar" fixed >
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
	export default {
		name: 'HelloWorld',
		data() {
			return {
   
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
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.search.mint-search {
		width:100%;
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
</style>