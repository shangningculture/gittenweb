<?php
// 随机跳转到一个url
$urls = [
    'http://b339.photo.store.qq.com/psb?/V12fKdwH0th4eL/fM26KvB7BnTHbFyZWwnHOKm5AuNbPfPvdAVauinlhW0!/b/dFMBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b308.photo.store.qq.com/psb?/V12fKdwH0th4eL/PGy1O0i0GVMP85y.EWJkk9d1E.oJQ8cvcrKSueZbHSg!/b/dDQBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b342.photo.store.qq.com/psb?/V12fKdwH0th4eL/UVeZ3vG*lhbqhJihYmeMvKZ2m8TnGTC4wcrXVY.upbo!/b/dFYBAAAAAAAA&bo=GgL4HgAAAAARQIk!',
    'http://b338.photo.store.qq.com/psb?/V12fKdwH0th4eL/3rR9xbv5hH8LSYeBX.AEAmO62xB4FH7MrTDjK.W81zM!/b/dFIBAAAAAAAA&bo=GgL4HgAAAAARQIk!'
];
function getIP(){
    $realip = '';
    $unknown = 'unknown';
    if (isset($_SERVER)){
        if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_FOR'], $unknown)){
            $arr = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            foreach($arr as $ip){
                $ip = trim($ip);
                if ($ip != 'unknown'){
                    $realip = $ip;
                    break;
                }
            }
        }else if(isset($_SERVER['HTTP_CLIENT_IP']) && !empty($_SERVER['HTTP_CLIENT_IP']) && strcasecmp($_SERVER['HTTP_CLIENT_IP'], $unknown)){
            $realip = $_SERVER['HTTP_CLIENT_IP'];
        }else if(isset($_SERVER['REMOTE_ADDR']) && !empty($_SERVER['REMOTE_ADDR']) && strcasecmp($_SERVER['REMOTE_ADDR'], $unknown)){
            $realip = $_SERVER['REMOTE_ADDR'];
        }else{
            $realip = $unknown;
        }
    }else{
        if(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), $unknown)){
            $realip = getenv("HTTP_X_FORWARDED_FOR");
        }else if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), $unknown)){
            $realip = getenv("HTTP_CLIENT_IP");
        }else if(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), $unknown)){
            $realip = getenv("REMOTE_ADDR");
        }else{
            $realip = $unknown;
        }
    }
    $realip = preg_match("/[\d\.]{7,15}/", $realip, $matches) ? $matches[0] : $unknown;
    return $realip;
}
$ip = getIP();

// array_rand(array,number) 
$oneurl = array_rand($urls,1);
// var_dump($urls[$oneurl]);
$url='https://a.yougou520.cn/api/phpcount/phpcount/id/1/cip/'. $ip;
$html = file_get_contents($url);
// echo $html;
Header("HTTP/1.1 303 See Other");
 Header("Location: " . $urls[$oneurl]);
exit; //from www.qq.com