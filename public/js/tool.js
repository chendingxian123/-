define(["jquery"],function($){
	return {
		setlink:function(path){
            var $aLink = $('.navs a[href="' + path + '"]');
	    $aLink.addClass('active');
	    $aLink.parent().siblings().children('a').removeClass('active')
		}
	}
})	