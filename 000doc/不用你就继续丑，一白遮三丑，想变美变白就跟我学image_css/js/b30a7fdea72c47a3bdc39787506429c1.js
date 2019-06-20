;(function($, window, document,undefined) {
			var cookie = {
				set: function(name, value, time) {
					function getsec(str) {
						var str1=str.substring(1,str.length)*1,
							str2=str.substring(0,1);
						if(str2 == 's') {
							return str1*1000;
						} else if(str2 == 'h') {
							return str1*60*60*1000;
						} else if(str2 == 'd') {
							return str1*24*60*60*1000;
						}
					}
					
					var strsec = getsec(time),
						exp = new Date();
					exp.setTime(exp.getTime() + strsec*1);
					document.cookie = name + '='+ escape (value) + ';path=/;expires=' + exp.toGMTString();
				},
				get: function(name) {
					var arr,
						reg = new RegExp('(^| )'+name+'=([^;]*)(;|$)');
					if(arr = document.cookie.match(reg))
						return unescape(arr[2]);
					else
						return null;
				},
			}
			
			function submit(url, data, callback) {				
				callback = callback || false;
				$.ajax({
					url: url+'?cid='+cid,
					dataType: 'jsonp',
					type: 'get',
					data: data,
					jsonp: 'callback',
					success: function(res) {
						if(callback)
							callback(res);
					}
				});
			}

			var cid = cookie.get('_sa');
			if(!cid) {
				cid = 'SA1.0.1588478160.1525406160';
				var expire = 's63072000';
				cookie.set('_sa', cid, expire);
			}
			
			$.SA = {
				create: function(options) {
					var defaults = {title: document.title},
						settings = $.extend({}, defaults, options);
					submit('http://rd.yapanskin.com/index.php/analytics/index/create.html', settings);
				},
				
				send: function(options) {
					var defaults = {type: '', content: '', argument: '', title: document.title},
						settings = $.extend({}, defaults, options);
					submit('http://rd.yapanskin.com/index.php/analytics/index/send.html', settings);			
				}
			}	
		})(jQuery, window, document);

		var sa = $.SA;
		sa.create();