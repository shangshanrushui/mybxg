define(['jquery','template','util','uploadify'],function($,template,util){
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
		}
	})
})