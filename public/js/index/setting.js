define(["jquery","template","cookie","ckeditor","region","dateLanguege","uploadify","form"],function($,template,cookie,ckeditor){
  // 个人信息初始化
  $.ajax({
  	url:"/api/teacher/profile",
  	type:"get",
  	success:function(e){
  		var html=template("user_setting_tmp",e.result);
      console.log(e);
  		$("#user_settings").html(html);
        // 文本域插件区
        ckeditor.replace("tc_introduce"); 
        // 省市区插件区
         $('.person').region({
          url: '/public/assets/jquery-region/region.json'
        });
       
        
       // ckeditor.replace("tc_provincetroduce");
      
       // 上传图片
  		$("#upfile").uploadify({
  			buttonText: '',
  			uploader:"/api/uploader/avatar",
  			width:120,
  			height:120,
  			fileObjName:"tc_avatar",
  			swf: '/public/assets/uploadify/uploadify.swf',
  			 onUploadSuccess : function(file, data, response) {
  			 	var ret=JSON.parse(data);
  			 	var cookies= JSON.parse($.cookie("data"));
  			 	cookies.tc_avatar=ret.result.path;
  			 	$.cookie("data",JSON.stringify(cookies));
             $(".preview").children("img").attr("src",ret.result.path);
             $(".avatar").find("img").attr("src",ret.result.path);
        	
        }
  		})

  	}
  })

$("#user_settings").on("submit","#user_setting",function(){
          var a=$("#tc_province :selected").text();
          var b=$("#tc_city :selected").text();
          var c=$("#tc_district :selected").text();
          $(this).ajaxSubmit({
            url:"/api/teacher/modify",
            type:"post",
            date:{
              tc_hometown:a+"|"+b+"|"+c
            },
            success:function(e){
              location.href="/settings";
            }

          })
          return false;    
  })
})