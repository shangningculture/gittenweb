arr_wx=['zmm9785','zmm8243','zmm9762','zmm9837'];
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = arr_wx[wx_index];
var img = arr_wx[wx_index]+".jpg";
var wx_img = "<img width='100%'  src='wx/"+img+"'>";
var wx_img1 = "<img width='100%'  src='wx/"+img+"'  class='weixinpic'>";