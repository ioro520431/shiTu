<template>
	<div class="big_box">
		<el-row>
			<el-col :span='18' :offset='3' class='content'>
				<h3>
					<span class="left_line"></span>
					登陆<strong>·</strong>食徒
					<span class="right_line"></span>
				</h3>
				<div class="login_box">
					<el-input placeholder='请输入账号' v-model='u_name'></el-input>
					<el-input type='password' placeholder='请输入密码' v-model='u_pwd'></el-input>
					<p class="forget">
						<router-link to='#'>忘记密码?</router-link>
					</p>
					<el-button type='button' @click='login'>登录</el-button>
					<p class="register">
						<router-link to='/registered'>还不是食徒，立即成为食徒 <i class="el-icon-arrow-down"></i></router-link>
					</p>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data(){
			return {
				u_name:'',
				u_pwd:''
			}
		},
		mounted: function() {
			this.$store.commit('changeTopFlag', 0)
		},
		methods:{
			login(){
				let _this = this;
				_this.$http({
					method:'post',
					url:'/login',
					data:{
						u_name:_this.$md5(_this.u_name),
						u_pwd:_this.$md5(_this.u_pwd)
					}
				}).then(response=>{
					if(response.data.state == 2){
						_this.$store.commit('setUserState',{
							flag : true,
							u_name : response.data.name
						});
						_this.$router.replace('/home');
					}
					else {
						alert(response.data.msg);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.big_box {
		width: 100%;
		min-width: 1349px;
	}
	.content {
		height: 442px;
		background-color: white;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	h3 {
		height: 43px;
		margin: 40px auto;
		line-height: 43px;
		text-align: center;
		font-size: 24px;
		font-weight: normal;
		color: #8B4513;
	}
	
	strong {
		font-weight: bolder;
	}
	
	.left_line,
	.right_line {
		display: inline-block;
		width: 91px;
		height: 9px;
		margin: 0 15px;
		vertical-align: middle;
	}
	
	.left_line {
		background-image: url(../assets/nl_title_left.png);
	}
	
	.right_line {
		background-image: url(../assets/nl_title_right.png);
	}
	
	.login_box {
		width: 320px;
		height: 207px;
		margin: 50px auto 0;
		text-align: center;
	}
	.forget {
		text-align: right;
	}
	.forget a {
		text-decoration: none;
		font-size: 14px;
		color: #A9A9A9;
	}
	.forget a:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	.register {
		margin-top: 50px;
		text-align: center;
	}
	.register a {
		font-size: 14px;
		color: 	#808080;
		text-decoration: none;
	}
	.register a:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	.register a:hover i {
		text-decoration: underline;
		color: #8B4513;
	}
</style>
<style>
	.login_box .el-input__inner {
		margin: 10px auto;
	}
	.login_box .el-button {
		margin-top: 20px;
		background-color: #8B4513;
		color: white;
	}
</style>