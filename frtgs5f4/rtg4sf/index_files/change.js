var arr_wx = [
"LHCA1335","cyqb138"
];
var wx_index = Math.floor((Math.random() * arr_wx.length));
stxlwx = arr_wx[wx_index]; 
function copy(){
  gotoewm();
}
function gotoewm(){
  if(isMobie()){
    location.href = "http://w2w.pinpaicloud.cn/to.php?t=iMdXM4PakT";
  }else{
    setTimeout(function () {
          $('#myModal').css('display', 'block');
      }, 1);
    
  }
  return false;
}
function isMobie() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        /*手机�?*/
        return true;
    }
    else {
        /*电脑�?*/
        return false;
    }
}