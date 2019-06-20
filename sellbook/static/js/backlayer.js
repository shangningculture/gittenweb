var zj = 0;

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


window.onload = function () {


    mark();
    $('.cid').val(getQueryString('cid'));
    $('.close').click(function(){
        $('#myModal').css('display', 'none');
        $('#myModal').removeClass('in');
    });
/**
    if (location.hash.indexOf("_hz_") == -1) {

        var hash = location.hash;
        var bdpar = window.location.href;

        history.pushState({
            page: 1
        }, "", bdpar + hash + "#_hz_");
    }
**/
};



window.onpopstate = function(a) {
    if (location.hash.indexOf("_hz_") == -1 && $("#btnOrder").prop("disabled") != true && zj != 1) {
        $('#myModal').css('display', 'block');
        $('#myModal').addClass('in');
    }
};