require.config({
	baseUrl:"/public",
	paths:{
       jquery:"assets/jquery/jquery.min",
       bootstrap:"assets/bootstrap/js/bootstrap.min",
       nprogress:"assets/nprogress/nprogress",
       echarts:"assets/echarts/echarts.min",
       cookie:"assets/jquery-cookie/jquery.cookie",
       common:"js/common"
	},
});

require(["common"]);	