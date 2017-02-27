define(["jquery","template","cookie"],function($,template){
	//确认是否同个人
if(location.pathname ==="/login"){
	return;
}
if(!$.cookie("PHPSESSID") && location.pathname!="/login"){

	location.href="/login";
	
}
// 头像及名字同步


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