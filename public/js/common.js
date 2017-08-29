define(['jquery','cookie'],function($){
		//NProgress.start();
		//NProgress.done();
	//控制主页菜单折叠和展开
	$('.navs ul').prev('a').on('click', function () {
			$(this).next().slideToggle();
	});
	//退出
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if (data.code == 200){
					//退出成功
					location.href='/main/login';
				}
			}
		})
		return false;
	});
	//验证是否登录
	var seesionId = $.cookie('PHPSESSID');
	// console.log(seesionId);
	if (!seesionId && location.pathname != '/main/login') {
		location.href ='/main/login';
	}
	if($.cookie('loginInfo')){
		var loginInfo =JSON.parse($.cookie('loginInfo'));
		$('.profile img').attr('src',loginInfo.tc_avatar);
		$('.profile h4').html(loginInfo.tc_name);
	}
	//获取用户登录信息，并填充页面
	
	// console.log(loginInfo);
	
})
	

