<?php

class JumpUrl
{
    public function jumptourl($id)
    {
        $url = 'https://x.hceb3rd.cn/api/Templatejump/jumptourl2/id/'.$id;
        // https://x.hceb3rd.cn/api/Templatejump/jumptourl2/id/
        // $url = 'https://a.yougou520.cn/api/Templatejump/jumptourl2/id/'.$id;
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

    /*
    * 获取当前访问者的ip
    * */
    public function getIP()
    {
        $realip = '';
        $unknown = 'unknown';
        if (isset($_SERVER)) {
            if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && !empty($_SERVER['HTTP_X_FORWARDED_FOR']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_FOR'], $unknown)) {
                $arr = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
                foreach ($arr as $ip) {
                    $ip = trim($ip);
                    if ($ip != 'unknown') {
                        $realip = $ip;
                        break;
                    }
                }
            } elseif (isset($_SERVER['HTTP_CLIENT_IP']) && !empty($_SERVER['HTTP_CLIENT_IP']) && strcasecmp($_SERVER['HTTP_CLIENT_IP'], $unknown)) {
                $realip = $_SERVER['HTTP_CLIENT_IP'];
            } elseif (isset($_SERVER['REMOTE_ADDR']) && !empty($_SERVER['REMOTE_ADDR']) && strcasecmp($_SERVER['REMOTE_ADDR'], $unknown)) {
                $realip = $_SERVER['REMOTE_ADDR'];
            } else {
                $realip = $unknown;
            }
        } else {
            if (getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), $unknown)) {
                $realip = getenv('HTTP_X_FORWARDED_FOR');
            } elseif (getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), $unknown)) {
                $realip = getenv('HTTP_CLIENT_IP');
            } elseif (getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), $unknown)) {
                $realip = getenv('REMOTE_ADDR');
            } else {
                $realip = $unknown;
            }
        }
        $realip = preg_match("/[\d\.]{7,15}/", $realip, $matches) ? $matches[0] : $unknown;

        return $realip;
    }
}

// 113.104.204.164  112.97.57.14  121.34.34.180
$delay_ips = [
    '113.104.204.164', '112.97.57.14', '121.34.34.180',
];
$judgementsignID = 1;
if (!empty($_GET) && isset($_GET['id'])) {
    // 判断访问者ip,是否需要被屏蔽
    $jump = new JumpUrl();
    $ip = $jump->getIP();
    foreach ($delay_ips as $d_ip) {
        if (strpos($ip, $d_ip) !== false) {
            // 在被屏蔽的ip里面
            $judgementsignID = 0;
        }
    }
    if ($judgementsignID) {
        $id = (int) $_GET['id'];
        $tourl = $jump->jumptourl($id);
    } else {
        // http://www.qq.com/
        header('HTTP/1.1 303 See Other');
        header('Location: http://www.qq.com/');
        exit; //from www.qq.com
    }
} else {
    echo '参数无效';
}
