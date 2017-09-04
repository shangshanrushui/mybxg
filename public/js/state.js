define(['jquery'],function($){
	$(document).ajaxStart(function(){
		$('.overlay').fadeIn();
	});
	$(document).ajaxStop(function(){
		$('.overlay').fadeOut(500);
	});
});