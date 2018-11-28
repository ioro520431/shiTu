<template>
	<el-row class="box">
		<el-col :span='18' :offset='3'>
			<div class="vedio_view">
				<h2>看视频，学做菜</h2>
				<div class="view_player">
					<video autoplay :src="info.v_src" controls="controls">
						您的浏览器不支持 video 标签。
					</video>
					<div class="right_menu">
						<h3>相关视频</h3>
						<div>
							<router-link :to="'/vedio_layer?vedio_id='+item.v_id" class='underline_none' v-for='(item,index) in others' :key='index' v-if='index<10'>
								<div class="vedio_item">
									<img :src="item.v_pic" alt="" />
									<p>{{item.v_name}}</p>
								</div>
							</router-link>
						</div>
					</div>
				</div>
				<div class="vedio_name">
					<p>{{info.v_name}}</p>
					<span>{{info.v_time}}</span>
				</div>
				<div class="vedio_content">
					<strong>视频内容</strong>
					<div>
						<p v-for="(item,index) in info.v_content" :key='index'>{{index+1}}、{{item}}</p>
					</div>
				</div>
			</div>
			<div class="more_vedio">
				<h2>相关菜谱视频</h2>
				<el-row :gutter='20'>
					<el-col :span='8' class='more_item' v-for='(item,index) in others' :key='index' v-if='index>9&&index<25'>
						<vedioItem :info='item'></vedioItem>
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script>
	import vedioItem from './VedioItem.vue'
	export default {
		name: 'VedioPlayer',
		mounted: function() {
			let _this = this;
			_this.$http.get('/vedio_info', {
				params: {
					v_id: _this.$route.query.vedio_id
				}
			}).then(response => {
				this.$store.commit('changeTopFlag', 5);
				_this.info = response.data.main;
				_this.others = response.data.others;
			})
		},
		watch: {
			queryValue(val, oldVal) {
				let _this = this;
				_this.$http.get('/vedio_info', {
					params: {
						v_id: val
					}
				}).then(response => {
					this.$store.commit('changeTopFlag', 5);
					_this.info = response.data.main;
					_this.others = response.data.others;
				})
			}
		},
		computed: {
			queryValue() {
				return this.$route.query.vedio_id;
			}
		},
		data() {
			return {
				info: '',
				others: ''
			};
		},
		components: {
			vedioItem
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		min-width: 1349px;
		margin-bottom: 40px;
	}
	
	.vedio_view {
		width: 100%;
	}
	
	.more_vedio>h2,
	.vedio_view h2 {
		height: 120px;
		text-align: center;
		line-height: 120px;
		font-weight: normal;
		color: #8B4513;
	}
	
	.view_player {
		width: 100%;
		font-size: 0;
	}
	
	video {
		width: 750px;
		height: 420px;
	}
	
	.right_menu {
		display: inline-block;
		width: 261px;
		height: 420px;
		background-color: lightcoral;
		vertical-align: top;
		background-color: #F5F5F5;
	}
	
	.right_menu h3 {
		width: 231px;
		height: 25px;
		font-size: 20px;
		font-weight: normal;
		padding: 12px 15px;
		color: #8B4513;
		border-bottom: 1px solid #DCDCDC;
	}
	
	.right_menu>div {
		width: 261px;
		height: 346px;
		padding: 12px 0;
		overflow-y: scroll;
	}
	
	.underline_none {
		text-decoration: none;
	}
	
	.vedio_item {
		width: 222px;
		height: 66px;
		padding: 6px 10px;
		border: 1px solid #DCDCDC;
		background-color: #FFFFFF;
		margin-bottom: 5px;
	}
	
	.vedio_item>img {
		width: 120px;
		height: 66px;
	}
	
	.vedio_item>p {
		display: inline-block;
		width: 92px;
		font-size: 12px;
		font-weight: bold;
		color: #8B4513;
		padding-left: 10px;
		margin-top: 15px;
		vertical-align: top;
	}
	
	.vedio_name {
		width: 100%;
		height: 95px;
		padding-top: 25px;
	}
	
	.vedio_name>p {
		width: 100%;
		height: 42px;
		font-size: 28px;
		color: #8B4513;
	}
	
	.vedio_name>span {
		display: block;
		width: 100%;
		font-size: 14px;
		color: #808080;
	}
	
	.vedio_content {
		width: 100%;
		background-color: #F5F5F5;
	}
	
	.vedio_content>strong {
		display: block;
		padding: 30px 30px 0;
		font-size: 24px;
		color: #8B4513;
	}
	
	.vedio_content>div {
		padding: 10px 30px 30px;
	}
	
	.vedio_content>div>p {
		line-height: 26px;
		color: gray;
	}
	
	.more_item {
		margin-bottom: 20px;
	}
</style>