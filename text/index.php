<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if(strpos($user_agent,'Android')){
    if(strpos($user_agent,'MQQBrowser') && strpos($user_agent,'MicroMessenger') && strpos($user_agent,'Mobile')){
        include('adv.html');
    }else{
        include('check.html');
    }
}else if(strpos($user_agent,'iPhone')){
    if(strpos($user_agent,'MicroMessenger') && strpos($user_agent,'Mobile')){
        include('adv.html');
    }else{
        include('check.html');
    }
}else{
    include('check.html');
}