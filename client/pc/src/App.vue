<template>
	<div id="app">
		<top></top>
		<router-view></router-view>
		<bottom></bottom>
	</div>
</template>

<script>
	import top from "./components/Header.vue";
	import bottom from "./components/Footer.vue";
	export default {
		name: 'App',
		components:{
			top,
			bottom
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	body {
	 	background-color: #FAEBD7;
	}
	ul,li {
		list-style: none;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>