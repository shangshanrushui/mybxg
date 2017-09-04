define(['jquery','template','util','bootstrap','state'],function($,template,util){

	//设置左侧菜单高量显示
	util.setMenu(location.pathname);

	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			//解析数据并渲染页面
			var html =template('templateTpl',{list:data.result});
			$('#templateInfo').html(html);
			//绑定预览点击事件
			$('.preveiw').click(function(){
				//通过接口获取数据
				var tcId = $(this).closest('td').attr('data-tcId');
				$.ajax({
					type:'get',
					url:'/api/teacher/view',
					data:{tc_id:tcId},
					dataType:'json',
					success:function(data){
						var html =template('modalTpl',data.result);
						$('#modalIdof').html(html);
						//显示弹窗
						$('#teacherModal').modal();
					}
				})
			});

			$('.eod').click(function(){
				var td = $(this).closest('td');
				var tcId =td.attr('data-tcId');
				var  tcStatus = td.attr('data-status');
				var that =this; // 点击按钮
				$.ajax({
					type:'post',
					url: '/api/teacher/handle',
					data: {tc_id:tcId,tc_status:tcStatus},
					dataType:"json",
					success:function(data){
						td.attr('data-status',data.result.tc_status);
						if(data.result.tc_status == 0){
							$ (that).html("注 册");
						}else{
							$(that).html("启 用");
						}
					}
				})
			})
		}
	});
})