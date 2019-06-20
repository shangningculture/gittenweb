<?php

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
            // setcookie('oihagasn', $output_arr['url'], time() + 3600 * 72);
            header('HTTP/1.1 301 Moved Permanently'); //发出301头部
            header('Location:https://'.$output_arr['url']); //跳转到你希望的地址格式
        } else {
            header('HTTP/1.1 301 Moved Permanently'); //发出301头部
             header('Location:https://git.fanny9999.cn/'.$output_arr['url']);  //跳转到你希望的地址格式
        }
    }
}

if(!empty($_GET) && isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    $jump = new JumpUrl();
    $tourl = $jump->jumptourl($id);
}else{
    echo '参数无效';
}
