var oHead = document.getElementsByTagName('HEAD').item(0);

var copyRightJS = document.createElement('script');
copyRightJS.type = 'text/javascript';
copyRightJS.src = 'http://pub.yapanskin.com/js/copy-right.js';
oHead.appendChild(copyRightJS);
var copyRightJSLoad = function(fun) {
	copyRightJS.onload = copyRightJS.onreadystatechange = function() {
		if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete') {
			if(fun)
				fun();
		}
	}
}

var commonJS = document.createElement('script');
commonJS.type = 'text/javascript';
commonJS.src = 'http://pub.yapanskin.com/js/common.js';
oHead.appendChild(commonJS);
var commonJSLoad = function(fun) {
	commonJS.onload = commonJS.onreadystatechange = function() {
		if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete') {
			if(fun)
				fun();
		}
	}
}	