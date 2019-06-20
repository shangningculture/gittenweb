var arr_wx;
var qrcode;
ghwxh();
 
function ghwxh() {
    $.ajax({
        url: "https://tongji.yougou520.cn/api/change_wx/get_wechat_num_qrcode",
        method:'post',
        data:{code:'2555d9d878f2512a8a5d359ce27b6010'},
        async: false,
        success: function(res) {
            console.log(res);
            arr_wx = res.arr_wx;
            qrcode = res.qrcode;
        },
        error: function() {
            ghwxh();
        }
    });
}

var wx_index = Math.floor((Math.random() * arr_wx.length));
var stxlwx = arr_wx[wx_index];
var qrcode_img = "< img style='width:100%;height:100%;display:inline-block;' src='" + qrcode + "' />";
$(document).ready(function(){
    $('.weixinpic').attr("src", qrcode);
})
