<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php
    /* 初代百度屏蔽代码  B 1.0
    屏蔽  北京  深圳  广州 上海 所有  
    屏蔽所有PC端访问  
    屏蔽ip '182.45.240.105','14.115.81.157','112.98.224.165', '112.98.235.23'
    
    百度主要是北京，分机审和人审，机审全天24小时，人审是工作日工作时间 9:00 - 17:00 
    机审  : 爬虫 根据域名获取代码里面的关键字
    人审  : 人工打开查看页面,看看有没有违规的内容*/

/*
 * 手机判断模块
 * */

function isMobile(){
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

/*
 * 获取当前访问者的ip
 * */
function getIP(){
    if(isset($_SERVER)){
        if(isset($_SERVER[HTTP_X_FORWARDED_FOR])){
            $realip = $_SERVER[HTTP_X_FORWARDED_FOR];
        }elseif(isset($_SERVER[HTTP_CLIENT_IP])){
            $realip =  $_SERVER[HTTP_CLIENT_IP];
        }else{
            if(getenv("HTTP_X_FORWARDED_FOR")){
                $realip = getenv("HTTP_X_FORWARDED_FOR");
            }elseif(getenv("HTTP_CLIENT_IP")){
                $realip = getenv("HTTP_CLIENT_IP");
            }else{
                $realip = getenv("REMOTE_ADDR");
            }
        }
    }
    return $realip;
}


/*
 * 调用sina的ip库分析ip的城市定位
 * */

$ip = getIP();
$api = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip='. $ip ;
$json = @file_get_contents($api);//调用新浪IP地址库
$arr = json_decode($json,true);//解析json
$country = $arr['country']; //取得国家
$province = $arr['province'];//获取省份
$city = $arr['city']; //取得城市


$delay_ips = [
    '182.140.153','59.37.97','61.135.172.68',
    '61.129.8.199','61.151.179.84','101.226.66.187'
];

$judgementsignID = 0;

    # 判断ip来源
    foreach ($delay_ips as $d_ip){
        if(strpos($ip, $d_ip)!== false){
            $judgementsignID = 1;
          }
    }
echo $ip;
echo $city;

if(isMobile()){
    if($judgementsignID){
        // echo '<h1>符合屏蔽ip 直接看审核页</h1>';
        echo 1;
        include('check.html');
    }else{
        if($city == "北京" || $city == "深圳" ||  $city == "广州" || $city == "上海"){
            // echo '<h1>在屏蔽的城市里面去掉了广州,查看审核页</h1>';
            echo 2;
            include('check.html');
         
        }else{
            // echo '<h1>不在屏蔽的城市里面去掉了广州,广州手机查看加粉页</h1>';
            echo 3;
            include('adv.html');
         
        }
    }
}else{
    // echo '<h1>PC端访问,查看审核页</h1>';
    echo 4;
    include('check.html');
}

?>
</body>
</html>
