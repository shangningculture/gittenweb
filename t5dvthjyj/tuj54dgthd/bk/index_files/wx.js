    var d = new Date()
    var vYear = d.getFullYear()
    var vMon = d.getMonth() + 1
    var vDay = d.getDate()
    var h = d.getHours();
    var m = d.getMinutes();
    var se = d.getSeconds();
    s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay);
	var click_time = (h < 10 ? "0" + h : h)+ ":" + (m < 10 ? "0" + m : m);

	var cname = '体型管理';
	var arr_wx =['Yimt010','Yimt111','Yimt128','Yimt518','Yimt558','Yimt668','Yimt669','Yimt720','Yimt777','Yimt886','Yimt999'];

		function setCookie(c_name, value, expiredays) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
		}
		function getCookie(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
			if (arr = document.cookie.match(reg))
				return (arr[2]);
			else
				return null;
		}
		function delCookie(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = getCookie(name);
			if (cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
		var stxlwx = ""; var wx_img = ""; var wx_img1 = "";

		if (getCookie("username") == null) {
			var wx_index = Math.floor((Math.random() * arr_wx.length));
			stxlwx = arr_wx[wx_index];
			wx_img = "<img src='images/" + arr_wx[wx_index] + ".jpg' style='width:258px;height:258px;'/>";
                        wx_img1 = "<img style='box-sizing: border-box; width:153px; height:153px; vertical-align: middle; max-width: 100%; display: block; margin: -190px auto 0px 17px;' src='images/" + arr_wx[wx_index] + ".jpg'  style='width:258px;height:258px;'/>";
			setCookie('username', stxlwx, 7);
		}
		else {
			stxlwx = getCookie("username");
			wx_img = "<img src='images/" + stxlwx + ".jpg' style='width:258px;height:258px;'/>";
                        wx_img1 = "<img style='box-sizing: border-box; width:153px; height:153px; vertical-align: middle; max-width: 100%; display: block; margin: -190px auto 0px 17px;' src='images/" + stxlwx + ".jpg'  style='width:258px;height:258px;'/>";
		}
		function isWeiXin() {
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == 'micromessenger') {
				return true;
			} else {
				return false;
			}
		}




 