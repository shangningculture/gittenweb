// JavaScript Document
var arr_wx =["jsto6845","kljh5393","mxzk5189","tjgf00005","ylch1034"];
var wx_index = Math.floor((Math.random() * arr_wx.length));
stxlwx = arr_wx[wx_index];
var img = arr_wx[wx_index]+".jpg";
var wx_img = "<img class='qrcode_img' src='./wen_files/"+img+"' >"; 








function setTab(name,cursel){
	cursel_0=cursel;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById(name+i);
		var menudiv = document.getElementById("con_"+name+"_"+i);
		if(i==cursel){
			menu.className="off";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}
    
var randNum;
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}





















 


























































































    










































