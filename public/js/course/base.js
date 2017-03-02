define(["jquery","tool","template","ckeditor"],function($,tool,template,ckeditor){
	$(".list_adds").next().show();
	$(".list_adds").children(".fa-angle-right").addClass("fa-angle-down");
   tool.setlink("/course/base");
   var url=location.search;
   var cs_id=tool.GetParam(url,"cs_id");
    if(cs_id){
    	$.ajax({
     	url:"/api/course/basic?cs_id="+cs_id,
   	    type:"get",
   	    success:function(e){
   		 var html=template("base_add_tmp",e.result);
   		 $(".body").html(html);
   		 ckeditor.replace("base_add_ckeditor");
   		 console.log(e);
   	  }
   })
    }
    else{
    		var html=template("base_add_tmp",{});
   		 $(".body").html(html);
   		 ckeditor.replace("base_add_ckeditor");
    	}
   

   

})