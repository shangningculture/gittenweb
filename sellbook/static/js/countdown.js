function ShowCountDown(year,month,day,divname)
{
    var now = new Date();
    var endDate = new Date(year, month, day);
    var leftTime= endDate.getTime()-now.getTime();
	
    var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
    var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
    var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
    var ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    var nn = parseInt(leftTime% 100, 10);
    //dd = checkTime(dd);
    hh = checkTime(hh);
    mm = checkTime(mm);
    ss = checkTime(ss);//小于10的话加0
    nn = checkTime(nn);
    var cc = document.getElementById(divname);
    cc.innerHTML = dd + "天" + hh + "小时" + mm + "分" + ss + "秒" + nn;
}
function checkTime(i)
{
	if(i < 0){
		i *= -1;
	}
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}
var mydate = new Date();
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown1');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown2');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown3');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown4');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown5');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown6');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown7');}, 89);
window.setInterval(function(){ShowCountDown(2018,mydate.getMonth(),mydate.getDate()+1,'countdown8');}, 89);