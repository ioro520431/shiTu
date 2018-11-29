<template>
	<div class="header_div">
		<img class="header_img" src="../assets/Logo_image.png" alt="" />
		<router-link to="/"><img  class="logo-return" src="../assets/icon/return1.png" /></router-link>
	</div>
</template>

<script>
	export default {
		name: 'logo',
		data() {
			return {
	
			}
		},
		methods: {
			
		}

	}
</script>

<style scoped>
	.header_div {
	position: relative;
}	
.header_img {
	width: 100px;
	height: 50px;
		
	position: absolute;
    left: 50%;
    top: -25px;
    transform: translate(-50%,-50%);
    
	}
	.logo-return {
		width: 25px;
		height: 25px;
		position: absolute;
		top: -40px;
		left: 0;
	}
</style>