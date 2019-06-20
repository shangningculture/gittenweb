/**
         * Created by moxiaobei on 2017/3/9.
         */
        $(function () {
            
            // 第一题
            var question_1 = '', question_2 = '', question_3 = '', Last_question = '';
            $("#first li").on("click", function () {
                $(this).addClass("on").siblings().removeClass("on");
                question_1 = $(this).html();
                mySwiper.slideNext();
            });
            // 第二题
            $("#second li").on("click", function () {
                $(this).addClass("on").siblings().removeClass("on");
                question_2 = $(this).html();
                mySwiper.slideNext();
            });
            // 第三题
            $("#third li").on("click", function () {
                $(this).addClass("on").siblings().removeClass("on");
                question_3 = $(this).html();
                question_3 = question_3.replace(/[A-Z]+./g, "");
            });
            // 点击提交弹出对应编号
            $("#submit_btn").on("click", function () {
                if (question_3 == "") {
                    alert("请告诉我您几点睡觉呢?");
                    return;
                }               
                $("#csbt").html("测试结果");
                $("#comment1").fadeOut(0);
                $("#comment").fadeIn(400);
                $("#case").fadeOut(400);
            });
            // 点击关闭按钮关闭遮罩层并且将测试返回第一题
            $("#Mask .close_Mask").on("click", function () {
                $("#Mask").fadeOut(400);
                mySwiper.slideTo(0);
            });
            // 点击上一题
            $(".prev").on("click", function () {
                mySwiper.slidePrev();
            });
            // 导航切换
            $(".menu li").on("click", function () {
                $(this).addClass("on").siblings().removeClass("on");
                var TabIndex = $(this).index();
                if (TabIndex == 0) {
                    $("#case").fadeIn(400);
                    $("#comment").fadeOut(400);
                    $("#comment1").fadeIn(400);
                } else {
                    $("#comment").fadeIn(400);
                    $("#case").fadeOut(400);
                    $("#comment1").fadeIn(400);
                }
            });
            var isPlay = false;
            // 点击播放语音
            $(".voice").click(function () {
                if (!isPlay) {
                    AudioPlay($(this), ".voice_pic");
                    isPlay = true;
                } else {
                    AudioPause($(this), ".voice_pic");
                    isPlay = false;
                }
            });
            $(".M_voice").on("click", function () {
                if (!isPlay) {
                    AudioPlay($(this), ".Middle_voice");
                    isPlay = true;
                } else {
                    AudioPause($(this), ".Middle_voice");
                    isPlay = false;
                }
            });
            $(".audio_bottom").on("click", function () {
                if (!isPlay) {
                    AudioPlay($(this), ".bottom_voice");
                    isPlay = true;
                } else {
                    AudioPause($(this), ".bottom_voice");
                    isPlay = false;
                }
            });
            // 音频播放函数
            function AudioPlay(obj, obj_voice) {
                obj.children("audio").get(0).play();
                obj.children("em,i").fadeOut();
                obj.children(obj_voice).addClass("on");
            }

            // 音频暂停且当前时间设为0函数
            function AudioPause(obj, obj_voice) {
                obj.children("audio").get(0).pause();
                obj.children("audio").get(0).currentTime = 0;
                obj.children(obj_voice).removeClass("on");
            }

            // 点赞
            var isLike = false;
            $(".top_b_like").on("click", function () {
                if (!isLike) {
                    $(this).children("img").attr("src", "https://adsource.b0.upaiyun.com/fage/diaocha/images/top_b_like_on.png");
                    var LikeNum = parseInt($(this).children("span").html());
                    $(this).children("span").html(LikeNum + 1);
                    isLike = true;
                } else {
                    $(this).children("img").attr("src", "https://adsource.b0.upaiyun.com/fage/diaocha/images/top_b_like.png");
                    var LikeNum = parseInt($(this).children("span").html());
                    $(this).children("span").html(LikeNum - 1);
                    isLike = false;
                }
            });
            // 点击评论区小图放大到整屏显示
            $("#thumb .thumb_close").click(function () {
                $("#thumb").fadeOut(400);
                $("#thumb .swiper-container .swiper-wrapper").html('');
            });
            $(".qq_Mask .close_Mask").click(function () {
                $(".qq_Mask").fadeOut(400);
            });
            $(".top_r,.bottom_btn,.Link,.top_l").click(function () {
                $(".qq_Mask").fadeIn(400);
            });
        });
        !function (win) {
            function resize() {
                var domWidth = domEle.getBoundingClientRect().width;
                if (domWidth / v > 540) {
                    domWidth = 540 * v;
                }
                win.rem = domWidth / 16;
                domEle.style.fontSize = win.rem + "px";
            }

            var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement,
                viewport = dom.querySelector('meta[name="viewport"]'),
                flexible = dom.querySelector('meta[name="flexible"]');
            if (viewport) {
                var o = viewport.getAttribute("content").match(/initial-scale=(["']?)([d.]+)1?/);
                if (o) {
                    initial_scale = parseFloat(o[2]);
                    v = parseInt(1 / initial_scale);
                }
            } else if (flexible) {
                var o = flexible.getAttribute("content").match(/initial-dpr=(["']?)([d.]+)1?/);
                if (o) {
                    v = parseFloat(o[2]);
                    initial_scale = parseFloat((1 / v).toFixed(2))
                }
            }
            if (!v && !initial_scale) {
                var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
                v = win.devicePixelRatio;
                v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
            }
            //没有viewport标签的情况下
            if (domEle.setAttribute("data-dpr", v), !viewport) {
                if (viewport = dom.createElement_x("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
                    domEle.firstElementChild.appendChild(viewport)
                } else {
                    var m = dom.createElement_x("div");
                    m.appendChild(viewport), dom.write(m.innerHTML)
                }
            }
            win.dpr = v;
            win.addEventListener("resize", function () {
                clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
            }, false);
            win.addEventListener("pageshow", function (b) {
                b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
            }, false);
            resize();
        }(window);