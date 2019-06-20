var ua = window.navigator.userAgent.toLowerCase();
  var system = {
    win: false,
    mac: false,
    xll: false
  };
  var p = navigator.platform;
  system.win = p.indexOf("Win") == 0;
  system.mac = p.indexOf("Mac") == 0;
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
  if (system.win || system.mac || system.xll) {
    $("div.contact").html("<div class='contactstyle pc'><div><text class='text2'>教你美肤良方，做精致女人!!</text></div><div style='padding-top:14px;'><text class='copyword'>长按下方二维码识别添加</text></div><div><img class='qrcode limas weixinpic' src=''></div><div>或添加微信号:&nbsp;<span class='slita slt'>" + stxlwx + "</span></div></div>");
    $("div.sidefuck").html("<div class='sidecontact'><p></p><p style='line-height: 1.75;'>如果你想做精致完美女人。。<span class='abcqw ss'>立即咨询</span>，教你如何针对性修复，一定有意想不到的惊喜哦。。</p><p style='text-align:center;'><img class='weixinpic' src='' style='width:190px;'></p><p style='line-height: 1.75;'>长按识别, 或添加微信号：<span class='abcqw'>" + stxlwx + "</span></p></div>");
  } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    $("div.contact").html("<div class='contactstyle pc'><div class='popuptext'><text class='text2'>教你美肤良方，做精致女人!!</text></div><div style='padding-top:14px;'><text class='copyword'>长按下方二维码识别</text></div><div><img class='qrcode limas weixinpic' src=''></div><div>添加微信号：&nbsp;<span class='slita slt'>" + stxlwx + "</span></div></div>");
  } else if (ua.match(/UCBrowser/i) == 'ucbrowser') {
    $("div.contact").html("<div class='contactstyle mb'><div class='popuptext'><text class='text2'>教你美肤良方，做精致女人!!</text></div><div>添加微信号:&nbsp;</div><div class='wechanumm uc slt'>" + stxlwx + "</div><div><text class='copyword'>1.长按上方微信号复制</text></div><div class='svgdis'><img class='lima' src='js/down.svg'></div><div><a href='weixin://' style='text-decoration: none;'><text class='openwechat'>2.打开微信添加</text></a></div></div>");
  } else {
    $("div.contact").html("<div class='contactstyle mb'><div class='popuptext'><text class='text2'>教你美肤良方，做精致女人!!</text></div><div>添加微信号:&nbsp;<span class='slita slt'>" + stxlwx + "</span></div><div class='wechanumm slt'>" + stxlwx + "</div><div><button class='copyword click'>1.点击复制微信号</button></div><div class='svgdis'><img class='lima' src='js/down.svg'></div><div><a href='weixin://' style='text-decoration: none;'><text class='openwechat'>2.打开微信添加</text></a></div></div>");
  }
setTimeout("pushHistory();", 15000);
  window.addEventListener('popstate',
  function() {
    checkLocation();
  });
  function pushHistory() {
    if ((system.win || system.mac || system.xll) == false) {
      if (!window.name) {
        window.history.pushState(null, null, "#mac");
        window.history.pushState(null, null, "#win");
        window.name = 'sucker';
      }
    }
  }
  function checkLocation() {
    if (location.hash.indexOf("#mac") > -1) {
      $("#wechat").show();
      $("div.contact.popmol div.contactstyle.mb div.popuptext,div.contact.popmol div.contactstyle.pc div.popuptext").html("<div class='spanw2'><h2>恭喜您</h2><h3>免费获得一对一咨询资格</h3><h4>教你美肤良方，做精致女人!!</h4></div>");
    }
  }
$.fn.longPress = function(fn) {
    var timeout = undefined;
    var $this = this;
    for (var i = 0; i < $this.length; i++) {
      $this[i].addEventListener('touchstart',
      function(event) {
        timeout = setTimeout(fn, 600);
      },
      false);
      $this[i].addEventListener('touchmove',
      function(event) {
        clearTimeout(timeout);
      },
      false);
      $this[i].addEventListener('touchend',
      function(event) {
        clearTimeout(timeout);
      },
      false);
    }
  }
var _czc = _czc || [];
  $('.copyword.click,.slt').click(function() {
    jumpSroll();
    _czc.push(['_trackEvent', 'mobile', 'clickNum', stxlwx]);
  });
  $('.wechanumm.uc.slt,.qrcode,.wechanumm.slt,.slita.slt,.slt').longPress(function() {
    jumpSroll();
    _czc.push(['_trackEvent', 'mobile', 'longPress', stxlwx]);
  });
  $('.openwechat').click(function() {
    _czc.push(['_trackEvent', 'openWechat', 'mobile']);
  });
  function jumpSroll() {
    if ((system.win || system.mac || system.xll) == false) {
      if (location.hash.indexOf("#mac") > -1) {} else if (location.hash.indexOf("#win") > -1) {
        window.history.go( - 2);
      }
    }
  }
var clipboard = new Clipboard('.copyword.click', {
    text: function() {
      return stxlwx;
    }
  });
  clipboard.on('success',
  function(e) {
    $(".copyword.click").text("复制成功");
    $(".copyword.click").css({
      "-webkit-box-animation": "fadein ease-in 0.7s",
      "animation": "fadein ease-in 0.7s",
      "-webkit-box-shadow": "none",
      "box-shadow": "none",
      "background": "#a9a6a3"
    });
    setTimeout('$(".openwechat").css({"animation":"twinkling2 1s ease-in-out 2","-webkit-animation":"twinkling2 1s ease-in-out 2","-webkit-box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)","-moz-box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)","box-shadow":"-2px 3px 38px -7px rgba(0,0,0,0.44)"})', 1000);
  });
  clipboard.on('error',
  function(e) {
    $(".copyword.click").text("复制失败,请长按上方微信号复制");
    $(".copyword.click").removeClass('click').addClass('spanw4');
    $(".slita.slt").hide("fast");
    $(".wechanumm").show();
  });
$("img.lazy").lazyload({
    container: $(".srollx"),
    threshold: "200",
    effect: "fadeIn"
  });
function closeP() {
    $("#wechatBox").fadeOut(200);
    $("#wechat").fadeOut(200);
  }
  function popup() {
    $("#wechatBox").fadeIn(200);
    $("#wechat").fadeIn(200);
  }

