<template>
	<div id="app">
		<top></top>
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	import top from "./components/Header.vue";
	export default {
		name: 'App',
		components:{
			top
		}
	}
</script>



<style>
	* {
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>