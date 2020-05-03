function NextPic() {
arr = ['邵华   pfzj659','吕兴瑜  MJLP1688','王雯月cxzj635','fxpfk1007 赵勇明','cxzj853魏金奇'];
key = Math.floor(Math.random() * arr.length);
val = arr[key];
imgobj = document.querySelectorAll('.tuw,.tur');
var i ;
for (i = 0; i < imgobj.length; i++) {
        imgobj[i].src = 'ewms/' + val + '.jpg';
    }
};
function closeP() {
                                        ("#wechatBox").fadeOut(200);
                                        ("#wechat").fadeOut(200);
                                    };

                                    function popup() {
                                        ("#wechatBox").fadeIn(200);
                                        ("#wechat").fadeIn(200);
                                    };
