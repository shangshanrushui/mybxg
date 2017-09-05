define(['jquery','template','util','validate','form'],function($,template,util){
	//菜单选中
	util.setMenu('/course/add');
	var csId =util.qs('cs_id');
	//标准位
	var flag = util.qs('flag');
	$.ajax({
			type:'get',
			url:'/api/course/basic',
			data: {cs_id:csId},
			dataType:'json',
			success:function(data){
				if(flag !=1){
					data.result.operate='课程编辑';
					var html =template('basicTpl',data.result);
					$('#basicInfo').html(html);
				}else{
					data.result.operate='课程添加';
					var html =template('basicTpl',data.result);
					$('#basicInfo').html(html);
				}
			}
		});
	
})