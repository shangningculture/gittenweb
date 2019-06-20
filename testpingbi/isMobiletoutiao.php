<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>

<body>
<?php 

# v1.0.4 屏蔽来源页面 头条屏蔽代码 20180315 加入更多的ip 
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
            
    // $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) ||    CheckSubstrs($mobile_token_list,$useragent);
    // var_dump(strtolower($useragent_commentsblock));
    // var_dump(strpos(strtolower($useragent_commentsblock),'android'));exit();
    $found_mobile=strpos(strtolower($useragent_commentsblock),'android');
    if ($found_mobile){
        return true;
    }else{
        return false;
    }
}

// 0 屏蔽PC端
if(isMobile()){
    include ('m.html');
}else{
    // 审核页
    include ('p.html');
}

?>

</body>
</html>