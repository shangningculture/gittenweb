var stxlwxs = stxlwx;
stxlwx = '<span oncopy="copy(\'长按复制\')">'+stxlwx+'</span>';
// cnzz关键词
var keyword = location.search;

// 头条id
var _toutiao = null;

// cnzz siteid
var siteid = 1273431818;

//var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if(siteid){
   document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
}

//长按复制去微信
function copy(xw){
    _taq.push({convert_id: _toutiao, event_type:"wechat"});  // 头条复制请求
    _sns.push(stxlwxs , keyword);  // 统计系统复制请求
    _czc.push(['_trackEvent', xw, stxlwxs, keyword, 1]);  // cnzz复制请求
    window.location.href="weixin://"   //复制后跳转微信
}

// 基础头条转化代码
(function(root) {
    root._tt_config = true;
    var ta = document.createElement('script');
    ta.type = 'text/javascript';
    ta.async = true;
    ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
    ta.onerror = function() {
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

// 退弹窗口
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/stealingyourhistory") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                $('#layer').show();
            }, 0);
        }
    }, false);
}(window, location));

// 关闭弹窗
$(document).ready(function(){
	$("#close").click(function(){
		$('#layer').hide();
	})
})

$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        
    });
});