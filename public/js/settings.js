define(['jquery','template','util','ckeditor','datepicker','language','uploadify','region','validate','form','state'],function($,template,util,CKEDITOR){
	//设置导航菜单
	util.setMenu('/main/index');
	//
	$.ajax({
		type : 'get',
		url : '/api/teacher/profile',
		dataType : 'json',
		success : function(data){
			// console.log(data);
			var html = template("settingsTpl",data.result);
			$('#settingsInfo').html(html);	

			//上传图像
			$('#upfile').uploadify({
				width : 120,
				height : 120, //图片的宽高
				buttonText : '', //文本内容
				itemTemplate : '<span></span>', //提示信息
				fileObjName :'tc_avatar', //
				swf :'/public/assets/uploadify/uploadify.swf',
				uploader:'/api/uploader/avatar',  // 后台地址
				onUploadSuccess:function(f,data){
					// console.log(data)
					var data =JSON.parse(data);
					$('.preview img').attr('src',data.result.path);
				}
			});
			//处理省市区三级联动
			$("#pcd").region({
				url:'/public/assets/jquery-region/region.json' 
			});
			//处理附文本
			CKEDITOR.replace('editor',{
				toolbarGroups : [
					{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
					{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
				]
			});
			//提交菜单
			$('#settingForm').validate({
				sendForm: false,
				valid : function(){console.log('表单有效');
					// 修改附文本信息到textarea中
					for(var instance in CKEDITOR.instances){
						CKEDITOR.instances[instance].updateElement();
					}
					var p = $('#p').find('option:selected').text();
					var c = $('#c').find('option:selected').text();
					var d = $('#d').find('option:selected').text();
					var hometown = p + '|' + c + '|' +d;
					// debugger;
					$(this).ajaxSubmit({
						type: 'post',
						url: '/api/teacher/modify',
						data: {tc_hometown:hometown},
						dataType : 'json',
						success:function(data){
							if(data.code == 200){
								location.reload();
							}
						}
					});
				}
			});
		}

	});
});