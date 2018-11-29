<template>
	<div>
		<div class="page-navbar">
			<mt-navbar class="page-part" v-model="selected">
				<mt-tab-item id="1">菜式</mt-tab-item>
				<mt-tab-item id="2">场景</mt-tab-item>
				<mt-tab-item id="3">食材</mt-tab-item>
				<mt-tab-item id="4">寻食</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				
				<mt-tab-container-item id="1">
					<router-link to='/menuall'>
					<mt-cell v-for="(n,index) in list1" :key="index" :title="list1[index]"></mt-cell>
					</router-link>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="2">
					<router-link to='/menuall'>
					<mt-cell v-for="(n,index) in list1" :key="index" :title="list2[index]"></mt-cell>
					</router-link>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="3">
					<router-link to='/menuall'>
					<mt-cell v-for="(n,index) in list1" :key="index" :title="list3[index]"></mt-cell>
					</router-link>
				</mt-tab-container-item>
				
				<mt-tab-container-item id="4">
					<router-link to='/menuall'>
					<mt-cell v-for="(n,index) in list1" :key="index" :title="list4[index]"></mt-cell>
					</router-link>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		name: 'allclass',
		data() {
			return {
                selected: '1' ,
                list1:[
                "凉菜","甜品","肉类","主食",
                "私家菜","烘焙","豆制品","煲汤","酒",
                "海鲜","水产","禽类","蛋类","冰品",
                "饮品","下酒菜","冰淇淋","小吃",
                "零食","果酱","火锅","麻辣烫","爬行类",
                "虾","家常菜"
                ],
                list2:[
                "朋友聚餐","户外野炊","晚餐","午餐",
                "早餐","下午茶","宵夜","开心一刻",
                "生日聚会","二人世界","生日聚会","一家三口"
                ],
                list3:[
                "猪肉","羊肉","牛肉","鸡",
                "鸭","鹅","蔬菜类","水果","蛋类",
                "鱼类","海鲜类","禽类","贝壳","米类",
                "面类","披萨","饮料","卤制品",
                "乳制品","干果","杂粮","其他"
                ],
                list4:[
                "各地美食","四川：三大炮","湖南：口味虾","湖北：热干面",
                "广东：虾饺","北京：烤鸭","上海：小笼包","澳门：蛋挞","广西：米粉",
                "江西：瓦罐煨汤","河南：烩面","江苏：鸭血粉丝","浙江：绍兴腐乳","福建：土笋冻",
                "吉林：冷面","河北：驴肉火烧","天津：狗不理","山西：刀削面"
                ]
			}
		},
		methods: {

		}

	}
</script>

<style scoped>
   
.mint-navbar .mint-tab-item.is-selected {
  color: #A64D4D;
  border-bottom: 0px;
  
}
.mint-cell {
	width: 48%;
	float: left;
	margin-left: 5px;
	margin-top: 10px;
	background-color: #f8e5c1ab;
	box-shadow: 1px 1px 1px gray;
}

#class_font {
	font-size: 20px;
}
a {
	color: salmon;
}
</style>