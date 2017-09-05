define(['jquery','template','util'],function($,template,util){
	//设置导航菜单
	util.setMenu(location.pathname);
	$.ajax({
		type: 'get',
		url: '/api/course',
		dataType:'json',
		success:function(data){
			var html =template('courseTpl',{ list : data.result});
			$('#courseInfo').html(html);
		}
	})
})