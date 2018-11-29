<template>
	<div class="hello">
		<logo></logo>
		<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4028081119,3586686196&fm=26&gp=0.jpg">
		<router-link to="./login"><my></my></router-link>
		<div class="clear"></div>
		<myico></myico>
		<login v-show="show" ></login>
		<Footer></Footer>
	</div>
</template>

<script>
	import my from './my'
	import myico from './ico'
	import login from './login'
	export default {
		name: 'About',
		components: {
			my,
			myico,
			login
		},
		data() {
			return {
				show:false
			}
		},
		methods: {
		
		}
	}
</script>

<style scoped>
	.hello img {
		width: 100%;
		height: 180px;
		z-index: -1;
	}
	.clear {
		clear: both;
	}
</style>