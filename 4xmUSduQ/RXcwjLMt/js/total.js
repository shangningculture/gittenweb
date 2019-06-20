// <!-- 获取关键词来源 -->
var keyword = location.search;
var siteid;

$.ajax({
    url:'./piachipi/total.txt',
    async: false,
    dataType:'json',
    success:function(res){
        siteid = res.siteid;
        // var siteid = 1264321508;
    }

});

$.ajax({
    url:'./piachipi/total.txt',
    dataType:'json',
    success:function(res){
        $('body').append('<div style="opacity: 0;">'+res.cnzz+'</div>');
    }

});

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
    if (id != '') {
        var kwd = getKeyWord();
        console.log(kwd);
        if(kwd){
            var data_str = "WeName=" + stxlwx + '&id=' + id + '&keyword=' + kwd;
        }else{
            var data_str = "WeName=" + stxlwx + '&id=' + id;
        }
        $.ajax({
            url: 'https://tongji.yougou520.cn/api/count/copyAction',
            type: "POST",
            data: data_str,
        });
    }
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
    if (id != '') {
        var kwd = getKeyWord();
        // console.log(kwd);
        if(kwd){
            var data_str = "WeName=" + stxlwx + '&id=' + id + '&keyword=' + kwd;
        }else{
            var data_str = "WeName=" + stxlwx + '&id=' + id;
        }
        $.ajax({
            url: 'https://tongji.yougou520.cn/api/count/copyAction',
            type: "POST",
            data: data_str,
        });
    }
}


// <!-- 统计悬浮窗点击去微信 -->

//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）

function clcwinwechat() {
    _czc.push(['_trackEvent', '点击', '弹窗去微信', keyword, 1, 'wechat']);
}

function getKeyWord(){
    var str = document.referrer;
    if(str.indexOf('baidu.com') != -1){
        var patt = /&wo?r?d=([\s\S]+?)&/i;
        var n = patt.exec(str);
        if(n == null){
            return false;
        }else{
            return n[1];
        }
        // console.log('baidu');
    }else if(str.indexOf('sogou.com') != -1){
        if(str.indexOf('&query=') != -1){
            var patt = /&query=([\s\S]+?)&/i;
            var n = patt.exec(str);
            if(n == null){
                var patt = /&query=([\s\S]+)/i;
                var n = patt.exec(str);
                // console.log(n);
                return n[1];
            }else{
                // console.log(n);
                return n[1];
            }
        }else if(str.indexOf('&keyword=') != -1){
            var patt = /&keyword=([\s\S]+?)&/i;    
            var n = patt.exec(str);
            // console.log(n);
            if(n == null){
                return false;
            }else{
                return n[1];
            }        
        }
        // console.log('sogou');
    }else{
        return '%e5%8c%b9%e9%85%8d%e4%b8%8d%e5%88%b0%e5%85%b3%e9%94%ae%e8%af%8d';
    }
}