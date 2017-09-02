define(['jquery','template','util','datepicker','language','uploadify'],function($,template,util){
	//设置导航菜单
	util.setMenu('/main/index');
	//
	$.ajax({
		type : 'get',
		url : '/api/teacher/profile',
		dataType : 'json',
		success : function(data){
			console.log(data);
			var html = template("settingsTpl",data.result);
			$('#settingsInfo').html(html);	
			
			//上传图像
			$('#upfile').uploadify({
				width:120,
				height:120, //图片的宽高
				buttonText:'', //文本内容
				itemTemplate:'<span></span>', //提示信息
				fileObjName:'tc_avatar', //
				swf:'/public/assets/jquery-uploadify/uploadify.swf',
				uploader:'/api/uploader/avatar',  // 后台地址
				onUploadSuccess:function(f,data){
					console.log(data)
					var data =JSON.parse(data);
					$('.preview img').attr('src',data.result.path);
				}
			});
		}

	})
})