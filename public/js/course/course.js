define(["jquery","tool","validate","form"],function($,tool){
	$(".list_adds").next().show();
	$(".list_adds").children(".fa-angle-right").addClass("fa-angle-down");
   tool.setlink("/course/course_add");
   $('form').validate({
  	onBlur: true,
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
    	$("form").ajaxSubmit({
    		url:"/api/course/create",
    		type:"post",
    		success:function(e){
                location.href="/course/base?cs_id="+e.result.cs_id;
    		}

    	})

    },

    description: {
    	courseForm: {
    		required: '此为必填项！',
    	}

    }
  });

})