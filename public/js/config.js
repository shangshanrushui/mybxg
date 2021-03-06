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
		validate: 'validate/jquery-validate.min',
		form: 'jquery-form/jquery.form',
		uploadify: 'uploadify/jquery.uploadify',
		region: 'jquery-region/jquery.region',
		ckeditor:'ckeditor/ckeditor',
		nprogress: 'nprogress/nprogress',
		jcrop: 'jcrop/js/Jcrop',
		common : '../js/common',
		login : '../js/login',
		index : '../js/index',
		teacherlist : '../js/teacher-list',
		teacheradd:'../js/teacher-add',
		util: '../js/util',
		settings: '../js/settings',
		state: '../js/state',
		courselist:'../js/course-list',
		courseadd: '../js/course-add',
		coursebasic: '../js/course-basic',
		coursepicture: '../js/course-picture',
		courselesson: '../js/course-lesson'
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
		},
		uploadify:{
			deps:['jquery']
		},
		ckeditor:{
			exports:'CKEDITOR'
		},
		jcrop:{
			deps:['jquery']
		}

	}
});