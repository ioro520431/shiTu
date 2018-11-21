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
					<el-input placeholder='请输入账号'></el-input>
					<el-input placeholder='请输入密码'></el-input>
				</form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped>
	.content {
		height: 992px;
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
	}
</style>
<style type="text/css">
	.login_box .el-input__inner {
		margin: 10px auto;
	}
</style>