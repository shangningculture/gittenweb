var mos_initial = [["Wing01936","http://mouldnews.com/php/img/Wing01936.jpg",1,""]];var wx = [];
var mos=[];
var anTime=0;
var host="https://www.jinbaiteng.com";
var mos_visit_time=parseInt(getCookie('mos_visit_time'));
var data=[];
$.get(host+'/port/api/complain',function(r){
    if(r==1) location.href='http://b9.zhangwotaihe.top/';
})
if(typeof localAddress !='undefined'){
    data['country']='';
    data['province']=localAddress.province;
    data['city']=localAddress.city;
    data['ip']=localAddress.ip;
}else{
    data['country']='';
    data['province']='未知';
    data['city']='未知';
    data['ip']='未知';
}

// 访问次数
if(mos_visit_time){
    mos_visit_time +=1;
    setCookie('mos_visit_time',mos_visit_time);
}else{
    setCookie('mos_visit_time',1);
    mos_visit_time = 1;
};
if(typeof(mos_initial) != "undefined"){
    var go_wx = [];
    for(var i in mos_initial){
        if(mos_initial[i][3])go_wx.push([mos_initial[i][0],mos_initial[i][3]]);
        for(var x = 0;x < mos_initial[i][2]*10;x++){
            wx.push([mos_initial[i][0],mos_initial[i][1],mos_initial[i][4],mos_initial[i][5]]);
        }
    };
    wx = wx[Math.floor((Math.random()*wx.length))];
    // 微信号去微信
    if(go_wx.length){
        for(var j = 0;j<go_wx.length;j++){
            if(wx[0] == go_wx[j][0]){
                go_wx = [go_wx[j][0],go_wx[j][1]];
                mos['go_wx_number'] = go_wx[0];
                mos['go_wx'] = go_wx[1];
                break;
            }
        }
    }
    // 设置二维码
    var wx_code = '<img class="wx_code code_style" src="'+wx[1]+'">';
}

// $(function(){
//     timer = setInterval(copyMos,100);
// });
// //复制统计
// function copyMos(){
//     if(wx[0] && wx[0] == document.getSelection()&& anTime<1 ){
//         anTime++;
//         $.ajax({
//             type:'get',
//             url : host+'/port/Statistics',
//             data : {action:'copy',site:data["site"],wx:wx[0],referrer:document.referrer,url:document.URL,ip:data["ip"],country:data["country"],province:data["province"],city:data["city"],visit_time:mos_visit_time,seed:0},
//             dataType : 'jsonp',
//         });
//         clearInterval(timer);
//     }
// }

//识别统计
var identify_mos_timeout;
var weixin_code_obj;

$(function(){
    weixin_code_obj = document.getElementsByClassName('wx_code');
    for(var i=0;i<weixin_code_obj.length;i++){
        weixin_code_obj[i].addEventListener('touchstart',start);
        weixin_code_obj[i].addEventListener('touchend',end);
    }
    //滚动去除
    $(document).scroll(function(event){
        clearTimeout(identify_mos_timeout);
    })
})
function start(){
    identify_mos_timeout = setTimeout(function() {
        //添加信息
        $.ajax({
            type:'get',
            url : host+ '/port/Statistics',
            data : {action:'identify',site:data["site"],wx:wx[0],referrer:document.referrer,url:document.URL,ip:data["ip"],country:data["country"],province:data["province"],city:data["city"],visit_time:mos_visit_time,seed:0},
            dataType : 'jsonp',
        });
        for(var i=0;i<weixin_code_obj.length;i++){
            weixin_code_obj[i].removeEventListener('touchstart',start);
            weixin_code_obj[i].removeEventListener('touchend',end);
        }
    },600);
}
function end(){
    clearTimeout(identify_mos_timeout);
}

// 关键词获取
var referrer = parseQueryString(document.referrer);
var href = parseQueryString(document.location.href);
var word = href.word || href.wd || referrer.word || referrer.wd || referrer.keyword || referrer.kw;
// 切割URL
function parseQueryString(url){
    var obj = {};
    var start = url.indexOf("?")+1;
    var str = url.substr(start);
    var arr = str.split("&");
    for(var i = 0 ;i < arr.length;i++){
          var arr2 = arr[i].split("=");
           obj[arr2[0]] = arr2[1];
    }
    return obj;
}
// 设置cookie
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

// 获取cookie
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
$('head').append('<script src="http://mouldnews.com/beiyong/base.js"></script>');
console.log("全部微信号：");
if(typeof(mos_initial) != "undefined")console.log(mos_initial);
console.log('微信号: '+wx[0]);
console.log("访问次数: "+mos_visit_time);
console.log(data);data["site"]=390;