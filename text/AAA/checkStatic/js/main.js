var stxlwxs = stxlwx;
stxlwx = '<span oncopy="copy(\'长按复制\')">'+stxlwx+'</span>';
// cnzz关键词
var keyword = location.search;

// 头条id
// var _toutiao = 88762641131;

// cnzz siteid
var siteid = 1272882989;

//var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if(siteid){
   document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
}



// 基础头条转化代码
// (function(root) {
//     root._tt_config = true;
//     var ta = document.createElement('script');
//     ta.type = 'text/javascript';
//     ta.async = true;
//     ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
//     ta.onerror = function() {
//         var request = new XMLHttpRequest();
//         var web_url = window.encodeURIComponent(window.location.href);
//         var js_url = ta.src;
//         var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=' + _toutiao;
//         request.open('GET', url, true);
//         request.send(null);
//     }
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(ta, s);
// })(window);

// 退弹窗口
// (function (window, location) {
//     history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
//     history.pushState(null, document.title, location.pathname);
//     window.addEventListener("popstate", function () {
//         if (location.hash === "#!/stealingyourhistory") {
//             history.replaceState(null, document.title, location.pathname);
//             setTimeout(function () {
//                 $('#layer').show();
//             }, 0);
//         }
//     }, false);
// }(window, location));


var wtIndex = 5;
$(document).ready(function(){
    var wtwidth = $('.small_box').width() +5;
    console.log(wtwidth)
    $(".list a").click(function(){
        wtIndex--;
        console.log(wtIndex)
        if(wtIndex > 0){
            $('.box_render').animate({
                left:'-='+wtwidth+'px' 
                
            });
        }
    })

    

    
    $(".button_sub").click(function(){
        if(wtIndex <= 0){
            // alert(wtIndex)
            $("#layer").show();
            $(".box_01").hide();
        }else{
            alert("请回答完测试问题")
        }
    })
})


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


