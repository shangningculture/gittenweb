var jsPath=document.scripts;
jsPath=jsPath[jsPath.length-1].src.substring(0,jsPath[jsPath.length-1].src.lastIndexOf("/")+1);
cget =location.host+window.location.pathname;
if(document.referrer.indexOf('baidu.com') >= 0){referrer="0";}
else if(document.referrer.indexOf('google') >= 0){referrer="1";}
else if(document.referrer.indexOf('bing.com') >= 0){referrer="2";}
else if(document.referrer.indexOf('so.com') >= 0||document.referrer.indexOf('360.cn') >= 0){referrer="3";}
else if(document.referrer.indexOf('sogou.com') >= 0){referrer="4";}
else if(document.referrer.indexOf('sm.cn') >= 0){referrer="8";}
else if(document.referrer.indexOf('uczzd.cn') >= 0){referrer="8";}
else if(document.referrer.indexOf(location.hostname) >= 0){referrer="5";}
else if(document.referrer === ""){referrer="6";}
else {referrer="7";}
if (location.hash!="#nocount"&&referrer!="-6"){
var script=document.createElement("script");  
script.setAttribute("type", "text/javascript");
script.setAttribute("src", jsPath+"count.php?host="+location.host+"&path="+location.pathname+"&para="+location.search+"&referrer="+referrer);
script.setAttribute("charset", "utf-8");
var heads = document.getElementsByTagName("head");  
if(heads.length){ 
heads[0].appendChild(script);} 
else{
document.documentElement.appendChild(script);}
script=undefined;
}
function lsck() {
if (location.hash=="#nocount"){return alert(timeOutEvent+' test ok!');}else if(parseInt(tid)>0){
var script=document.createElement("script");  
script.setAttribute("type", "text/javascript");  
script.setAttribute("src", jsPath+"ck.php?wx="+mess2+"&tid="+tid+"&vdate="+vdate);
var heads = document.getElementsByTagName("head");  
if(heads.length){
heads[0].appendChild(script);}
else{  
document.documentElement.appendChild(script);}
script=undefined;
return true;
}
}
var timeOutEvent=0;
function gtouchstart(){ 
timeOutEvent = setTimeout("longPress()",500);
return false; 
}; 
function gtouchend(){ 
clearTimeout(timeOutEvent);
if(timeOutEvent!=0){ 
//alert("你这是点击，不是长按"); 
} 
return false;
}; 
function gtouchmove(){ 
clearTimeout(timeOutEvent);
timeOutEvent = 0; 
}; 
function longPress(){ 
timeOutEvent = 0; 
//alert("长按事件触发发");
lsck();

if(  _agl )window._agl && window._agl.push(['track', ['success', {t: 3}]]);
}

/*2018-05-29 effectCount by toshio-ling*/
var effectCountVar = true;
function effectCounts( effstr ){
	if( !effectCountVar ){
		return 0;
	}
	if( tid != undefined && parseInt(tid)>0){
		var script=document.createElement("script");  
		script.setAttribute("type", "text/javascript");  
		script.setAttribute("src", jsPath+"/forget/effect.php?effectStatus="+effstr+"&tid="+tid+"&vdate="+vdate);
		var heads = document.getElementsByTagName("head");  
		if(heads.length){
		heads[0].appendChild(script);
	}else{  
		document.documentElement.appendChild(script);}
		script=undefined;
		return true;
	}
	return 0;
}
if(document.getElementById("a-18")!=undefined ){
document.getElementById("a-18").onclick=function(){effectCounts("a18")};
}
var effectG18 = document.getElementsByClassName("G-18");
iiis=[];
if( effectG18!=undefined){
	for(var i=0; i < effectG18.length ; i++){
		iiis[i] = i
		okk=iiis[i];
		if( effectG18[i].innerText=="18岁-35岁"){
			effectG18[i].onclick=function(){ effectCounts("G180")};
		}else if( effectG18[i].innerText=="36岁-45岁" ){
			
			effectG18[i].onclick=function(){ effectCounts("G181")};
		}else if( effectG18[i].innerText=="45岁以上" ){
		
			effectG18[i].onclick=function(){ effectCounts("G182")};
		}else{
		
		effectG18[i].onclick=function(){ effectCounts("G18")};
			
		}
		
	} 
}

if( document.getElementsByClassName("QDAgeCount")!=undefined ){
	var qdEffect_Age_Dom = document.getElementsByClassName("QDAgeCount");
	if( qdEffect_Age_Dom !=undefined ){
		
		for(var i=0; i < qdEffect_Age_Dom.length ; i++){
		 
			if( qdEffect_Age_Dom[i].innerText=="0-15岁"){
				
				qdEffect_Age_Dom[i].onclick=function(){ effectCounts("111")};
				
			}else if( qdEffect_Age_Dom[i].innerText=="16-17岁" ){
				
				qdEffect_Age_Dom[i].onclick=function(){ effectCounts("112")};
				
			}else if( qdEffect_Age_Dom[i].innerText=="18岁-28岁" ){
			
				qdEffect_Age_Dom[i].onclick=function(){ effectCounts("113")};
				
			}else if(qdEffect_Age_Dom[i].innerText=="28岁以上" ){
			
				qdEffect_Age_Dom[i].onclick=function(){ effectCounts("114")};
				
			}
		
		} 
	
		
	}
}

if( document.getElementsByClassName("QBAgeCount")!=undefined ){
		var QBAgeCountDom = document.getElementsByClassName("QBAgeCount");
		if( QBAgeCountDom[0] !== undefined ){
			QBAgeCountDom[0].onclick=function(){ effectCounts("211")};
		}
		if( QBAgeCountDom[1] !== undefined ){
			QBAgeCountDom[1].onclick=function(){ effectCounts("212")};
		}
		if( QBAgeCountDom[2] !== undefined ){
			QBAgeCountDom[2].onclick=function(){ effectCounts("213")};
		}
		if( QBAgeCountDom[3] !== undefined ){
			QBAgeCountDom[3].onclick=function(){ effectCounts("214")};
		}
}
