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
            header('HTTP/1.1 301 Moved Permanently'); //发出301头部
            header('Location:https://'.$output_arr['url']); //跳转到你希望的地址格式
        } else {
            header('HTTP/1.1 301 Moved Permanently'); //发出301头部
            header('Location:https://git.fanny9999.cn/'.$output_arr['url']);  //跳转到你希望的地址格式
        }
    }

    public function isMobile(){
            $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
        $useragent_commentsblock=preg_match('|\(.*?\)|',$useragent,$matches)>0?$matches[0]:'';
        function CheckSubstrs($substrs,$text){
            foreach($substrs as $substr)
                if(false!==strpos($text,$substr)){
                    return true;
                }
            return false;
        }
        $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
        $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC',
            'SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');

        $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) ||    CheckSubstrs($mobile_token_list,$useragent);
        if ($found_mobile){
            return true;
        }else{
            return false;
        }
    }

    public function isWeixin(){
        if(strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ){
            return true;
        }else{
            return false;
        }
    }
}
# 防封php跳转 T 0.0.2 屏蔽PC端打开, 屏蔽非微信端打开
if(!empty($_GET) && isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    $jump = new JumpUrl();
    //判断是否是手机端
    $is_mobile = $jump->isMobile();
    if($is_mobile){
        echo 'is mobile';
    }else{
        echo 'is not mobile';
    }
    if($jump->isWeixin()){
        echo 'is weixin';
    }else{
        echo 'is not weixin';
    }
    // $tourl = $jump->jumptourl($id);
}else{
    echo '参数无效';
}
