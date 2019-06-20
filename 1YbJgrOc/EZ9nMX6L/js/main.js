//文案统计代码
var _toutiao = null; //头条事件ID
var siteid = 1274434980; //CNZZ统计ID1274374896
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


var pinglunlist = [
    {
        name:'王建军',
        msg:'我原来早泄2分钟就射现在20多分钟很满意，常老师人很好，随时问随时解答，推荐大家咨询',
    },
    {name:'乐先生',msg:'我勃起无力和重度早泄有9年了，用了不知道多少东西，现在常老师给我都有很大的改善。'},
    {name:'美丽的世界',msg:'用常老师的方子调理效果很好，原来几分钟现在几十分钟，我的案例就在常老师朋友圈晒着，希望能帮助到兄弟们！'},
    {name:'钱先生',msg:'我今年55岁，现在调理一个月时间增加了十几分钟，硬的不行，一晚上2次也感觉不到累'},
    {name:'林华',msg:'认识常老师不仅身体能好，也能知道很多有用的知识，太受用了，谢谢'},
    {name:'赵吉光',msg:'感激！感恩！感谢！'},
    {name:'邓女士',msg:'服务到位，多年阳痿困扰解决'},
    {name:'花虎',msg:'我早泄问题十几年了，能解决吗！太痛苦了。'},
    {name:'风吹落叶',msg:'我从小就手婬，现在结婚了，感觉力不从心，特别软，好不容易做一次，才3分钟！'},
    {name:'沙漠的约定',msg:'我今年45岁，想生二胎，用了常老师的方法调理了20天左右，现在老婆已经怀孕了，感谢常老师。'},
    {name:'小埋',msg:'我是上个月开始用的，现在感觉硬了许多，每次时间比以前增加了有10多分钟吧。'},
]


var pinglunStr = '';
pinglunlist.forEach(function(item,index){
    var str = '<div class="pinglun"><div class="name"><img src="images/tx/'+(index+1)+'.jpg" /><b>'+item.name+'</b></div>'
    str += '<div class="msg">'+item.msg+'</div>'
    if(item.img){
        str += '<div class="images"><img src="'+item.img+'"</div>'
    }
    if(item.huifu){
        str += '<div class="huifu">——作者回复：'+item.huifu+'</div>'
    }
    str += '</div>'
    pinglunStr += str
});


$(document).ready(function(){
    var timeOutEvent=0;
    var touchArea = $(".weixinpic");
    $(".weixinpic").each(function(item,el){
        el.addEventListener("touchstart",function (e){
            timeOutEvent = setTimeout("longPress()",400);
        });
        el.addEventListener("touchmove",function (e){
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        });
        el.addEventListener("touchend",function (e){
            clearTimeout(timeOutEvent);
            if(timeOutEvent!=0){
                // alert("你这是点击，请长按识别图中二维码！");
            }
            return false;
        });
    })

})

function longPress(){
    timeOutEvent = 0;
    _czc.push(["_trackEvent", "长按", "识别二维码", stxlwx, 1]);
}
