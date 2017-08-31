require.config({
	//根路径
	baseUrl:'/public/assets',
	//别名
	paths :{
		jquery : 'jquery/jquery.min',
		cookie : 'jquery-cookie/jquery.cookie',
		template : 'artTemplate/template-web',
		bootstrap: 'bootstrap/js/bootstrap.min',
		common : '../js/common',
		login : '../js/login',
		index : '../js/index',
		teacherlist : '../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util: '../js/util'
	},
	shim:{
		bootstrap : {
			deps : ['jquery']
		}
	}
});