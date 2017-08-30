define(['jquery','template'],function($,template){
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			//解析数据并渲染页面
			var html =template('templateTpl',{list:data.result});
			$('#templateIdof').html(html);
			// $('.preveiw').click(function(){
			// 	//通过接口获取数据
			// 	var tcId =$(this).closest('td').attr('data-tcId');
			// 	$.ajax({
			// 		type:'get',
			// 		url:'/api/teacher/view',
			// 		data:{tc_id:tcId},
			// 		dataType:'json',
			// 		success:function(data){
			// 			var html =template('')
			// 		}
			// 	})
			// })
		}
	});
})