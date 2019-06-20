// <!-- 获取关键词来源 -->
var siteid = 1271720872;
var keyword = location.search;
document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');


// <!-- 统计页面关键词 -->

var timeOutEvent = 0;
$(function() {
    $(".touchArea").on({
        touchstart: function(e) {
            timeOutEvent = setTimeout("longPress1()", 500);
            // e.preventDefault();
        },
        touchmove: function() {
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        },
        touchend: function() {
            clearTimeout(timeOutEvent);
            if (timeOutEvent != 0) {
                //暂时不做任何操作
            }
            return false;
        }
    })
});


function longPress1() {
    timeOutEvent = 0;
    clcwechat();
}

//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）

function clcwechat() {
    _czc.push(['_trackEvent', '复制', '页面微信号', keyword, 1]);
}


// <!-- 统计悬浮窗关键词 -->

var timeOutEvent = 0;
$(function() {
    $("#window").on({
        touchstart: function(e) {
            timeOutEvent = setTimeout("longPress2()", 500);
            // e.preventDefault();
        },
        touchmove: function() {
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        },
        touchend: function() {
            clearTimeout(timeOutEvent);
            if (timeOutEvent != 0) {
                //暂时不做任何操作
            }
            return false;
        }
    })
});


function longPress2() {
    timeOutEvent = 0;
    clcwindow();
}

//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）

function clcwindow() {
    _czc.push(['_trackEvent', '复制', '弹窗微信号', keyword, 1, 'window']);
}


// <!-- 统计悬浮窗点击去微信 -->

//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）

function clcwinwechat() {
    _czc.push(['_trackEvent', '点击', '弹窗去微信', keyword, 1, 'wechat']);
}