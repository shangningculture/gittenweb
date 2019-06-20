var stxlwxs = stxlwx;
stxlwx = '<span oncopy="copy(\'长按复制\')">'+stxlwx+'</span>';
// cnzz关键词
var keyword = location.search;

// 头条id
//var _toutiao = 84526134669;

// cnzz siteid
var siteid = 1273410951;

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
//    _taq.push({convert_id: _toutiao, event_type:"wechat"});
    var keyword= getKeyWord();//统计百度搜狗关键词才需要，不需要请注释掉或删掉
    _sns.push(stxlwxs , keyword);
    _czc.push(['_trackEvent', xw, stxlwxs, keyword, 1]);
    window.location.href="weixin://"
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
    // console.log('baidu');
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
    // console.log('sogou');
    } else {
    return '直接书签打开';
    }
}

(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/stealingyourhistory") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                $('#layer').css('display', 'block');
            }, 0);
        }
    }, false);
}(window, location));



$(document).ready(function(){
    $("#close").click(function(){
        $('#layer').hide();
    })
})
    