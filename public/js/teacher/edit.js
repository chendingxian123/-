define(["jquery","template","tool","dateLanguege","validate"],function($,template,tool){
  // 显示高亮
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
  // 表单验证函数
  var validate=function(callback){
      $('#teacher_adds').validate({
        onKeyup: true,
        // 阻止表单默认的提交方式，改用ajax的方式提交！
        sendForm: false,
        
        eachInvalidField: function() {
          // console.log('eachInvalidField：每一个验证 失败 的表单元素，会执行这个操作')
          // this 表示每一个验证失败的表单元素
          // console.log(this)
          $(this).parent().parent().addClass('has-error').removeClass('has-success')
        },

        eachValidField: function() {
          // console.log(this);
          $(this).parent().parent().addClass('has-success').removeClass('has-error')
        },

        valid: function() {
      
          callback();

        },

        description: {
          tcNameDesc: {
            required: '用户名为必填项',
          },
          tcPassDesc: {
            required: '请输入密码'
          },
          tcJoinDateDesc:{
            required:"请选择入职日期"
          }

        }
      });
    // 根据有无ID值 生成模版结构
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
        console.log(1);
        //   $("#teacher_adds").on("submit",function(){
        //     var form=$("#teacher_adds").serialize();
        //     form=form+"&tc_id="+id;
        //     $.ajax({
        //       url:"/api/teacher/update",
        //       type:"post",
        //       data:form,
        //       success:function(e){
        //         location.href="/teacher/list";   
        //       }
        //     })
        //     return false;

        // }) 
        validate(function(){
           var form=$("#teacher_adds").serialize();
           form=form+"&tc_id="+id;
           $.ajax({
            url:"/api/teacher/update",
            type:"post",
            data:form,
            success:function(e){
              location.href="/teacher/list";   
            }
          })
          return false;
        })
     

    }
	})
}else{
     		var html=template("teacher_edit_tpl",{});
           	$("#teacher_add").html(html);
      //        $("#teacher_adds").on("submit",function(){
      //           var form=$("#teacher_adds").serialize();
                
      //           $.ajax({
      //               url:"/api/teacher/add",
      //               type:"post",
      //               data:form,
      //               success:function(e){
      //                   location.href="/teacher/list";
                        
      //               }

      //           })
      //           return false;
      // })
      validate(function(){
        var form=$("#teacher_adds").serialize();
                
                $.ajax({
                    url:"/api/teacher/add",
                    type:"post",
                    data:form,
                    success:function(e){
                        location.href="/teacher/list";
                        
                    }

                })
                return false;
      })
      
     }
  
	
})
