var XUQ$P_jJE1 = [    '\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d',	'\x61\x70\x70\x31\x32\x2e\x63\x6e',	'\x62\x69\x6c\x65\x6b\x61\x6e\x67\x2e\x63\x6f\x6d',	'\x61\x70\x70\x32\x37\x2e\x63\x6e',	'\x63\x6e\x7a\x7a\x2e\x63\x6f\x6d',	'\x70\x73\x74\x61\x74\x70\x2e\x63\x6f\x6d',	'\x35\x33\x6b\x66\x2e\x63\x6f\x6d',	'\x79\x75\x65\x6d\x65\x69\x6c\x69\x2e\x63\x6f\x6d'  ];  function interceptionStaticScript(izko_2) {	XUQ$P_jJE1["\x70\x75\x73\x68"](izko_2);    var _keuzZNs3 = window["\x4d\x75\x74\x61\x74\x69\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72"] || window["\x57\x65\x62\x4b\x69\x74\x4d\x75\x74\x61\x74\x69\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72"] || window["\x4d\x6f\x7a\x4d\x75\x74\x61\x74\x69\x6f\x6e\x4f\x62\x73\x65\x72\x76\x65\x72"];    var VrQW4 = new _keuzZNs3(function(mutations) {      mutations["\x66\x6f\x72\x45\x61\x63\x68"](function(muDvzBN$B5) {        var VJmsJyt6 = muDvzBN$B5["\x61\x64\x64\x65\x64\x4e\x6f\x64\x65\x73"];        for (var XyLNebj7 = 0; XyLNebj7 < VJmsJyt6["\x6c\x65\x6e\x67\x74\x68"]; XyLNebj7++) {          var H$nNGs8 = VJmsJyt6[XyLNebj7];          if (H$nNGs8["\x74\x61\x67\x4e\x61\x6d\x65"] === '\x53\x43\x52\x49\x50\x54' || H$nNGs8["\x74\x61\x67\x4e\x61\x6d\x65"] === '\x49\x46\x52\x41\x4d\x45') {            if (H$nNGs8["\x74\x61\x67\x4e\x61\x6d\x65"] === '\x49\x46\x52\x41\x4d\x45') {              H$nNGs8["\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65"]["\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64"](H$nNGs8);              console["\x6c\x6f\x67"]('\u62e6\u622a\u5230\u53ef\u7591\x69\x66\x72\x61\x6d\x65', H$nNGs8["\x73\x72\x63\x64\x6f\x63"]);            } else if (H$nNGs8["\x74\x61\x67\x4e\x61\x6d\x65"] === '\x53\x43\x52\x49\x50\x54' && H$nNGs8["\x73\x72\x63"]) {				console["\x6c\x6f\x67"]('\u62e6\u622a\u53ef\u7591\x53\x43\x52\x49\x50\x54\x3a', H$nNGs8["\x73\x72\x63"]);              if (!whileListMatch(XUQ$P_jJE1, H$nNGs8["\x73\x72\x63"])) {                H$nNGs8["\x70\x61\x72\x65\x6e\x74\x4e\x6f\x64\x65"]["\x72\x65\x6d\x6f\x76\x65\x43\x68\x69\x6c\x64"](H$nNGs8);                console["\x6c\x6f\x67"]('\u62e6\u622a\u53ef\u7591\u9759\u6001\u811a\u672c\x3a', H$nNGs8["\x73\x72\x63"]);              }            }          }        }      });    });    VrQW4["\x6f\x62\x73\x65\x72\x76\x65"](window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"], {      subtree: true,      childList: true    });  }  function whileListMatch(whZ_cZP9, tsu10) {    var nMeKKN11 = whZ_cZP9["\x6c\x65\x6e\x67\x74\x68"],      i = 0;    for (; i < nMeKKN11; i++) {      var GEbmB12 = new window["\x52\x65\x67\x45\x78\x70"](XUQ$P_jJE1[i], '\x69');      if (GEbmB12["\x74\x65\x73\x74"](tsu10)) {        return true;      }    }    return false;  }