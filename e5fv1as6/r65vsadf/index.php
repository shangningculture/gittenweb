<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];

if(strpos($user_agent,'Android')){
    if(strpos($user_agent,'MQQBrowser') && strpos($user_agent,'MicroMessenger') && strpos($user_agent,'Mobile')){
        include('adv.html');
    }else{
        Header("HTTP/1.1 303 See Other");
        Header("Location: https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.qq.com");
        exit; //from www.qq.com
    }
}else if(strpos($user_agent,'iPhone') || strpos($user_agent,'iPad')){
    if(strpos($user_agent,'MicroMessenger') && strpos($user_agent,'Mobile')){
        include('adv.html');
    }else{
        Header("HTTP/1.1 303 See Other");
        Header("Location: https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.qq.com");
        exit; //from www.qq.com
    }
}else{
    Header("HTTP/1.1 303 See Other");
    Header("Location: https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.qq.com");
    exit; //from www.qq.com
}