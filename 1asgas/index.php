<?php
class JumpUrl {
    public function jumptourl($id) {
            $url = 'http://tj.5ipad.cn/api/Templatejump/jumptourl2/id/'.$id;
            // $url = 'https://tj.5ipad.cn/api/Templatejump/jumptourl3/id/'.$id;
            // $url = 'http://tp5.adcount.sn/api/Templatejump/test/id/'.$id;
            $ch = curl_init();
            curl_setopt($ch,CURLOPT_URL,$url);
            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);
            curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
            curl_setopt($ch,CURLOPT_HEADER,0);
            $output = curl_exec($ch);
            curl_close($ch);

            $output_arr = json_decode($output,true);

            if($output_arr['status'] == 1){
                header('HTTP/1.1 301 Moved Permanently');//发出301头部   
                header("Location:https://".$output_arr['url']);//跳转到你希望的地址格式
            } else {
                header('HTTP/1.1 301 Moved Permanently');//发出301头部   
                header("Location:https://www.baidu.com");//跳转到你希望的地址格式
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

