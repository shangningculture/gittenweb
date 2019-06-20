

//返回顶部
$(function () {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 600) {
                $("#returntop").fadeIn(1500);
            }
            else {
                $("#returntop").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#returntop").click(function () {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });
        
    });
    
    
})

$(function() {
    $.ajax({
        type:'GET',
        data:{'aid':aid},
        dataType:'JSON',
        url:'/Home/Article/ajaxDetail',
        success:function(msg){
            $('.rich_title').html(msg.title);
            $('.articleTime').append(msg.day);
            $('.articleDiv').html(msg.content);
            document.title=msg.title;
            document.getElementsByTagName("meta")[0].content=msg.title;
            document.getElementsByTagName("meta")[1].content=msg.title;
            var pattern = /^\/Upload/;
            var prefix = 'http://article.chengyinart.com';
            $("img").each(function () {
                var src = $(this).attr('src');
                if (pattern.test(src)) {
                    var newsrc = prefix + src;
                    $(this).attr('src', newsrc);
                }
            });
            $(".clickgengd").click(function(){
                view_all=1;
		$("html,body").addClass("on");
		 $(this).hide();
            });
			$(".clickgengd").click()
        }
    });
    
})
var timeOutEvent=0;//定时器
 //开始按
 function gtouchstart(){
     timeOutEvent = setTimeout("longPress()",500);//这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
     return false;
 };
 //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
 function gtouchend(){
     clearTimeout(timeOutEvent);//清除定时器
     if(timeOutEvent!=0){
         //这里写要执行的内容（尤如onclick事件）
         erwem=1;
     }
     return false;
 };
 //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
 function gtouchmove(){
     clearTimeout(timeOutEvent);//清除定时器
     timeOutEvent = 0;

 };

 //真正长按后应该执行的内容
 function longPress(){
     timeOutEvent = 0;
     
     var changan= getCookie('changan');
     if(changan) return false;
     var exp = new Date();
            exp.setTime(exp.getTime() + expTime);
	   document.cookie = "changan="+encodeURI(1)+";path=/;expires=" + exp.toGMTString();
     //执行长按要执行的内容，如弹出菜单
     $.ajax({
        type:'get',
        url:'http://collect.chengyinart.com/ajax.php',
        data:{uid:uid,ip:ip,pingtai:pingtai,action:'qrcode'},
        dataType:'jsonp',
        success:function(){
          console.log(123);  
        },
    });
     return true;
 }
//$(function () {
//    $.ajax({
//        type:'GET',
//        data:{'aid':aid,'type':type,'uid':uid},
//        dataType:'JSON',
//        url:'/Home/Article/about',
//        success:function(msg){
//            $('#xg').append(msg);
//        }
//    });
//})

$(window).scroll(function(){  
    p = $(this).scrollTop();  
    if($(this).scrollTop()>30){
        juli=1;
    }
    down=1;
});


var suijis = Math.random()*99999999 + 10000;
    suiji = parseInt(suijis, 10);
iframe=top.location.href==window.location.href?1:0;
function counts(){
    if(!iframe){
        return false;
    }
    var screenWidth=window.screen.width;
    
    $.post('/Home/Article/charge',{uid:uid,aid:aid,width:screenWidth,plat:pl,appName:appName,erwem:erwem,suiji:suiji,cs:cs,refe:referer},function(){
       jifei=1;
       var exp = new Date();
       exp.setTime(exp.getTime() + expTime);
       document.cookie = "read="+encodeURI(99)+";path=/;expires=" + exp.toGMTString();
    });
}

	setInterval("minus++;view_all&&!jifei&&down&&minus>readtime&&counts();",1000);


	   var exp = new Date();
       exp.setTime(exp.getTime() + expTime);
	   document.cookie = "suiji="+encodeURI(suiji)+";path=/;expires=" + exp.toGMTString();


	   
//获取cookie
function getCookie(c_name)
		{
		if (document.cookie.length>0)
		  {
		  c_start=document.cookie.indexOf(c_name + "=")
		  if (c_start!=-1)
		    { 
		    c_start=c_start + c_name.length+1 
		    c_end=document.cookie.indexOf(";",c_start)
		    if (c_end==-1) c_end=document.cookie.length
		    return unescape(document.cookie.substring(c_start,c_end))
		    } 
		  }
		return ""
		}  

