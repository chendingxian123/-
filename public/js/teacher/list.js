define(["jquery","template","tool","bootstrap"],function($,template,tool){
   tool.setlink("/teacher/list");

// 教师列表
   $.ajax({
   	url:"/api/teacher",
   	type:"get",
   	success:function(e){
     
    if(e.code===200){
      var html=template("teacher_list_tpl",{list:e.result});
      $("#tbody_list").html(html);

    }
   	}
   });

   // 查看教师
   $("#tbody_list").on("click","#view",function(){
   	var id=$(this).parent().data("id");

   	  $.ajax({
   	  	url:"/api/teacher/view?tc_id="+id,
   	  	type:"post",
   	  	success:function(e){
          if(e.code===200){
          	e.result.tc_hometown=e.result.tc_hometown.split("|").join(" ");
             var html=template("teacher_info_tpl",e.result);
             console.log(e);
             $("#teacher_info").html(html);
             $("#teacherModal").modal();
          }
   	  	}
   	  })  	    	  
   })

   // 注销事件
   $("#tbody_list").on("click","#handle",function(){
       var $this=$(this);
       var id=$this.parent().data("id");
       var status=$this.data("status");
       $.ajax({
        url:"/api/teacher/handle",
        type:"post",
        data:{
          tc_id:id,
          tc_status:status
        },
        success:function(e){
          console.log(e);

          if(e.result.tc_status ==1){
             $this.text("开启")
          }else{
            $this.text("注销")
          }
          $this.data("status",e.result.tc_status);
          
        }
       })
   })

})