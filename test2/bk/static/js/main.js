window.onresize = function () {
  renderA_RollingTop ()
  var pagewidth = document.getElementsByTagName('html')[0].clientWidth;
  var rem_root = (pagewidth > 640 ? 640 : pagewidth) / 375 * 18;
  document.getElementsByTagName('html')[0].style.fontSize = rem_root + 'px';
}

var SecreKey = new secreKey()

var A_RollingTop
$(function () {
  window.onresize();
  $('.content .tagbox').css({
    'height': $('.content .tagbox .tagitem').eq(0).height() + 'px'
  })
  new Swiper('#banner', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    }
  });
  $('.tuwen img').each((index, el) => {
    el.onload = () => {
      renderA_RollingTop ()
    }
  })
  $('.spec_item').click(function () {
    if ($(this).hasClass('active')) {
      $('.spec_item').removeClass('active')
      $('#price1').html('<span>￥</span>298<span>~￥</span>398')
      _formdata.pro = null
      $('#sfk .title span').show();
      $('#sfk .price').html('');
      _formdata.pro_num = 1
      $('#setnum .num').html('1')
    } else {
      $('.spec_item').removeClass('active')
      $(this).addClass('active')
      $('#price1').html('<span>￥</span>' + price[$(this).attr('pid')])
      $('#sfk .title span').hide();
      $('#sfk .title span').hide();
      _formdata.pro = parseInt($(this).attr('pid'))
      _formdata.pro_price = price[$(this).attr('pid')] * _formdata.pro_num
      $('#sfk .price').html('￥<span>'+ _formdata.pro_price +'</span> <i class="right-arrow arrow"></i>');
    }
    _formdata.proname = $(this).text()
  })
  $('#setnum .jia').click(function () {
    if (_formdata.pro) {
      _formdata.pro_num ++
      $('#setnum .num').html(_formdata.pro_num)
      _formdata.pro_price = price[_formdata.pro] * _formdata.pro_num
      $('#sfk .price').html('￥<span>'+ _formdata.pro_price +'</span> <i class="right-arrow arrow"></i>');
    } else {
      Swal.fire({
        text: '请选择套餐规格',
        type: 'warning',
        confirmButtonText: '确定'
      })
    }
  })
  $('#setnum .jian').click(function () {
    if (_formdata.pro) {
      if (_formdata.pro_num <= 1) return
      _formdata.pro_num --
      $('#setnum .num').html(_formdata.pro_num)
      _formdata.pro_price = price[_formdata.pro] * _formdata.pro_num
      $('#sfk .price').html('￥<span>'+ _formdata.pro_price +'</span> <i class="right-arrow arrow"></i>');
    } else {
      Swal.fire({
        text: '请选择套餐规格',
        type: 'warning',
        confirmButtonText: '确定'
      })
    }
  })
  $('#tosend').click(function(){
    if (!_formdata.name) return Swal.fire({
      text: '填写收货人',
      type: 'warning',
      confirmButtonText: '确定'
    });
    if (!_formdata.pro) return Swal.fire({
      text: '请选择套餐规格',
      type: 'warning',
      confirmButtonText: '确定'
    });
    if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(_formdata.phone)) return Swal.fire({
      text: '请填写手机号',
      type: 'warning',
      confirmButtonText: '确定'
    });
    if (!_formdata.s_province) return Swal.fire({
      text: '请选择地区',
      type: 'warning',
      confirmButtonText: '确定'
    });
    if (!_formdata.s_city) return Swal.fire({
      text: '请选择地区',
      type: 'warning',
      confirmButtonText: '确定'
    });
    $.post('https://tongji.yougou520.cn/api/Blog/add_order', _formdata, function (res) {
      data = JSON.parse(res)
      if (data.msg == 'successful') {
        Swal.fire({
          text: '订购成功，请等待客服联系',
          type: 'success',
          confirmButtonText: '确定',
          preConfirm: () => {
            _formdata.timeat = Date.now()
            var token = SecreKey.encode(JSON.stringify(_formdata))
            window.location.href = 'success.html?id=' + token
          }
        })
      } else {
        Swal.fire({
          text: '对不起，订购失败，请重新订购！',
          type: 'error',
          confirmButtonText: '确定'
        })
      }
    })
  })
  $('.taghead .tabbtn').click(function () {
    if (!$(this).hasClass('active')) {
      $('body,html').animate({ scrollTop: $('#content').offset().top }, 300);
      $('.content .tagbox .tagitem').removeClass('active')
      $('.taghead .tabbtn').removeClass('active')
      $(this).addClass('active')
      $('.content .tagbox .tagitem').eq($('.taghead .tabbtn').index(this)).addClass('active')
      $('.content .tagbox').css({
        'height': $('.content .tagbox .active').height() + 'px',
        'transform': 'translateX(-' + ($('.taghead .tabbtn').index(this) * 100) + '%)'
      })
      setTimeout(function () {
        renderA_RollingTop ()
      }, 500)
    } 
  })
  $('#main').scroll(() => {
    if (!A_RollingTop) {
      renderA_RollingTop ()
    } else {
      if (A_RollingTop.elarr.length <= 0) {
        renderA_RollingTop()
      }
    }
    if ($('#main').scrollTop() > $('#form').offset().top + $('#main').scrollTop() - 500) {
      $('#bottom').hide()
    } else {
      $('#bottom').show()
    }
  })
})


function RollingTop (opt) {
  var that = this
  this.el = opt.el
  this.callback = opt.callback
  this.elarr = []
  $(this.el).each(function (index) {
    try {
      var thisTop = $(this).offset().top + $('#main').scrollTop();
      that.elarr.push({top: thisTop,el: $(this),index: index})
      console.log(thisTop)
      if ( $(that.el)[index + 1] && $($(that.el)[index + 1]).offset().top + $('#main').scrollTop() - $(this).height() > thisTop) {
        that.elarr.push({top: $($(that.el)[index + 1]).offset().top + $('#main').scrollTop() - 500})
      }
    } catch (e) {console.log(e)}
  })
  this.elarr.sort((v1, v2) => { return v1.top - v2.top })
  this.scrollIng = function () {
    let isTop = {}
    that.elarr.some(function (item, index) {
      if ($('#main').scrollTop() > item.top-1) {
        isTop = item
      } 
    })
    $('.fixed').removeClass('fixed')
    if (isTop.el) {
      isTop.el.addClass('fixed')
      that.callback && that.callback(isTop)
    }
  }
  document.getElementById('main').onscroll = () => {
    this.scrollIng()
  }
  this.render = function () {
    this.elarr = []
    $(this.el).each(function (index) {
      try {
        var thisTop = $(this).offset().top + $('#main').scrollTop();
        console.log(thisTop)
        that.elarr.push({top: thisTop,el: $(this),index: index})
        if ( $(that.el)[index + 1] && $($(that.el)[index + 1]).offset().top + $('#main').scrollTop() - $(this).height() > thisTop) {
          that.elarr.push({top: $($(that.el)[index + 1]).offset().top + $('#main').scrollTop() - 500})
        }
      } catch (e) {console.log(e)}
    })
  }
}

function _RollingTop (opt) {
  var that = this
  this.el = opt.el
  this.callback = opt.callback
  this.elarr = []
  $(this.el).each(function (index) {
    that.elarr.push({top: $(this).offset().top,el: $(this),index: index})
    try {
      if ( $(that.el)[index + 1] && $($(that.el)[index + 1]).offset().top - $(this).height() > $(this).offset().top) {
        console.log($($(that.el)[index + 1]))
        console.log($($(that.el)[index + 1]).offset().top)
        that.elarr.push({top: $($(that.el)[index + 1]).offset().top - $(this).height()})
      }
    } catch (e) {}
  })
  this.elarr.sort((v1, v2) => { return v1.top - v2.top })
  $('#main').scroll(function () {
    console.log(3)
    let isTop = {}
    that.elarr.some(function (item) {
      if ($('#main').scrollTop() > item.top-1) {
        isTop = item
        return true
      }
    })
    $('.fixed').removeClass('fixed')
    if (isTop.el) {
      isTop.el.addClass('fixed')
      that.callback && that.callback(isTop)
    }
  })
}


function renderA_RollingTop () {
  if (A_RollingTop) {
    A_RollingTop.render()
  } else {
    A_RollingTop = new RollingTop({
      el: '.rolling_top',
      callback: function (el) {
        
      }
    })
  }
}


