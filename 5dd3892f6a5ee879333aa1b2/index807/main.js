
$(function(){

    // 答案数据

    var json = [
        "18岁以下10斤以下试过减肥，但体重反弹",
        "18岁以下10斤以下一直想减肥，但没有行动",
        "18岁以下10斤以下成功了，还想再瘦",
        "18岁以下10-20斤试过减肥，但体重反弹",
        "18岁以下10-20斤一直想减肥，但没有行动",
        "18岁以下10-20斤成功了，还想再瘦",
        "18岁以下20斤以上试过减肥，但体重反弹",
        "18岁以下20斤以上一直想减肥，但没有行动",
        "18岁以下20斤以上成功了，还想再瘦",
        "18岁-25岁10斤以下试过减肥，但体重反弹",
        "18岁-25岁10斤以下一直想减肥，但没有行动",
        "18岁-25岁10斤以下成功了，还想再瘦",
        "18岁-25岁10-20斤试过减肥，但体重反弹",
        "18岁-25岁10-20斤一直想减肥，但没有行动",
        "18岁-25岁10-20斤成功了，还想再瘦",
        "18岁-25岁20斤以上试过减肥，但体重反弹",
        "18岁-25岁20斤以上一直想减肥，但没有行动",
        "18岁-25岁20斤以上成功了，还想再瘦",
        "25岁以上10斤以下试过减肥，但体重反弹",
        "25岁以上10斤以下一直想减肥，但没有行动",
        "25岁以上10斤以下成功了，还想再瘦",
        "25岁以上10-20斤试过减肥，但体重反弹",
        "25岁以上10-20斤一直想减肥，但没有行动",
        "25岁以上10-20斤成功了，还想再瘦",
        "25岁以上20斤以上试过减肥，但体重反弹",
        "25岁以上20斤以上一直想减肥，但没有行动",
        "25岁以上20斤以上成功了，还想再瘦"
    ];
    // 第一题
    var question_1='',question_2='',question_3='',Last_question='';
    $("#first li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
        question_1 = $(this).html();
        mySwiper.slideNext();
    });

    // 第二题
    $("#second li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
        question_2 = $(this).html();
        mySwiper.slideNext();
    });

    // 第三题
    $("#third li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
        question_3 = $(this).html();
        question_3 = question_3.replace(/[A-Z]+\./g,"");

    });
	
   
	
    // 点击提交弹出对应编号
    $("#submit_btn").unbind().on("click",function(){
        if(question_3==""){
            alert("最后一个选项没填写，填写完获取结果哦！");
            return;
        }
        if (question_1 === '18岁以下') {
            alert("您还没18岁呢，自己注意饮食多锻炼就行！");
            return;
        }
		/*** 
			by  sojson.com  
			1.此处优化异步加载。
			2.采用配置的方式加载微信号。
		***/
	//	$("#wxpic").attr('src','images/wxpic.jpg');
		
	//	var num = 0 + Math.round(Math.random() * (sojson_cfg.wechat.length - 1 - 0));
	//	$("#no_dc_txt").text(sojson_cfg.wechat[num] || '请设置微信号');
		
			
		
        Last_question = question_1+question_2+question_3;
        Last_question = $.trim(Last_question);
               Last_questionIndex = $.inArray(Last_question,json) + 1;
        // 此处要修改
       // Last_questionIndex = "878";
        Last_question = question_1+question_2+question_3;
        Last_question = $.trim(Last_question);
//                Last_questionIndex = $.inArray(Last_question,json) + 1;
        Last_questionIndex = "490";
        $("#Mask .Mask_txt h3 span,#Mask .Mask_txt .num").html(Last_questionIndex);
        $("#Mask").fadeIn(400);
    });

    // 点击关闭按钮关闭遮罩层并且将测试返回第一题
    $("#Mask .close_Mask").on("click",function(){
        $("#Mask").fadeOut(400);
        mySwiper.slideTo(0);
    });

    // 点击上一题
    $(".prev").on("click",function(){
        mySwiper.slidePrev();
    });


    // 导航切换
    $(".menu li").on("click",function(){
        $(this).addClass("on").siblings().removeClass("on");
        var TabIndex = $(this).index();
        if(TabIndex == 0){
            $("#case").fadeIn(400);
            $("#comment").fadeOut(400);
        }else{
            $("#comment").fadeIn(400);
            $("#case").fadeOut(400);
        }
    });

    var isPlay = false;

    // 点击播放语音
    $(".voice").click(function(){
        if(!isPlay){
            AudioPlay($(this),".voice_pic");
            isPlay = true;
        }else{
            AudioPause($(this),".voice_pic");
            isPlay = false;
        }
    });

    $(".M_voice").on("click",function(){
        if(!isPlay){
            AudioPlay($(this),".Middle_voice");
            isPlay = true;
        }else{
            AudioPause($(this),".Middle_voice");
            isPlay = false;
        }
    });

    $(".audio_bottom").on("click",function(){
        if(!isPlay){
            AudioPlay($(this),".bottom_voice");
            isPlay = true;
        }else{
            AudioPause($(this),".bottom_voice");
            isPlay = false;
        }
    });

    // 音频播放函数
    function AudioPlay(obj,obj_voice){
        obj.children("audio").get(0).play();
        obj.children("em,i").fadeOut();
        obj.children(obj_voice).addClass("on");
    }
    // 音频暂停且当前时间设为0函数
    function AudioPause(obj,obj_voice){
        obj.children("audio").get(0).pause();
        obj.children("audio").get(0).currentTime = 0;
        obj.children(obj_voice).removeClass("on");
    }

    // 点赞
    var isLike = false;
    $(".top_b_like").on("click",function(){
        if(!isLike){
            $(this).children("img").attr("src","https://as.linwenfa.com/fage/diaocha/http://a3.z-cl14.top/gdt/zhoulh/tzk/Images/top_b_like_on.png");
            var LikeNum = parseInt($(this).children("span").html());
            $(this).children("span").html(LikeNum + 1);
            isLike = true;
        }else{
            $(this).children("img").attr("src","https://as.linwenfa.com/fage/diaocha/http://a3.z-cl14.top/gdt/zhoulh/tzk/Images/top_b_like.png");
            var LikeNum = parseInt($(this).children("span").html());
            $(this).children("span").html(LikeNum - 1);
            isLike = false;
        }
    });


    // 点击评论区小图放大到整屏显示


    $("#thumb .thumb_close").click(function(){
        $("#thumb").fadeOut(400);
        $("#thumb .swiper-container .swiper-wrapper").html('');
    });

    $(".qq_Mask .close_Mask").click(function(){
        $(".qq_Mask").fadeOut(400);
    });

    $(".top_r,.bottom_btn,.Link,.top_l").click(function(){
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

        var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
        if (viewport) {
            var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
            if (o) {
                initial_scale = parseFloat(o[2]);
                v = parseInt(1 / initial_scale);
            }
        } else if (flexible) {
            var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
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
	
	
	
	

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


jQuery(function () {
    jQuery("strong").bind("taphold", tapholdHandler);
    function tapholdHandler(event) {
        CP();
    }
});
function getCookie(name)
{
    try{
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }catch(e){}
}

function GetComUrl() {
    var lastUrl = ''; //来源url-----------------------
    if (document.referrer.length > 0) {
        lastUrl = document.referrer;
    } try {
        if (lastUrl.length == 0 && opener.location.href.length > 0) {
            lastUrl = opener.location.href;
        }
    } catch (e) {
        lastUrl = window.location.href;
    }
    return lastUrl;
}
function UrlSearch()
{
    var name,value;
    var str=location.href; //取得整个地址栏
    var num=str.indexOf("?")
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
        }
    }
}

 var mySwiper = new Swiper('#case .swiper-container', {
        noSwiping: true,
        noSwipingClass: 'notmove',
});

var mySecSwiper = new Swiper('#thumb .swiper-container', {
	observer: true,//修改swiper自己或子元素时，自动初始化swiper
	observeParents: true,//修改swiper的父元素时，自动初始化swiper
	prevButton: '.swiper-button-prev',
	nextButton: '.swiper-button-next',
	initialSlide: 0,
});
 $(function() {
	$("img").lazyload({
		effect: "fadeIn"
	});
});
