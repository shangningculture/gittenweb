var header_watermark_index = 1
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

  const app = document.querySelector('#render_box');
  const hammertime = new Hammer(app);
  hammertime.on('panmove', function(ev) {
    let top = parseInt($('.user_header img').css('top'))
    let left = parseInt($('.user_header img').css('left'))
    $('.user_header img').css('top', top + ev.deltaY + 'px')
    $('.user_header img').css('left', left + ev.deltaX + 'px')
    console.log(ev)
  });
})