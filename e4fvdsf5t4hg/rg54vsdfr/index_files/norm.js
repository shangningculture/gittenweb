$(function(){$.fn.longPress=function(b){var c=undefined;var d=this;for(var a=0;a<d.length;a++){d[a].addEventListener("touchstart",function(e){c=setTimeout(b,500)},false);d[a].addEventListener("touchend",function(e){clearTimeout(c)},false)}}});