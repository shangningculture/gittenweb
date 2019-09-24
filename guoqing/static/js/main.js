var header_watermark_index = 1
var getCss = function(o,key){
  return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];   
};
function drag(element, element2){
  console.log(element)
  element.style.top = getCss(element,"top");
  element.style.left = getCss(element,"left");
  console.log(element2)
  var hammer = new Hammer(element2);//hammer实例
  var x = 0;
  var y = 0;
  hammer.on('panstart',function(event){
    x = parseInt(element.style.left);
    y = parseInt(element.style.top);
  });
  hammer.on('panmove',function(event){
    element.style.top = y + event.deltaY + "px";
    element.style.left = x + event.deltaX + "px";
  });
  hammer.on('panend',function(event){
  });
}
$(() => {
  $('.next_btn.next').click(function () {
    if (header_watermark_index < 4) header_watermark_index += 1
    else header_watermark_index = 1
    $('.watermark img').attr('src', 'static/images/head'+header_watermark_index+'.png')
  })
  $('.next_btn.prev').click(function () {
    if (header_watermark_index > 1) header_watermark_index -= 1
    else header_watermark_index = 4
    $('.watermark img').attr('src', 'static/images/head'+header_watermark_index+'.png')
  })
  drag($('.user_header img')[0], document.getElementById('render_box'))

  // const app = document.querySelector('#render_box');
  // const hammertime = new Hammer(app);
  // hammertime.on('panmove', function(ev) {
  //   let top = parseInt($('.user_header img').css('top'))
  //   let left = parseInt($('.user_header img').css('left'))
  //   $('.user_header img').css('top', top + parseInt(ev.deltaY/10) + 'px')
  //   $('.user_header img').css('left', left + parseInt(ev.deltaX/10) + 'px')
  //   console.log(ev)
  // });
})