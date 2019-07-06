window.onresize = function () {
  var pagewidth = document.getElementsByTagName('html')[0].clientWidth;
  var rem_root = (pagewidth > 640 ? 640 : pagewidth) / 375 * 18;
  document.getElementsByTagName('html')[0].style.fontSize = rem_root + 'px';
}
window.onresize();
