//确认是否同个人
if(!$.cookie("PHPSESSID") && location.pathname!="/login"){
	location.href="/login";
}
// 头像及名字同步


// 退出功能
$("#tuichu").on("click",function(){
	if(!confirm("您确认退出吗")){
		return;
	}
	$.ajax({
		url:"/api/logout",
		type:"post",
		success:function(e){
            if(e.code==="200"){
            	location.href="./login"
            }
		}
	})
})
