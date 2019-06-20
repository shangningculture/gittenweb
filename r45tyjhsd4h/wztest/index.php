<?php

class JumpUrl
{
    public function jumptourl($id)
    { 
        $url = 'https://tongji.fulanyu.cn/api/Templatejump/wzurls/id/'.$id ;
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
              return  'https://'.$output_arr['url'].'?id='.$id ;
        } else {
            return 'https://www.haicaochat.com/';
         }
    }
}
$url= $_SERVER['HTTP_REFERER'];

if(empty($url)){
        // echo '没有来源域名';
        // 跳转显示另一个域名

        $id = 215;
        $jump = new JumpUrl();
        $tourl = $jump->jumptourl($id);
        echo $tourl;
}else{
        // echo '有来源域名';
        include ('adv.html'); // 加粉页
}
