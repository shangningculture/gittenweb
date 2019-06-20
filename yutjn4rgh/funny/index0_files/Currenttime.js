var d = new Date()
var vYear = d.getFullYear()
var vMon = d.getMonth() + 1
var vDay = d.getDate()
var h = d.getHours();
var m = d.getMinutes();
var se = d.getSeconds();
s = vYear + "-" + (vMon < 10 ? "0" + vMon : vMon) + "-" + (vDay < 10 ? "0" + vDay : vDay);