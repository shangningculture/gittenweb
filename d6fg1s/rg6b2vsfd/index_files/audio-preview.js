$(function () {
    var mySwiper = new Swiper('#case .swiper-container', {
        noSwiping: true,
        noSwipingClass: 'notmove',
    });

    var mySecSwiper = new Swiper('#thumb .swiper-container', {
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        initialSlide: 0
    });


    var psqNum = $("#psq_num").val();
    // 第一题
    var question_1 = '', question_2 = '', question_3 = '', question_4 = '', question_5 = '', Last_question = '';
    var lis = $(".swiper-wrapper");
    var odiv = $(".swiper-container");
    var wd = odiv.width();
    $("#first li").on("click", function () {
        question_1 = "";
        $(this).addClass("on").siblings().removeClass("on");
        question_1 = $(this).index() + 1;
        if (psqNum != 1) {
            $(this).parents(".swiper-slide").addClass("active").siblings().removeClass("active");
            lis.animate({left: "-" + wd + "px"}, 400);
        }
    });
    // 第二题
    $("#second li").on("click", function () {
        question_2 = "";
        $(this).addClass("on").siblings().removeClass("on");
        question_2 = $(this).index() + 1;
        if (psqNum != 2) {
            $(this).parents(".swiper-slide").addClass("active").siblings().removeClass("active");
            lis.animate({left: "-" + wd * 2 + "px"}, 400);
        }
    });
    // 第三题
    $("#third li").on("click", function () {
        question_3 = "";
        $(this).addClass("on").siblings().removeClass("on");
        question_3 = $(this).index() + 1;
        if (psqNum != 3) {
            $(this).parents(".swiper-slide").addClass("active").siblings().removeClass("active");
            lis.animate({left: "-" + wd * 3 + "px"}, 400);
        }
    });
    // 第四题
    $("#four li").on("click", function () {
        question_4 = "";
        $(this).addClass("on").siblings().removeClass("on");
        question_4 = $(this).index() + 1;
        if (psqNum != 4) {
            $(this).parents(".swiper-slide").addClass("active").siblings().removeClass("active");
            lis.animate({left: "-" + wd * 4 + "px"}, 400);
        }
    });
    // 第五题
    $("#five li").on("click", function () {
        question_5 = "";
        $(this).addClass("on").siblings().removeClass("on");
        question_5 = $(this).index() + 1;
    });

    // 点击提交弹出对应编号
    $(".submit_btn").on("click", function () {
        switch (psqNum) {
            case '1':
                c_obj = $("#first li");
                break;
            case '2':
                c_obj = $("#second li");
                break;
            case '3':
                c_obj = $("#third li");
                break;
            case '4':
                c_obj = $("#four li");
                break;
            case '5':
                c_obj = $("#five li");
                break;
            default:
                c_obj = '';
        }
        if (!c_obj.hasClass("on")) {
            $.diy_alert({"cont": "第" + psqNum + "题，未选答案"});
            setTimeout(function () {
                $(".diy_alert").remove();
            }, 1000);
            return;
        }
    });

    // 点击上一题
    $(".prev").on("click", function () {
        //mySwiper.slidePrev();
        var b = parseInt(lis.css("left")) + parseInt(wd);
        lis.animate({left: b + "px"}, 400);
    });

    $('.close-wechat').on('click', function () {
        $('.open-wechat-success').fadeOut(400);
    });

})


 