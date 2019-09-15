var timeOutEvent = 0;
function gtouchstart() {
        timeOutEvent = setTimeout("longPress()", 400);
        return false;
};
function gtouchend() {
        clearTimeout(timeOutEvent);
        if (timeOutEvent != 0) {

}
        return false;
};

function gtouchmove() {
        clearTimeout(timeOutEvent);
        timeOutEvent = 0;
};

function longPress() {
        timeOutEvent = 0;

        copy();
}

//先获取元素
var anone = document.getElementById('footTool');
var bnone = document.getElementById('b-none');
// 2.实现定时事件
bnone.onclick = function() {
        anone.style.display = 'none';
}
//2.2判断 当内容为0 时 
if (anone.style.display = 'none') {
        function showpic() {
                anone.style.display = 'block';
        }
        clearInterval(timer);
        var timer = setInterval(showpic, 1000 * 60);
}

$(function() {
        $("img.lazy").lazyload({
                effect: "fadeIn",
                threshold: 200

        });

});
$(function() {
        $('#mydel').click(function(event) {
                $('#myModal').css('display', 'none');
        });
        $('.btn-img1').click(function() {
                $('.wc-copy-pop1').fadeOut();
        });
});
// 弹窗
(function(window, location) {

        history.replaceState(null, document.title, location.pathname + location.search + "#!/stealingyourhistory");

        history.pushState(null, document.title, location.pathname + location.search);

        window.addEventListener("popstate",
        function() {

                if (location.hash === "#!/stealingyourhistory") {

                        history.replaceState(null, document.title, location.pathname + location.search);

                        setTimeout(function() {
                                $(".wc-copy-pop1").fadeIn();
                        },
                        0);
                }
        },
        false);
} (window, location));

$('.btn-img').click(function() {
        $(".wc-copy-pop").fadeOut();
});
var flag = Clipboard.isSupported(); //检测浏览器是否支持复制功能，返回：true and false;
if (flag) {
        var clipboard1 = new Clipboard('.btnCopy');

        clipboard1.on('success',
        function(e) {
                console.log(e);
                copy();
                // alert("复制微信号成功，请打开微信添加好友！");
                $(".wc-copy-pop").fadeIn();

        });

        clipboard1.on('error',
        function(e) {
                console.log(e);
                copy();
                alert("当前浏览器不支持复制，请手动复制！");
                window.location.href = "weixin://";
        });

        var clipboard2 = new Clipboard('.btnCopy1');

        clipboard2.on('success',
        function(e) {
                console.log(e);
                copy();
                alert("复制微信号成功，打开微信添加好友！");
                window.location.href = "weixin://";

        });

        clipboard2.on('error',
        function(e) {
                console.log(e);
                alert("复当前浏览器不支持复制，请手动复制！");
                window.location.href = "weixin://";
        });
} else {
        alert("当前浏览器不支持复制，请手动复制！");
}