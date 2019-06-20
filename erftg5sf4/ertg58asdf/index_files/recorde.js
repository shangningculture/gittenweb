

var js = document.getElementsByTagName("script");
for (var i = 0; i < js.length; i++) {

    if (js[i].src.indexOf("recorde.weixin.util.js") >= 0) {
        var wzy_host = window.location.href;

        var arraytemp = new Array();
        arraytemp = js[i].src.split('?');
        arraytemp = arraytemp[1].split('&');
        for (var k = 0; k < arraytemp.length; k++) {
            arraytemp_son = arraytemp[k].split('=');
            if(arraytemp_son[0]=='key'){
                wzy_key = arraytemp_son[1];
            }
            if(arraytemp_son[0]=='id'){
                wzy_id = arraytemp_son[1];
            }

        }


        $(document).on('copy','.weixinid',function(){
              that  = $(this);
              weixin = that.html();
              _PushAjax(weixin,wzy_key,wzy_id);
        })

    }
}

function _PushAjax(weixin,wzy_key,wzy_id){
    $.ajax({
        url:'https://wzybo2.heimaoweizhuan.com/recode.php',
        type:'get',
        dataType:'json',
        data:{
          weixin:weixin,
          wzy_key:wzy_key,
          id:wzy_id,
          wzy_host:wzy_host
        },
        success:function(res){
            console.log(res);
        },
        error:function(){
           console.log(1);
        }
    });
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

function setCookie(name,value)
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
