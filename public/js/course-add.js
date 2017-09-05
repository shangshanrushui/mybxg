define(['jquery','template','util','validate','form'],function($,template,util){
	//课程添加菜单选中
	util.setMenu('/course/add');
	$('#addCourse').validate({
		sendForm:false,
		valid :function(){
			$(this).ajaxSubmit({
				type:'post',
				url:'/api/course/create',
				dataType:'json',
				success:function(data){
					if(data.code == 200){
						location.href ='/course/basic?flag=1&cs_id='+data.result.cs_id;
					}
				}
			});
		}
	})

})