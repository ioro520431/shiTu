<template>
		<div class="header_div">
        <mt-search v-model="value"></mt-search>
        <img class="header_img" src="../assets/Logo_image.png" alt="" />
	    </div>

	
</template>

<script>
	
	export default {
		name: 'Header',
		data() {
			return {
	           value:''
			}
		},
		methods: {
			
		}

	}
</script>

<style scoped>
.header_div {
	height: 50px;
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
.clear {
	clear: both;
}	

.mint-search {
	width: 100%;
	height: 50px;
	
	padding-bottom: 5px;
}
.mint-searchbar {
	padding: 2px 2px;
}
	
</style>