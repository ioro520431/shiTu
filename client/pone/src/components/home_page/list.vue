<template>
		<div class="button">
			
			<router-link to="/menuall">
				<mt-button class="button-chird"><span>菜谱大全</span></mt-button>
			</router-link>
			
			<router-link to="/health">
				<mt-button class="button-chird"><span>饮食健康</span></mt-button>
			</router-link>
			
			<router-link to="/menu">
				<mt-button class="button-chird"><span>美食菜单</span></mt-button>
			</router-link>
			
			<router-link to="/video">
				<mt-button class="button-chird"><span>菜谱视频</span></mt-button>
			</router-link>
			
			<router-link to="/breakfast">
				<mt-button class="button-chird"><span>营养早餐</span></mt-button>
			</router-link>
			
			<router-link to="/lunch">
				<mt-button class="button-chird"><span>美味午餐</span></mt-button>
			</router-link>
			
			<router-link to="/dinner">
				<mt-button class="button-chird"><span>丰盛晚餐</span></mt-button>
			</router-link>
			
			<router-link to="/nightSnack">
			<mt-button class="button-chird"><span>馋猫宵夜</span></mt-button>
			</router-link>
			
		</div>
</template>

<script scoped>
		export default {
		name: 'list',
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style scope>
	.button {
		margin-top: 20px;
		height: 110px;

		
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		
		
	}
	.button-chird  {
		display: block;
		vertical-align: middle;
        width:100%;
        height: 100%;
        background-color: antiquewhite;
		border:1px solid #facdb5;
		
	}
	.button-chird span {
		display: block;
		margin-top: 10px;
        width:100%;
        height: 100%;
        font-size: 13px;
		
		color: #ec8348;
	}
	a {
		text-decoration: none;
	}
</style>