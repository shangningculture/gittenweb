var arr_wx =[
"AB76124",
"xx52099xm",
"AB05974",
"AB05974"
];
var wx_index = Math.floor((Math.random()*arr_wx.length));
var wx_index2 = Math.floor((Math.random()*arr_wx.length));
    var wxnum = arr_wx[wx_index];
    var wxnum2 = arr_wx[wx_index2];
    var wx_img = "<img class='wechatImg' width='200' src='static/"+arr_wx[wx_index]+".jpg'>";
    var wx_imgs = "<img class='wechatImg' width='200' src='static/"+arr_wx[wx_index2]+".jpg'>";

    // $(".ewmimg").attr('src','./wechat_imgs/'+wxnum+'.jpg');