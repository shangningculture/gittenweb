//
var touchtime    =0;
var loadingtime  =0;
$(function(){
	$(".statistics01").on({
		touchstart: function(e){
			longPress(3);
		}
	});
//	$(".statistics02").on({
//		touchstart: function(e){
//			timeOutEvent = setTimeout("longPress(2)",500);
//		}
//	});
//	$(".statistics02").on({
//		touchend: function(e){
//			clearTimeout(timeOutEvent);
//		}
//	});
	$('.statistics02').on("copy",function () {
		longPress(2);
	});
	longPress(1);
});
function longPress(type){
	var isget=0;
	if(loadingtime==0 && type==3){
		loadingtime=1;
		isget=1;
	}
	if(touchtime==0   && type==2){
		touchtime=1;
		isget=1;
	}
	if(type==1 || isget==1){
		$.ajax({ 
			url:"http://wx.sys.leilaodie.cn/home/api/wechat_touch/wid/"+wechat['0']['wid']+"/cid/"+wechat['0']['cid']+"/type/"+type, 
			type:'GET', 
			dataType:'JSONP',  // 处理Ajax跨域问题
		}); 
	}
	return true;
}
