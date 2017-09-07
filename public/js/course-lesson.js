define(['jquery','template','util','bootstrap','form'],function($,template,util,bootstrap){
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
			function submitForm(url,ctCsId,ctId){
				$('#modalBtn').click(function(){
					var param ={ct_cs_id:ctCsId};
					if (ctId) {
						//编辑的时候需要提供课时ID
						param.ct_id=ctId;
					}
					$('#modalForm').ajaxSubmit({
						type:'post',
						url:url,
						data: param,
						dataType:'json',
						success:function(data){
							if (data.code==200) {
								location.reload();
							}
						}
					})
				})
			}

			//实现课程添加课时功能
			$('#addBtn').click(function(){
				var html =template('modalTpl',{operate:'添加课时'});
				$('#modalInfo').html(html);
				$('#chapterModal').modal();
				submitForm('/api/course/chapter/add',csId);
			});
			$('.editLesson').click(function(){
				var ctId =$(this).attr('data-ctId');
				$.ajax({
					type:'get',
					url:'/api/course/chapter/edit',
					data:{ct_id:ctId},
					dataType:'json',
					success:function(data){
						console.log(data);
						data.result.operate='编辑课时';
						var html =template('modalTpl',data.result);
						$('#modalInfo').html(html);
						submitForm('/api/course/chapter/modify',csId,ctId);
					}
				});
				//显示弹窗
				$('#chapterModal').modal();
			})
		}
	})
})