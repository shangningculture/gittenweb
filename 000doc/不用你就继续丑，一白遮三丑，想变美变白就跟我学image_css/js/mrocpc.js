
var convert_id;
var reg = new RegExp('(^|&)utm_source=([^&]*)(&|$)', 'i'),
	r = location.search.substr(1).match(reg),
	utm_source = r != null ? $.trim(unescape(r[2])) : null;

switch(utm_source) {
	case 'toutiao_hf05':
		convert_id = "61710030227";
		break;
	case 'toutiao_hf06':
		convert_id = "75112428121";
		break;
	case 'toutiao_hf07':
		convert_id = "75112600959";
		break;
	case 'toutiao_hf08':
		convert_id = "76179674008";
		break;
	case 'toutiao_hf09':
		convert_id = "76179860674";
		break;
	case 'toutiao_hf10':
		convert_id = "76179762392";
		break;
	case 'toutiao_hf11':
		convert_id = "73655085060";
		break;
	default:
		break;
}

(function(root) {
    root._tt_config = true;
    var ta = document.createElement('script'); ta.type = 'text/javascript'; ta.async = true;
    ta.src = document.location.protocol + '//' + 's3.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';
    ta.onerror = function () {
        var request = new XMLHttpRequest();
        var web_url = window.encodeURIComponent(window.location.href);
        var js_url  = ta.src;
        var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id='+convert_id;
        request.open('GET', url, true);
        request.send(null);
    }
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ta, s);
})(window);



