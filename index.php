<?php
error_reporting(E_ALL & ~E_NOTICE);
$pathinfo = $_SERVER['PATH_INFO'];

$pathinfo=explode('/',substr($pathinfo,1));
$folder=$pathinfo[0];
$filename=$pathinfo[1];

if(count($pathinfo)==1){
	if(!$folder){
    $filename="index";
	$folder="index";
	}else{
	$filename=$folder;
	$folder="index";
	}
	

};
include "/views/".$folder."/".$filename.".html";






?>