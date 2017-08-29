define(['jquery','cookie'],function($){
	 $('#loginBtn').click(function(){
            var formdata =$('#loginForm').serialize();
            $.ajax({
                url:'/api/login',
                type:'post',
                data: formdata,
                dataType:'json',
                success:function(data){
                    if (data.code == 200){
                        //储存用户信息到cookie
                        // console.log(loginInfon);
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        location.href ='/main/index';
                    }else{
                        alert('用户名或者密码错误');
                    }
                }
            });
            return false;
        });
});