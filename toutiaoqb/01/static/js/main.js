//文案统计代码
var _toutiao = 1614723102774291; //头条事件ID
var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", 1275095735]); //（下面对应的红色是siteid）


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
