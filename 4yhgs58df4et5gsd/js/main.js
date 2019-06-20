// <!-- 获取关键词来源 -->
var siteid = 1263420497;
var keyword = location.search;
document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id='+siteid+'&web_id='+siteid+'" language="JavaScript"></script></div>');
$(document).ready(function(){
	$('title').html(title);
	$(".wxbtn .cont span").click(function () {
		$(".click").hide();
		$(".popup").show();
	});
	$(".wxbtn .cont img").click(function () {
		$(".click").hide();
		$(".popup").show();
	});
	$(".close").click(function () {
		$(".popup").hide();
		$(".wxbtn").show();
	})
});
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 1000
    });
});
