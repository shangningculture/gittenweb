$(function(){var clipboard=new Clipboard(".btn");clipboard.on("success",function(e){console.info("Action:",e.action);console.info("Text:",e.text);console.info("Trigger:",e.trigger);var $copysuc=$("<div class='copy-tips'  style='left: 33%;'><div class='copy-tips-wrap'>☺ 复制成功</div></div>");$("body").find(".copy-tips").remove().end().append($copysuc);$(".copy-tips").fadeOut(2000);e.clearSelection()});clipboard.on("error",function(e){var $copysuc=$("<div class='copy-tips' style='margin: 0 8%;'><div class='copy-tips-wrap'>˃̣̣̥᷄⌓˂̣̣̥᷅!复制按钮出问题了,长按微信号复制</div></div>");$("body").find(".copy-tips").remove().end().append($copysuc);$(".copy-tips").fadeOut(5000);e.clearSelection();console.error("Action:",e.action);console.error("Trigger:",e.trigger)});$(".qq_Mask .close_Mask").click(function(){$(".qq_Mask").fadeOut(400)});$(".bottom_btn").click(function(){var land_url=$(this).attr("data-url");if(land_url==undefined){land_url=""}var ua=window.navigator.userAgent.toLowerCase();if(land_url==""||ua.match(/MicroMessenger/i)=="micromessenger"){var add_sign=$("#addfans_type").val();if(add_sign==1){$(".open-wechat-success").fadeIn(400)}else{$(".qq_Mask").fadeIn(400)}}else{window.location.href=land_url}});$(document).ready(function(){$("img.img2wx").click(function(){var land_url=$(this).attr("data-url");if(land_url==undefined){land_url=""}var ua=window.navigator.userAgent.toLowerCase();if(land_url==""||ua.match(/MicroMessenger/i)=="micromessenger"){return false}else{window.location.href=land_url}})});$(".close-wechat").on("click",function(){$(".open-wechat-success").fadeOut(400)});var domain="";jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options.expires=-1}var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires="; expires="+date.toUTCString()}var path=options.path?"; path="+options.path:"; path=/";var domain=options.domain?"; domain="+options.domain:"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("")}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+"=")){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}}});