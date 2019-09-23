function rennderEditor (index, type) {
  require(['vs/editor/editor.main'], function () {
    window['code' + index + 'text'] = monaco.editor.create(document.getElementById('code' + index + 'text'), {
      value: codelist[index],
      language: type || 'html',
      theme: 'vs-dark',
      minimap: { enabled: false }, // 隐藏代码小地图
      wordWrap: "on",   //自动换行，注意大小写
      wrappingIndent: "indent"
    });
  });
}


// 选项卡
new Tab($('#tabView > a.ui-tab-tab').filter(function () {
  return /^(:?javas|#)/.test(this.getAttribute('href'));
}), {
    callback: function () {
      $('.codeitem').each((index, item) => {
        rennderEditor(index, $(item).attr('type'))
      })
      $('.minmainbox .minmain').removeClass('checked');
      $('.minmainbox .minmain.' + $(this).attr('data-rel')).addClass('checked');
      var line;
      // IE10+
      if ($.isFunction(history.pushState)) {
        line = $(this).parent().find('i');
        if (!line.length) {
          line = $('<i></i>').addClass('ui-tab-line').prependTo($(this).parent());
        }
        line.css({
          display: 'block',
          width: $(this).width(),
          left: $(this).position().left
        });
      }
    }
  });


$('#tools1btn').click(function () { // 批量打开(新窗口打开)按钮
  var value = $('#tools1 .value').val()
  var links = value.split('\n')
  links.forEach(function (item) {
    if (!item) return
    if (item.indexOf('https://') === -1) {
      item = 'https://' + item
    }
    window.open(item)
  })
})
$('#tools1btn2').click(function () { // 批量打开(弹窗打开)按钮
  var value = $('#tools1 .value').val()
  var links = value.split('\n')
  links.forEach(function (item, index) {
    if (!item) return
    if (item.indexOf('https://') === -1) {
      item = 'https://' + item
    }
    layer.open({
      type: 2,
      title: `第【${index}】个网页`,
      shadeClose: true,
      shade: false,
      maxmin: true, //开启最大化最小化按钮
      area: ['893px', '600px'],
      content: item
    });
  })
})
$('#tools2 .encode').click(function () {
  // alert('加密');
  var strlist = $('#tools2 .codes').val();
  var remarks = $('#tools2 .remarks').val();
  if (remarks === '') {
    new LightTip().error('加密备注不能为空');
    $('#tools2 .remarks').focus();
    return;
  }
  var result = ''
  strlist.split('\n').forEach(function (item, index, arr) {
    if (item === '') return;
    item = Trim(item)
    var code = Md5.encode(Date.now() + '-' + remarks);
    if (item.indexOf('https://') === -1) {
      item = 'https://' + item + '/'
    }
    item += code
    result += item + '\n'
    if (index === arr.length - 1) {
      layer.alert('<div class="ui-textarea"><textarea rows="8">'+result+'</textarea></div>', {
        title: `加密成功`,
        area: ['550px'],
      })
    }
  })
  
})
$('#tools2 .decode').click(function () {
  var strlist = $('#tools2 .codes').val();
  var result = ''
  strlist.split('\n').forEach(function (item, index, arr) {
    if (item === '') return;
    item = Trim(item)
    var string = Md5.decode(item);
    var date = new Date(parseInt(string.split('-')[0]))
    var time = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    result += item
    result += `\n创建于【${time}】，备注内容：${string.split('-')[1]}\n`
    result += '==============================================\n'
    if (index === arr.length - 1) {
      layer.alert('<div class="ui-textarea"><textarea rows="8">'+result+'</textarea></div>', {
        title: `解密结果`,
        area: ['550px'],
      })
    }
  })
})
