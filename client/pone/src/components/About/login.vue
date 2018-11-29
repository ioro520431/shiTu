<template>
	<div v-show="show"  class="my-login">
		
		<div class="my-top">
			<router-link to="./About"><img  src="../../assets/icon/return1.png" /></router-link>
			<span>登陆</span>
		</div>
		
		<img src="../../assets/logo.png" />
		<div class="box">
			
			<input type="text" class="username" v-model="u_name" placeholder="请输入用户名" />
		</div>
	
		<div class="box">
			<input type="password" class="username" v-model="u_pwd" placeholder="请输入密码"/>
		</div>
		
         <button @click="login()">登陆</button>
         <p>还没有账号？
         	<router-link to="/resign"><span>立即注册</span></router-link>
         </p>
         
         <Footer></Footer>
	</div>
</template>

<script>import { Indicator } from 'mint-ui';
export default {
	name: 'login',
	data() {
		return {
			show: true,
			u_name: '',
			u_pwd: ''
		}
	},
	methods: {
		login() {
			let _this = this;
			_this.$http({
				method: "post",
				url: '/login',
				data: {
					u_name: _this.$md5(_this.u_name),
					u_pwd: _this.$md5(_this.u_pwd)
				}
			}).then(response => {
				if(response.data.state == 2) {
					Indicator.open({
						text: '登陆中...',
						spinnerType: 'fading-circle'
					});

					setTimeout(() => {
						Indicator.close();
						_this.$store.commit('changeAbout',1)
						_this.$router.replace('/About')
					}, 1000);
				}
				else{
					alert(response.data.msg);
				}
			})
		},
		close() {
			this.show = !this.show;
		}
	}
}</script>

<style scoped>.my-login {
	width: 100%;
	height: 700px;
	background-color: #f4f4f4;
	position: fixed;
	top: 0px;
	left: 0px;
}

.my-top {
	position: relative;
	font-size: 17px;
}

.my-top img {
	width: 20px;
	height: 20px;
	position: absolute;
	left: 0px;
	margin-top: 5px;
}

img {
	width: 80px;
	height: 80px;
	margin-top: 40px;
}

.clear {
	clear: both;
}

input {
	border: none;
}

.box {
	height: 50px;
	margin-top: 20px;
	/*background: #a6a6a0;*/
}

.box input {
	width: 200px;
	height: 30px;
	border-radius: 10px;
	margin: 10px 0;
	background: url(../../assets/icon/wode.png) no-repeat;
	background-color: white;
	background-position: 3px;
	background-size: 20px 20px;
	padding-left: 30px;
	border: 1px solid black;
	outline: none;
}

button {
	width: 65%;
	height: 30px;
	border-radius: 5px;
	border: 0px;
	margin-top: 30px;
}

button:focus {
	outline: 0;
}

a {
	text-decoration: none;
	color: #ffa700ed;
}</style>