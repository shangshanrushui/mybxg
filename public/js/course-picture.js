define(['jquery','template','util'],function($,template,util){
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
		}
	})
})