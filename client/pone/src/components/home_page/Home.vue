<template>
	<div class="hello">
		<Header></Header>
	    <swipe></swipe>
        <list></list>
        <roll></roll>
        <div class="empty"></div>
	<Footer></Footer>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	import { Swipe, SwipeItem } from 'mint-ui';
	import { Search } from 'mint-ui';
	import { Navbar, TabItem } from 'mint-ui';
    
    import swipe from './swipe'
    import list from './list'
    import roll from './roll'
	export default {
		name: 'Home',
		components: {
			swipe,
			list,
			roll
		},
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
	* {
		margin: 0;
		padding: 0;
	}
	.clear {
		clear:both;
	}
	.search.mint-search {
		width: 100%;
		height: 60px;
	}
	
  .empty{
  	height: 20px;
  }
	


	
	 
    
</style>