define(["jquery","tool"],function($,tool){
	$(".list_adds").next().show();
	$(".list_adds").children(".fa-angle-right").addClass("fa-angle-down");
   tool.setlink("/course/course_add");

})