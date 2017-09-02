require.config({
	//根路径
	baseUrl:'/public/assets',
	//别名
	paths :{
		jquery : 'jquery/jquery.min',
		cookie : 'jquery-cookie/jquery.cookie',
		template : 'artTemplate/template-web',
		bootstrap: 'bootstrap/js/bootstrap.min',
		datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
		language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		common : '../js/common',
		login : '../js/login',
		index : '../js/index',
		teacherlist : '../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util: '../js/util',
		validate: 'validate/jquery-validate.min',
		form: 'jquery-form/jquery.form'
	},
	shim:{
		bootstrap : {
			deps : ['jquery']
		},
		language:{
			deps:['jquery','datepicker']
		},
		validate:{
			deps:['jquery']
		}
	}
});