arr_wx=['zmm8243','zmm9752','zmm9834','brt8280888'];
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = arr_wx[wx_index];
var img = arr_wx[wx_index]+".jpg";
var wx_img = "<img width='100%'  src='wx/"+img+"'>";
var wx_img1 = "<img width='100%'  src='wx/"+img+"'  class='weixinpic'>";