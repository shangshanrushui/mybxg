define(['jquery','template','util','bootstrap'],function($,template,util,bootstrap){
	util.setMenu('/course/list');
	var csId = util.qs('cs_id');
	$.ajax({
		type:'get',
		url:'/api/course/lesson',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			//渲染数据
			var html =template('templateTpl',data.result);
			$('#templateInfo').html(html);

			//提交表单公共方法
			// function submitForm(url,ctCsId,ctId){
			// 	$('#m')
			// }

			//实现课程添加课时功能
			$('#addBtn').click(function(){
				var html =template('modalTpl',{operate:'添加课时'});
				$('#modalInfo').html(html);
				$('#chapterModal').modal();

			});
			$('.editLesson').click(function(){
				var ctId =$(this).attr('data-ctId');
				console.log(ctId);
				$.ajax({
					type:'get',
					url:'/api/course/chapter/edit',
					data:{ct_id:csId},
					dataType:'json',
					success:function(data){
						console.log(data);
						data.result.operate='编辑课时';
						var html =template('modalTpl',data.result);
						$('#modalInfo').html(html);
						//submitForm('/api/course/chapter/modify',csId,ctId);
					}
				});
				//显示弹窗
				$('#chapterModal').modal();
			})
		}
	})
})