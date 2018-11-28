<template>
	<div>
		<div class="w">
			<div class="loadding ">
				<p>欢迎发布新菜谱，先介绍一下你的大作！</p>
			</div>

			<div class="loadding-top ">

				<el-form ref="form">

					<div class="loadding-title">
						<p>标题</p>
						<router-link to="/">
							<p class="loadding-help">查看帮助>></p>
						</router-link>
					</div>

					<el-col :span="12" :offset="1">
						<el-input class="el-input1" v-model="form.name" placeholder="请填写菜谱名称，10字以内"></el-input>
					</el-col>

					<el-col :span="10" :offset="1">
						<span><a class="loadding-text0" href="#">如何让你的菜看起来很好吃></a></span>
					</el-col>
				</el-form>

				<el-form ref="form">
					<el-col :span="24">
						<div class="loadding-title">
							<p>自媒体标题（8-30个字符）：</p>
						</div>
					</el-col>

					<el-col :span="12" :offset="1">
						<el-input class="el-input1" v-model="form.name" placeholder="请填写自媒体标题"></el-input>
					</el-col>

				</el-form>

				<el-form ref="form">

					<el-col :span="24">
						<div class="loadding-title">
							<p>属性：</p>
						</div>
					</el-col>

				</el-form>
				<div class="clear"></div>

				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item class="Select Select-first">
						<el-select v-model="formInline.region1" placeholder="选择工艺">
							<el-option label="选择工艺" value="选择工艺"></el-option>
							<el-option label="炒" value="炒"></el-option>
							<el-option label="蒸" value="蒸"></el-option>
							<el-option label="煮" value="煮"></el-option>
							<el-option label="炖" value="炖"></el-option>
							<el-option label="拌" value="拌"></el-option>
							<el-option label="烧" value="烧"></el-option>
							<el-option label="煎" value="煎"></el-option>
							<el-option label="炸" value="炸"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item class="Select">
						<el-select v-model="formInline.region2" placeholder="选择口味">
							<el-option label="选择口味" value="选择口味"></el-option>
							<el-option label="选择烹饪时间" value="选择烹饪时间"></el-option>
							<el-option label="家常味" value="家常味"></el-option>
							<el-option label="麻辣味" value="麻辣味"></el-option>
							<el-option label="咸鲜味" value="咸鲜味"></el-option>
							<el-option label="甜味" value="甜味"></el-option>
							<el-option label="酸甜味" value="酸甜味"></el-option>
							<el-option label="酸辣味" value="酸辣味"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item class="Select">
						<el-select v-model="formInline.region3" placeholder="选择难度">
							<el-option label="选择难度" value="选择难度"></el-option>
							<el-option label="新手尝试" value="新手尝试"></el-option>
							<el-option label="初级入门" value="初级入门"></el-option>
							<el-option label="初中水平" value="初中水平"></el-option>
							<el-option label="中级掌勺" value="中级掌勺"></el-option>
							<el-option label="高级厨师" value="高级厨师"></el-option>
							<el-option label="厨神级" value="厨神级"></el-option>

						</el-select>
					</el-form-item>

					<el-form-item class="Select">
						<el-select v-model="formInline.region4" placeholder="选择准备时间">
							<el-option label="选择准备时间" value="选择准备时间"></el-option>
							<el-option label="5分钟" value="5分钟"></el-option>
							<el-option label="10分钟" value="10分钟"></el-option>
							<el-option label="15分钟" value="15分钟"></el-option>
							<el-option label="30分钟" value="30分钟"></el-option>
							<el-option label="60分钟" value="60分钟"></el-option>
							<el-option label="90分钟" value="90分钟"></el-option>
							<el-option label="两小时" value="两小时"></el-option>
							<el-option label="数小时" value="数小时"></el-option>
							<el-option label="一天" value="一天"></el-option>
							<el-option label="两天" value="两天"></el-option>

						</el-select>
					</el-form-item>

					<el-form-item class="Select">
						<el-select v-model="formInline.region5" placeholder="选择烹饪时间">
							<el-option label="<5分钟" value="<5分钟"></el-option>
							<el-option label="<10分钟" value="<10分钟"></el-option>
							<el-option label="<15分钟" value="<15分钟"></el-option>
							<el-option label="<30分钟" value="<30分钟"></el-option>
							<el-option label="<60分钟" value="<60分钟"></el-option>
							<el-option label="<90分钟" value="<90分钟"></el-option>
							<el-option label="<两小时" value="<两小时"></el-option>
							<el-option label="<数小时" value="<数小时"></el-option>
							<el-option label="<一天" value="<一天"></el-option>
							<el-option label="<两天" value="<两天"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item class="Select">
						<el-select v-model="formInline.region6" placeholder="选择人数">
							<el-option label="选择人数" value="选择人数"></el-option>
							<el-option label="1人份" value="1人份"></el-option>
							<el-option label="2人份" value="2人份"></el-option>
							<el-option label="3人份" value="3人份"></el-option>
							<el-option label="4人份" value="4人份"></el-option>
							<el-option label="5人份" value="5人份"></el-option>
							<el-option label="未知" value="未知"></el-option>
						</el-select>
					</el-form-item>
				</el-form>

				<div class="clear"></div>
				<el-col :span="24">
					<div class="loadding-title1">
						<p>成品图 (328*440)：</p>
					</div>
				</el-col>

				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>

				<div class="textareaitem">
					<textarea style="resize:none" placeholder="说说这道菜背后的故事吧~ " name="descr"></textarea>
				</div>

			</div>
		</div>

		<div class="w">
			<div class="loadding w">
				<p>记录所有原材料</p>
			</div>

			<div class="record w">
				<div class="record-text">
					<h5>小提示：</h5>
					<p>1、输入食材后，下方会弹出相应食材可选择；如果没有弹出，可能是您输入的食材有误，或者没有当前食材（请联系小编）</p>
					<p>2、“适量、少许”尽量少用或者不用，用量精确对您的粉丝更有帮助</p>
				</div>

				<div>
					<p class="main-p">主料</p>

					<el-row :gutter="20">
						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>

						</el-col>

						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20">
						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20">
						<el-col :span="8" :offset="1">
							<div class="add1">
								<el-button type="danger" class="add0" plain>+增加一项</el-button>
							</div>
						</el-col>
					</el-row>
				</div>

				<div>
					<p class="main-p">辅料</p>
					<el-row :gutter="20">
						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>
						</el-col>
						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20">
						<el-col :span="9" :offset="1">
							<div class="main-input">
								<input class="main-input1" placeholder="请填写主料的名称" />
								<input class="main-input2" placeholder="请填写用量" />
								<div class="mian-img"><i>X</i></div>
							</div>
						</el-col>
					</el-row>

					<el-row :gutter="20">
						<el-col :span="8" :offset="1">
							<div class="add1">
								<el-button type="danger" class="add0" plain>+增加一项</el-button>
							</div>
						</el-col>
					</el-row>
				</div>

			</div>

		</div>

		<div class="w">
			<div class="loadding w">
				<p>开始写步骤了！能否简单易学就看你怎么写了，加油！</p>
			</div>

			<div class="lod w">
				<div class="lod-text">
					<h5>小提示：</h5>
					<p>1、步骤图宽度在400像素至550像素，如果拼接请横向拼接2至3张（当宽度大于550时会自动压缩，不用裁切）</p>
					<p>2、每个步骤只用一段话描述，请勿在步骤中再细分“1.2.3.</p>
				</div>

				<div class="model">
					<span class="model-span">1</span>
					<el-upload class="avatar-uploader2" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar2">
						<i v-else class="el-icon-plus avatar-uploader-icon2"></i>
					</el-upload>
					<div class="textareaitem2">
						<textarea style="resize:none" placeholder="请填写步骤描述~ " name="descr"></textarea>
						<el-button class="more-button">更多步骤（选填）></el-button>
					</div>
				</div>

				<div class="model">
					<span class="model-span">2</span>
					<el-upload class="avatar-uploader2" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar2">
						<i v-else class="el-icon-plus avatar-uploader-icon2"></i>
					</el-upload>
					<div class="textareaitem2">
						<textarea style="resize:none" placeholder="请填写步骤描述~ " name="descr"></textarea>
						<el-button class="more-button">更多步骤（选填）></el-button>
					</div>
				</div>

				<div class="model">
					<span class="model-span">3</span>
					<el-upload class="avatar-uploader2" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar2">
						<i v-else class="el-icon-plus avatar-uploader-icon2"></i>
					</el-upload>
					<div class="textareaitem2">
						<textarea style="resize:none" placeholder="请填写步骤描述~ " name="descr"></textarea>
						<el-button class="more-button">更多步骤（选填）></el-button>
					</div>
				</div>

				<div class="model">
					<span class="model-span">4</span>
					<el-upload class="avatar-uploader2" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar2">
						<i v-else class="el-icon-plus avatar-uploader-icon2"></i>
					</el-upload>
					<div class="textareaitem2">
						<textarea style="resize:none" placeholder="请填写步骤描述~ " name="descr"></textarea>
						<el-button class="more-button">更多步骤（选填）></el-button>
					</div>
				</div>

				<div class="model">
					<span class="model-span">5</span>
					<el-upload class="avatar-uploader2" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar2">
						<i v-else class="el-icon-plus avatar-uploader-icon2"></i>
					</el-upload>
					<div class="textareaitem2">
						<textarea style="resize:none" placeholder="请填写步骤描述~ " name="descr"></textarea>
						<el-button class="more-button">更多步骤（选填）></el-button>
					</div>
				</div>

				<el-row :gutter="20">
					<el-col :span="8" :offset="1">
						<div>
							<el-button class="add2" type="danger" plain>+增加一步</el-button>
						</div>
					</el-col>
				</el-row>

				<p class="finish">最终效果图 <span>（请上传两张或以上不同角度成品图，宽度500-600像素之间，最好横图竖图、远景近景图都有）</span></p>

				<div class="stepimg">

					<el-upload class="avatar-uploader3" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar3">
						<i v-else class="el-icon-plus avatar-uploader-icon3"></i>
					</el-upload>

					<el-upload class="avatar-uploader3" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar3">
						<i v-else class="el-icon-plus avatar-uploader-icon3"></i>
					</el-upload>

					<el-upload class="avatar-uploader3" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar3">
						<i v-else class="el-icon-plus avatar-uploader-icon3"></i>
					</el-upload>

					<el-upload class="avatar-uploader3" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar3">
						<i v-else class="el-icon-plus avatar-uploader-icon3"></i>
					</el-upload>

				</div>

				<p class="finish">烹饪小技巧</p>

				<div class="textareaitem1">
					<textarea style="resize:none" placeholder="分享下你做这道菜的过程中的心得和小技巧吧！" name="descr"></textarea>
				</div>

				<p class="finish">我要参加</p>

				<form action="" method="get">

					<div class="end-radio"><label><input name="Fruit" type="radio" value="" />霸王超市丨记忆中的回味，中卓炸酱面<a href="#">(详情>>)</a></label></div>
					<div class="end-radio"><label><input name="Fruit" type="radio" value="" />霸王超市丨肠伴左右，科尔沁联合征集活动<a href="#">(详情>>)</a></label></div>

				</form>

			</div>

		</div>

		<div class="end-button w">
			<el-button class="end-button1" type="danger">保存为草稿</el-button>
			<el-button class="end-button1" type="danger">搞定，提交审核！</el-button>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'Loadding',
		data() {
			return {
				//				activeName2: 'first'
				form: "",
				activeIndex1: '1',
				formInline: {
					user: '',
					region1: '',
					region2: '',
					region3: '',
					region4: '',
					region5: '',
					region6: ''
				},
				dialogImageUrl: '',
				dialogVisible: false,
				imageUrl: ''
			};

		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		},
		components: {

		}
	}
</script>

<style>
	.w {
		width: 970px;
		margin: 0 auto;
	}
	
	.loadding {
		text-align: center;
	}
	
	.loadding p {
		padding-top: 40px;
		padding-bottom: 40px;
		font-size: 25px;
	}
	
	.loadding-top {
		position: relative;
		height: 800px;
		background-color: white;
	}
	
	.loadding-title p {
		display: inline-block;
		margin-top: 15px;
		margin-left: -15px;
	}
	
	.loadding-title1 p {
		display: inline-block;
		margin-top: 15px;
		margin-left: 40px;
	}
	
	.loadding-help {
		position: absolute;
		top: 0px;
		right: 25px;
	}
	
	a {
		display: inline-block;
		color: salmon;
		text-decoration: none;
		font-size: 14px;
	}
	
	.el-input1 {
		margin-top: 10px;
		margin-left: -55px;
	}
	
	.loadding-text0 {
		padding-top: 20px;
		text-decoration: underline;
	}
	
	.clear {
		clear: both;
	}
	
	.Select {
		margin-top: 10px;
		width: 120px;
	}
	
	.Select-first {
		margin-left: -15px;
	}
	
	.el-select-dropdown__item.selected {
		color: sandybrown;
	}
	
	.el-select-dropdown__item.hover,
	.el-select-dropdown__item:hover {
		background-color: salmon;
	}
	
	.avatar-uploader,
	.el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader {
		margin-top: 50px;
		margin-left: 40px;
		width: 328px;
		height: 400px;
	}
	
	.avatar-uploader,
	.el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 328px;
		height: 400px;
		line-height: 400px;
		text-align: center;
	}
	
	.avatar {
		width: 328px;
		height: 400px;
		display: block;
	}
	
	.textareaitem {
		height: 300px;
		width: 490px;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		position: absolute;
		top: 350px;
		left: 390px;
	}
	
	.textareaitem textarea {
		padding: 14px;
		border: 1px solid #ddd;
		height: 220px;
		width: 413px;
		font-size: 14px;
		color: #333;
		overflow: auto;
	}
	/*第二个组件的样式*/
	
	.record {
		height: 600px;
		background-color: white;
		border-top: 1px solid transparent;
	}
	
	.record-text {
		width: 92%;
		margin-left: 4%;
		background-color: #d3d3d3a6;
		margin-top: 20px;
	}
	
	h5 {
		padding-top: 5px;
		margin-left: 5px;
	}
	
	.record-text p {
		margin: 5px 0px;
		font-size: 12px;
		padding-bottom: 5px;
		color: gray;
	}
	
	.main-p {
		margin-left: 40px;
		margin-top: 20px;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.main-input {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
	
	.main-input1 {
		width: 200px;
		height: 40px;
		margin-left: 0px;
		padding-left: 10px;
	}
	
	.main-input2 {
		width: 80px;
		height: 40px;
		padding-left: 10px;
	}
	
	.mian-img {
		margin-top: 8px;
		width: 25px;
		height: 25px;
		background-color: lightgray;
		border-radius: 50%;
		display: flex;
		cursor: pointer;
	}
	
	.mian-img i {
		color: white;
		font-style: normal;
		margin: auto;
	}
	
	.mian-img:hover {
		background-color: salmon;
	}
	
	.add0 {
		width: 100px;
		margin-left: 10px;
	}
	/*	第三个组件的样式*/
	
	.lod {
		border-top: 1px solid transparent;
		height: 1950px;
		background-color: white;
	}
	
	.lod-text {
		width: 92%;
		margin-left: 4%;
		background-color: #d3d3d3a6;
		margin-top: 20px;
	}
	
	h5 {
		padding-top: 5px;
		margin-left: 5px;
	}
	
	.lod-text p {
		margin: 5px 0px;
		font-size: 12px;
		padding-bottom: 5px;
		color: gray;
	}
	
	.add2 {
		width: 180px;
		margin-top: 30px;
		margin-left: 150px;
	}
	
	.finish {
		margin-top: 30px;
		margin-left: 50px;
	}
	
	.finish span {
		font-size: 12px;
	}
	
	.stepimg {
		display: flex;
		margin: 20px 80px;
		justify-content: space-around;
		margin-left: 35px;
	}
	
	.textareaitem1 {
		margin-top: 20px;
		margin-left: 50px;
		height: 150px;
		width: 480px;
		background: #fff;
		display: inline-block;
		vertical-align: top;
	}
	
	.textareaitem1 textarea {
		padding: 14px;
		border: 1px solid #ddd;
		height: 140px;
		width: 800px;
		font-size: 14px;
		color: #333;
		overflow: auto;
	}
	
	form {
		margin-left: 50px;
		margin-top: 20px;
	}
	/*stepmodel的样式*/
	
	.model {
		display: flex;
		justify-content: space-around;
		margin-top: 50px;
	}
	
	.model-span {
		margin-top: 30px;
		margin-left: 10px;
		font-size: 110px;
		font-weight: bold;
		color: lightgray;
	}
	
	.avatar-uploader2,
	.el-upload2 {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader2 {
		width: 180px;
		height: 180px;
	}
	
	.avatar-uploader2,
	.el-upload2:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon2 {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar2 {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.more-button {
		margin-left: 0px;
		margin-top: 5px;
	}
	
	.textareaitem2 {
		height: 150px;
		width: 480px;
		background: #fff;
		display: inline-block;
		vertical-align: top;
	}
	
	.textareaitem2 textarea {
		padding: 14px;
		border: 1px solid #ddd;
		height: 100px;
		width: 445px;
		font-size: 14px;
		color: #333;
		overflow: auto;
	}
	/*stepimg的样式*/
	
	.avatar-uploader,
	.el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader3 {
		width: 180px;
		height: 180px;
	}
	
	.avatar-uploader3,
	.el-upload3:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon3 {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar3 {
		width: 178px;
		height: 178px;
		display: block;
	}
	
	.end-radio {
		margin-top: 5px;
	}
	
	.end-button {
		margin-top: 20px;
		padding-bottom: 30px;
		display: flex;
		justify-content: center;
	}
	
	.end-button1 {
		width: 140px;
		height: 45px;
	}
</style>