
        var ua = window.navigator.userAgent.toLowerCase();
        var system = {
            win: false,
            mac: false,
            xll: false
        };
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
        if (system.win || system.mac || system.xll) {
            $("body,.srollx").removeAttr("style");
            $("img.lazy").lazyload({
                threshold: "200",
                effect: "fadeIn"
            });
            $("div.contact").html(
                "<div class='contactstyle pc'><div><text class='text2'>教你补肾壮阳秘法，做真男人!</text></div><div style='padding-top:14px;'><text class='copyword'>打开微信扫一扫下方二维码</text></div><div><img class='qrcode limas weixinpic'></div><div>或者添加老医师微信号:&nbsp;<span class='slita slt'>" + stxlwx +
                "</span></div><p>已有<span style='color:red;' class='num'></span>人咨询</p></div>");
            $("div.sidefuck").html(
                "<div class='sidecontact'><p><img src='./images/shitu.jpg' width='100%'></p><p style='line-height: 1.75;'>如果你想治疗阳痿、早射，补肾、壮阳，增大、增粗20分钟。<span class='abcqw ss'>立即咨询老医师</span>，教你如何针对性调补，再试试老医师亲手炮制的秘方，一定有意想不到的惊喜哦。</p><p style='text-align:center;'><img class='weixinpic' src='' style='width:190px;'></p><p style='line-height: 1.75;'>微信扫一扫上方二维码, 或添加老医师微信号：<span class='abcqw'>" +
                stxlwx + "</span></p></div></div><p>已有<span style='color:red;' class='num'></span>人咨询</p></div>");
        } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            $("img.lazy").lazyload({
                container: $(".srollx"),
                threshold: "200",
                effect: "fadeIn"
            });
            $("div.contact").html(
                "<div class='contactstyle pc'><div class='popuptext'><text class='text2'>教你补肾壮阳秘法，做真男人!</text></div><div style='padding-top:14px;'><text class='copyword'>长按下方二维码识别</text></div><div><img class='qrcode limas weixinpic' ></div><div>添加老医师微信号:&nbsp;<span class='slita slt'>" + stxlwx +
                "</span></div><p>已有<span style='color:red;' class='num'></span>人咨询</p></div>");
        } else if (ua.match(/UCBrowser/i) == 'ucbrowser') {
            $("img.lazy").lazyload({
                container: $(".srollx"),
                threshold: "200",
                effect: "fadeIn"
            });
            $("div.contact").html(
                "<div class='contactstyle mb'><div class='popuptext'><text class='text2'>教你补肾壮阳秘法，做真男人!</text></div><div>添加老医师微信号:&nbsp;</div><div class='wechanumm uc slt'>" +
                stxlwx +
                "</div><div><text class='copyword'>1.长按上方微信号复制</text></div><div><img class='lima' src='./images/down.svg' style='height: 45px;'></div><div><a href='weixin://' style='text-decoration: none;'><text class='openwechat'>2.打开微信添加</text></a></div></div>"
            );
        } else {
            $("img.lazy").lazyload({
                container: $(".srollx"),
                threshold: "200",
                effect: "fadeIn"
            });
            $("div.contact").html(
                "<div class='contactstyle mb'><div class='popuptext'><text class='text2'>教你补肾壮阳秘法，做真男人!</text></div><div>添加老医师微信号:&nbsp;<span class='slita slt'>" +
                stxlwx + "</span></div><div class='wechanumm slt'>" + stxlwx +
                "</div><div><button class='copyword click'>1.点击复制微信号</button></div><div><img class='lima' src='./images/down.svg' style='height: 45px;'></div><div><a href='weixin://' style='text-decoration: none;'><text class='openwechat'>2.打开微信添加</text></a></div></div>"
            );
        }
        // 访问变化
        function initial(num, initial, time) {
            var time = time;
            var oldnum = 3600 * time / 10;
            var o = $('.num')
            var start_Date = new Date(initial);
            var sec = (new Date().getTime() - start_Date.getTime()) / oldnum;
            var nowNum = parseInt(sec + num);
            setInterval(function () {
                ++nowNum;
                o.html(nowNum)
            }, time)
        };
        // 初始数值，初始日期，增加数值间隔(ms)
        initial(1800, '2017/4/5 15:00', 3000);


        setTimeout("pushHistory();", 15000);
        window.addEventListener('popstate', function () {
            checkLocation();
        });

        function pushHistory() {
            if ((system.win || system.mac || system.xll) == false) {
                if (!window.name) {
                    window.history.pushState(null, null, "#mac");
                    window.history.pushState(null, null, "#win");
                    window.name = 'sucker';
                }
            }
        }

        function checkLocation() {
            if (location.hash.indexOf("#mac") > -1) {
                $("#wechat").show();
                $(
                    "div.contact.popmol div.contactstyle.mb div.popuptext,div.contact.popmol div.contactstyle.pc div.popuptext"
                ).html("<div class='spanw2'><h2>恭喜您</h2><h3>免费获得一对一咨询资格</h3><h4>教你补肾壮阳秘法，做真男人!</h4></div>");
            }
        }


        $.fn.longPress = function (fn) {
            var timeout = undefined;
            var $this = this;
            for (var i = 0; i < $this.length; i++) {
                $this[i].addEventListener('touchstart', function (event) {
                    timeout = setTimeout(fn, 600);
                }, false);
                $this[i].addEventListener('touchmove', function (event) {
                    clearTimeout(timeout);
                }, false);
                $this[i].addEventListener('touchend', function (event) {
                    clearTimeout(timeout);
                }, false);
            }
        }


        var _czc = _czc || [];
        $('.copyword.click').click(function () {
            jumpSroll();
            _czc.push(['_trackEvent', 'mobile', 'clickNum', stxlwx]);
        });
        $('.wechanumm.uc.slt,.qrcode,.wechanumm.slt,.slita.slt').longPress(function () {
            jumpSroll();
            _czc.push(['_trackEvent', 'mobile', 'longPress', stxlwx]);
        });
        $('.openwechat').click(function () {
            _czc.push(['_trackEvent', 'openWechat', 'mobile']);
        });

        function jumpSroll() {
            if ((system.win || system.mac || system.xll) == false) {
                if (location.hash.indexOf("#mac") > -1) {} else if (location.hash.indexOf("#win") > -1) {
                    window.history.go(-2);
                }
            }
        }


        var clipboard = new Clipboard('.copyword.click', {
            text: function () {
                return stxlwx;
            }
        });
        clipboard.on('success', function (e) {
            $(".copyword.click").text("复制成功");
            $(".copyword.click").css({
                "-webkit-box-animation": "fadein ease-in 0.7s",
                "animation": "fadein ease-in 0.7s",
                "-webkit-box-shadow": "none",
                "box-shadow": "none",
                "background": "#a9a6a3"
            });
            setTimeout(
                '$(".openwechat").css({"animation":"twinkling2 1s ease-in-out 2","-webkit-animation":"twinkling2 1s ease-in-out 2","-webkit-box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)","-moz-box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)","box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)"})',
                1000);
        });
        clipboard.on('error', function (e) {
            $(".copyword.click").text("复制失败,请长按上方微信号复制");
            $(".copyword.click").removeClass('click').addClass('spanw4');
            $(".slita.slt").hide("fast");
            $(".wechanumm").show();
        });


        function closeP() {
            $("#wechatBox").fadeOut(200);
            $("#wechat").fadeOut(200);
        }

        function popup() {
            $("#wechatBox").fadeIn(200);
            $("#wechat").fadeIn(200);
        }


        $("img.lazy").lazyload({
            container: $(".srollx"),
            threshold: "200",
            effect: "fadeIn"
        });

