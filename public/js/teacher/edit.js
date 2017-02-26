define(["jquery","template","tool"],function($,template,tool){
  tool.setlink("/teacher/list");
	  function GetParam(url, id) {
            url = url+ "";
            regstr = "/(\\?|\\&)" + id + "=([^\\&]+)/";
            reg = eval(regstr);//eval可以将 regstr字符串转换为 正则表达式
            result = url.match(reg);//匹配的结果是：result[0]=?sid=22 result[1]=sid result[2]=22。所以下面我们返回result[2]

            if (result && result[2]) {
                return result[2];
            }
        }
	var url=location.search;
	var id=GetParam(url,"tc_id");

     if(id){
     	$.ajax({
       url:"/api/teacher/edit?tc_id="+id,
       type:"get",
       success:function(e){
       	e.result.id=id;
       	var html=template("teacher_edit_tpl",e.result);
       	$("#teacher_add").html(html);
       }
	})
     }else{
     		var html=template("teacher_edit_tpl",{});
       	$("#teacher_add").html(html);
     }
	
})