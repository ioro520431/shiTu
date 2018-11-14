<template>
	<footer>
		<el-col :span='18' :offset='3'>
			<el-col class='count' :span='13'>
				<a href="/">
					<img src="../assets/logo.png" />
				</a>
				<p>
					中国，最大的菜谱库<strong>800,000篇</strong> <br /> 每月，用户访问数量
					<strong>20,000,000 次</strong> <br /> 每年，菜谱被浏览量
					<strong>36,000,000,000 次</strong> <br /> 现在，这些数字还在不断的增长着，欢迎您来一起使用食徒
				</p>
			</el-col>
			<el-col :span='11' class='links'>
				<ul>
					<li>
						<a href="javaScript:void(0)" class="weibo">
							<span>关注：49万</span>
						</a>
						<a href="javaScript:void(0)" class="link">
							点击进入
							<br /> 食徒官方微博
						</a>
					</li>
					<li>
						<a href="javaScript:void(0)" class="tencent">
							<span>关注：10.9万</span>
						</a>
						<a href="javaScript:void(0)" class="link">
							点击进入
							<br /> 食徒QQ空间
						</a>
					</li>
					<li>
						<a href="javaScript:void(0)" class='weixin'></a>
						<a href="javaScript:void(0)" class="link">
							扫描二维码添加
							<br /> 食徒为微信好友
						</a>
					</li>
					<li>
						<a href="javaScript:void(0)" class='app'></a>
						<a href="javaScript:void(0)" class="link">
							扫描二维码下载
							<br /> 食徒手机客户端
						</a>
					</li>
				</ul>
			</el-col>
		</el-col>
		<el-col :span='18' :offset='3'>
			<dl>
				<dt>友情链接</dt>
				<dd>
					<a href="/">美食</a>
				</dd>
				<dd>
					<a href="/">体质测试</a>
				</dd>
				<dd>
					<a href="/">伊特</a>
				</dd>
				<dd>
					<a href="http://gd.qq.com/food/">大粤网美食</a>
				</dd>
				<dd>
					<a href="http://www.9ku.com/">9酷音乐网</a>
				</dd>
				<dd>
					<a href="http://life.iqiyi.com">爱奇艺生活</a>
				</dd>
				<dd>
					<a href="http://www.yue365.com">365音乐网</a>
				</dd>
				<dd>
					<a href="http://www.mapbar.com/">图吧</a>
				</dd>
				<dd>
					<a href="http://baa.bitauto.com/">汽车论坛</a>
				</dd>
				<dd>
					<a href="http://food.39.net">39健康饮食</a>
				</dd>
			</dl>
		</el-col>
	</footer>
</template>

<script>
</script>

<style scoped>
	footer {
		width: 100%;
		height: 350px;
		background-color: #DEB887;
	}
	
	.links {
		height: 200px;
	}
	
	.count {
		height: 200px;
	}
	
	.count img {
		width: 120px;
		margin-top: 20px;
		margin-left: 20px;
	}
	
	.count p {
		vertical-align: top;
		font-size: 14px;
		line-height: 28px;
		display: inline-block;
		margin-top: 50px;
		margin-left: 20px;
		color: white;
	}
	
	.count strong {
		font-size: 16px;
		color: #8B4513;
		margin-left: 10px;
	}
	
	.links ul {
		font-size: 0;
		margin-top: 30px;
	}
	
	.links li {
		width: 105px;
		height: 160px;
		display: inline-block;
		margin-left: 10px;
	}
	
	.links li a {
		display: inline-block;
		width: 105px;
		height: 105px;
		text-decoration: none;
		text-align: center;
	}
	
	.links a span {
		display: inline-block;
		font-size: 12px;
		margin-top: 83px;
		color: white;
	}
	
	.weibo {
		background-image: url(../assets/footerlinks.png);
		background-repeat: no-repeat;
	}
	
	.tencent {
		background-image: url(../assets/footerlinks.png);
		background-repeat: no-repeat;
		background-position: -105px 0;
		font-size: 14px;
	}
	
	.weixin {
		background-image: url(../assets/footerlinks.png);
		background-repeat: no-repeat;
		background-position: -210px 0;
	}
	
	.app {
		background-image: url(../assets/footerlinks.png);
		background-repeat: no-repeat;
		background-position: -315px 0;
	}
	
	.links .link {
		height: 45px;
		margin-top: 10px;
		font-size: 12px;
		color: #FAF0E6;
	}
	
	.links .link:hover {
		color: #8B4513;
		text-decoration: underline;
	}
	dl {
		width: 97%;
		height: 100px;
		margin-left: 30px;
		border-bottom: 1px solid #D3D3D3;
	}
	dt {
		width: 100%;
		height: 41px;
		line-height: 41px;
		font-size: 14px;
		font-weight: bold;
		color: #8B4513;
		border-bottom: 1px solid #D3D3D3;
	}
	dd {
		width: 90px;
		display: inline-block;
		margin-top: 20px;
		font-size: 12px;
		text-align: center;
	}
	dd a {
		color: #FAF0E6;
		text-decoration: none;
	}
	dd a:hover {
		color: #8B4513;
	}
</style>