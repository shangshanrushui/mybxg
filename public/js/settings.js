define(['jquery','template','util'],function($,template,util){
	//设置导航菜单
	util.setMenu('/main/index');
	//
	$.ajax({
		type : 'get',
		url : '/api/teacher/profile',
		dataType : 'json',
		success : function(data){
			// console.log(123);
			if(data.code == 200){
				var html =template("settingsTpl",data.result);
				$('#settingsInfo').html(html);	
			}
		}

	})
})