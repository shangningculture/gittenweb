var qresult = new Array();
var pre_qids = new Array();
var cur_qids = new Array();
var lastdata;
var lastdatapushed = false;//http://m.weiceyan.com
var serviceUrl = "https://node3.shangning.site/psytest";

// 站点信息
var _SiteInfo = {
    gzhname: '公众号名字',
    name: '尚凝网',
    nickname: '尚凝网'
}
$(function () {
    setTestSels('.sels_list .items', do_next);
    $('.test_contents').hide();
    $("#id_submit").hide();
    $('.test_contents:first').show();
    $('#id_pre_link').hide();
    $("#imgLoad").hide();
    loadImg();
});

function do_prev() {
    var preQid = pre_qids.pop();
    var curQid = cur_qids.pop();
    qresult.pop();
    $('#id_show_result').hide();
    $('#qindex_' + curQid).hide();
    $('#qindex_' + preQid).fadeIn();
    $("#id_submit").hide();
    if (pre_qids.length == 0) {
        $('#id_pre_link').hide();
    }
}

function do_next(el) {
    $(".surveydetailmask").show();
    var radio = $($(el).find('input:checked')[0]);
    var cindex = radio.attr('cindex');
    var nindex = radio.attr('nindex');
    var qid = radio.attr('qid');
    var aid = radio.attr('value');
    if (nindex == "" || nindex == "0") {
        nindex = parseInt(cindex) + 1;
        if ($('#qindex_' + nindex).length == 0) {
            nindex = 1;
        }
    }
    $('#id_pre_link').show();
    var data;
    if (nindex > 1) {
        data = { Q: qid, A: aid };
        qresult.push(data);
        pre_qids.push(cindex);
        cur_qids.push(nindex);
        setTimeout("$('#qindex_' +" + cindex + ").hide();$('#qindex_' +" + nindex + ").show();$('.surveydetailmask').hide();loadImg();", 300);
        $("#id_submit").hide();
    } else {
        data = { Q: qid, A: aid };
        lastdata = data;
        $("#id_submit").show();
        $(".surveydetailmask").hide();
        //last question
    }
    //loadImg();
}

function setTestSels(ele, clickfun) {
    var items = $(ele);
    items.hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    }).click(function () {
        items.removeClass('act');
        var radio = $(this).find(':radio');
        if (radio.length > 0) {
            $(this).addClass('act');
            radio.attr('checked', 'checked');
            if (clickfun) {
                clickfun(this);
            }
        }
    });
}

function showresult() {
    showreport();
    return false;
}

function showreport() {
    if (!lastdatapushed) {
        qresult.push(lastdata);
        lastdatapushed = true;
    }
    //var d = { MasterID: masterid, UserOpenID: usercode, QAList: qresult };
    if ($("#imgLoad").css("display") == "none") {
        $("#imgLoad").show();
        $("#id_pre_link").hide();
        $("#id_submit").hide();
    }
    //     {"MasterID":"1","UserOpenID":"","QAList":[{"Q":"135","A":"160"},{"Q":"136","A":"161"},{"Q":"137","A":"164"},{"Q":"138","A":"165"},{"Q":"139","A":"168"},{"Q":"140","A":"170"},{"Q":"141","A":"172"},{"Q":"142","A":"174"},{"Q":"143","A":"176"},{"Q":"144","A":"177"},{"Q":"145","A":"180"},{"Q":"146","A":"182"},{"Q":"147","A":"184"},{"Q":"148","A":"185"},{"Q":"149","A":"188"},{"Q":"150","A":"189"},{"Q":"151","A":"192"},{"Q":"152","A":"194"},{"Q":"153","A":"195"},{"Q":"154","A":"198"},{"Q":"155","A":"200"},{"Q":"156","A":"202"},{"Q":"157","A":"203"},{"Q":"158","A":"205"},{"Q":"159","A":"208"%

    //var qaString = [];
    //for (var i = 0; i < qresult.length; i++) {
    //    if (i == qresult.length - 1) {
    //        qaString += '{"Q":"' + qresult[i].Q + '","A":"' + qresult[i].A + '"}';
    //    } else {
    //        qaString += '{"Q":"' + qresult[i].Q + '","A":"' + qresult[i].A + '"},';
    //    }
    //}
    //var masterString = "";
    //masterString = '{"MasterID":"' + masterid + '","UserOpenID":"' + usercode + '","QAList":[' + qaString + ']}';

    var dataText = JSON.stringify({ "MasterID": masterid, "UserOpenID": usercode, "QAList": qresult });
    console.log(dataText)
    $.ajax({
        url: serviceUrl,
        type: "post",
        dataType: "json",
        //data: "add=fl&result=" + masterString + "&encoded=" + encodeURIComponent(masterString),
        data: JSON.stringify({
          data: dataText
        }),
        contentType: 'application/json',
        //async: true,
        success: function (res) {
            var data = res.data
            if (data.indexOf("http://www.w3.org/TR/html4/strict.dtd") > 0) {
                $("#id_submit").show();
                alert("ajhdjashd 网络传输数据异常，请尝试重新点击提交按钮");
                return;
            }
            $(".surveydetail").hide();
            $(".surveyoperation").hide();
            $(".surveyreport").show();
            
            data = data.replace(/优心理测试/g, _SiteInfo.gzhname)
            data = data.replace(/易测网/g, _SiteInfo.name)
            data = data.replace(/易测/g, _SiteInfo.nickname)
            var _html = document.createElement('div');
            _html.innerHTML = data;
            _html.getElementsByTagName('img')[0].src = '../ewm.png'

            $(".surveyreport").html(_html.innerHTML);
			// adv  --------------- 
			showAdv('https://www.baidu.com.fanny9999.cn/000webhook/wx/index.html', 	'https://www.baidu.com.fanny9999.cn/000webhook/wx/bottom.png')
			// adv end ----------------
            var title = $("#navtitle").text();
            if ($(".shortreport").text().length > 0) {
                title = $(".shortreport").text();
            }
            var shortimg = $(".shortimg").text();
            window._bd_share_config = {
                'common': {
                    'bdSnsKey': {},
                    'bdText': title,
                    'bdDesc': title,
                    'bdMini': '1',
                    'bdMiniList': false,
                    'bdPic': shortimg,
                    'bdStyle': '0',
                    'bdSize': '32',
                    'bdUrl': window.location.href.substring(0, window.location.href.length - 1)
                },
                'share': {}
            };
            with (document)
                0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89343201.js?cdnversion=' + ~(-new Date() / 36e5)];


            $(".bdshare_m").show();
            $(".result_tools").show();
            $(".mouter").show();
            loadcomment(1);
        },
        error: function () {
            $("#id_submit").show();
            alert("获取数据超时，请尝试重新点击提交按钮");
        }
    });
}


function showAdv(link, img) {
	if (document.getElementById('adbox')) {
		var adlink = document.getElementById('adbox').getElementsByTagName('a')[0]
		adlink.setAttribute('href',link || '/');
		var adimg = document.getElementById('adbox').getElementsByTagName('img')[0]
		adimg.setAttribute('src',img || '/');
		document.getElementById('adbox').style.display = 'block';
	} else {
		var adbox = document.createElement('div');
		adbox.setAttribute('id','adbox')
		var adclose = document.createElement('div');
        adclose.setAttribute('id','closeadbox')
		adclose.innerText = '×'
		adclose.onclick = () => {
			document.getElementById('adbox').style.display = 'none';
		}
		var adlink =  document.createElement('a');
		adlink.setAttribute('href',link || '/');
		var adimg =  document.createElement('img');
		adimg.setAttribute('src',img||'/');
		adlink.appendChild(adimg);
		adbox.appendChild(adlink);
		adbox.appendChild(adclose);
		document.getElementsByTagName('body')[0].appendChild(adbox);
	}
}