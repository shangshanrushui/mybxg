define(['jquery','template','util'],function($,template,util){
	util.setMenu('/course/list');
	var csId = util.qs('cs_id');
	$.ajax({
		type:'get',
		url:'/api/course/lesson',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			var html =template('templateTpl',data.result);
			$('#templateInfo').html(html);
		}
	})
})