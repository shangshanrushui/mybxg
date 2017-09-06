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

				//处理二级联动
				$('#firstType').change(function(){
					$.ajax({
						type:'get',
						url:'/api/category/child',
						data:{cg_id:$(this).val()},
						dataType:'json',
						success:function(data){
							var tpl ='<option value="0">请选择二级分类...</option> {{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
							var html = template.render(tpl,{list:data.result});
							$("#secondType").html(html);
						}
					});
				});

				//提交
				// $('#basicForm').validate({
				// 	sendForm:false,
				// 	valid:function(){
				// 		$(this).ajaxSubmit({
				// 			type:''
				// 		})
				// 	}
				// })

			}
		});
	
})