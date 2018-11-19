<template>
	<div>
		<el-row>
			<el-col :span='18' :offset='3' class='content'>
				<h3>
					<span class="left_line"></span>
					登陆<strong>·</strong>食徒
					<span class="right_line"></span>
				</h3>
				<form class="login_box">
					<el-input placeholder='请输入账号' v-model='name'></el-input>
					<el-input type='password' placeholder='请输入密码' v-model='password'></el-input>
					<p class="forget">
						<router-link to='#'>忘记密码?</router-link>
					</p>
					<el-button>登录</el-button>
					<p class="register">
						<router-link to='#'>还不是食徒，立即成为食徒 <i class="el-icon-arrow-down"></i></router-link>
					</p>
				</form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data(){
			return {
				name:'',
				password:''
			}
		},
		mounted: function() {
			this.$store.commit('changeTopFlag', 0)
		}
	}
</script>

<style scoped>
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