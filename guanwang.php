<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
// tenweb 版本,判断来源页面显示建站官网
$url= $_SERVER['SERVER_NAME'];

$log_url_list = array('t.rvgupm.cn','t.vrovla.cn', 't.lbuzok.cn','t.nouebf.cn', 't.ktkaaq.cn' ,'t.edejai.cn' ,'t.nhsbgt.cn', 't.zjpxdh.cn', 't.ojerub.cn' ,
't.rtmfwd.cn' ,'t.aqlqju.cn' ,'t.dlciht.cn', 't.vtuxqv.cn', 't.uxfzwr.cn', 't.xjqlfo.cn' ,'t.nytucu.cn', 't.qxqrgk.cn','bc.rmgpxsjf.cn','v3.bxtfamily.cn');
$is_show = 0;
foreach($log_url_list as $log_url){
    if(strpos($url,$log_url)!== false){
        $is_show = 1;
    }
}
// echo $is_show;
if($is_show){
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: http://www.yy525.com/');
	exit;
}else{
    include ('default.html'); // 海草网站
}

