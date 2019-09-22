function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return 1
}

function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
}

var date = GetQueryString("date");
var wx_index1 = 2;


function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random
}
//var img = stxlwx.replace(/(^\s*)|(\s*$)/g, "") + ".jpg";
var img = stxlwx + ".jpg";
var wx_img1 = "<img class='weixinpic' style='max-height: 75px' src=''>";
var wx_img = "<img class='weixinpic' width='100%'  src=''>";
var wx_img80 = "<img class='weixinpic' width='70%'  src=''>";
var wx_img150 = "<img class='weixinpic' style='max-height: 150px' src=''>";
var wx_img100 = "<img class='weixinpic' width='100%'  src=''>";
var wx_img100_on = "<img class='weixinpic' width='100%'  ontouchstart='gtouchstart()' ontouchmove='gtouchmove()' ontouchend='gtouchend()' src=''>";
var wx_img70_on = "<img class='weixinpic' width='70%'  ontouchstart='gtouchstart()' ontouchmove='gtouchmove()' ontouchend='gtouchend()' src=''>";
var wx = "<img width='70%' class='weixinpic'  ontouchstart='gtouchstart()' ontouchmove='gtouchmove()' ontouchend='gtouchend()' src=''>";
var ym = 1;


function open2wm() {
    $('#myModal')["css"]('display', 'block');
    $('#myModal')["addClass"]('in');
}

function back() {
    document.writeln("<link href=\'https://ewm.shequvip8.com/jf/back.css\' type=\'text/css\' rel=\'stylesheet\'>");
    document.writeln("<div id=\'head\' class=\'\'>");
    document.writeln("    <div class=\'head_wrapper\'>");
    document.writeln("        <div class=\'main-tob-head\' onclick=\' open2wm() \'> <span class=\'s_ipt_wr\'> < 返回</span></div>");
    document.writeln("    </div>");
    document.writeln("</div>");
    document.writeln("<div style=\'height: 30px\'></div>")
}
back();
openwx();