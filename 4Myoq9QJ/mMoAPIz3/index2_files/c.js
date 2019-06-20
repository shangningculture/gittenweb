window.addEventListener("deviceorientation", orientationHandler, false);  
function orientationHandler(event) {  
    alpha = Math.round(event.alpha*100)/100;  
    beta = Math.round(event.beta*100)/100;  
    gamma =  Math.round(event.gamma*100)/100; 
    
}

function collect(){
     $.ajax({
        type:'get',
        url:'http://collect.chengyinart.com/ajax.php',
        data:{aid:aid,uid:uid,ip:ip,alpha:alpha,beta:beta,gamma:gamma,table:table,referer:referer,plat:pl,appName:appName,time:time,key:key,action:'collect'},
        dataType:'jsonp',
        success:function(){
            
        },

    });
}


function _update(_type){
    _type=1;
//    if(_type==1){
//        var action='update_view';
//    }else{
//        var action='update_count';
//    }
//     $.ajax({
//        type:'get',
//        url:'http://collect.chengyinart.com/ajax.php',
//        data:{table:table,key:key,action:action},
//        dataType:'jsonp',
//        success:function(){
//            
//        },
//
//    });
}
//
//function _update_bottom(){
//     $.ajax({
//        type:'get',
//        url:'http://collect.chengyinart.com/ajax.php',
//        data:{table:table,key:key,action:'update_bottom'},
//        dataType:'jsonp',
//        success:function(){
//            
//        },
//
//    });
//}
//
//var bottom=0;
//$(document).ready(function(){
//    $(window).scroll(function(){
//        if(($(document).scrollTop()>=$(document).height()-$(window).height()) && bottom==0){
//            _update_bottom();
//            bottom=1;
//        }
//    });
//});
collect();