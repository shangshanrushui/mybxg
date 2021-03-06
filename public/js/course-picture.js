define(['jquery','template','util','uploadify','jcrop','form'],function($,template,util){
	util.setMenu('/course/add');
	var csId = util.qs('cs_id');
	//展示数据
	$.ajax({
		type:'get',
		url:'/api/course/picture',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			var html =template('pictureTpl',data.result);
			$('#pictureInfo').html(html);

			//处理课程封面的上传
			$('#upfile').uploadify({
				width : 80,
				height :'auto',
				buttonText :'上传图片',
				buttonClass : 'btn btn-warning btn-sm',
				itemTemplate : '<span></span>',
				fileObjName :'cs_cover_original',
				formData:{cs_id:csId},
				swf:'/public/assets/uploadify/uploadify.swf',
				uploader:'/api/uploader/cover',
				onUploadSuccess:function(f,data){
					var data = JSON.parse(data);
					$('.preview img').attr('src',data.result.path);
				}
			});
			//选中要剪切的图
			var img =$('.preview img').eq(0);
			var nowCrop =null;
			//图片剪切功能
			function cropImage(){
				img.Jcrop({
					boxWidth :400,
					aspectRatio :2
				},function(){
					//销毁原来的实例对象（保证只有一个剪切实例）
					nowCrop && nowCrop.destroy();
					//保存当前实例
					var width =this.ui.stage.width,
						height = this.ui.stage.height;
					//计算选区大小
					var x1 = 0,
						y1 =(height- width/2)/2,
						w = width,
						h = width /2 ;
					//创建选区
					this.newSelection();
					this.setSelect([x1,y1,w,h]);
					//初始化选区数据
					var datas = $('#cropForm').find('input');
					datas.eq(0).val(x1);
					datas.eq(1).val(y1);
					datas.eq(2).val(w);
					datas.eq(3).val(h);
					//处理选区变化的事件
					img.parent().on('cropend',function(e,s,c){
						//获取选区的参数信息(把选区的参数信息存储到表单中)
						var datas = $('#cropForm').find('input');
						datas.eq(0).val(c.x);
						datas.eq(1).val(c.y);
						datas.eq(2).val(c.w);
						datas.eq(3).val(c.h);
					});
					//图片预览缩略图
					this.initComponent('Thumbnailer', {
						width:240,
						height:120,
						mypos:'.thumb'
					});
					//设置裁剪缩略图预览位置
					$('.jcrop-thumb').css({
						position:'absolute',
						top:0,
						left:0
					});
				});
			}

			//处理图片剪切功能
			$('#cropBtn').click(function(){
				var flag =$(this).attr('data-flag');
				if (flag) {
					//点击过了
					//接下来提交页面
					$('#cropForm').ajaxSubmit({
						type:'post',
						url:'/api/course/update/picture',
						data:{cs_id:csId},
						success:function(data){
							if(data.code == 200){
								location.href='/course/lesson?cs_id='+data.result.cs_id;
							}
						}
					});
				}else{
					//第一次点击
					//接下来实现剪切功能
					cropImage();
					//剪切功能实现之后修改按钮的状态
					$(this).attr('data-flag',1);
					$(this).html('保存图片');
				}
			});
		}
	})
})