<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php

/** V1.0 微转防封跳转域名系统
 * 判断有没有来源域名, 有就显示当前域名文件, 
 * 否则就获取服务器域名
 */

class JumpUrl
{
    public function jumptourl($id)
    { // 'https://tongji.fulanyu.cn/api/Templatejump/manyurls/id/'.$id;
        $url = 'https://a.yougou520.cn/api/Templatejump/manyurls/id/'.$id;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $output = curl_exec($ch);
        curl_close($ch);

        $output_arr = json_decode($output, true);

        if ($output_arr['status'] == 1) {

             echo 'successful 301 '.$output_arr['url'] ;
            // header('HTTP/1.1 301 Moved Permanently'); //发出301头部
            // header('Location:https://'.$output_arr['url']); //跳转到你希望的地址格式
        } else {
            echo 'fail 301 '.$output_arr['url'] ;
            // header('HTTP/1.1 301 Moved Permanently'); //发出301头部
            //  header('Location:https://www.fanny9999.cn/'.$output_arr['url']);  //跳转到你希望的地址格式
        }
    }
}
$url= $_SERVER['HTTP_REFERER'];
var_dump($url);
if(empty($url)){
    //  get api
    $id = (int)$_GET['id'];
    $jump = new JumpUrl();
    $tourl = $jump->jumptourl($id);

}else{
    include ('inden.html'); // 加粉页
}

