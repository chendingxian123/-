define(["jquery","cookie"],function($){
  $("#form").on("submit",function(){
        var a=$(this).serialize();
        $.ajax({
            url:"/api/login?"+a,
            type:"get",
            success:function(e){
               if(e.code==200){
                $.cookie("data",JSON.stringify(e.result));
                location.href="/"
               }
            },
            error:function(e){
                alert("登录失败，请重新登录")
                location.href="/login"

            }
        });
        return  false;
     })
})