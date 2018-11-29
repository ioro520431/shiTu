<template>
	<mt-tabbar class="Tabbar" fixed>
		<router-link to="/menuall">
			<mt-tab-item id="菜谱大全">
				<img slot="icon" src="../assets/footer/01.png"> 菜谱大全
			</mt-tab-item>
		</router-link>

		 <router-link to="/classify">
			<mt-tab-item id="美味分类">
				<img slot="icon" src="../assets/footer/05.png"> 美味分类
			</mt-tab-item>
		</router-link>

		<router-link to="/About">
			<mt-tab-item id="关于我的">
				<img slot="icon" src="../assets/footer/04.png"> 关于我的
			</mt-tab-item>
		</router-link>
       
		<router-link to="/health">
			<mt-tab-item id="饮食健康">
				<img slot="icon" src="../assets/footer/02.png"> 饮食健康
			</mt-tab-item>
		</router-link>
		
		<router-link to="/video">
			<mt-tab-item id="菜谱视频">
				<img slot="icon" src="../assets/footer/03.png"> 菜谱视频
			</mt-tab-item>
		</router-link>
        
	</mt-tabbar>
</template>

<script>export default {
	name: 'Footer',
	data() {
		return {

		}
	},
	methods: {

	}

}</script>

<style scoped>.Tabbar {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.Tabbar a {
	color: #2C3E50;
	font-size: 12px;
	text-decoration: none;
}</style>