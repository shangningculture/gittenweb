var header_watermark_index = 1
let ewmlink = [
  'https://sk.4fl.com.cn/getOssFile?objname=upload/20190924/5d89f018d26ab50602466a22.jpg',
  'https://sk.4fl.com.cn/getOssFile?objname=upload/20190924/5d89f021d26ab50602466a24.jpg',
  'https://sk.4fl.com.cn/getOssFile?objname=upload/20190924/5d89f027d26ab50602466a26.jpg',
  'https://sk.4fl.com.cn/getOssFile?objname=upload/20190924/5d89f02ed26ab50602466a28.jpg'
]
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
  $('.weixinpic').attr('src', ewmlink[0])
  $('.next_btn.next').click(function () {
    if (header_watermark_index < 4) header_watermark_index += 1
    else header_watermark_index = 1
    $('.weixinpic').attr('src', ewmlink[header_watermark_index - 1])
    $('.watermark img').attr('src', 'static/images/head'+header_watermark_index+'.png')
  })
  $('.next_btn.prev').click(function () {
    if (header_watermark_index > 1) header_watermark_index -= 1
    else header_watermark_index = 4
    $('.weixinpic').attr('src', ewmlink[header_watermark_index - 1])
    $('.watermark img').attr('src', 'static/images/head'+header_watermark_index+'.png')
  })
  
  // drag($('.user_header img')[0], document.getElementById('render_box'))
  $('.enter_btn').click(function(){
    $('#alert').fadeIn();
  });
  $('#alert').click(function(){
    $('#alert').fadeOut();
  });
  $('#alert .close').click(function(){
    $('#alert').fadeOut();
  });
  $('.alert').click(function(event){
    event.stopPropagation();
  });


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