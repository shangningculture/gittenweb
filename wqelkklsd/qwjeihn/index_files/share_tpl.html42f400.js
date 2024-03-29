define("appmsg/topic_tpl.html.js",[],function(){
return'<span class="db topic_wrp">\n    <span class="topic_thumb" style="background-image:url({img_url});"></span>\n    <span class="topic_content">\n        <strong class="topic_title">{title}</strong>\n        <span class="topic_desc">{author}</span>\n        <span class="topic_info">\n            <span class="topic_info_extra"><span class="icon_topic"></span>话题</span>\n            <span class="topic_info_primary">相关文章{msg_num}篇</span>\n        </span>\n    </span>\n</span>\n';
});define("pages/weapp_tpl.html.js",[],function(){
return'<!-- <span class="weapp_card flex_context">\n    <span class="weapp_card_hd">\n        <span class="radius_avatar weapp_card_avatar">\n            <img src="<#=avatar#>">\n        </span>\n    </span>\n    <span class="weapp_card_bd flex_bd">\n        <strong class="weapp_card_nickname"><#=nickname#></strong>\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span> -->\n<span class="weapp_card app_context appmsg_card_context">\n    <span class="weapp_card_bd">\n        <span class="weapp_card_profile flex_context">\n            <span class="radius_avatar weapp_card_avatar">\n                <img src="<#=avatar#>">\n            </span>\n            <span class="weapp_card_nickname flex_bd"><#=nickname#></span>\n        </span>\n        <span class="weapp_card_info">\n            <span class="weapp_card_title"><#=title#></span>\n            <span class="weapp_card_thumb_wrp" style="background-image:url(<#=imageUrl#>);"></span>\n        </span>\n    </span>\n    <span class="weapp_card_ft">\n        <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n    </span>\n</span>\n';
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
var n=[],t={};
return t.setAvg=function(e,i,r){
return n.push(e+"_"+i+"_"+r),n.push(e+"_"+(i-1)+"_1"),t;
},t.setSum=function(e,i,r){
return n.push(e+"_"+i+"_"+r),t;
},t.send=function(){
if(0!=n.length){
var t=[];
for(t.push(n.splice(0,60));n.length>0;)t.push(n.splice(0,60));
n=[];
for(var e=0,i=t.length;i>e;e++){
var r=new Image;
r.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+t[e].join(";")+"&t="+Math.random();
}
}
},t;
});define("pages/voice_tpl.html.js",[],function(){
return'<span class="js_audio_frame db">\n    <#if(show_not_support===true){#>\n    <span class="db">当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放</span>\n    <#}#>\n    <span aria-labelledby="语音" id="voice_main_<#=voiceid#>_<#=posIndex#>" class="share_audio_context flex_context pages_reset" <#if(!musicSupport){#>style="display:none;"<#}#>>\n        <span id="voice_play_<#=voiceid#>_<#=posIndex#>" aria-labelledby="播放开关" class="db share_audio_switch"><em class="icon_share_audio_switch" role="button"></em></span>\n        <span id="voice_detail_<#=voiceid#>_<#=posIndex#>" class="share_audio_info flex_bd db">\n            <strong id="voice_title_<#=voiceid#>_<#=posIndex#>" class="share_audio_title" aria-describedby="语音标题" role="link"><#=title#></strong>\n            <#if(!!nickname){#>\n            <span id="voice_author_<#=voiceid#>_<#=posIndex#>" class="share_audio_tips db">来自<#=nickname#></span>\n            <#}#>\n            <span id="voice_seekRange_<#=voiceid#>_<#=posIndex#>" class="db share_audio_progress_wrp">\n                <span class="db share_audio_progress">\n                    <span id="voice_progress_<#=voiceid#>_<#=posIndex#>" style="width:0%" class="share_audio_progress_inner"></span>\n                    <span id="voice_buffer_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_buffer" style="width:0%;"></span>\n                    <span id="voice_loading_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_loading" style="display:none;">\n                        <span class="share_audio_progress_loading_inner"></span>\n                    </span>\n                </span>\n                <span id="voice_playdot_<#=voiceid#>_<#=posIndex#>" class="share_audio_progress_handle" style="display:none;left:0%;"></span>\n            </span>\n            <span class="share_audio_desc db" aria-labelledby="时长">\n                <em id="voice_playtime_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_current" aria-hidden="true">00:00</em>\n                <em id="voice_duration_<#=voiceid#>_<#=posIndex#>" class="share_audio_length_total"><#=duration_str#></em>\n            </span>\n        </span>\n    </span>\n</span>\n';
});define("pages/kugoumusic_ctrl.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function r(e,r){
for(var t,a=[/^http(s)?:\/\/singerimg\.kugou\.com([\/?].*)*$/i,/^http(s)?:\/\/imge\.kugou\.com([\/?].*)*$/i],o=!1,c=0;t=a[c++];)if(t.test(e.albumurl)){
o=!0;
break;
}
return o||(e.albumurl=""),e.detailUrl="https://m3ws.kugou.com/kgsong/"+e.jumpurlkey+".html?fromweixin=",
e.webUrl=e.detailUrl,e.musicIcon=i.musicIcon,e.media_id=e.musicid,e.type=1*r.scene===0?5:1*r.scene===1?6:9,
e;
}
function t(e,r){
var t=e,a=t.otherid+(t.albumid||""),c=i.cache[a];
return c&&"function"==typeof r.callback?void r.callback(c):void(i.submiting[a]!==!0&&(i.submiting[a]=!0,
o({
akey:t.otherid,
albumid:t.albumid||"",
onSuc:function(e){
i.submiting[a]=!1,i.cache[a]=e,"function"==typeof r.callback&&r.callback(e);
},
onError:function(){
i.submiting[a]=!1,"function"==typeof r.callback&&r.callback({
canplay:!1,
msg:"系统繁忙，请稍后再试。返回码：-1",
status:-1,
play_url:"",
duration:0
});
}
})));
}
function a(e){
var r=!0,t="";
switch(1*e){
case 0:
r=!0;
break;

case 1:
r=!1,t="该歌曲版权已过期，无法播放。";
break;

case 1002:
r=!1,t="系统错误，请稍后再试。";
break;

case 1001:
r=!1,t="系统错误，请稍后再试。";
break;

default:
r=!1,t="系统错误，请稍后再试。";
}
return t&&(t+="错误码："+e),{
canplay:r,
msg:t
};
}
function o(e){
u.setSum(i.reportId,87,1),u.send();
var r=+new Date,t="/mp/getkugousong?params=#params#",o=[{
akey:e.akey,
albumid:e.albumid||""
}];
t=t.replace("#params#",encodeURIComponent(JSON.stringify(o))),s({
url:t,
type:"GET",
dataType:"json",
success:function(t){
var o=+new Date-r;
if(!t||"undefined"==typeof t.errcode){
var u=1;
return c({
type:"error",
time:o,
code:u
}),void("function"==typeof e.onError&&e.onError({
errcode:u
}));
}
var s=0,i="";
0==t.errcode?t.data&&t.data[0]&&t.data[0].url?(s=0,i=t.data[0].url):s=1001:s=1==t.errcode?1:1002,
c({
type:"success",
time:o,
code:s
});
var n=a(s);
e.onSuc({
canplay:n.canplay,
msg:n.msg,
errcode:s,
play_url:i
});
},
error:function(){
var t=+new Date-r,a=2;
c({
type:"error",
time:t,
code:a
}),"function"==typeof e.onError&&e.onError({
errcode:a
});
}
});
}
function c(e){
var r=Math.max(e.time,0);
if(r=Math.min(r,1e4),r>=0&&500>r?u.setSum(i.reportId,98,1):r>=500&&1e3>r?u.setSum(i.reportId,99,1):r>=1e3&&2e3>r?u.setSum(i.reportId,100,1):r>=2e3&&5e3>r?u.setSum(i.reportId,101,1):r>=5e3&&1e4>=r&&u.setSum(i.reportId,102,1),
"error"==e.type){
switch(1*e.code){
case 1:
u.setSum(i.reportId,94,1);
break;

case 2:
u.setSum(i.reportId,91,1);
break;

case 3:
u.setSum(i.reportId,92,1);
break;

case 4:
u.setSum(i.reportId,93,1);
}
u.setSum(i.reportId,88,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
u.setSum(i.reportId,95,1);
break;

case 0:
u.setSum(i.reportId,97,1);
break;

case 1002:
u.setSum(i.reportId,96,1);
break;

case 1001:
u.setSum(i.reportId,103,1);
}
u.setSum(i.reportId,89,1);
}
u.send();
}
var u=e("biz_common/utils/monitor.js"),s=e("biz_wap/utils/ajax.js"),i={
reportId:"28306",
musicIcon:window.icon_kugou_source||"",
cache:{},
submiting:{}
};
return{
initData:r,
getPlayUrl:t
};
});define("pages/qqmusic_ctrl.js",["biz_common/utils/monitor.js","pages/player_adaptor.js","pages/loadscript.js"],function(e){
"use strict";
function t(e,t){
if(/^http(s)?:\/\//i.test(e.albumurl)){
for(var r,a=[/^http(s)?:\/\/imgcache\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/y\.gtimg\.cn([\/?].*)*$/i],i=!1,s=0;r=a[s++];)if(r.test(e.albumurl)){
i=!0;
break;
}
i||(e.albumurl="");
}else{
var o=e.albumurl.split("/");
try{
o=o[o.length-1],o=o.split(".")[0];
}catch(n){
o="";
}
e.albumurl=o?m.imgroot2.replace("#mid#",o):m.imgroot+e.albumurl;
}
return e.albumurl=e.albumurl.replace("mid_album_68","mid_album_90").replace("68x68","90x90"),
e.musicIcon=m.musicIcon,e.type=1*t.scene===0?0:1*t.scene===1?1:8,c.inQMClient?(e.allowPause=!0,
e.detailUrl="",e.pauseCss="qqmusic_playing_pause",e.webUrl=e.detailUrl):(e.allowPause=!1,
e.pauseCss="",e.detailUrl=["http://i.y.qq.com/v8/playsong.html?referFrom=music.qq.com&songid=",e.musicid,"&songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),
e.webUrl=e.detailUrl),e;
}
function r(e,t){
var r=e,a=m.cache[r.songId];
return c.inQMClient?void t.callback({
canplay:!0,
play_url:"https://www.qq.com"
}):a&&"function"==typeof t.callback?void t.callback(a):void(m.submiting[r.songId]!==!0&&(m.submiting[r.songId]=!0,
i({
id:r.songId,
mid:r.mid,
onSuc:function(e){
m.submiting[r.songId]=!1,m.cache[r.songId]=e,"function"==typeof t.callback&&t.callback(e);
},
onError:function(){
m.submiting[r.songId]=!1,"function"==typeof t.callback&&t.callback({
canplay:!1,
msg:"系统繁忙，请稍后再试。返回码：-1",
status:-1,
play_url:"",
duration:0
});
}
})));
}
function a(e){
var t=!0,r="";
switch(1*e){
case 0:
t=!0;
break;

case 1:
t=!1,r="该歌曲版权已过期，无法播放。";
break;

case 2:
t=!1,r="抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务。";
break;

case 3:
t=!1,r="该歌曲版权已过期，无法播放。";
break;

case 4:
t=!1,r="抱歉，歌曲信息不正确。";
break;

case 5:
t=!1,r="系统错误，请稍后再试。";
break;

case 6:
t=!1,r="系统错误，请稍后再试。";
break;

case 7:
t=!1,r="此音乐需付费播放，可到QQ音乐收听。";
break;

default:
t=!1,r="系统错误，请稍后再试。";
}
return r&&1*e!==7&&(r+="错误码："+e),{
canplay:t,
msg:r
};
}
function i(e){
o.setSum(m.reportId,18,1),o.send();
var t=+new Date,r="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
r=r.replace("#mid#",e.mid).replace("#songid#",e.id),n({
url:r,
timeout:1e4,
callbackName:"get_song_info_back",
callback:function(r){
var i=+new Date-t;
if(!r||"undefined"==typeof r.ret){
var o=1;
return s({
type:"error",
time:i,
code:o
}),void("function"==typeof e.onError&&e.onError({
errcode:o
}));
}
var c;
c=0==r.ret?r.play_url?0:6:1001==r.ret?1:1002==r.ret?2:1003==r.ret?3:1004==r.ret?4:1005==r.ret?7:5,
s({
type:"success",
time:i,
code:c
});
var n=a(1*c);
e.onSuc({
canplay:n.canplay,
msg:n.msg,
status:c,
play_url:r.play_url||"",
duration:r.song_play_time||0
});
},
onerror:function(r){
var a=+new Date-t,i=4;
switch(1*r){
case 400:
i=2;
break;

case 500:
i=3;
break;

default:
i=4;
}
s({
type:"error",
time:a,
code:i
}),"function"==typeof e.onError&&e.onError({
errcode:i
});
}
});
}
function s(e){
var t=Math.max(e.time,0);
if(t=Math.min(t,6e4),e.time>=0&&e.time<200?o.setSum(m.reportId,24,1):e.time>=200&&e.time<500?o.setSum(m.reportId,25,1):e.time>=500&&e.time<1e3?o.setSum(m.reportId,26,1):e.time>=1e3&&e.time<2e3?o.setSum(m.reportId,27,1):e.time>=2e3&&e.time<1e4?o.setSum(m.reportId,28,1):e.time>=1e4&&o.setSum(m.reportId,29,1),
o.setAvg(m.reportId,23,t),"error"==e.type){
switch(1*e.code){
case 1:
o.setSum(m.reportId,9,1);
break;

case 2:
o.setSum(m.reportId,10,1);
break;

case 3:
o.setSum(m.reportId,11,1);
break;

case 4:
o.setSum(m.reportId,12,1);
}
o.setSum(m.reportId,19,1);
}else if("success"==e.type){
switch(1*e.code){
case 1:
o.setSum(m.reportId,8,1);
break;

case 0:
o.setSum(m.reportId,17,1);
break;

case 2:
o.setSum(m.reportId,13,1);
break;

case 3:
o.setSum(m.reportId,14,1);
break;

case 4:
o.setSum(m.reportId,15,1);
break;

case 5:
o.setSum(m.reportId,16,1);
break;

case 6:
o.setSum(m.reportId,47,1);
}
o.setSum(m.reportId,20,1);
}
o.send();
}
var o=e("biz_common/utils/monitor.js"),c=e("pages/player_adaptor.js"),n=e("pages/loadscript.js"),m={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_90",
imgroot2:"https://y.gtimg.cn/music/photo_new/T002R90x90M000#mid#.jpg",
reportId:"28306",
musicIcon:window.icon_qqmusic_source||"",
cache:{},
submiting:{}
};
return{
initData:t,
getPlayUrl:r
};
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/music_player.js","pages/player_adaptor.js","biz_common/dom/class.js","pages/report.js","biz_common/utils/monitor.js","pages/music_report_conf.js","biz_wap/utils/openUrl.js","pages/qqmusic_ctrl.js","pages/kugoumusic_ctrl.js"],function(e,t,a,o){
"use strict";
function r(){
C.hasInit||(p(),s(),c(),C.hasInit=!0);
}
function n(e){
r(),this._o={
protocal:"",
wxIndex:0,
type:0,
comment_id:"",
src:"",
jsapi2Src:"",
mid:"",
songId:"",
otherid:"",
albumid:"",
autoPlay:!1,
duration:0,
needVioceMutex:!0,
appPlay:!0,
title:"",
allowPause:!1,
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
musicbar_url:"",
playingCss:"",
pauseCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0,
playtimeDom:"",
loadingDom:"",
bufferDom:"",
playdotDom:"",
seekRange:"",
seekContainer:""
},this._init(e),C.allComponent.push(this);
}
function i(e,t,a,o){
C.num++,t.musicSupport=C.musicSupport,t.show_not_support=!1,C.musicSupport||1!=C.num||(t.show_not_support=!0);
var r=document.createElement("div"),n="";
if(n=h.tmpl(e,t),r.innerHTML=n,o===!0)a.appendChild(r.children[0]);else{
var i=a.parentNode;
if(!i)return;
i.lastChild===a?i.appendChild(r.children[0]):i.insertBefore(r.children[0],a.nextSibling);
}
}
function s(){
C.hasInit||v.inQMClient&&l("QMClient_pv",1);
}
function p(){
window.reportMid=[],window.reportVoiceid=[];
for(var e in I)if(I.hasOwnProperty(e)){
var t=I[e],a=t.split("_");
C.reportData2[e]={
id:a[0],
key:a[1],
count:0
};
}
}
function l(e,t){
C.reportData2[e]&&(t=t||1,C.reportData2[e].count+=t,C.debug&&console.log("addpv:"+e+" count:"+C.reportData2[e].count));
}
function c(){
f.on(window,"unload",d);
}
function d(){
D.triggerUnloadPlaying(),u();
for(var e=0,t=C.allComponent.length;t>e;e++){
var a=C.allComponent[e];
a.player&&"function"==typeof a.player.getPlayTotalTime&&(C.reportData[a._o.type].play_last_time[a._g.posIndex]=parseInt(1e3*a.player.getPlayTotalTime()));
}
for(var e in C.reportData)w.musicreport({
data:C.reportData[e]
});
p();
for(var e=0,t=C.allComponent.length;t>e;e++){
var a=C.allComponent[e];
a&&"function"==typeof a._initReportData&&a._initReportData(),a.player&&"function"==typeof a.player.resetPlayTotalTime&&a.player.resetPlayTotalTime();
}
}
function u(){
for(var e in C.reportData2)if(C.reportData2.hasOwnProperty(e)){
var t=C.reportData2[e];
t.count>0&&x.setSum(t.id,t.key,t.count);
}
x.send();
}
function g(e){
return new n(e);
}
function _(e){
if(isNaN(e))return"00:00";
e=Math.floor(e);
var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),o=e-3600*t-60*a;
return 0!=t?(10>t&&(t="0"+t),t+=":"):t="",10>a&&(a="0"+a),10>o&&(o="0"+o),t+a+":"+o;
}
function y(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function m(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
var f=e("biz_common/dom/event.js"),h=e("biz_common/tmpl.js"),D=e("pages/music_player.js"),v=e("pages/player_adaptor.js"),k=e("biz_common/dom/class.js"),w=e("pages/report.js"),x=e("biz_common/utils/monitor.js"),I=e("pages/music_report_conf.js"),b=e("biz_wap/utils/openUrl.js").openUrlWithExtraWebview,C={
allComponent:[],
hasInit:!1,
reportId:"28306",
musicSupport:D.getSurportType(),
debug:location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,
reportData:{},
posIndex:{},
num:0,
reportData2:{},
adapter:{
m:e("pages/qqmusic_ctrl.js"),
k:e("pages/kugoumusic_ctrl.js")
}
};
return n.prototype._init=function(e){
this._extend(e),this._g={
posIndex:void 0,
tag:"",
canDragBar:!1,
barDraging:!1,
canGoDetail:!0
},5==this._o.type||6==this._o.type||9==this._o.type?this._g.tag="k":this._o.type>=2&&this._o.type<=4?this._g.tag="v":7==this._o.type?this._g.tag="a":(0==this._o.type||1==this._o.type||8==this._o.type)&&(this._g.tag="m"),
this._initData(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer();
},n.prototype._initData=function(){},n.prototype._initQQmusicLyric=function(){
var e=this._o,t=this._g;
e.webUrl="m"==t.tag?e.webUrl.replace("#songId#",e.songId||"").replace("#referFrom#","music.qq.com"):e.webUrl.replace("#songId#","").replace("#referFrom#","");
},n.prototype._initReportData=function(){
var e=this._o,t=this._g;
"v"==t.tag?window.reportVoiceid.push(e.songId):"m"==t.tag&&window.reportMid.push(e.songId),
"undefined"==typeof C.reportData[e.type]&&(C.reportData[e.type]=w.getMusicReportData(e),
C.posIndex[e.type]=0),"undefined"==typeof t.posIndex&&(t.posIndex=C.posIndex[e.type]++);
var a=C.reportData[e.type];
a.musicid[t.posIndex]=e.songId,a.commentid[t.posIndex]=e.comment_id,a.hasended[t.posIndex]=0,
a.mtitle[t.posIndex]=e.title,a.detail_click[t.posIndex]=0,a.duration2[t.posIndex]=parseInt(1e3*e.duration),
a.errorcode[t.posIndex]=0,a.play_duration2[t.posIndex]=0,a.seek[t.posIndex]=0,a.seek_position[t.posIndex]=[],
a.play_last_time[t.posIndex]=0,a.local_time[t.posIndex]=0,a.seek_loaded[t.posIndex]=[];
},n.prototype._initPlayer=function(){
if(C.musicSupport){
var e=this,t=this._o,a=this._g.tag;
t.onStatusChange=this._statusChangeCallBack(),t.onTimeupdate=this._timeupdateCallBack(),
t.onError=this._errorCallBack(),t.onUpdateSeekRange=this._onUpdateSeekRange(),t.onAndroidForceH5=function(){
l("force_h5",1);
},t.onH5Begin2Play=function(){
l(a+"_pv",1),l(a+"_h5_pv",1);
},t.onH5Error=function(t,o){
l(a+"_h5_err_total",1),l(a+"_h5_err_"+o.code,1),e._reportH5Error({
type:1,
code:o.code
});
},t.onJsapi1Begin2Play=function(){
l(a+"_pv",1),l(a+"_wx_pv",1),l(a+"_wx_pv_1",1);
},t.onJsapi2Begin2Play=function(e,o){
l(a+"_pv",1),l(a+"_wx_pv",1),l(a+"_wx_pv_2",1),t.jsapi2Src&&t.jsapi2Src!=t.src&&l("aac_pv",1),
t.musicPlayerOnJsapi2Begin2Play&&t.musicPlayerOnJsapi2Begin2Play(o);
},t.onJsapi2PlaySuccess=function(e,a){
t.musicPlayerOnJsapi2PlaySuccess&&t.musicPlayerOnJsapi2PlaySuccess(a);
},t.onJsapi2Begin2PlayErr=function(){
if(l(a+"_wx_err_1",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_start_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
D.isAndroid?(w.logReport("",e.replace("#type#","android"),"ajax"),l("android_aac_err_1",1)):(w.logReport("",e.replace("#type#","ios"),"ajax"),
l("ios_aac_err_1",1));
}
},t.onJsapi2PlayingErr=function(){
if(l(a+"_wx_err_2",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_ing_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
D.isAndroid?(w.logReport("",e.replace("#type#","android"),"ajax"),l("android_aac_err_2",1)):(w.logReport("",e.replace("#type#","ios"),"ajax"),
l("ios_aac_err_2",1));
}
},t.onJsapi2PlayingStop=function(){
var e=a+"_stoped_";
e+=D.isAndroid?"android":"ios",l(e,1);
},t.onJsapi2PlayingPause=function(){
var e=a+"_paused_";
e+=D.isAndroid?"android":"ios",l(e,1);
},t.onSeekErr=function(){
if(l(a+"_seek_err",1),t.jsapi2Src&&t.jsapi2Src!=t.src){
var e="acc_seek_error;type:#type#;uin:"+(window.user_uin||"")+";playurl:"+t.jsapi2Src+";pageurl:"+location.href;
D.isAndroid?(w.logReport("",e.replace("#type#","android"),"ajax"),l("android_aac_err_3",1)):(w.logReport("",e.replace("#type#","ios"),"ajax"),
l("ios_aac_err_3",1));
}
},t.onUnloadPlaying=function(){
l(a+"_unload_wx_pv",1);
},t.onQMClientPlay=function(){
l("QMClient_play",1);
},t.onSeekNeed2Load=function(){
if(e.player&&e.player.surportSeekRange()&&t.playdotDom){
var a=C.reportData[e._o.type],o=a.seek_position[e._g.posIndex].length;
o>0&&(a.seek_loaded[e._g.posIndex][o-1]=1);
}
},t.onSeekNotNeed2Load=function(){
if(e.player&&e.player.surportSeekRange()&&t.playdotDom){
var a=C.reportData[e._o.type],o=a.seek_position[e._g.posIndex].length;
o>0&&(a.seek_loaded[e._g.posIndex][o-1]=0);
}
},v.create(this._o,{
callback:function(t){
e.player=t,e.afterCreatePlayer();
}
});
}
},n.prototype.afterCreatePlayer=function(){
this._playEvent();
},n.prototype.isInSeekrang=function(e){
var t=this._o.seekRange;
if(!t)return!1;
if(t===e)return!0;
for(var a=t.getElementsByTagName("*"),o=0,r=a.length;r>o;o++)if(a[o]===e)return!0;
return!1;
},n.prototype._playEvent=function(){
var e=this,t=this._o,a=this._g;
if(t.detailUrl&&t.detailArea&&f.on(t.detailArea,"click",function(r){
if(!a.barDraging&&a.canGoDetail){
var n=r.target||r.srcElement;
n&&e.isInSeekrang(n)||("v"==a.tag?(C.reportData[t.type].detail_click[a.posIndex]=1,
window.__second_open__?b(t.detailUrl):window.location.href=t.detailUrl):("m"==a.tag||"k"==a.tag)&&C.adapter[a.tag].getPlayUrl(t,{
callback:function(e){
e.canplay?(C.reportData[t.type].detail_click[a.posIndex]=1,window.__second_open__?b(t.detailUrl):window.location.href=t.detailUrl):e.msg&&setTimeout(function(){
o(e.msg);
},0);
}
}));
}
}),C.musicSupport){
var r=0,n=4,i=5;
switch(1*t.type){
case 0:
r=1;
break;

case 1:
r=13;
break;

case 8:
r=14;
break;

case 2:
r=3;
break;

case 3:
r=6;
break;

case 4:
r=7;
break;

case 5:
r=10;
break;

case 6:
r=15;
break;

case 7:
r=11;
break;

case 9:
r=12;
}
var s="";
s=t.allowPause?t.pauseCss||t.playingCss:t.playingCss,f.tap(t.playArea,function(){
return console.log("click playArea",k.hasClass(t.playCssDom,s)),k.hasClass(t.playCssDom,s)?(t.allowPause?e.player.pause():e.player.stop(),
w.report({
type:r,
comment_id:t.comment_id,
voiceid:t.songId,
action:i
})):"v"==a.tag||"a"==a.tag?e._playMusic(r,n):C.adapter[a.tag].getPlayUrl(t,{
callback:function(i){
i.canplay&&i.play_url?(i.duration&&(t.duration=i.duration,e.player.setDuration(t.duration),
C.reportData[t.type].duration2[a.posIndex]=parseInt(1e3*t.duration)),e.player.setSrc(i.play_url),
e._playMusic(r,n)):i.msg&&setTimeout(function(){
o(i.msg);
},0);
}
}),!1;
}),e._dragEvent();
}
},n.prototype._dragEvent=function(){
var e=this,t=this._o,a=this._g,o=t.seekRange;
if(o){
var r=0,n=o,i=!1,s=window.__zoom||1;
for(1!=s&&(i=!0);n&&n!=document.body;)r+=i?n.offsetLeft*s:n.offsetLeft,"page-content"==n.id&&(i=!1),
n=n.offsetParent;
var p=e.player.getDuration();
a.seekData={
zoom:s,
offsetLeft:r,
duration:p,
rangeWidth:o.offsetWidth,
startTime:0,
dragTime:0,
downX:0,
moveX:0
},f.on(o,"mousedown",function(t){
a.canDragBar&&(e._pointerDownHandler({
x:t.pageX||t.clientX
}),t.preventDefault());
}),f.on(t.seekContainer,"mousemove",function(t){
a.canDragBar&&a.barDraging&&(e._pointerMoveHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation());
}),f.on(document.body,"mouseup",function(t){
return a.canDragBar&&a.barDraging?(e._pointerUpHandler({
x:t.pageX||t.clientX
}),t.preventDefault(),t.stopPropagation(),!1):void 0;
}),f.on(o,"touchstart",function(t){
a.canDragBar&&(e._pointerDownHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault());
}),f.on(o,"touchmove",function(t){
return a.canDragBar&&a.barDraging?(e._pointerMoveHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),void t.stopPropagation()):void console.log("no can drag",a.canDragBar,a.barDraging);
}),f.on(o,"touchend",function(t){
return a.canDragBar&&a.barDraging?(e._pointerUpHandler({
x:t.changedTouches[0].clientX
}),t.preventDefault(),t.stopPropagation(),!1):void console.log("no can drag",a.canDragBar,a.barDraging);
});
}
},n.prototype._pointerDownHandler=function(e){
var t=this._g;
t.barDraging=!0,t.canGoDetail=!1,t.seekData.downX=e.x,t.seekData.startTime=this.player.getCurTime();
},n.prototype._pointerMoveHandler=function(e){
var t=this._g,a=t.seekData;
a.moveX=e.x;
var o=(a.moveX-a.offsetLeft)/a.zoom/a.rangeWidth;
o=Math.min(o,1),o=Math.max(o,0),a.dragTime=o*a.duration,a.dragTime!=a.startTime&&this._updateProgressBar(a.dragTime);
},n.prototype._pointerUpHandler=function(e){
var t=this._g,a=t.seekData;
a.dragTime||this._pointerMoveHandler({
x:e.x
}),console.log("up dragging",a.dragTime),t.barDraging=!1,this.player.seek(a.dragTime),
C.reportData[this._o.type].seek[t.posIndex]=1,C.reportData[this._o.type].seek_position[t.posIndex].push(parseInt(1e3*a.startTime)+","+parseInt(1e3*a.dragTime));
var o=C.reportData[this._o.type].seek_position[t.posIndex].length;
C.reportData[this._o.type].seek_loaded[t.posIndex][o-1]=0,t.seekData.startTime=0,
t.seekData.dragTime=0,t.seekData.downX=0,t.seekData.moveX=0,setTimeout(function(){
t.canGoDetail=!0;
},1e3);
},n.prototype._playMusic=function(e,t){
var a=this._o,o=this._g;
this.player.play(),C.reportData[a.type].hasended[o.posIndex]=1,0==C.reportData[a.type].local_time[o.posIndex]&&(C.reportData[a.type].local_time[o.posIndex]=parseInt(+new Date/1e3)),
w.report({
type:e,
comment_id:a.comment_id,
voiceid:a.songId,
action:t
});
},n.prototype._extend=function(e){
for(var t in e)this._o[t]=e[t];
},n.prototype._onUpdateSeekRange=function(){
var e=this,t=e._o,a=e._g;
return function(e){
this.surportSeekRange()&&t.bufferDom&&t.playdotDom?(a.canDragBar=!0,t.playdotDom.style.display="block",
t.bufferDom.style.width=1*e+"%"):(a.canDragBar=!1,t.playdotDom&&(t.playdotDom.style.display="none"));
};
},n.prototype._statusChangeCallBack=function(){
var e=this;
return function(t,a){
e._updatePlayerCss(this,a),e._o.musicPlayerStatusChange&&e._o.musicPlayerStatusChange(a);
};
},n.prototype._timeupdateCallBack=function(){
var e=this,t=this._o,a=this._g;
return function(o,r){
e._updateProgress(r),0!=r&&(C.reportData[t.type].play_duration2[a.posIndex]=parseInt(1e3*r));
};
},n.prototype._errorCallBack=function(){
var e=this,t=this._o,a=this._g;
return function(o,r){
C.reportData[t.type].errorcode[a.posIndex]=r.code,e._updatePlayerCss(this,3);
};
},n.prototype._reportH5Error=function(e){
if("mp.weixin.qq.com"==location.host&&1==e.type||C.debug){
var t=["code:",e.code,";type:",this._o.type,";url:",window.location.href];
this.player&&t.push(";src:"+this.player.getSrc());
var a=new Image;
a.src=["https://badjs.weixinbridge.com/badjs?level=4&id=112&msg=",encodeURIComponent(t.join("")),"&uin=",window.uin||"","&from=",this._o.type].join("");
}
},n.prototype._updatePlayerCss=function(e,t){
!!C.debug&&console.log("status:"+t);
{
var a=this._o,o=a.playCssDom;
a.progress;
}
2==t?(k.removeClass(o,a.playingCss),a.pauseCss&&k.removeClass(o,a.pauseCss),a.playdotDom&&(e.surportSeekRange()?(a.playdotDom.style.display="block",
this._g.canDragBar=!0):(a.playdotDom.style.display="none",this._g.canDragBar=!1))):3==t?(k.removeClass(o,a.playingCss),
a.pauseCss&&k.removeClass(o,a.pauseCss),a.playdotDom&&(a.playdotDom.style.display="none",
this._g.canDragBar=!1),this._updateProgress(0)):(1==t||4==t)&&(a.allowPause?k.addClass(o,a.pauseCss||a.playingCss):k.addClass(o,a.playingCss),
a.playdotDom&&(e.surportSeekRange()?(a.playdotDom.style.display="block",this._g.canDragBar=!0):(a.playdotDom.style.display="none",
this._g.canDragBar=!1))),a.loadingDom&&(a.loadingDom.style.display=4==t?"block":"none");
},n.prototype._updateProgress=function(e){
return this._g.barDraging?void console.log("no dragging return",e):void this._updateProgressBar(e);
},n.prototype._updateProgressBar=function(e){
var t=this._o,a=this.player,o=a.getDuration();
if(o){
var r=this._countProgress(o,e);
t.progress&&(t.progress.style.width=r),t.playtimeDom&&e>0&&(t.playtimeDom.innerHTML=_(e)),
t.playdotDom&&(t.playdotDom.style.left=r);
}
},n.prototype._countProgress=function(e,t){
return Math.min(t/e*100,100)+"%";
},n.prototype.destory=function(){
this.player&&this.player.destory();
},n.prototype.setOption=function(e){
e.duration&&(this._g.seekData.duration=e.duration),this._extend(e);
},n.prototype.setMusicPlayerOption=function(e){
e.duration&&this._g&&this._g.seekData&&(this._g.seekData.duration=e.duration),this.player&&this.player.setOption(e);
},n.prototype.getBackgroundAudioState=function(e){
return this.player.getBackgroundAudioState(e);
},{
init:g,
renderPlayer:i,
formatTime:_,
decodeStr:y,
encodeStr:m
};
});define("pages/qqmusic_tpl.html.js",[],function(){
return'<span id="qqmusic_main_<#=musicid#>_<#=posIndex#>" class="db qqmusic_area <#if(!musicSupport){#> unsupport<#}#>">\n    <span class="tc tips_global unsupport_tips" <#if(show_not_support!==true){#>style="display:none;"<#}#>>\n    当前浏览器不支持播放音乐或语音，请在微信或其他浏览器中播放    </span>\n    <span class="db qqmusic_wrp appmsg_card_context appmsg_card_active">\n        <span class="db qqmusic_bd">\n            <span id="qqmusic_play_<#=musicid#>_<#=posIndex#>" class="play_area">\n                <i class="icon_qqmusic_switch"></i>\n                <img src="<#=window.icon_qqmusic_default#>" alt="" class="pic_qqmusic_default">\n                <img src="<#=albumurl#>" data-autourl="<#=audiourl#>" data-musicid="<#=musicid#>" class="qqmusic_thumb" alt="">\n            </span>\n            <a id="qqmusic_home_<#=musicid#>_<#=posIndex#>" class="access_area">\n                <span class="qqmusic_songname"><#=music_name#></span>\n                <span class="qqmusic_singername"><#=singer#></span>\n                <span class="qqmusic_source"><img src="<#=musicIcon#>" alt=""></span>\n            </a>\n        </span>\n    </span>       \n</span>\n';
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(e){
"use strict";
var i;
if(parent==window)i=window;else try{
{
parent.window.location.href;
}
i=parent.window;
}catch(t){
i=window;
}
var n=i.user_uin,r=Math.floor(i.user_uin/100)%20;
n||(r=-1);
var a=function(){
return r>=0;
};
i.__webviewid||(i.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var e=i.mid,t=i.idx,r="";
r=e&&t?e+"_"+t:"";
var a=i.__webviewid,d=[n,r,a].join("_");
return d;
},o=function(i){
if(20>r)try{
var t=i.vid||"",n={};
n.__biz=parent.window.biz||"",n.vid=t,n.clienttime=+new Date;
var o=parent.window.mid,w=parent.window.idx,s="";
s=o&&w?o+"_"+w:t,n.type="undefined"!=typeof i.type?i.type:o&&w?1:2,n.id=s,n.hit_bizuin=i.hit_bizuin||"",
n.hit_vid=i.hit_vid||"",n.webviewid=d(),n.step=i.step||0,n.orderid=i.orderid||0,
n.ad_source=i.ad_source||0,n.traceid=i.traceid||0,n.ext1=i.ext1||"",n.ext2=i.ext2||"",
n.r=Math.random(),n.devicetype=parent.window.devicetype,n.version=parent.window.clientversion,
n.is_gray=a()?1:0,n.mid=o||"",n.idx=w||"",n.url=parent.window.location.href,n.screen_num=i.screen_num||0,
n.screen_height=i.screen_height||0,n.ori_status=i.ori_status||3,n.fromid=i.fromid||0,
n.sessionid=window.sessionid||"",n.appmsg_scene=window.source||(window.cgiData?window.cgiData.scene:0)||0,
n.total_range=i.total_range||0,n.current_range=i.current_range||0,n.duration=i.duration||0;
var _=e("biz_wap/utils/ajax.js");
_({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:n
});
}catch(c){}
};
return{
report:o,
getWebviewid:d,
showAd:a
};
});define("appmsg/open_url_with_webview.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var r=e("biz_wap/jsapi/core.js"),n=-1!=navigator.userAgent.indexOf("WindowsWechat"),i=function(e,i){
if(n)return location.href=e,!1;
i=i||{};
var o=i.sample||0;
o*=1e3;
var t=window.user_uin||0,s=0!==t&&Math.floor(t/100)%1e3<o;
return s?void r.invoke("openUrlWithExtraWebview",{
url:e,
openType:i.openType||1,
scene:i.scene||"",
bizUsername:i.user_name||""
},function(e){
e&&"openUrlWithExtraWebview:ok"===e.err_msg?i.resolve&&i.resolve():i.reject&&i.reject();
}):void(i.reject&&i.reject());
};
return i;
});define("appmsg/more_read.js",["biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","appmsg/more_read_tpl.html.js","biz_wap/utils/openUrl.js","biz_common/dom/event.js","biz_common/utils/monitor.js"],function(n){
"use strict";
function e(n){
for(var e=document.documentElement.clientHeight||window.innerHeight,i=document.documentElement.clientWidth||window.innerWidth,t=document.body.scrollHeight||document.body.offsetHeight,s=document.body.scrollTop||document.documentElement.scrollTop,m=[],d=0;d<a.length;d++){
var u=[a[d].bizuin||window.biz||"",a[d].mid||"",a[d].idx||""].join("_");
m.push(u);
}
m=m.join("#");
var w=l[n.index].getBoundingClientRect(),h="fans_read_cnt="+a[n.index].fans_read_cnt,p={
act:n.action||0,
bizuin:window.biz||"",
msgid:window.mid||"",
idx:window.idx||"",
scene:window.source||"",
sub_scene:window.subscene||"",
get_a8_key_scene:window.ascene||"",
screen_height:e,
screen_width:i,
screen_num:Math.ceil(t/e),
action_screen_num:Math.ceil((w.top+w.height+s)/e),
start_time_ms:r,
action_time_ms:Date.now(),
more_msg:m,
a_bizuin:a[n.index].bizuin||window.biz||"",
a_msgid:a[n.index].mid||"",
a_idx:a[n.index].idx||"",
rank:n.index+1,
tip:h,
session_id:_
};
o({
url:"/mp/appmsgreport?action=more_read",
type:"POST",
data:p,
timeout:2e3,
async:!1,
mayAbort:!0
});
var g=1===n.action?4:5;
c.setSum(110809,g,1).send();
}
function i(){
if(a){
for(var n=0,t=document.documentElement.clientHeight||window.innerHeight,o=0;o<l.length;o++)if(l[o].dataset.show)n++;else{
var s=l[o].getBoundingClientRect();
s.top+s.height<t&&(l[o].dataset.show=1,e({
action:1,
index:o
}));
}
n>=l.length&&d.off(window,"scroll",i);
}
}
n("biz_common/utils/string/html.js");
var t=n("biz_common/tmpl.js"),o=n("biz_wap/utils/ajax.js"),s=n("appmsg/more_read_tpl.html.js"),m=n("biz_wap/utils/openUrl.js"),d=n("biz_common/dom/event.js"),c=n("biz_common/utils/monitor.js"),a=null,l=null,r=Date.now(),_=""+r+"_"+Math.random().toString(36).substring(2);
return d.on(window,"scroll",i),function(n,i){
a=i,n.innerHTML=t.tmpl(s,{
list:a
}),l=n.getElementsByClassName("more_read_link");
for(var o=0;o<l.length;o++)d.on(l[o],"click",function(n){
return function(){
window.__second_open__?m.openUrlWithExtraWebview(a[n].link.htmlDecode()):window.location.href=a[n].link.htmlDecode(),
e({
action:2,
index:n
});
};
}(o));
n.style.display="";
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js","biz_wap/utils/mmversion.js","appmsg/appmsgext.js","appmsg/open_url_with_webview.js"],function(e,t,r,a){
"use strict";
function n(e){
e&&(e.style.display="block");
}
function d(e){
e&&(e.style.display="none");
}
function i(){
f.getData({
biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
pass_ticket:window.pass_ticket,
scene:source,
title:msg_title,
ct:ct,
devicetype:devicetype,
version:version,
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*c:0,
send_time:window.send_time||"",
rtId:"27613",
rtKey:"50",
onSuccess:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",I),
document.getElementById("js_reward_avatar")&&u.off(document.getElementById("js_reward_avatar"),"click",E),
console.log("reloadRewardData:",e),s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp,
reward_author_head:e.reward_author_head,
rewardsn:e.rewardsn
}));
},
onError:function(){}
});
}
function o(e){
return function(t){
return"0"==window.wx_user_can_reward?void a("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
-1==e.indexOf("&__tc=1")&&window.__addIdKeyReport?window.__addIdKeyReport("110809",2):window.__addIdKeyReport&&window.__addIdKeyReport("110809",3),
void g.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,r=(Math.ceil((j-188)/42)+1)*Math.floor((t-15)/42);
l="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+r+"&source=1#wechat_redirect";
var a="#wechat_redirect",s="";
s="https://mp.weixin.qq.com/mp/author?action=show&__biz="+biz+"&appmsgid="+mid+"&timestamp="+e.timestamp+"&author_id="+author_id+"&idx="+idx+"&scene=142&rscene=128",
e.rewardsn&&(s+="&rewardsn="+e.rewardsn),s+=a,-1==navigator.userAgent.indexOf("Android")||author_id||(s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1&rewardsn="+e.rewardsn+a);
var _=document.getElementById("js_reward_link"),c=document.getElementById("js_reward_avatar");
if(_&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=b)return;
localStorage.setItem("lastOnresumeTime",t),h.isAndroid&&!author_id&&g.invoke("setNavigationBarColor",{
actionCode:"1"
}),i();
}
}),I=o(s.replace(a,"&__tc=1"+a)),E=o(s),u.on(_,"click",I),author_id&&1==e.can_reward&&u.on(c,"click",E),
1==e.can_reward&&author_id)){
n(document.getElementById("js_reward_author")),n(document.getElementById("js_reward_avatar")),
document.getElementById("js_reward_author_head").setAttribute("src",e.reward_author_head),
document.getElementById("js_reward_area").classList.add("reward_area_primary");
var p=document.getElementById("js_reward_link_text");
p.innerText="喜欢作者",Math.random()<.05?p.innerText="稀罕作者":Math.random()>.05&&Math.random()<.1&&(p.innerText="钟意作者"),
document.getElementById("js_reward_total_text").innerText="喜欢";
}
x=e.reward_head_imgs;
var f=w();
y.reward&&(author_id||h.isAndroid)&&1==e.can_reward?(n(y.reward),u.on(window,"load",function(){
m&&(u.off(window,"scroll",m),u.on(window,"scroll",m));
})):d(y.reward);
var z=document.getElementById("js_reward_inner");
z&&f>0&&n(z);
var B=document.getElementById("js_reward_total");
B&&(B.innerText=e.reward_total,B.setAttribute("data-href",l),B.getAttribute("data-hasevent")||(u.on(B,"click",function(){
var e=B.getAttribute("data-href");
return v(e,{
sample:1,
reject:function(){
location.href=e;
}
}),!1;
}),B.setAttribute("data-hasevent",1)));
}
function _(e,t){
var r=document.createElement("span");
r.className="reward_user_avatar";
var a=new Image;
return a.onload=function(){
window.logs&&window.logs.reward_heads_total++,a.onload=a.onerror=null;
},a.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
a.onload=a.onerror=null;
},a.src=t,r.appendChild(a),e.appendChild(r),r;
}
function w(){
if(x.length){
var e=document.getElementById("js_reward_list"),t=0,r=document.createDocumentFragment();
if(e){
for(var a=0,n=x.length;n>a&&(t++,_(r,x[a]),t!=3*c);++a);
t>c&&(e.className+=" tl"),e.innerHTML="",e.appendChild(r);
}
return t;
}
}
function m(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+j>y.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",m),m=null);
}
var c,l,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),h=(e("rt/appmsg/getappmsgext.rt.js"),
e("biz_wap/utils/mmversion.js")),f=e("appmsg/appmsgext.js"),v=e("appmsg/open_url_with_webview.js"),j=window.innerHeight||document.documentElement.clientHeight,y={
reward:document.getElementById("js_reward_area")
},x=[],b=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var I=function(){},E=function(){};
return{
handle:function(e,t){
c=t,s(e);
},
render:function(e){
c=e,w();
}
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","appmsg/log.js","complain/tips.js","appmsg/retry_ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js"],function(require,exports,module,alert){
"use strict";
function qs(e){
return document.getElementById(e);
}
function initLikeEvent(opt){
function show(e){
e.style.display="";
}
function hide(e){
e.style.display="none";
}
function vShow(e){
e.style.visibility="visible";
}
function vHide(e){
e.style.visibility="hidden";
}
function clear(e){
e.value="";
}
var scrollTop,el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom,showType=opt.showType,prompted=opt.prompted,allPage=document.getElementsByTagName("html")[0],el_likeEducate=qs("js_like_educate"),el_likeToast=qs("js_like_toast"),el_likeBtn=qs("js_like_btn"),el_acknowledge=qs("js_acknowledge"),el_toastMsg=qs("js_toast_msg"),el_alikeComment=qs("js_a_like_comment"),el_alikeCommentConfirm=qs("js_a_like_confirm"),el_alikeCommentText=qs("js_a_like_comment_text"),el_acommentLenSpan=qs("like_a_comment_len_span"),el_acommentLen=qs("like_a_comment_len"),el_acommentErrorMsg=qs("js_a_like_comment_msg"),el_acommentCurrentCount=qs("js_a_like_current_cnt"),el_alikeCommentShare=qs("js_a_like_comment_share"),el_bcommentPanel=qs("js_b_comment_panel"),el_blikeConfirm=qs("js_b_like_confirm"),el_blikeCommentTextFirst=qs("js_b_comment_text_first"),el_blikeCommentTextSecond=qs("js_b_comment_text_second"),el_bcommentCancel=qs("js_b_comment_cancel"),el_bcommentConfirm=qs("js_b_comment_confirm"),el_bcommentErrorMsg=qs("js_b_like_comment_msg"),el_bcommentCurrentCount=qs("js_b_like_current_cnt"),el_bcommentPanel2=qs("js_b_comment_final");
try{
0==window.clientversion.toString().indexOf("1")&&parseInt(window.clientversion,16)>=parseInt("17050000",16)&&(qs("js_like_wording").innerHTML=" 看过");
}catch(e){}
var haokanLock=!1,startY;
if(el_like&&el_likeNum){
var img=new Image;
window.appmsg_like_type&&2===window.appmsg_like_type?img.src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=114217_0_1":window.appmsg_like_type&&1===window.appmsg_like_type&&(img.src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=114217_1_1"),
JSAPI.on("menu:haokan",function(e){
var t=0===parseInt(e.recommend)?0:1;
if(0===t)sendRecommendAjax(t,"",2,clientShowType);else{
var n="";
n=e.comment,sendRecommendAjax(t,n,5,clientShowType);
}
}),2===showType&&(el_bcommentConfirm.setAttribute("disabled","disabled"),el_bcommentConfirm.innerHTML="发送");
var like_report=function(){
log("[Appmsg] click like");
var e=el_like.getAttribute("like"),t=el_likeNum.innerHTML,n=parseInt(e)?parseInt(e):0,i=n?0:1,o=parseInt(t)?parseInt(t):0,l=opt.appmsgid||opt.mid,s=opt.itemidx||opt.idx;
if(n){
if(1!==appmsg_like_type)return void sendRecommendAjax(0);
Class.removeClass(el_like,opt.className),el_like.setAttribute("like",0),o>0&&"100000+"!==t&&(el_likeNum.innerHTML=o-1==0?"赞":o-1);
}else if(1===appmsg_like_type)el_like.setAttribute("like",1),Class.addClass(el_like,opt.className),
"100000+"!==t&&(el_likeNum.innerHTML=o+1);else if(2===appmsg_like_type)return void initRecommendPanel();
RetryAjax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+i+"&f=json&appmsgid="+l+"&itemidx="+s,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:window.item_show_type,
client_version:window.clientversion,
action_type:i?1:2,
device_type:window.devicetype
},
type:"POST"
});
},initRecommendPanel=function(){
if(1!==showType&&2!==showType||1!==prompted)if(1!==showType&&2!==showType||0!==prompted){
if(3===showType)if(isShow(el_bcommentPanel)||isShow(el_bcommentPanel2))!isShow(el_bcommentPanel)&&isShow(el_bcommentPanel2)?hide(el_bcommentPanel2):isShow(el_bcommentPanel)&&!isShow(el_bcommentPanel2)&&hide(el_bcommentPanel);else{
var e=qs("like3").offsetTop-document.body.scrollTop;
show(el_bcommentPanel),qs("js_b_wrp").clientHeight+e+50>document.documentElement.clientHeight?Class.addClass(qs("js_b_wrp"),"like_comment_primary_pos_top"):Class.removeClass(qs("js_b_wrp"),"like_comment_primary_pos_top");
}
}else qs("educate_title").innerHTML="发送到看一看",show(el_likeEducate),show(qs("educate_btn"));else sendRecommendAjax(1,"",1);
},isShow=function(e){
return"none"===e.style.display||"hidden"===e.style.visibility?!1:""===e.style.display||"block"===e.style.display||"visible"===e.style.visibility?!0:void 0;
},connectWithApp=function(e,t,n){
var i={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:t?t:""
};
JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(i)
},function(e){
console.log("handleHaokanAction",e);
}),setTimeout(function(){
(3===showType&&1===e||n)&&(i={
origin:"mp",
isLike:e?1:0,
url:encodeURIComponent(msg_link.html(!1)),
content:""
},JSAPI.invoke("handleHaokanAction",{
action:actionString,
recommend:e?1:0,
server_data:JSON.stringify(i)
},function(e){
console.log("handleHaokanAction",e);
}));
},500),JSAPI.invoke("handleHaokanAction",{
action:actionForClient,
permission:1,
recommend:e?1:0
},function(e){
console.log("handleHaokanAction for client",e);
});
},isBeenUnvisible=function(e){
return e.offsetTop-document.body.scrollTop>=document.documentElement.clientHeight-60?!0:!1;
};
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
}),DomEvent.on(el_blikeConfirm,"click",function(){
sendRecommendAjax(1,"",1);
}),DomEvent.on(qs("js_mask_1"),"click",function(){
hide(el_bcommentPanel);
}),DomEvent.on(qs("js_mask_2"),"mousedown",function(){
hide(el_bcommentPanel2),clear(el_blikeCommentTextSecond),vHide(el_bcommentErrorMsg),
enableMove();
}),DomEvent.on(el_blikeCommentTextFirst,"click",function(){
scrollTop=document.body.scrollTop||document.documentElement.scrollTop||0,hide(el_bcommentPanel),
show(el_bcommentPanel2),el_blikeCommentTextSecond.focus(),disableMove();
}),DomEvent.on(el_bcommentConfirm,"mousedown",function(){
var e;
2===showType?e=4:3===showType&&(e=5),validataComment(el_blikeCommentTextSecond,e);
}),DomEvent.on(el_bcommentCancel,"mousedown",function(){
hide(el_bcommentPanel2),clear(el_blikeCommentTextSecond),vHide(el_bcommentErrorMsg),
enableMove();
}),DomEvent.on(el_acknowledge,"click",function(){
hide(el_likeEducate);
}),DomEvent.on(qs("js_cancel"),"click",function(){
hide(el_likeEducate);
}),DomEvent.on(qs("js_fail_inform"),"click",function(){
hide(qs("js_fail"));
}),DomEvent.on(qs("js_confirm"),"click",function(){
sendRecommendAjax(1,"",1);
}),DomEvent.on(el_alikeCommentShare,"click",function(){
scrollTop=document.body.scrollTop||document.documentElement.scrollTop,show(el_bcommentPanel2),
el_blikeCommentTextSecond.focus(),el_bcommentConfirm.setAttribute("disabled","disabled"),
disableMove();
}),DomEvent.on(el_blikeCommentTextSecond,"focus",function(){}),DomEvent.on(el_blikeCommentTextSecond,"blur",function(){
window.scrollTo(0,scrollTop);
}),DomEvent.on(qs("js_unlike_know"),"click",function(){
hide(qs("js_unlike_educate"));
});
var disableMove=function(){
document.addEventListener("touchmove",preventMove,{
passive:!1
}),el_blikeCommentTextSecond.addEventListener("touchstart",getTouchStart,{
passive:!1
}),el_blikeCommentTextSecond.addEventListener("touchmove",preventText,!1);
},enableMove=function(){
document.removeEventListener("touchmove",preventMove,{
passive:!1
}),el_blikeCommentTextSecond.removeEventListener("touchstart",getTouchStart,{
passive:!1
}),el_blikeCommentTextSecond.removeEventListener("touchmove",preventText,!1);
},preventMove=function(e){
var t=e.target;
"TEXTAREA"!==t.tagName&&"BUTTON"!==t.tagName&&(e.preventDefault(),e.stopPropagation());
},getTouchStart=function(e){
var t=e.targetTouches||[];
if(t.length>0){
var n=t[0]||{};
startY=n.clientY;
}
},preventText=function(e){
var t=!1,n=e.changedTouches,i=this.scrollTop,o=this.offsetHeight,l=this.scrollHeight;
if(n.length>0){
var s=n[0]||{},m=s.clientY;
t=m>startY&&0>=i?!1:startY>m&&i+o>=l?!1:!0,t||e.preventDefault();
}
},unsetLike2Status=function(e){
1===e?show(qs("js_unlike_educate")):(el_toastMsg.innerHTML="已取消",show(el_likeToast),
setTimeout(function(){
hide(el_likeToast);
},1e3)),2===showType&&isShow(el_alikeComment)&&(hide(el_alikeComment),vHide(el_acommentErrorMsg));
var t=el_likeNum.innerHTML;
Class.removeClass(el_likeBtn,opt.className),el_like.setAttribute("like",0),el_alikeComment&&hide(el_alikeComment),
realLikeNum-=1,realLikeNum>=0&&"10万+"!==t&&(el_likeNum.innerHTML=dealLikeReadShow(realLikeNum));
},setLike2Status=function(e){
var t="在看";
try{
0==window.clientversion.toString().indexOf("1")&&parseInt(window.clientversion,16)>=parseInt("17050000",16)&&(t="看过");
}catch(n){}
switch(showType){
case 1:
switch(prompted){
case 0:
hide(el_likeEducate),prompted=1;
break;

case 1:
el_toastMsg.innerHTML=t,show(el_likeToast),setTimeout(function(){
hide(el_likeToast);
},1e3);
}
setBtnLike();
break;

case 2:
switch(hide(el_bcommentPanel2),clear(el_blikeCommentTextSecond),prompted){
case 0:
hide(el_likeEducate),prompted=1;
break;

case 1:
el_toastMsg.innerHTML=4===e?"已发送":t,(4===e||5===e)&&(show(el_likeToast),setTimeout(function(){
hide(el_likeToast);
},1e3));
}
5!==e&&(4===e?hide(el_alikeComment):show(el_alikeComment),isBeenUnvisible(el_alikeComment)&&scrollToShow(el_alikeComment)),
4!==e&&setBtnLike();
break;

case 3:
switch(hide(el_bcommentPanel2),hide(el_bcommentPanel),clear(el_blikeCommentTextSecond),
prompted){
case 0:
qs("educate_title").innerHTML="已发送到看一看",show(el_likeEducate),show(educate_btn2),
prompted=1;
break;

case 1:
el_toastMsg.innerHTML=t,show(el_likeToast),setTimeout(function(){
hide(el_likeToast);
},1e3);
}
setBtnLike();
}
enableMove();
},setBtnLike=function(){
el_like.setAttribute("like",1),Class.addClass(el_likeBtn,opt.className),realLikeNum+=1;
var e=el_likeNum.innerHTML;
"10万+"!==e&&(el_likeNum.innerHTML=dealLikeReadShow(realLikeNum));
},scrollToShow=function(e){
window.scrollTo(0,e.offsetHeight+window.scrollY);
};
DomEvent.on(el_blikeCommentTextSecond,"input",function(){
var e=el_blikeCommentTextSecond.value.replace(/^\s+|\s+$/g,"");
e.length>200?(el_bcommentCurrentCount.innerHTML=e.length,vShow(el_bcommentErrorMsg)):vHide(el_bcommentErrorMsg),
e.length>0&&e.length<=200?el_bcommentConfirm.removeAttribute("disabled"):0===e.length&&3===showType?el_bcommentConfirm.removeAttribute("disabled"):el_bcommentConfirm.setAttribute("disabled","disabled");
});
var validataComment=function(e,t){
var n=e.value.replace(/^\s+|\s+$/g,"");
sendRecommendAjax(1,n,t);
},sendRecommendAjax=function sendRecommendAjax(like,comment,type,clientType){
if(!haokanLock){
show(qs("js_loading"));
var appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
haokanLock=!0;
var action_type;
action_type=like?type:2,ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0,
scene:window.source,
subscene:window.subscene,
appmsg_like_type:window.appmsg_like_type,
item_show_type:window.item_show_type,
client_version:window.clientversion,
comment:comment?comment:"",
prompted:1,
style:clientType||showType,
action_type:action_type,
passparam:window.passparam,
request_id:(new Date).getTime(),
device_type:window.devicetype
},
type:"POST",
success:function success(res){
haokanLock=!1;
var data=eval("("+res+")");
hide(qs("js_loading")),0==data.base_resp.ret?(like?setLike2Status(type):unsetLike2Status(data.has_comment),
connectWithApp(like,comment,clientType)):show(qs("js_fail"));
},
error:function(){
hide(qs("js_loading")),show(qs("js_fail")),haokanLock=!1;
}
});
}
};
}
}
function showLikeNum(e){
var t=e||{};
if(t.show){
var n=t.likeAreaDom,i=t.likeNumDom,o=document.getElementById("js_like_btn");
n&&(n.style.display=t.likeAreaDisplayValue,t.liked&&(1===appmsg_like_type?Class.addClass(n,t.className):Class.addClass(o,t.className)),
n.setAttribute("like",t.liked?"1":"0"));
var l=1===appmsg_like_type?"赞":"";
realLikeNum=t.likeNum||l,1===appmsg_like_type?(parseInt(realLikeNum)>1e5?realLikeNum="100000+":"",
i&&(i.innerHTML=realLikeNum)):2===appmsg_like_type&&(i.innerHTML=dealLikeReadShow(realLikeNum));
}
}
function dealLikeReadShow(e){
var t="";
if(parseInt(e)>1e5)t="10万+";else if(parseInt(e)>1e4&&parseInt(e)<=1e5){
var n=""+parseInt(e)/1e4,i=n.indexOf(".");
t=-1===i?n+"万":n.substr(0,i)+"."+n.charAt(i+1)+"万";
}else t=0===parseInt(e)?"":e;
return t;
}
function showReadNum(e){
var t=e||{};
if(t.show){
var n=t.readAreaDom,i=t.readNumDom;
n&&(n.style.display=t.readAreaDisplayValue);
var o=t.readNum||1;
1===appmsg_like_type?(parseInt(o)>1e5?o="100000+":"",i&&(i.innerHTML=o)):2===appmsg_like_type&&(i.innerHTML=dealLikeReadShow(o));
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),log=require("appmsg/log.js"),Tips=require("complain/tips.js"),RetryAjax=require("appmsg/retry_ajax.js"),JSAPI=require("biz_wap/jsapi/core.js"),actionString="submitMsgToTL",actionForClient="update_recommend_status",mmversion=require("biz_wap/utils/mmversion.js"),realLikeNum,clientShowType=5;
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum,
showReadNum:showReadNum
};
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+r.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function n(){
return window.__second_open__?!0:-1!=a.indexOf("&_newvideoplayer=0")?!1:-1!=a.indexOf("&_newvideoplayer=1")?!0:1!=r.is_login?!1:r.use_tx_video_player?!1:w.canSupportVideo&&h.inWechat?h.is_ios||h.is_android?!0:!1:(r._hasReportCanSupportVideo||w.canSupportVideo||!h.inWechat||(r._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function o(){
console.log("isUseAd: "+c.isInMiniProgram);
{
var e=a,i=window.location.href;
r.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=r.sn&&"f62e1cb98630008303667f77c17c43d7"!=r.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=r.sn?c.isInMiniProgram?!1:-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==r.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:r.__appmsgCgiData&&r.__appmsgCgiData.can_use_page&&(h.is_ios||h.is_android)?!0:_.showAd()?!0:!1:!1;
}
function t(){
var e=a;
if(!r.user_uin)return!1;
if(-1!=e.indexOf("&_proxy=1"))return!0;
if(-1!=e.indexOf("&_proxy=0"))return!1;
if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show"))return!1;
var i=(new Date).getHours();
return i>=9&&14>=i?!1:h.inWechat&&h.is_android&&h.is_x5&&h.wechatVer>="6.2.2"?!0:h.inWechat&&h.is_android&&h.is_xweb&&h.xweb_version>=16?!0:h.inWechat&&h.is_ios&&(-1!=f.indexOf("MicroMessenger/6.2.4")||h.wechatVer>="6.2.4")?!0:!1;
}
function s(){
return u.networkType;
}
var r,a,d=e("biz_common/dom/event.js"),p=e("biz_wap/jsapi/core.js"),w=e("biz_wap/utils/device.js"),_=e("new_video/ctl.js"),c=e("biz_wap/utils/mmversion.js"),f=window.navigator.userAgent,u={
networkType:""
},h={};
if(parent==window)r=window,a=window.location.href;else try{
a=parent.window.location.href,r=parent.window;
}catch(m){
a=window.location.href,r=window;
}
return function(e){
var i=w.os;
h.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),h.is_android=!!i.android,h.is_wp=!!i.phone,
h.is_pc=!(i.phone||!i.Mac&&!i.windows),h.inWechat=/MicroMessenger/.test(e),h.inWindowWechat=/WindowsWechat/i.test(e),
h.inMacWechat=/wechat.*mac os/i.test(e),h.is_android_phone=h.is_android&&/Mobile/i.test(e),
h.is_android_tablet=h.is_android&&!/Mobile/i.test(e),h.ipad=/iPad/i.test(e),h.iphone=!h.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
h.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var n,o=/XWEB\/([\d\.]+)/i,t=e.match(o);
t&&t[1]&&(n=parseInt(t[1])),h.is_xweb=!!t,h.xweb_version=n;
var s=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
h.wechatVer=s&&s[1]||0,d.on(window,"load",function(){
if(""==u.networkType&&h.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
p.invoke("getNetworkType",{},function(i){
u.networkType=e[i.err_msg]||"fail","network_type:edge"==i.err_msg&&i.detailtype&&"4g"==i.detailtype&&(u.networkType="4g");
});
}
},!1);
}(window.navigator.userAgent),"undefined"==typeof r._hasReportCanSupportVideo&&(r._hasReportCanSupportVideo=!1),
{
device:h,
isShowMpVideo:n,
isUseProxy:t,
isUseAd:o,
getNetworkType:s
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});