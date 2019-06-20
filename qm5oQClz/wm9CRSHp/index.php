<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php

include "";
/*
 判断是否是微信封域名的审核  测试版本
*/

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

/*
 * 判断来源页面
 * */
$comeurl = $_SERVER['HTTP_REFERER'];

/*
 * 拒绝来源页面带着的标记
 * */
$delay_array = [
    'review.e.qq.com',
    'oa.com',
    'This_Is_A_Example_Trace-String'
];
/*
成都审核：182.140.153.(1-255)
深圳审核：59.37.97.(1-255) | 183.3.234.(1-255)
北京审核：61.135.172.68
上海审核：61.129.8.199|61.151.179.84
101.226.66.187
183.61.51.59    广东省深圳市 电信
183.61.51.60    广东省深圳市 电信
61.151.178.173   上海市-上海市   iOS   分辨率：1024x768    浏览器：无线Safari浏览器  
119.123.2.45    深圳审核
101.226.225.86   上海审核

来源域名带的标记
'review.e.qq.com',
    'oa.com',
    'This_Is_A_Example_Trace-String'
58.247.206.157
61.129.6.72
182.140.153.13
*/
$delay_ips = [
    '182.140.153','59.37.97','61.135.172', '61.129.8','61.151.179','101.226.66',
    '183.61.51','61.151.178','119.123.2','101.226.225','61.129.6','58.247.206'
];

$judgementsignID = 0;
foreach ($delay_array as $dely_sign) {
    if(strpos($url, $dely_sign)!== false){
        $judgementsignID = 1;
    }
}
# 判断ip来源
foreach ($delay_ips as $d_ip){
    if(strpos($ip, $d_ip)!== false){
        $judgementsignID = 1;
    }
}

$judgeCity = 0;
if($city == "上海" || $city == "深圳"){
    $judgeCity = 1;
}

/*
 * 重新定义广点通的屏蔽代码
 * 1 屏蔽所有PC端
 * 2 屏蔽来源页面标签
 * 3 屏蔽
 * 4 屏蔽 受访域名   http://prdajg.xiaoyuands.com/html/prdajg/?qz_gdt=67t3cwshaaaoria5muxa
   5 必须携带  qz_gdt=  否则判定为其他来源
   6 判断内核浏览器
 * */

if($judgementsignID){
    /*判断是否是被屏蔽的ip  满足的话就显示审核页
     * */
    Header("HTTP/1.1 303 See Other");
    Header("Location: https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.qq.com");
    exit; //from www.qq.com
}else{
    /*不是要屏蔽的ip ，那么久判断是否是上海或者深圳的电脑端
     * */
    if($judgeCity){
        if(isMobile()){
            include ('adv.html');
        }else{
            Header("HTTP/1.1 303 See Other");
            Header("Location: https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.qq.com");
            exit; //from www.qq.com
        }
    }else{
        include ('adv.html');
    }
}
?>
</body>
</html>
