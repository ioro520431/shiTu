<template>
	<div>
		<div class="clear"></div>
		<mt-swipe class="meal" :auto="3000" >
			<mt-swipe-item >
				<div class="crab">
					<img src="http://s1.st.meishij.net/r/166/67/5829416/a5829416_150185690338936.jpg" />
				</div>
			
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<img src="http://site.meishij.net/r/124/42/3885624/a3885624_150180911918252.jpg" />
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<img src="https://s1.st.meishij.net/r/178/85/5833928/a5833928_154339870266277.jpg" />
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<img src="http://s1.ig.meishij.net/p/20181127/b9ebd59bad6c0e75f161e743cd5f7dab.jpg" />
				</div>
			</mt-swipe-item>
			
			<mt-swipe-item>
				<div class="crab">
					<img src="http://s1.ig.meishij.net/p/20181127/5e74caf7830b2722304abdb47718958e.jpg" />
				</div>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		name: 'swipe',
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
		width: 100%;
		height: 230px;
		float: left;
	}
	
	.crab img {
		margin-top: 10px;
		width: 100%;
		height: 230px;
	}
	
	
	.meal {
		height: 230px;
	}
	
	.top_div {
		padding-top: 5px;
		
		display: flex;
		justify-content: space-between;
		
		border-top: 1px solid thistle;
	}
</style>