define(["jquery","template","bootstrap"],function($,template){
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
             $("#teacher_info").html(html);
             $("#teacherModal").modal();
          }
   	  	}
   	  })
  	  // $("#teacherModal").modal();
   	  
   })
})