// cnzz siteid
var siteid = 1268030396;

//var _sns = _sns || [];
//声明_czc对象:
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if(siteid){
   document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
}

$(document).ready(function(){
    var timeOutEvent=0;
    var touchArea = document.getElementById("erWeiMa");
    touchArea.addEventListener("touchstart",function (e){
        timeOutEvent = setTimeout("longPress()",400);
    });
    touchArea.addEventListener("touchmove",function (e){
        clearTimeout(timeOutEvent);
        timeOutEvent = 0;
    });
    touchArea.addEventListener("touchend",function (e){
        clearTimeout(timeOutEvent);
        if(timeOutEvent!=0){
            // alert("你这是点击，请长按识别图中二维码！");
        }
        return false;
    });
})

function longPress(){
    timeOutEvent = 0;
    _czc.push(["_trackEvent", "长按", "识别二维码", stxlwx, 1]);
}









    