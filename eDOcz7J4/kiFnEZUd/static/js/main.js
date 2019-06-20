//文案统计代码
var _toutiao = null; //头条事件ID
var siteid = 1266509604; //CNZZ统计ID1274374896
var stxlwxs = stxlwx;
console.log('CNZZ查看链接：http://new.cnzz.com/v1/login.php?siteid=' + siteid);
stxlwx = '<span class="weixin" oncopy="copy(\'长按复制\')">' + stxlwx + '</span>';
if (location.hash === '#CNZZ' && siteid) {
    window.location.href = 'http://new.cnzz.com/v1/login.php?siteid=' + siteid;
}
// cnzz关键词
var keyword = getKeyWord(); //统计百度搜狗关键词才需要，不需要请注释掉或删掉
// 头条id
// cnzz siteid
var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if (siteid) {
    document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id=' + siteid + '&web_id=' + siteid + '" language="JavaScript"></script></div>');
}

if (_toutiao) {
    (function (root) {
        root._tt_config = true;
        var ta = document.createElement('script');
        ta.type = 'text/javascript';
        ta.async = true;
        ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
        ta.onerror = function () {
            var request = new XMLHttpRequest();
            var web_url = window.encodeURIComponent(window.location.href);
            var js_url = ta.src;
            var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=' + _toutiao;
            request.open('GET', url, true);
            request.send(null);
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ta, s);
    })(window);
}

function getKeyWord() {
    var str = document.referrer;
    if (str.indexOf('baidu.com') != -1) {
        var patt = /&wo?r?d=([\s\S]+?)&/i;
        var n = patt.exec(str);
        if (n == null) {
            return false;
        } else {
            return n[1];
        }
    } else if (str.indexOf('sogou.com') != -1) {
        if (str.indexOf('&query=') != -1) {
            var patt = /&query=([\s\S]+?)&/i;
            var n = patt.exec(str);
            if (n == null) {
                var patt = /&query=([\s\S]+)/i;
                var n = patt.exec(str);
                console.log(n);
                return n[1];
            } else {
                console.log(n);
                return n[1];
            }
        } else if (str.indexOf('&keyword=') != -1) {
            var patt = /&keyword=([\s\S]+?)&/i;
            var n = patt.exec(str);
            console.log(n);
            if (n == null) {
                return false;
            } else {
                return n[1];
            }
        }
    } else {
        return '直接书签打开';
    }
}

var timestamp=new Date().getTime() ;
// 10天前的日期
var date = new Date(timestamp - 864000000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000 
Y = date.getFullYear() + '-';
M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
D = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
var time = Y+M+D;



$(document).ready(function(){

})
