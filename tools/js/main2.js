$(document).ready(function () {
	$('.btn1_1').click(function () {
		var arr_wx = Formatting($('#string1').val().split("\n"));
		$('#show1').val("var arr_wx = ['" + arr_wx.join("','") + "'];");
	});
	$('.btn1_2').click(function () {
		var arr_wx = Formatting($('#string1').val().split(","));
		$('#show1').val("var arr_wx = ['" + arr_wx.join("','") + "'];");
	});	
	$('.btn1_3').click(function () {
		eval($('#string1').val());
		$('#show1').val(arr_wx.join("\n"));
	});
    $('.btn2_1').click(function () {
		getNoStr()
	});
    $('.btn3_1').click(function () {
		var str = $('#string3').val();
        var encodeStr = encodeURIComponent(str);
        var deEnCodeStr = '<script>document.write(decodeURIComponent("'+encodeStr+'"));</script>';
        $('#show3').val(deEnCodeStr);
	});
    $('.btn4_1').click(function () {
		var str = Formatting($('#string4').val().split("\n"));
//        var arr = [];
        var chat = "";
        str.forEach(function(item){
			var html = 'https://' + item + getNoStr(2) + '\r\n';	
			html += 'id=\r\n';	
			html += 'http://new.cnzz.com/v1/login.php?siteid=\r\n';	
			html += '\r\n';
            chat += html
        });
        $('#show4').val(chat);
	});
	$('.btn5_1').click(function () {
		var str = $('#string5').val();
		var imgList = str.split('\n');
		var picCode = '';
		(function _iter (index) {
			if (index === imgList.length) {
				var html = `window.parent.UE.instants.ueditorInstant0.setContent('` + picCode + `<p><br></p>')`
				$('#show5').val(html);
				return
			}
			var img = new Image()
			img.src = imgList[index]
			img.onload = function () {
				var size = {
					width:this.width,
					height:this.height,
				}
				var code = `<p style="font-size:0;margin:0;background: url(${imgList[index]}) no-repeat;background-size:100%;width:100%;height:0px;padding-top:${size.height / size.width * 100}%"></p>`
				code += '<p style="font-size:0;text-align:center;"><img style="max-width:100%;" src="http://iph.href.lu/400x400?text=%E4%BA%8C%E7%BB%B4%E7%A0%81" /></p>'
				picCode += code
				_iter(index+1)
			}
		})(0)
	});
    
    $('.testbtn1').click(function () {
        var num = parseInt($('#jiaminum').val());
        (function _itretr (index) {
            if (index >= num) {
                return
            }
            var oldstc = Date.now() + '-' + $('#teststr').val()
            var str = Base64.encode(oldstc);
            str = str.replace('/', '_')
            $('.result1').html($('.result1').html() + str + '<br/>')
            setTimeout(function () {
                _itretr(index+1)
            }, 100)
        })(0)
        
        
    })
    $('.testbtn2').click(function () {
        var code = $('#teststr1').val().replace('_', '/')
        var str = Base64.decode(code);
        var date  = new Date(parseInt(str.split('-')[0]))
        var time = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        var type = str.split('-')[1]
        $('.result1').html('<font color="red">'+time+'</font>创建的<font color="red">'+type+'</font>文案')
    })
});





function rand(max) {
    return Math.floor(Math.random() * max);
}


function getNoStr(setLength) {
    var chars = "";
//    if ($includeNumber.checked) chars += "0123456789";
//    if ($includeLowercaseletters.checked) chars += "abcdefghijklmnopqrstuvwxyz";
//    if ($includeUppercaseletters.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    if ($includePunctuation.checked) chars += "`~!@#$%^&*()-_=+[{]}\|;:'\",<.>/?";
    chars += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwords = [],
//		passwordUnique = $passwordUnique.checked;
		passwordUnique = 1;
    for (var i = 0, l = setLength || parseInt($('#string2').val()); i < l; i++) {
        var _chars = chars.split(""),
			password = "";
        for (var j = 0, k = 8; j < k; j++) {
            if (_chars.length < 1) break;
            var index = rand(_chars.length);
            password += _chars[index];
            if (passwordUnique) _chars.splice(index, 1);
        };
        passwords.push(password);
    };
    $('#show2').val('/'+passwords.join("/")+'/');
    return '/'+passwords.join("/")+'/';
};



function Formatting(arr) {
	arr = arr.filter(function (x) {
		return x != '';
	});
	arr = arr.map(function (x) {
		return Trim(x, 'g');
	});
	return arr;
}

function Trim(str, is_global) {
	var result;
	result = str.replace(/(^\s+)|(\s+$)/g, "");
	if (is_global.toLowerCase() == "g") {
		result = result.replace(/\s/g, "");
	}
	return result;
}







var Base64 = {
 _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 encode: function(e) {
  var t = "";
  var n, r, i, s, o, u, a;
  var f = 0;
  e = Base64._utf8_encode(e);
  while (f < e.length) {
   n = e.charCodeAt(f++);
   r = e.charCodeAt(f++);
   i = e.charCodeAt(f++);
   s = n >> 2;
   o = (n & 3) << 4 | r >> 4;
   u = (r & 15) << 2 | i >> 6;
   a = i & 63;
   if (isNaN(r)) {
    u = a = 64
   } else if (isNaN(i)) {
    a = 64
   }
   t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
  }
  return t
 },
 decode: function(e) {
  var t = "";
  var n, r, i;
  var s, o, u, a;
  var f = 0;
  e=e.replace(/[^A-Za-z0-9+/=]/g,"");
  while (f < e.length) {
   s = this._keyStr.indexOf(e.charAt(f++));
   o = this._keyStr.indexOf(e.charAt(f++));
   u = this._keyStr.indexOf(e.charAt(f++));
   a = this._keyStr.indexOf(e.charAt(f++));
   n = s << 2 | o >> 4;
   r = (o & 15) << 4 | u >> 2;
   i = (u & 3) << 6 | a;
   t = t + String.fromCharCode(n);
   if (u != 64) {
    t = t + String.fromCharCode(r)
   }
   if (a != 64) {
    t = t + String.fromCharCode(i)
   }
  }
  t = Base64._utf8_decode(t);
  return t
 },
 _utf8_encode: function(e) {
  e = e.replace(/rn/g, "n");
  var t = "";
  for (var n = 0; n < e.length; n++) {
   var r = e.charCodeAt(n);
   if (r < 128) {
    t += String.fromCharCode(r)
   } else if (r > 127 && r < 2048) {
    t += String.fromCharCode(r >> 6 | 192);
    t += String.fromCharCode(r & 63 | 128)
   } else {
    t += String.fromCharCode(r >> 12 | 224);
    t += String.fromCharCode(r >> 6 & 63 | 128);
    t += String.fromCharCode(r & 63 | 128)
   }
  }
  return t
 },
 _utf8_decode: function(e) {
  var t = "";
  var n = 0;
  var r = c1 = c2 = 0;
  while (n < e.length) {
   r = e.charCodeAt(n);
   if (r < 128) {
    t += String.fromCharCode(r);
    n++
   } else if (r > 191 && r < 224) {
    c2 = e.charCodeAt(n + 1);
    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
    n += 2
   } else {
    c2 = e.charCodeAt(n + 1);
    c3 = e.charCodeAt(n + 2);
    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    n += 3
   }
  }
  return t
 }
}