  var _this = {};
		var uuid = new XMLHttpRequest();
		uuid.open("GET", "js/uuid.php", false);
		uuid.onload = function() {
			_this = JSON.parse(this.response);
		}
		uuid.send();
//    console.log(_this);
//		console.log(_this.timestamp);
//		console.log(_this.nonceStr);
//		console.log(_this.signature);
    wx.config({
				debug: false,
				appId: 'wx9a575d9652924f60',//<?php echo $ws["appId"]; ?>
				timestamp: _this.timestamp,//<?php echo $ws["timestamp"]; ?>
				nonceStr: _this.nonceStr,//<?php echo $ws["nonceStr"]; ?>
				signature: _this.signature,//<?php echo $ws["signature"]; ?>
				jsApiList: [
					'checkJsApi',
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone',
				]
			});

		var wstitle = thiswstitle;
		var wsdesc = thiswsdesc;
		var wslink = _this.url;
		var wsimg = thiswsimg;
			

wx.ready(function () {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
        title: wstitle,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
           // alert('分享成功');
        },
        cancel: function () {
        }
    });
 
    // 分享给朋友
    wx.onMenuShareAppMessage({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
          //alert('分享成功');
        },
        cancel: function () {
        }
    });
 
    // 分享到QQ
    wx.onMenuShareQQ({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
           // alert('分享成功');
        },
        cancel: function () {
        }
    });
 
    // 微信到腾讯微博
    wx.onMenuShareWeibo({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
           // alert('分享成功');
        },
        cancel: function () {
        }
    });
 
    // 分享到QQ空间
    wx.onMenuShareQZone({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
          //  alert('分享成功');
        },
        cancel: function () {
        }
    });
 
});