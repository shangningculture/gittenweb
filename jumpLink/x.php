<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php 
$sige_urls = [
    'https://bidu12.t6jii.cn/zVT9ixg8/FiQD3MPm/',
    'https://bidu12.zui2v.cn/zVT9ixg8/FiQD3MPm/',
    'https://bidu12.6wtwa.cn/zVT9ixg8/FiQD3MPm/',
    'https://bidu12.qmyr7.cn/zVT9ixg8/FiQD3MPm/',
    'https://bidu12.sht9l.cn/zVT9ixg8/FiQD3MPm/',
    'https://du12.1paza.cn/zVT9ixg8/FiQD3MPm/',
    'https://du12.ex7ar.cn/zVT9ixg8/FiQD3MPm/',
    'https://du12.qlu2a.cn/zVT9ixg8/FiQD3MPm/',
    'https://du12.7zrtk.cn/zVT9ixg8/FiQD3MPm/',
    'https://bai12.olx4z.cn/zVT9ixg8/FiQD3MPm/',
    'https://li.ikkelgs.cn/zVT9ixg8/FiQD3MPm/',
];
$sige_num = (int)count($sige_urls);
$tar_num = rand(0,$sige_num);
header('HTTP/1.1 301 Moved Permanently');//发出301头部   
header("Location:".$sige_urls[$tar_num]);//跳转到你希望的地址格式