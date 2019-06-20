// cnzz关键词
var keyword = location.search;
// cnzz siteid
var siteid = 1273431826;


//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if(siteid){
	document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
}

//长按复制去微信
function copy(xw){
    _czc.push(['_trackEvent', xw, stxlwx, keyword, 1]);
    window.location.href = "weixin://";
}



var data = new Date();
var years = data.getFullYear();
var month = data.getMonth() + 1;
var days = data.getDate() -1;

var time = years + "-" + month + "-" + days;
console.log(years + "-" + month + "-" + days);



// $(function() {
//     $("img.lazy").lazyload({
//         effect: "fadeIn",
//         threshold: 1000
//     });
// });
