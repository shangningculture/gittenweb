document.writeln("<div id=\"flow_wx\">");
document.writeln("      <p id=\"wx_icon\"></p>");
document.writeln("      <div id=\"wx_copy\"> <span><script> document.write(stxlwx);</script></span><br>");
document.writeln("        <em id=\"copy_num\">(长按复制微信号，添加好友)</em><br>");
document.writeln("        <b><i></i>加好友1对1指导减肥</b>");
document.writeln("        <p id=\"close_wx\"></p>");
document.writeln("      </div>");
document.writeln("    </div>");
	var wx_icon = document.getElementById('wx_icon'),
		wx_copy = document.getElementById('wx_copy'),
		close_wx = document.getElementById('close_wx'),
		copy_num = document.getElementById('copy_num'),
		wx_num = document.getElementById('wx_num');

		wx_icon.onclick =function(){
			this.style.display = 'none';
			wx_copy.style.display = 'block';
		};
		


		close_wx.onclick = function(){
			wx_copy.style.display = 'none';
			wx_icon.style.display = 'block';

		};
