stxlwx = '<span oncopy="copy(\'长按复制\')">'+stxlwx+'</span>';
var keyword = location.search;
// cnzz siteid
var siteid = 1271901082;
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if (siteid) {
	document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id=' + siteid + '&web_id=' + siteid + '" language="JavaScript"></script></div>');
}
//长按复制去微信
function copy(xw) {
	_czc.push(['_trackEvent', xw, stxlwx, keyword, 1]);
	window.location.href = "weixin://";
}

     


$(document).ready(function () {
    $(".wxbtn .cont span").click(function () {
        $(".click").hide();
        $(".popup").show();
    });
    $(".wxbtn .cont img").click(function () {
        $(".click").hide();
        $(".popup").show();
    });
    $(".close").click(function () {
        $(".popup").hide();
        $(".wxbtn").show();
    })
    $('.weixin').bind('copy', function () {
        window.location.href = 'weixin://'
    })
});

$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 1000
    });
});
