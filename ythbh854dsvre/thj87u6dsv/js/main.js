//文案统计代码
// var arr_wx = ['aac7756'];
// var wx_index = Math.floor((Math.random() * arr_wx.length));
// var stxlwx = arr_wx[wx_index];
var _toutiao = null;//头条事件ID
var siteid = 1273588605;//CNZZ统计ID
var stxlwx = stxlwx || '';
var stxlwxs = stxlwx || '';
console.log('CNZZ查看链接：http://new.cnzz.com/v1/login.php?siteid='+siteid);
stxlwx = '<span class="weixin" oncopy="copy(\'长按复制\')">' + stxlwx + '</span>';
if(location.hash === '#CNZZ' && siteid){
   window.location.href = 'http://new.cnzz.com/v1/login.php?siteid='+siteid;
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
//长按复制去微信
function copy(xw) {
    if (_toutiao) {
        _taq.push({
            convert_id: _toutiao,
            event_type: "wechat"
        });
    }
    _sns.push(stxlwxs, keyword);
    _czc.push(['_trackEvent', xw, stxlwxs, keyword, 1]);
    window.location.href="weixin://"
    console.info('copy in success');
}
if(_toutiao){
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
var pinglunlist = [
    {
        name:'笑看人生',
        msg:'以前掉发特别严重😫现在掉发少了很多，用到了第三瓶了，额前的小碎发看着长出来了。'
    },
    {
        name:'冲上云霄',
        msg:'我老伴也说我头发比之前好多了，感觉好像比之前要稠密很多，我再坚持用一段时间看情况如何，到时候我身边的朋友很多都介绍来用。'
    },
    {
        name:'香烟',
        msg:'头发油的没有以前那么快了，洗头掉发也少了，但是感觉没怎么长头发出来，这是什么情况呢?',
        huifu:'这是很好的一个前兆，毛囊的修复周期一般要两道三个月，一定要坚持使用下去，严格按照指导的用药方法，相信你一定会长出头发来的。💪'
    },
    {
        name:'随波逐流',
        msg:'现在不怎么掉头发了，掉几根应该属于正常的姓陈代谢，现在新长出来的头发比以前好太多了。摸着有些硬，扎手。'
    },
    {
        name:'M先生dd',
        msg:'这药品控油效果很好，第一天用，头皮上用手一摸，手上油腻，喷过药之后，一天都看不见头皮出油了。可是头发大概多久能长出来？',
        huifu:'你这种情况已经有效果了，一定要坚持使用，你吸收效果这么好，大概在两个月左右就能长出来。'
    },
    {
        name:'承诺一生',
        msg:'以前抱着试一下的心态买了，以前被骗了太多次，就想着说再治不好就不治了，没想到这个效果这么好，用了大半年，头发就长出来了，使用方法也简单，我发自内心的感谢斯亚旦。💗💗💗'
    },
    {
        name:'一个人的旅行',
        msg:'我用了三个月左右，头发掉的减少了，但是新长出来的头发毛绒绒的，发黄是什么情况?😳',
        huifu:'恭喜你啊 头发已经长出来了，你一定要坚持使用，头发会越来越黑，越来越粗。😉'
    },
    {
        name:'万中无一',
        msg:'头发油的没有以前那么快了，洗头掉发也少了，用了差不多三个月，头发就长出来了，感谢斯亚旦，有脱发问题的朋友们赶紧添加微信：' + '，你一定会有意想不到的收获。'
    }
]


var pinglunStr = '';
pinglunlist.forEach(function(item,index){
    var str = '<div class="pinglun"><div class="name"><img src="images/tx/'+(index+1)+'.png" /><b>'+item.name+'</b></div>'
    str += '<div class="msg">'+item.msg+'</div>'
    if(item.huifu){
        str += '<div class="huifu">————作者回复：'+item.huifu+'</div>'
    }
    str += '</div>'
    pinglunStr += str
});



$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
    });
});
$(document).ready(function(){
	$('.alert').click(function(){
		$('.alert').fadeOut();
	});
	$('.alert_cont').click(function(event){
	event.stopPropagation();
	});
});