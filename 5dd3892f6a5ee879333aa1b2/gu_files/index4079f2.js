!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js","biz_wap/utils/mmversion.js"],function(e){
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
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/articleReport.js","biz_wap/utils/ajax.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js"],function(e,o,i,t){
"use strict";
function n(){
var e=window.location.protocol+"//",o=a.indexOf("://")<0?e+a:a;
if(-1!=o.indexOf("mp.weixin.qq.com/s")||-1!=o.indexOf("mp.weixin.qq.com/mp/appmsg/show")||-1!=o.indexOf("mp.weixin.qq.com/mp/homepage")){
var i=o.split("#");
o=m.addParam(i[0],"scene",25,!0)+(i[1]?"#"+i[1]:""),o=o.replace(/#rd$/g,"#wechat_redirect");
}else o=e+"mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);
try{
if("mp.weixin.qq.com"!=top.window.location.host)return window.top.open(o,"_blank"),
!1;
}catch(t){}
var n=location.search.replace("wx_header","del_wx_header"),r={
url:"/mp/advertisement_report"+n+"&report_type=3&action_type=0&url="+encodeURIComponent(a)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&__biz="+biz+"&r="+Math.random(),
type:"GET",
mayAbort:!0,
async:!1
},s=window.__second_open__?1:0;
return r.timeout=2e3,r.complete=function(){
l(o,{
sample:s,
reject:function(){
location.href=o;
}
});
},c(r),!1;
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/dom/event.js"),m=e("biz_common/utils/url/parse.js"),s=e("appmsg/articleReport.js"),c=e("biz_wap/utils/ajax.js"),p=msg_title.htmlDecode(),a=msg_source_url.htmlDecode(),l=e("appmsg/open_url_with_webview.js"),_=e("biz_wap/jsapi/core.js");
s.init({
dom:document.getElementById("js_report_article3"),
title:p,
link:window.msg_link
});
var d=document.getElementById("js_view_source");
r.on(d,"click",function(){
return n(),!1;
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","biz_common/utils/http.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js","biz_wap/utils/hand_up_state.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function t(e){
window.logs||(window.logs={}),u.js_content=e.js_content||document.getElementById("js_content");
var t=e.js_toobar3||document.getElementById("js_toobar3");
u.pageEndTop=t?t.offsetTop:0,u.imgs=u.js_content?u.js_content.getElementsByTagName("img")||[]:[],
u.media=e.media||document.getElementById("media"),u.title=e.title||(window.msg_title||"").htmlDecode(),
u.video_cnt=e.video_cnt||window.logs.video_cnt||0,u.js_cmt_area=e.js_cmt_area||document.getElementById("js_cmt_area"),
u.item_show_type=e.item_show_type||window.item_show_type||0,c=document.getElementsByTagName("html"),
c&&1==!!c.length&&l&&(c=c[0].innerHTML,v.content_length=l.htmlSize),window.logs.pageinfo=v,
function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(m.on(window,"load",function(){
if(S=1*h.get(E),!window.__second_open__){
var t=location.href.indexOf("scrolltodown")>-1,o=u.js_cmt_area;
if(t&&o&&o.offsetTop){
var n=o.offsetTop;
window.scrollTo(0,n-25);
}else window.scrollTo(0,S);
}
if(window.__wxjs_is_wkwebview||window.__second_open__){
var i=f.getData(),m=localStorage.getItem("hand_up_id");
for(var l in i)l!=m&&i[l]&&(s(i[l].val),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_59_1&r="+Math.random(),
f.remove(l));
window.setInterval(function(){
var e=a();
f.set(x,e,+new Date+864e7);
},1e3);
}
var c=y.getData("spad");
c&&c.spad&&r(c.spad.val),e.hasSpAd&&window.setInterval(function(){
d();
var e=_();
y.set("spad",e,+new Date+864e7);
},1e3),window.setTimeout(function(){
w({
url:"/mp/appmsgreport?action=page_time_5s&__biz="+biz,
type:"POST",
mayAbort:!0,
data:a(),
async:!1,
timeout:2e3
});
},5e3);
}),m.on(window,"unload",function(){
if(console.log("test unload"),!window.__second_open__){
localStorage.setItem("hand_up_id",""),window.__ajaxtest="2";
var e=a();
s(e);
}
}),window.logs.read_height=0,m.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(O),O=setTimeout(function(){
S=window.pageYOffset,h.set(E,S,+new Date+72e5);
},500);
}),m.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(O),O=setTimeout(function(){
S=window.pageYOffset,h.set(E,S,+new Date+72e5);
},500);
})),m.on(document,"visibilitychange",function(){
p.isHidden()?localStorage.setItem("hand_up_id",x):localStorage.setItem("hand_up_id","");
});
}
function o(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,s=0,d=e.length;d>s;++s)o=e[s],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(b[i[2]]=!0)));
}
function n(e){
for(var t=0,o=T.length;o>t;++t)if(T[t]==e)return!0;
return!1;
}
function i(){
b={},o(document.getElementsByTagName("a"),"href"),o(document.getElementsByTagName("link"),"href"),
o(document.getElementsByTagName("iframe"),"src"),o(document.getElementsByTagName("script"),"src"),
o(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in b)b.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!j&&n(t)&&(j=!0),
e.push(t));
return b={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=u.js_content,n=u.screen_height,a=u.screen_width,s=u.scroll_height,d=Math.ceil(s/n),_=Math.ceil((o.scrollHeight||o.offsetHeight)/n),r=(window.logs.read_height||t)+n,m=u.pageEndTop,w=u.imgs,l=Math.ceil(r/n)||1,g=u.media,h=50,f=0,y=0,b=0,T=0,z=r+h>m?1:0;
l>d&&(l=d);
var O=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
f++;
var a=i.getAttribute("src"),s=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(y++,a.isCDN()&&(b++,-1!=a.indexOf("tp=webp")&&T++),s&&(e["img_"+s+"_cnt"]=e["img_"+s+"_cnt"]||0,
e["img_"+s+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=T||0,e.download_img_cnt=y||0,e.download_cdn_img_cnt=b||0,
e.img_cnt=f||0;
},S=window.appmsgstat||{},E=window.logs.img||{},I=window.logs.pagetime||{},x=E.load||{},D=E.read||{},k=[],N=[],B=0,H=0,M=0;
for(var A in D)A&&0==A.indexOf("http")&&D.hasOwnProperty(A)&&N.push(A);
for(var A in x)A&&0==A.indexOf("http")&&x.hasOwnProperty(A)&&k.push(A);
for(var P=0,q=k.length;q>P;++P){
var R=k[P];
R&&R.isCDN()&&(-1!=R.indexOf("/0")&&B++,-1!=R.indexOf("/640")&&H++,-1!=R.indexOf("/300")&&M++);
}
var e={
report_bizuin:biz,
title:u.title,
mid:mid,
idx:idx,
subscene:window.subscene||0,
sessionid:window.sessionid||0,
read_cnt:S.read_num||0,
like_cnt:S.like_num||0,
screen_width:a,
screen_height:n,
screen_num:_,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:u.video_cnt,
read_screen_num:l||0,
is_finished_read:z,
scene:source,
content_len:v.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
handup_time:p.getHandUpTime(),
img_640_cnt:H,
img_0_cnt:B,
img_300_cnt:M,
wtime:I.onload_time||0,
ftime:I.ftime||0,
ptime:I.ptime||0,
onload_time:I.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:window.ct,
item_show_type:u.item_show_type
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=k.length,
e.wifi_read_imgs_cnt=N.length),window.logs.webplog&&4==window.logs.webplog.total){
var Y=window.logs.webplog;
e.webp_total=1,e.webp_lossy=Y.lossy,e.webp_lossless=Y.lossless,e.webp_alpha=Y.alpha,
e.webp_animation=Y.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var J=window.logs.idkeys,K=[];
for(var C in J)if(J.hasOwnProperty(C)){
var L=J[C];
L.val>0&&K.push(C+"_"+L.val);
}
e.idkey=K.join(";");
}
O(!!g&&g.getElementsByTagName("img")),O(w);
var W=(new Date).getDay(),U=i();
return(j||0!==user_uin&&Math.floor(user_uin/100)%7==W)&&(e.domain_list=U),j&&(e.html_content=c),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
e.ascene=window.ascene||-1,0==e.scene&&56==e.ascene&&(e.scene=90),e.hotspotjson=JSON.stringify({
hotspotinfolist:window.hotspotInfoList||[]
}),e;
}
function s(e){
z||(z=!0,f.remove(x),e.report_time=parseInt(+new Date/1e3),w({
url:"/mp/appmsgreport?action=page_time&__biz="+biz,
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function d(){
if(window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=new g("ad");
o.set(E,{
info:e,
time:t
},+new Date+24e4);
}
h.set(E,S,+new Date+72e5);
}
function _(){
return window.__video_report_data;
}
function r(e){
e&&e.play_type&&(y.remove("spad"),e.report_type=1,w({
url:"/mp/ad_video_report?action=video_play_report",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
e("biz_common/utils/string/html.js");
var m=e("biz_common/dom/event.js"),w=e("biz_wap/utils/ajax.js"),l=(e("biz_common/utils/cookie.js"),
e("biz_common/utils/http.js"));
e("appmsg/cdn_img_lib.js");
var c,g=e("biz_wap/utils/storage.js"),p=e("biz_wap/utils/hand_up_state.js"),u=(e("biz_wap/utils/mmversion.js"),
{
js_cmt_area:null,
js_content:null,
screen_height:document.documentElement.clientHeight||window.innerHeight,
screen_width:document.documentElement.clientWidth||window.innerWidth,
scroll_height:document.body.scrollHeight||document.body.offsetHeight,
pageEndTop:0,
imgs:[],
media:null,
title:"",
video_cnt:0,
item_show_type:0
}),h=new g("page_pos"),f=new g("time_on_page"),y=new g("spad"),v={},b={},j=!1,T=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],z=!1,O=null,S=0,E=[biz,sn,mid,idx].join("_"),I=Math.random(),x=[biz,sn,mid,idx,I].join("_");
return{
init:t
};
});define("appmsg/index.js",["biz_common/tmpl.js","cps/tpl/banner_tpl.html.js","cps/tpl/card_tpl.html.js","cps/tpl/list_tpl.html.js","biz_common/utils/string/html.js","appmsg/weapp_common.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/moment.js","appmsg/appmsg_report.js","biz_common/utils/url/parse.js","page/appmsg_new/combo.css","page/appmsg_new/not_in_mm.css","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/product.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","appmsg/autoread.js","appmsg/voicemsg.js","appmsg/weproduct.js","appmsg/weapp.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/page_pos.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport_without_localstorage.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e,t,o,n){
"use strict";
function i(e){
for(var t=window.location.search,o=t.substring(1,t.length).split("&"),n=0;n<o.length;n++){
var i=o[n].split("=");
if(i[0].toUpperCase()===e.toUpperCase())return i[1];
}
return"";
}
function a(){
function t(e){
if(e&&0!=e.length){
for(var t={
batch_no:I.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
total:e.length
},o=0;o<e.length;o++){
var n=e[o],i=o+1;
for(var a in n)n.hasOwnProperty(a)&&(t[a+""+i]=n[a]);
}
w({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
function o(){
P&&clearTimeout(P),P=setTimeout(function(){
try{
P=null;
for(var e=0;e<C.length;e++){
var o=C[e],n=g.attr(o,"data-showed");
if("no"==n){
var i=o.getElementsByClassName("js_product_loop_content");
if(i.length>0){
i=i[0];
var a=i.getBoundingClientRect(),r=a.height||a.bottom-a.top,s=window.innerHeight||document.documentElement.clientHeight;
if(r>0&&a.top<s&&a.bottom>0){
o.setAttribute("data-showed","yes");
var d=i.getAttribute("data-pid");
d&&t([{
wxa_appid:i.getAttribute("data-wxaappid"),
pid:d,
type:3,
absolute_order:e+1,
appid:i.getAttribute("data-appid")||"",
templateid:i.getAttribute("data-templateid")||"",
relative_order:1*i.getAttribute("data-order"),
packid:i.getAttribute("data-packid")||""
}]);
}
}
}
}
}catch(p){}
},100);
}
function a(e){
try{
for(var n=window.pageYOffset||document.documentElement.scrollTop,a=window.innerHeight||document.documentElement.clientHeight,m=0;m<C.length;m+=B){
var l=C[m];
if(!(l.offsetTop>n+a+100)){
var _=g.attr(l,"data-cpsstatus");
if("hide"==_){
l.setAttribute("data-cpsstatus","loading");
for(var u=""+m,f=1,h=m+1;h<C.length&&m+B>h;h++)u=u+"%2c"+h,f++;
var y=Math.ceil(1e7*Math.random());
if(""!==i("mockcps"))var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&mockcps="+i("mockcps");else var A="/mp/cps_product_info?biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&cpslist="+u+"&sn="+window.sn+"&istempurl="+(window.is_temp_url||0)+"&random="+y;
!function(e,n,i){
w({
url:n,
type:"GET",
dataType:"json",
async:!0,
error:function(){
try{
window.__addIdKeyReport("64469","18",i);
}catch(e){}
},
success:function(e){
try{
window.__addIdKeyReport("64469","16",e.product_list.length),e.product_list.length<i&&window.__addIdKeyReport("64469","18",i-e.product_list.length);
for(var n=0;n<e.product_list.length;n++){
e.product_list[n].data.cps_isready=!0,e.product_list[n].data.pid_type=e.product_list[n].data.pid_type||e.product_list[n].attr.pid_type;
var a=C[e.product_list[n].index],m=e.product_list[n].template_id;
"list"==m?a.innerHTML=r.tmpl(p,e.product_list[n].data):"banner"==m?a.innerHTML=r.tmpl(s,e.product_list[n].data):"card"==m&&(a.innerHTML=r.tmpl(d,e.product_list[n].data)),
e.product_list[n].weapp_username&&(e.product_list[n].attr.weapp_username=e.product_list[n].weapp_username),
e.product_list[n].weapp_version&&(e.product_list[n].attr.weapp_version=e.product_list[n].weapp_version),
a.setAttribute("data-cpsstatus","complete");
for(var l=a.getElementsByClassName("js_product_loop_content"),_=0;_<l.length;_++)for(var w in e.product_list[n].attr)l[_].setAttribute("data-"+w,e.product_list[n].attr[w]);
for(var u=a.getElementsByTagName("img"),_=0;_<u.length;_++)u[_].src=g.attr(u[_],"data-src");
!function(e,o){
v.on(e,"tap",".js_product_loop_content",function(e){
try{
var n=e.delegatedTarget,i=n.getAttribute("data-wxaappid"),a=n.getAttribute("data-wxapath"),r=n.getAttribute("data-pid"),s=n.getAttribute("data-appid"),d=n.getAttribute("data-cpspackage"),p=Math.floor((new Date).getTime()/1e3)+5184e3,m=n.getAttribute("data-weapp_username"),l=n.getAttribute("data-weapp_version");
c.jumpUrl({
cps_weapp_username:m,
cps_weapp_version:l,
privateExtraData:{
cookies:"cps_package="+encodeURIComponent(d)+"; expires="+p+"; busid=mmbiz_ad_cps; domain=*; spread=*"
},
sourceAppId:s,
appid:i,
path:a,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(r),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&r&&t([{
wxa_appid:i,
pid:r,
type:4,
absolute_order:o+1,
appid:n.getAttribute("data-appid")||"",
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
});
}catch(e){}
return!1;
});
}(a,e.product_list[n].index);
}
o();
}catch(f){
window.__addIdKeyReport("64469","18",e.product_list.length);
}
}
});
}(u,A,f);
}
}
}
}catch(e){
console.log(e);
}
}
function x(e){
try{
L&&clearTimeout(L),L=setTimeout(function(){
a(e);
},300);
}catch(e){}
}
function E(){
var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
e>=40&&!q?(document.title=window.title,q=!0):40>e&&q&&(document.title="",q=!1);
}
function T(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},n=new Image;
n.onload=function(){
var o=n.width>0&&n.height>0;
t(e,o);
},n.onerror=function(){
t(e,!1);
},n.src="data:image/webp;base64,"+o[e];
}
function O(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e.timing){
var t=e.timing;
_("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&_("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_94_1");
var o=Math.random();
.001>o&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_95_1"),
window.__wxjs_is_wkwebview&&window.__addIdKeyReport("28307",67);
}
try{
var C=document.getElementsByTagName("mpcps");
window.__addIdKeyReport("64469","15",C.length);
for(var S=0;S<C.length;S++){
C[S].setAttribute("data-cpsstatus","hide"),C[S].setAttribute("data-showed","no");
var K={
cps_isready:!1,
cps_state:"",
pid_type:"",
img_url:"",
title:"",
desc:"",
source_name:"",
source_logo_url:"",
is_ad:1
},N=g.attr(C[S],"data-templateid");
"list"==N?C[S].innerHTML=r.tmpl(p,K):"banner"==N?C[S].innerHTML=r.tmpl(s,K):"card"==N&&(C[S].innerHTML=r.tmpl(d,K));
}
}catch(M){
console.log(M);
}
var L,P=null;
o(),v.on(window,"scroll",o),a(),v.on(window,"scroll",x),window.is_new_msg&&-1!=navigator.userAgent.indexOf("MicroMessenger")&&(window.title&&(window.title=window.title.replace(/&#39;/g,"'").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")),
console.log("hd_head_img:"+hd_head_img),A.invoke("currentMpInfo",{
brandName:window.title,
brandIcon:hd_head_img.replace(/\/0$/,"/132")
},function(e){
console.log("currentMpInfo res: "+e);
}),v.on(window,"load",function(){
document.title="",q=!1,E();
}),window.onscroll=E,window.addEventListener("pageshow",E));
var D=document.getElementsByTagName("body");
if(!D||!D[0])return!1;
D=D[0],h.isInMiniProgram&&(document.getElementById("js_name")&&l.addClass(document.getElementById("js_name"),"tips_global_primary"),
document.getElementsByClassName("account_nickname_inner").length&&l.addClass(document.getElementsByClassName("account_nickname_inner")[0],"tips_global_primary"),
document.getElementById("js_share_author")&&l.addClass(document.getElementById("js_share_author"),"tips_global_primary")),
function(){
var e=document.getElementById("js_hotspot_area"),t=0===window.hotspotInfoList.length,o=function(n){
if(!t){
var i=(window.innerHeight||document.documentElement.clientHeight)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
e.offsetTop<i?(t=!0,v.off(window,"scroll",o),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=59977_15_1",
j.hotspotReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
})):"function"==typeof n&&n();
}
};
o(function(){
v.on(window,"scroll",o);
});
}();
var W=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&location.href&&W.test(location.href))&&!window.isSg)throw new Error("in iframe");
}catch(M){
var U="",H=new Image;
H.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+U+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached&&!window.__second_open__){
var Q=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,Q+"rd2werd=1#wechat_redirect"));
}
var G=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var J=!h.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
e("appmsg/share.js");
var Y=b(1e3*parseInt(top.window.modify_time)),V=Y.format("YYYY-MM-DD"),F=document.getElementById("js_modify_time");
if(F&&(F.innerHTML=V),window.isSg||"mp.weixin.qq.com"==location.host){
var $=e("biz_common/log/jserr.js");
$({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var X=-1!=navigator.userAgent.indexOf("TBS/"),Z=function(e,t){
T(e,function(e,o){
if(window.logs.webplog[e]=o?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var n=window.logs.webplog,i=Math.random();
X&&1>=i&&(n.lossy=n.lossless=n.alpha=1,window.logs.webplog=n);
var a=n.lossy&n.lossless&n.alpha;
t(!!a);
}
});
},et=function(e){
for(var t=document.getElementsByTagName("img"),o=!1,n=0,i=t.length;i>n;n++){
var a=t[n].getAttribute("data-src");
a&&a.isGif()&&(o=!0);
}
(z||navigator.userAgent.indexOf("Br_trunk")>-1)&&o&&h.isIOS&&h.gtVersion("6.5.13",!0)?(console.log("当前版本可以启用img代理"),
A.invoke("imageProxyInit",{},function(t){
console.log(t),t.err_msg.indexOf(":ok")>-1?(R=t.serverUrl,window.__addIdKeyReport("28307",117)):t.err_msg.indexOf(":fail")>-1&&window.__addIdKeyReport("28307",118),
e();
})):e();
},tt=function(e){
Z("lossy",e),Z("lossless",e),Z("alpha",e),Z("animation",e);
};
window.webp=!1,et(function(){
tt(function(t){
function o(e){
e.width<40||e.height<40||-1==e.className.indexOf("img_loading")&&(e.className+=" img_loading");
}
function n(e){
if(!(e.width<40||e.height<40)){
var t=e.src;
if(e.className=e.className.replace("img_loading",""),-1==e.className.indexOf("img_loadederror")){
e.className+=" img_loadederror",e.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51);
var n=function(){
window.__addIdKeyReport("28307",66),i(e),o(e);
var n=e.__retryload;
return n=0,t=t.https2http(),e.__retryload=n,e.src=G.addParam(t,"retryload",n,!0),
!1;
};
v.on(e,"click",n);
}
}
}
function i(e){
e.className=e.className.replace("img_loading",""),e.className=e.className.replace("img_loadederror","");
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var a=document.getElementById("js_cover");
if(a){
var r=a.getAttribute("data-src");
r&&(r.isCDN()&&(r=r.imgChange640(),t&&(r=G.addParam(r,"tp","webp",!0)),r=G.addParam(r,"wxfrom","5",!0),
is_https_res||k?r=r.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(r=r.https2http())),
setTimeout(function(){
a.onload=function(){
u(a,"height","auto","important"),u(a,"visibility","visible","important");
},a.setAttribute("src",r);
},0),window.logs.img.read[r]=!0,window.logs.img.load[r]=!0,a.removeAttribute("data-src"));
}
var s=e("biz_wap/ui/lazyload_img.js"),d=1;
window.logs.outer_pic=0;
for(var p=document.getElementsByTagName("img"),c=0,m=p.length;m>c;c++){
{
var w=p[c].getAttribute("data-src");
p[c].getAttribute("src");
}
w&&w.isGif()&&p[c].className.indexOf("__bg_gif")<0&&(p[c].className+=" __bg_gif");
}
for(var g=document.getElementsByClassName("__bg_gif"),c=0,m=g.length;m>c;++c)g[c].setAttribute("data-order",c);
var f=function(e){
try{
var t=e,o=t.getAttribute("data-src");
if(null==o.match(/^https\:\/\/mmbiz\.qpic\.cn/)&&null==o.match(/^http\:\/\/mmbiz\.qpic\.cn/))return;
var n=t.parentNode;
if(l.hasClass(n,"js_jump_icon"))return;
for(var i=!1;n.tagName&&"body"!=n.tagName.toLowerCase();){
if("a"==n.tagName.toLowerCase()){
var a=n.getAttribute("href")||"";
if(null!=a.match(/^http/)){
console.log("hrefmatch",a),i=!0;
break;
}
break;
}
n=n.parentNode;
}
if(!i)return;
var r=document.createElement("span"),s=getComputedStyle(t);
"static"!=s.positon&&(r.style.position=s.positon),r.style.left=s.left,r.style.top=s.top,
r.style.right=s.right,r.style.bottom=s.bottom,r.style.margin=s.margin,l.addClass(r,"js_jump_icon"),
l.addClass(r,"h5_image_link"),t.style.position="static",t.style.margin="0px",t.parentNode.insertBefore(r,t),
r.appendChild(t),window.__addIdKeyReport("111535",0);
}catch(d){}
},h=function(e){
try{
var t=e.childNodes,o=getComputedStyle(e);
(o.backgroundImage.match(/https\:\/\/mmbiz\.qpic\.cn/)||o.backgroundImage.match(/http\:\/\/mmbiz\.qpic\.cn/))&&window.__addIdKeyReport("111535",2);
for(var n=0;n<t.length;n++)"a"!=t[n].tagName.toLowerCase()&&h(t[n]);
}catch(i){}
};
try{
for(var y=document.getElementsByTagName("a"),A=0;A<y.length;A++){
var b=y.item(A),j=b.getAttribute("href")||"";
null!=j.match(/^http/)&&h(b);
}
}catch(I){}
new s({
attrKey:"data-src",
imgOccupied:!0,
crossOrigin:!0,
lazyloadHeightWhenWifi:function(){
var e,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var n=e.getHours();
return n>=20&&23>n&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t){
if(!t)return"";
var o=t;
if(t.isCDN()){
o=o.imgChange640();
var n,i=window.navigator.userAgent,a=/TBS\/([\d\.]+)/i,r=i.match(a);
r&&r[1]&&(n=parseInt(r[1]));
var s,d=/XWEB\/([\d\.]+)/i,p=i.match(d);
p&&p[1]&&(s=parseInt(p[1]));
var c=1e3,m=window.user_uin||0,l=0!==m&&Math.floor(m/100)%1e3<c;
l&&(n>=43305||s>=16)&&44206!=n&&o.isGif()?(o=G.addParam(o,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(o=G.addParam(o,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),o=G.addParam(o,"wxfrom","5",!0),is_https_res||k?(o=o.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(o=o.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var a=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
a.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(w){}
var g=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
o=o.replace(g,"http://m.qpic.cn"),o=G.addParam(o,"wx_lazy","1",!0);
return R&&o.isGif()&&(window.__addIdKeyReport("28307",106),o=G.addParam(o,"tp","wxpic",!0),
o=R+"hevc?url="+encodeURIComponent(o)+"&type=gif"),"anonymous"==e.crossOrigin&&(o=G.addParam(o,"wx_co","1",!0)),
window.logs.img.load[o]=!0,_("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+o),
e.start_load_time=+new Date,o;
},
onerror:function(e,t){
var o=t?t.__retryload||0:0;
if(1==o&&n(t),e&&!(o>d)){
if(!e.isCDN()){
if(!R)return;
if(-1==e.indexOf(R))return;
}
var i=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+i),window.__addIdKeyReport("28307",75+1*o+i),
e.isWxpic()?(window.__addIdKeyReport("28307",93),window.__addIdKeyReport("28307",96+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",86),
window.__addIdKeyReport("28307",89+1*o)),R&&e.indexOf(R)>-1&&window.__addIdKeyReport("28307",108),
d>o){
if(o++,t.__retryload=o,1==o&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==o&&e.indexOf("https://")>-1&&(window.__addIdKeyReport("28307",61),
window.__addIdKeyReport("28307",77)),R&&e.indexOf(R)>-1){
var a=e.split("hevc?url=")[1];
a=a.split("&type")[0],a=decodeURIComponent(a),a=a.replace("tp=wxpic",""),e=a.https2http();
}
t.start_load_time=+new Date,t.src=G.addParam(e,"retryload",o,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
_("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnerror))for(var r=0,s=t.lazyLoadOnerror.length;s>r;r++)"function"==typeof t.lazyLoadOnerror[r]&&t.lazyLoadOnerror[r].call(t);
}catch(p){}
var c=10;
/tp\=webp/.test(e)&&(c=11);
var m=new Image;
m.src="http://mp.weixin.qq.com/mp/jsreport?key="+c+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
i(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var o=t?t.__retryload||0:0;
if(!(o>d)){
_("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+o),
t.setAttribute("data-fail",0),f(t);
try{
if("[object Array]"==Object.prototype.toString.call(t.lazyLoadOnload))for(var n=0,a=t.lazyLoadOnload.length;a>n;n++)"function"==typeof t.lazyLoadOnload[n]&&t.lazyLoadOnload[n].call(t);
}catch(r){}
var s=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+s),window.__addIdKeyReport("28307",73+1*o+s),
e.isWxpic()?(window.__addIdKeyReport("28307",92),window.__addIdKeyReport("28307",94+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
window.__addIdKeyReport("28307",87+1*o)),R&&e.indexOf(R)>-1&&window.__addIdKeyReport("28307",107),
window.__has_imgsucceed||(window.__has_imgsucceed=!0,window.__addIdKeyReport("28307",64)),
1==o&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),1==o&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var p=Math.random(),c=+new Date-t.start_load_time;
c&&0==e.indexOf("https://")&&.5>p?(window.__addIdKeyReport("27822",121,c),window.__addIdKeyReport("27822",122)):c&&5e-4>p&&(window.__addIdKeyReport("27822",124,c),
window.__addIdKeyReport("27822",125)),"none"!=getComputedStyle(t).filter&&(t.style.transform="translateZ(0)",
t.style.webkitTransform="translateZ(0)");
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),e("appmsg/async.js"),!window.isSg;
var ot=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("profileBt"),t=document.getElementById("copyright_info"),o=[];
if(e){
var n="57";
"26"==window.source&&(n="95"),"28"==window.source&&(n="96"),"29"==window.source&&(n="39"),
"15"==window.source&&(n="121"),o.push({
dom:e,
username:user_name_new||user_name,
profileReportInfo:window.profileReportInfo||"",
scene:n
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"110"
});
var i=document.getElementById("js_share_headimg");
i&&o.push({
dom:i,
username:source_username,
scene:0
});
var a=document.getElementById("js_share_author");
a&&o.push({
dom:a,
username:source_username,
scene:"0"
});
for(var r=0,s=o.length;s>r;r++)!function(e){
v.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
ot.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")?location.href=t:A.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
});
}else{
if(_("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
j.profileReport({
hotspotjson:JSON.stringify({
hotspotinfolist:window.hotspotInfoList
})
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&w({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
h.isInMiniProgram||A.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene+""
},function(t){
window.__addIdKeyReport("28307","1"),_("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
});
}
return!1;
}),h.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[r]);
}(),function(){
h.isIOS&&location.href.match(/fontScale=\d+/)&&A.on("menu:setfont",function(e){
e.fontScale<=0&&(e.fontScale=100),document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%",
l.addClass(document.getElementsByTagName("body").item(0),"appmsg_skin_fontscale_"+e.fontSize);
});
}(),function(){
function e(){
if("hidden"in document)return"hidden";
for(var e=["webkit","moz","ms","o"],t=0;t<e.length;t++)return e[t]+"Hidden"in document,
e[t]+"Hidden";
return null;
}
function t(){
var t=e();
return t?document[t]:!1;
}
function o(){
if(t()){
var e=window._players;
if(e)for(var o in e){
var n=e[o];
n.isPlay()&&(window.playPlayer=n,n.hideLoading(),n.pause(),n._trigger("userpause"),
n.hideControllBar(!0),n._showPlayControllBar());
}
}else window.playPlayer&&(window.playPlayer.__forcePause=!1,window.playPlayer.showLoading(),
window.playPlayer.play(),window.playPlayer._trigger("userplay"));
}
document.webkitVisibilityState?document.addEventListener("webkitvisibilitychange",o,!1):document.msVisibilityState?document.addEventListener("msvisibilitychange",o,!1):document.visibilityState&&document.addEventListener("visibilitychange",o,!1);
}();
try{
var nt=document.getElementById("js_author_name");
if(nt){
var it="";
v.on(nt,"click",function(){
return l.hasClass(nt,"rich_media_meta_link")?window.is_temp_url?(n("预览状态下不能操作"),
!1):nt.getAttribute("data-rewardsn")?1!=nt.getAttribute("data-canreward")?!1:(it="https://mp.weixin.qq.com/mp/author?action=show&author_id="+author_id+"&rewardsn="+nt.getAttribute("data-rewardsn")+"&timestamp="+nt.getAttribute("data-timestamp")+"&__biz="+window.biz+"&appmsgid="+window.appmsgid+"&idx="+window.idx+"&scene=142&rscene=129#wechat_redirect",
h.isInMiniProgram?!1:(-1!=navigator.userAgent.indexOf("MicroMessenger")&&(h.isIOS||h.isAndroid||h.isWp)?(window.__addIdKeyReport("110809","1"),
A.invoke("openUrlWithExtraWebview",{
url:it,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=it);
})):location.href=it,!1)):!1:!1;
});
}
}catch(M){}
var at=e("appmsg/outer_link.js");
if(new at({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(!e||0!=e.indexOf("http://mp.weixin.qq.com/")&&0!=e.indexOf("https://mp.weixin.qq.com/")){
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}else{
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}
return e;
}
}),!J){
var rt=e("appmsg/review_image.js"),st=document.getElementById("js_cover"),dt=[];
st&&dt.push(st),new rt({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:dt
});
}
e("appmsg/product.js"),function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
for(var t=e.querySelectorAll("*"),o="js_banner_container,js_list_container,js_cover,js_tx_video_container,js_product_err_container,js_product_loop_content,js_product_container,img_loading,list-paddingleft-2,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double,__bg_gif,weapp_text_link,weapp_image_link,js_img_loading,wx_video_context,db,wx_video_thumb_primary,wx_video_play_btn,wx_video_mask".split(","),n=[new RegExp("^cps_inner"),new RegExp("^bizsvr_")],i=function(e){
var t=e.getAttribute("class");
if(t){
for(var i=t.split(/\s+/),a=[],r=0,s=i.length;s>r;++r){
var d=i[r];
if(d&&-1!=o.indexOf(d))a.push(d);else for(var p=0,c=n.length;c>p;p++)if(n[p].test(d)){
a.push(d);
break;
}
}
e.setAttribute("class",a.join(" "));
}
},a=0,r=t.length;r>a;++a){
var s=t[a];
s&&s.tagName&&"iframe"!=s.tagName.toLowerCase()&&i(s);
}
}catch(d){}
}(),window.fromWeixinCached||e("appmsg/iframe.js"),e("appmsg/qqmusic.js"),e("appmsg/voice.js"),
window.__appmsgCgiData&&1==window.__appmsgCgiData.show_msg_voice&&e("appmsg/autoread.js"),
"1"==window.show_msg_voice&&(console.log("load voicemsg"),e("appmsg/voicemsg.js")),
!window.__appmsgCgiData||1!=window.__appmsgCgiData.wxa_product&&1!=window.__appmsgCgiData.wxa_cps||e("appmsg/weproduct.js"),
e("appmsg/weapp.js"),e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js");
var pt=e("appmsg/page_pos.js");
pt.init({
hasSpAd:!0
}),setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
v.tap(document.getElementById("copyright_logo"),function(){
var e="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
window.__second_open__?A.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
}),f(),y(),v.tap(document.getElementById("js_hotspot_area"),function(e){
if(l.hasClass(e.target,"js_hotspot")){
var t=e.target.dataset.id;
if(!t)return;
t="https://search.weixin.qq.com/cgi-bin/searchweb/clientjump?scene=306&tag=mp_topic&topic_id="+t+"#wechat_redirect",
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(h.isIOS||h.isAndroid||h.isWp)?A.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}):location.href=t;
}
}),e("appmsg/report_and_source.js"),function(){
if(J){
document.title=window.title,l.addClass(D,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var n=new Image;
n.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var i=document.getElementById("js_profile_qrcode"),a=document.getElementById("js_profile_arrow_wrp"),r=document.getElementById("profileBt");
if(i&&r&&a){
var s=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var n=new Image;
n.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return i.style.display="block",a.style.left=r.offsetWidth/2-8+"px",!1;
};
v.on(r,"click",s),v.on(i,"click",s),v.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=r&&t!=i&&(i.style.display="none");
});
}
}else{
var d=document.getElementById("js_report_article3");
!!d&&(d.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=document.getElementById("img-content");
if(e&&t&&t.getBoundingClientRect){
var o=t.getBoundingClientRect().height;
window.scrollTo(0,o);
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,n=t.length;n>o;++o)t[o].parentNode.removeChild(t[o]);
if(ot.card_pv_report(),Math.random()<.01)try{
var i="https://js.aq.qq.com/js/aq_common.js",a=document.createElement("script");
a.src=i;
var r=document.getElementsByTagName("head")[0];
r.appendChild(a);
}catch(s){}
var d=document.getElementById("js_close_temp");
v.on(d,"click",function(){
d.parentNode.parentNode.removeChild(d.parentNode),l.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(m.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:o(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var n=(new Date).getHours();
v.on(window,t,function(){
var t=e.length-2,i=o();
if(t>=0){
var a=e[t],r=a.ori;
r!==i||e[e.length-1].istouchmove||(n>=11&&17>=n&&window.__report(63),window.scrollTo(0,a.scroll));
}
e.push({
ori:i,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
});
var i=document.getElementById("js_hotspot_area"),a=0===i.children.length;
v.on(window,"scroll",function(){
var t=e.length-1,n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
if(e[t].ori==o()&&(e[t].scroll=n,e[t].istouchmove=!0,!a)){
var r=(window.innerHeight||document.documentElement.clientHeight)+n;
i.offsetTop<r&&(a=!0,(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=59977_15_1");
}
});
}
}(),_("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",O,!1):window.attachEvent&&window.attachEvent("onload",O),
e(window.moon&&moon.clearSample?"appmsg/fereport_without_localstorage.js":"appmsg/fereport.js"),
function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_18_1",
h.isIOS&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_19_1"),
h.isAndroid&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_20_1");
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),function(){
var e=document.getElementById("publish_time");
e&&v.on(e,"click",function(){
e.innerText=window.publish_time;
});
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_49_1&lc=1&log0=[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href);
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var n=t.querySelectorAll("*["+o+"]");
if(n&&n.length>0){
e();
for(var i=0;i<n.length;++i)n[i]&&n[i].removeAttribute&&n[i].removeAttribute(o);
}
return;
}
var a=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
a&&a.length)for(var i=0;i<a.length;++i)filterContenteditable(a[i]);
}catch(r){}
},n=document.getElementById("js_content"),i=0;i<t.length;++i)t[i]&&o(n,t[i]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",n=(new Date).getHours();
if(!(11>n||n>16||Math.random()<.99)){
var i=new Image;
i.onload=function(){
var o=i.naturalWidth||i.width,n=i.naturalHeight||i.height;
(o!=e||n!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},i.src=o;
var a=new Image;
a.onload=function(){
var o=a.naturalWidth||a.width,n=a.naturalHeight||a.height;
(o!=e||n!=t)&&window.__addIdKeyReport("28307",126),window.__addIdKeyReport("28307",127);
},a.src="https://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0";
}
},3e3);
var ct=Math.random();
if(2e-4>ct)try{
for(var mt=document.getElementsByTagName("img"),lt=window.screen.height,_t=window.screen.width,wt=0,gt=window.devicePixelRatio,wt="",S=0,ut=mt.length;ut>S;S++){
var ft=mt[S].getAttribute("data-src");
if(ft){
var ht=mt[S].getBoundingClientRect();
wt+=_t+"|"+lt+"|"+ht.left.toFixed(2)+"|"+(_t-ht.right).toFixed(2)+"|"+ht.width.toFixed(2)+"|"+gt.toFixed(2)+"|"+ft+";";
}
}
w({
url:"/mp/wapreport?action=img_display_report",
data:{
key:wt
},
type:"POST",
dataType:"json",
async:!0
});
}catch(M){}
}
var r=e("biz_common/tmpl.js"),s=e("cps/tpl/banner_tpl.html.js"),d=e("cps/tpl/card_tpl.html.js"),p=e("cps/tpl/list_tpl.html.js");
e("biz_common/utils/string/html.js");
var c=e("appmsg/weapp_common.js"),m=e("biz_wap/utils/device.js"),l=e("biz_common/dom/class.js"),_=e("appmsg/log.js"),w=e("biz_wap/utils/ajax.js"),g=e("biz_common/dom/attr.js"),u=g.setProperty,f=e("appmsg/max_age.js"),h=e("biz_wap/utils/mmversion.js"),y=e("appmsg/test.js"),v=e("biz_common/dom/event.js"),A=e("biz_wap/jsapi/core.js"),b=e("biz_common/moment.js"),j=e("appmsg/appmsg_report.js"),I=e("biz_common/utils/url/parse.js");
window.new_appmsg&&(e("page/appmsg_new/combo.css"),e("page/appmsg_new/not_in_mm.css"));
var x=window.user_uin||0,E=Math.floor(x/100)%1e3,k=0!==x&&1001>E,z=!0,R="",B=5;
window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.log("进入index.js init"),
_("[Appmsg] start run index.js init"),function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var n=e+"_"+t;
o=o||1,window.logs.idkeys[n]||(window.logs.idkeys[n]={
val:0
}),window.logs.idkeys[n].val+=o;
},n=e>=11&&17>=e&&Math.random()<1,i=function(e,o){
n&&t(e,o);
};
window.__report=t,window.__commonVideoReport=i,window.__addIdKeyReport=o;
}(),a();
var q=!1;
});