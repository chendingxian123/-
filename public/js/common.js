define(["jquery","template","nprogress","cookie"],function($,template,nprogress){
	//确认是否同个人
if(location.pathname ==="/login"){
	return;
}
if(!$.cookie("PHPSESSID") && location.pathname!="/login"){

	location.href="/login";
	
}
// 头像及名字同步
$(".list_adds").on("click",function(){
	$(this).next().slideToggle();
	$(this).children(".fa-angle-right").toggleClass("fa-angle-down");
})
// 进度条功能
nprogress.start();
nprogress.done();
// 发送ajax请求缓存功能
$(document).ajaxStart(function(){
	$(".mask").show();
})
$(document).ajaxStop(function(){
	$(".mask").hide();
})
var data=JSON.parse($.cookie("data"));
var html=template("touxiang_tpl",{data:{data}});
$("#touxiang").html(html);


// 退出功能
$("#tuichu").on("click",function(){
	if(!confirm("您确认退出吗")){
		return;
	};
	$.ajax({
		url:"/api/logout",
		type:"post",
		success:function(e){
            if(e.code==="200"){
            	location.href="/login"
            }
		}
	})
})

})