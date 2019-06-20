var stxlwxs = stxlwx;
stxlwx = '<span oncopy="copy(\'长按复制\')">'+stxlwx+'</span>';
// cnzz关键词
var keyword = location.search;

// 头条id
// var _toutiao = 84526134669;

// cnzz siteid
var siteid = 1273317726;

var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if(siteid){
   document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
}

//长按复制去微信
function copy(xw){
    // _taq.push({convert_id: _toutiao, event_type:"wechat"});
    _sns.push(stxlwxs , keyword);
    _czc.push(['_trackEvent', xw, stxlwxs, keyword, 1]);
    console.info('copy in success');
}



$(document).ready(function() {
// $(".weixinpic").attr("src","ma/1.jpg");
$(".wxbtn .cont span").click(function() {
$(".click").hide();
$(".popup").show();
});
$(".wxbtn .cont img").click(function() {
$(".click").hide();
$(".popup").show();
});
$(".close").click(function() {
$(".popup").hide();
$(".wxbtn").show();
})

});

$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 1000
    });
});
