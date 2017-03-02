define(["jquery"],function($){
	return {
		setlink:function(path){
         var $aLink = $('.navs a[href="' + path + '"]');
	    $aLink.addClass('active');
	    $aLink.parent().siblings().children('a').removeClass('active')
		},
		 GetParam:function(url, id) {
            url = url+ "";
            regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
            reg = eval(regstr);//eval可以将 regstr字符串转换为 正则表达式
            result = url.match(reg);//匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]

            if (result && result[2]) {
                return result[2];
            }
        }
	}
})	