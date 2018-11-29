<template>
	<div class="my_top">

		<div class="my_img">
			<img src="../../assets/icon/wode.png" />
		</div>
		<span v-if='getflag()==0'>请登录</span>
		<span v-if='getflag()==1'>已登录</span>
	</div>
</template>

<script>
	export default {
		name: 'my',
		data() {
			return {
			}
		},
		methods: {
			getflag(){
				console.log(this.$store)
				return this.$store.state.aboutFlag;
			}
		}
	}
</script>

<style scoped>
	.my_top {
		position: relative;
		width: 90%;
		margin-left: 5%;
		top: -40px;
		box-shadow: 2px 2px 2px lightgray;
		background-color: white;
		opacity: 0.9;
		border-radius: 5px;
		padding: 5px 0;
	}
	
	.my_img {
		width: 55px;
		height: 55px;
		background-color: #e1e1e194;
		border-radius: 50%;
		margin-left: 10px;
	}
	
	.my_top img {
		width: 40px;
		height: 40px;
		position: relative;
		top: 10px;
	}
	.my_top span {
		position: absolute;
		color: #ffc107;
		top: 20px;
		left: 80px;
	}
</style>