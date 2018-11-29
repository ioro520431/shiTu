<template>
		<div class="hello">
		<logo></logo>
		<Footer></Footer>
		<div class="top_box"><div class="top_div"><div class="top">美味分类</div></div></div>
		<allclass></allclass>
	</div>
</template>

<script>
	import allclass from './allclass'
	export default {
		name: 'Classify',
		data() {
			return {
			}
		},
		components: {
			allclass
		},
		methods: {
		}
	}
</script>

<style scoped>
	.top_box {
		border-top: 1px solid tan;
		border-bottom: 1px solid tan;
	}
	.top_div {
		/*display: flex;
		justify-content: flex-start;*/
	}
	.top {
		height: 40px;
		/*margin-left: 10px;*/
		padding-top: 15px;
	}
</style>