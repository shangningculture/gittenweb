/**
 * Created by huamengyu on 2019/1/23.
 */

(function () {
    function CommonObject() {
        var self = this;
        this.ua = navigator.userAgent;
        this.verifyCodeTimer = 0;
        this.formVerifyConfigFlag = false;
        this.discountCouponFlag = false; //优惠券flag
        this.active15ClickCount = 0;
        this.submitFlag = []; //是否提交过表单
        this.stayDuration = new Date().getTime();
        this.coinErrorAnswerData = ['朝暮调情', '沉梦听雨', '冰依佳人', '靳言深歆', '散落在回忆里', '甜心柠檬', '流年飞漫天', '最美的时光', '幽姿花似雪',
            '蓝色海洋', '紫色真话', '最美长恨歌', '离心掌门人', '几行情书', '温柔的眉眼', '纯真的爱情', '演绎余生', '漂亮善良', '倾听花开', '彩色天空'];
        this.traceData = [{"traceClass": 'trigger-promote', "traceClick": 'click', "traceActive": 'active5', "traceDesc": '去微信'},
            {"traceClass": 'trigger-promote-active3', "traceClick": 'click', "traceActive": 'active3', "traceDesc": '去链接'},
            {"traceClass": 'trigger-promote-active4', "traceClick": 'click', "traceActive": 'active20', "traceDesc": '打电话'},
            {"traceClass": 'landing-page-download', "traceClick": 'click', "traceActive": 'active1', "traceDesc": '注册下载'},
            {"traceClass": 'trigger-promote-active7', "traceClick": 'click', "traceActive": 'active7', "traceDesc": '反作弊滑块'},
            {"traceClass": 'trigger-promote-active2', "traceClick": 'click', "traceActive": 'active2', "traceDesc": '表单提交'},
            {"traceClass": 'trigger-promote-active6', "traceClick": 'click', "traceActive": 'active6', "traceDesc": '反作弊滑块验证失败'},
            {"traceClass": 'trigger-promote-active14', "traceClick": 'click', "traceActive": 'active14', "traceDesc": '点击在线咨询'}
        ];
        this.landingPageSiteConfing = document.getElementById('landingPageSiteConfing');//配置项
        this.landingPagePromoteModule = document.getElementById('landingPagePromoteModule');//加粉
        this.landingPageDownloadModule = document.getElementById('landingPageDownloadModule');//下载
        this.landingPageFormModule = document.getElementById('landingPageFormModule');//表单
        this.landingPageTelModule = document.getElementById('landingPageTelModule');//电话
        this.landingPageWechatModule = document.getElementById('landingPageWechatModule');//填写链接跳转
        this.landingPageBaseTemplateModule = document.getElementById('landingPageBaseTemplateModule');//行业分类，用于返回键劫持的
        this.landingPageSlidingBlockModule = document.querySelector('#landingPageSlidingBlockModule');//反作弊滑块
        this.landingPageSiteBuildingId = document.querySelector('#landingPageSiteBuildingId');//建站id
        this.landingOnlineConsultUrl = document.querySelector('#landingOnlineConsultUrl');//在线咨询
        if (self.landingPageSlidingBlockModule) {
            var dataActive7 = {className: 'trigger-promote-active7', innerHTML: 0};
            self.createActiveDom(dataActive7);
            var dataActive6 = {className: 'trigger-promote-active6', innerHTML: 0};
            self.createActiveDom(dataActive6);
        }
        self.styleControl();
        if(self.landingOnlineConsultUrl){
            var dataActive14 = {className: 'trigger-promote-active14', innerHTML: 0};
            self.createActiveDom(dataActive14);
            document.querySelectorAll(".onlineConsult-component")[0].addEventListener('click',function(){
                document.querySelectorAll('.trigger-promote-active14')[0].click();
                window.location.href=document.querySelector('#landingOnlineConsultUrl').innerText;
            })
        }

        var promoteBannerEle = document.querySelector('.component-banner');
        if (promoteBannerEle && promoteBannerEle.parentNode.getAttribute('backflag') != '1' && self.landingPageBaseTemplateModule && self.landingPagePromoteModule) {
            self.backTruncation();
        }
        var onlineBusinessEle = document.querySelector('.custom-online-component');
        if (onlineBusinessEle && onlineBusinessEle.parentNode.getAttribute('backflag') != '1' && self.landingPageFormModule) {
            self.businessBackTruncation();
        }
        var bannerFormEle = document.querySelector('div[component-tag="component-banner-form"]');
        if (bannerFormEle && bannerFormEle.parentNode.getAttribute('coinflag') === '1' && self.landingPageFormModule) {
            self.renderCoinBannerFormStyle();
            self.renderTraceActive9();
        }

        if (self.landingPageSiteConfing) {
            var data = self.landingPageSiteConfing.innerText;
            try {
                data = JSON.parse(data);
                if (data && ('hasCarousel' in data) && data['hasCarousel']) {
                    self.callSwiper(data);
                }
                if (data && ('hasTimeCountDown' in data) && data['hasTimeCountDown']) {
                    self.callTimeCountDown();
                }

                if (data && ('addCoins' in data) && data['addCoins']) {
                    var member_id = self.getQueryString('iclimemberid');
                    if (member_id) {
                        self.callAddCoins();
                        window.cpcJs = {};
                        window.cpcJs.backClient = function () {
                            self.showQuestionDialog();
                        }
                    }
                }
                if (data && ('formVerify' in data) && data['formVerify']) {
                    self.formVerifyConfigFlag = true;
                }
            } catch (e) {}
        }
        if (self.landingPagePromoteModule) {
            var promoteArr = self.landingPagePromoteModule.innerText;
            try {
                promoteArr = JSON.parse(promoteArr);
                if (promoteArr && promoteArr.length) {
                    self.renderPromoteModule(promoteArr);
                }
            } catch (e) {}
        }
        
        if (self.landingPageFormModule) {
            var formList = self.landingPageFormModule.innerText;
            var dataActive2 = {className: 'trigger-promote-active2', innerHTML: 0};
            self.createActiveDom(dataActive2);
            try {
                formList = JSON.parse(formList);
                if (formList && formList.length) {
                    self.renderFormModule(formList);
                }
            } catch (e) {}
        } else {
            var componentForm = document.querySelectorAll('.component-form');
            if (componentForm && componentForm.length) {
                for (var i = 0; i < componentForm.length; i++) {
                    componentForm[i].innerHTML = "";
                }
            }
        }
        if (self.landingPageDownloadModule) {
            var data = self.landingPageDownloadModule.innerText;
            try {
                data = JSON.parse(data);
                if (data && ('android' in data || 'ios' in data)) {
                    self.renderDownloadModule(data);
                }
            } catch (e) {}
        }
        if (self.landingPageTelModule) {
            var data = self.landingPageTelModule.innerText;
            if (document.getElementsByClassName('component-tel').length) {
                self.createTelBannerModule(data);
            } else {
                self.createTFTelModule(data);
            }
        }
        if (self.landingPageWechatModule) {
            self.goToUrlModule();
        }
        self.renderTrace(self.traceData);
        self.monitorBusinessMealOption();
        self.renderBusinessMealModule();
        self.initWordRotation();
        self.initQuestionAnswer();
        self.initCountdownTimer();
        self.preOperateBusinessMeal();
    }

    CommonObject.prototype.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    };
    CommonObject.prototype.updateCopy = function (str) {
        function getTargetInput() {
            var dom = document.createElement('input');
            dom.style.opacity = '0';
            dom.style.position = 'absolute';
            dom.style.fontSize = '12pt';
            dom.style.top = '-9999px';
            dom.style.left = '-9999px';
            document.body.appendChild(dom);
            return dom;
        }

        function copy(str) {
            var inputText = getTargetInput();
            inputText.setAttribute('readonly', '');
            inputText.value = str;
            inputText.select();
            inputText.setSelectionRange(0, inputText.value.length);
            var result = document.execCommand('copy');
            document.body.removeChild(inputText);
            return result;
        }

        return copy(str);
    };
    CommonObject.prototype.styleControl = function () {
        var componentDownloadBanner = document.querySelectorAll('.component-download-banner');
        for (var i = 0; i < componentDownloadBanner.length; i++) {
            if (componentDownloadBanner[i].style.top == 'auto') {
                componentDownloadBanner[i].style.bottom = 0;
                document.body.style.paddingTop = 0;
            } else if (componentDownloadBanner[i].style.bottom == 'auto') {
                document.body.style.paddingTop = componentDownloadBanner[i].offsetHeight;
                componentDownloadBanner[i].style.top = 0;
            }
        }
        var customBtnComponent = document.querySelectorAll('.custom-btn-component');
        for (var j = 0; j < customBtnComponent.length; j++) {
            var btnParentNode = customBtnComponent[j].parentNode;
            if (btnParentNode.getAttribute('isfloat') == '2' || btnParentNode.getAttribute('isfloat') == '3') {
                if (btnParentNode.style.top == 'auto') {
                    btnParentNode.style.bottom = 0;
                } else if (btnParentNode.style.bottom == 'auto') {
                    btnParentNode.style.top = 0;
                }
                btnParentNode.style.left = 0;
            }
        }
    };
    CommonObject.prototype.createActiveDom = function (option) {
        var self = this;
        var element = document.body;
        var oDiv = document.createElement('div');
        oDiv.innerHTML = option.innerHTML;
        oDiv.className = option.className;
        oDiv.style.opacity = 0;
        oDiv.style.position = 'fixed';
        oDiv.style.zIndex = '-9999';
        oDiv.style.display = 'none';
        element.appendChild(oDiv);
    };
    CommonObject.prototype.createAddCoinDom = function (inner) {
        var element = document.body;
        var oDiv = document.createElement('div');
        oDiv.innerHTML = '<div class="add-coin-title">添加成功</div><div class="add-coin-body">+' + inner + '</div>';
        oDiv.className = 'add-coin-box';
        element.appendChild(oDiv);
        var addCOinBox = document.querySelector('.add-coin-box');
        addCOinBox.style.display = 'block';
        setTimeout(function () {
            addCOinBox.style.display = 'none';
        }, 2000);
    };
    CommonObject.prototype.createFailedCoinDom = function (inner) {
        var alertDialogSs = document.getElementById('alertDialogSs');
        alertDialogSs.innerHTML = "今日次数用尽，请明天再来吧";
        alertDialogSs.style.display = 'block';
        setTimeout(function () {
            alertDialogSs.style.display = 'none';
        }, 2000);
    };
    CommonObject.prototype.getAjaxCoin = function (coin, moduleId, callback) {
        var self = this;
        var host = 'http://api-ga.aiclk.com/motivateapp/mtvcallback/v2';
        // var host = 'http://192.168.66.11:4001/motivateapp/mtvcallback/v2';
        var member_id = self.getQueryString('iclimemberid');
        var search_id = self.getQueryString('iclicashsid');
        if (!member_id || !search_id) {
            callback && callback();
            return false
        }
        try {
            var strLen = 4 - member_id.length % 4;
            if (strLen == 4) {
                strLen = 0;
            }
            for (var i = 0; i < strLen; i++) {
                member_id += '=';
            }
            member_id = $.base64.decode(member_id);
            var landingPageSiteBuildingId = document.querySelector('#landingPageSiteBuildingId');
            var resource_id = Number(landingPageSiteBuildingId.innerText);
            var data = {
                "member_id": member_id,
                "coin": parseInt(coin, 10),
                "search_id": search_id,
                "resource_type": 1,
                "resource_id": resource_id,
                "module_id": moduleId, //1:滑块 2:加粉 3:表单提交
                "sign": "6435c61a1da39318f594688d30c34189"
            };
            if (callback) {
                data.coin = 50;
            }
            var sign = '';
            for (var i in data) {
                sign += data[i];
            }
            data.sign = md5(sign);
            var b = $.base64.encode(JSON.stringify(data));
            var url = host + '?' + b;
            jQuery.support.cors = true;
            $.ajax({
                type: "GET",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                url: url,
                success: function (result) {
                    result = JSON.parse(result);
                    if (result.code == 1) {
                        self.createAddCoinDom(coin);
                    }
                    if (result.code != 1 && !callback) {
                        var alertDialogSs = document.getElementById('alertDialogSs');
                        if(result.code == 5) {
                            alertDialogSs.innerHTML = "今日次数用尽，请明天再来吧";
                        } else {
                            alertDialogSs.innerHTML = result.message;
                        }
                        alertDialogSs.style.display = 'block';
                        setTimeout(function () {
                            alertDialogSs.style.display = 'none';
                        }, 2000);
                    }
                    setTimeout(function () {
                        callback && callback();
                    }, 1000)
                }
            })
        } catch (e) {
            callback && callback();
        }
    };
    CommonObject.prototype.sildingBlockModule = function (resSuccess) {
        var self = this;
        var getTime = new Date().getTime();
        var random = Math.floor(Math.random() * 10000);
        var userId = getTime + random;
        var coin = parseInt(Math.random() * (100 - 50 + 1) + 50, 10);
        var subTitle = '验证通过，+' + coin + '金币！';
        var data = {
            cid: 'cpctest',
            // isTest:true,
            userId: userId,  // 如果有的话
            // custom:{ qid:123 },
            onresult: function (result) {
                if (result) {
                    if (document.querySelectorAll('.trigger-promote-active7')[0]) {
                        document.querySelectorAll('.trigger-promote-active7')[0].click();
                    }
                    self.getAjaxCoin(coin, 1, function () {
                        resSuccess && resSuccess();
                    })
                }
            },
            ontest: function (result) {
                if (!result) {
                    if (document.querySelectorAll('.trigger-promote-active6')[0]) {
                        document.querySelectorAll('.trigger-promote-active6')[0].click();
                    }
                }
            }
        };
        if (subTitle) {
            data.title = subTitle;
        }
        var recaptcha = _INNOTECHANTISPAM_.recaptchaDialog(data);
        var antispamDialogTitle = document.querySelector('.antispam_dialog_title');
        if (antispamDialogTitle) {
            antispamDialogTitle.style.color = 'red';
        }
        var antispamIconPoint = document.querySelector('.antispam_icon_point');
        if (antispamIconPoint) {
            antispamIconPoint.style.height = '40px';
            antispamIconPoint.style.width = '40px';
            antispamIconPoint.style.backgroundImage = 'url("/allsites/template/public/new_sitebuilding/image/icon_add _coin.png")'
        }
    };
    CommonObject.prototype.callSwiper = function () {
        window.addEventListener('load', function () {
            new Swiper('.swiper-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                initialSlide: 1,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true
                }
            });
        });
    };
    CommonObject.prototype.callTimeCountDown = function () {
        clearInterval(parseInt(sessionStorage.getItem('timerInterval'), 10));
        var wrapNode = document.getElementsByClassName('custom-online-component')[0].getElementsByClassName('count-down-wrap')[0].lastChild;
        if (!Boolean(sessionStorage.getItem('thisTime'))) {
            sessionStorage.setItem('thisTime', wrapNode.innerText);
        } else {
            if (sessionStorage.getItem('thisTime') == '00:00:00:00') {
                wrapNode.innerHTML = '<span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>';
                return;
            } else {
                wrapNode.innerHTML = '<span></span>:<span></span>:<span></span>:<span></span>';
            }
        }
        var businessTimer = setInterval(function () {
            sessionStorage.setItem('timerInterval', businessTimer);
            var timeArr = sessionStorage.getItem('thisTime').split(/\:|\：/),
                second = 0, i = 0;
            if (timeArr.length == 4) {
                second += parseInt(timeArr[0], 10) * 24 * 3600;
                i = 1;
            }
            second += parseInt(timeArr[i], 10) * 3600 + parseInt(timeArr[++i], 10) * 60 + parseInt(timeArr[++i], 10) - 1;
            if (second >= 0) {
                var s = second % 60; //s
                s = (s < 10 ? '0' + s : s);
                second = (second - s) / 60;
                var m = second % 60; //min
                m = (m < 10 ? '0' + m : m);
                second = (second - m) / 60;
                var h = second % 24; //hour
                h = (h < 10 ? '0' + h : h);
                var d = (second - h) / 24;//day
                d = (d < 10 ? '0' + d : d);
                document.getElementsByClassName('custom-online-component')[0].getElementsByClassName('count-down-wrap')[0].lastChild.innerHTML = '<span>' + d + '</span>:<span>' + h + '</span>:<span>' + m + '</span>:<span>' + s + '</span>';
                sessionStorage.setItem('thisTime', d + ':' + h + ':' + m + ':' + s);
            } else {
                clearInterval(businessTimer);
            }
        }, 1000);
    };
    CommonObject.prototype.callAddCoins = function () {
        var bannerWrapEle = document.getElementsByClassName('component-banner')[0],
            coinEle = document.createElement('span');
        bannerWrapEle.className += ' component-coin-banner';
        var bannerInner = bannerWrapEle.getElementsByClassName('banner-inner')[0],
            bannerButton = bannerWrapEle.getElementsByClassName('banner-button')[0];
        bannerInner.style.background = "url('/allsites/template/public/new_sitebuilding/image/pic-coinbanner-bg.png') no-repeat center";
        bannerButton.innerHTML = '+' + parseInt(Math.random() * (200 - 100 + 1) + 100, 10) + '金币';
        bannerButton.style.background = "url(/allsites/template/public/new_sitebuilding/image/pic-coinbanner-btn.png) no-repeat center";
        coinEle.className = 'banner-coins';
        coinEle.innerHTML = '添加微信';
        bannerInner.insertBefore(coinEle, bannerButton);
    };
    CommonObject.prototype.showQuestionDialog = function () {
        var self = this;
        var coinDialogNode = document.getElementsByClassName('coin-dialog-wrap');
        if (coinDialogNode.length) {
            return;
        } else {
            var coinQuestionDialogEle = document.createElement('div'),
                coinContentWrapEle = document.createElement('div'),
                coinTitleEle = document.createElement('p'),
                coinQuestionWrapEle = document.createElement('div'),
                coinQuestionEle = document.createElement('div'),
                coinAnswerWrapEle = document.createElement('ul'),
                coinConfirmBtnEle = document.createElement('div');
            coinQuestionDialogEle.className = 'coin-dialog-wrap';
            coinContentWrapEle.className = 'coin-content-wrap';
            coinTitleEle.className = 'coin-dialog-title';
            coinTitleEle.innerHTML = '领' + document.getElementsByClassName('banner-button')[0].innerText.split('+')[1] + '啦';
            coinQuestionWrapEle.className = 'coin-question-wrap';
            coinQuestionEle.className = 'coin-question-title';
            coinQuestionEle.innerHTML = '您搜索的微信昵称是？';
            coinAnswerWrapEle.className = 'coin-answer-wrap';
            coinConfirmBtnEle.className = 'coin-confirm-btn';
            coinConfirmBtnEle.innerHTML = '完成';
            coinQuestionWrapEle.appendChild(coinQuestionEle);
            coinQuestionWrapEle.appendChild(coinAnswerWrapEle);
            coinContentWrapEle.appendChild(coinTitleEle);
            coinContentWrapEle.appendChild(coinQuestionWrapEle);
            coinContentWrapEle.appendChild(coinConfirmBtnEle);
            coinQuestionDialogEle.appendChild(coinContentWrapEle);
            document.body.appendChild(coinQuestionDialogEle);

            document.querySelector('.coin-answer-wrap').addEventListener('click', function (e) {
                var target = e.target;
                document.querySelector('.coin-confirm-btn').classList.add('active');
                if (!(target.classList.contains('chosen') == true)) {
                    for (var j = 0; j < this.childNodes.length; j++) {
                        this.childNodes[j].getElementsByTagName('span')[0].classList.remove('chosen');
                    }
                    target.classList.add('chosen');
                }
            });

            document.querySelector('.coin-confirm-btn').addEventListener('click', function () {
                var chosen = document.querySelector('.coin-answer-wrap').querySelectorAll('.chosen')[0];
                if (!chosen) {
                    return;
                }
                if (chosen.innerText == document.querySelector('#landingPageAnswer').innerText) {
                    document.getElementById('triggerActive9Trace').click();
                    self.getAjaxCoin(document.getElementsByClassName('banner-button')[0].innerText.split('+')[1].split('金币')[0], 2);
                } else {
                    var alertDialogSs = document.getElementById('alertDialogSs');
                    alertDialogSs.innerHTML = '验证失败';
                    alertDialogSs.style.display = 'block';
                    setTimeout(function () {
                        alertDialogSs.style.display = 'none';
                    }, 2000);
                }
                document.querySelectorAll('.coin-dialog-wrap')[0].style.display = 'none';
                document.querySelectorAll('.coin-confirm-btn')[0].classList.remove('active');
            })
        }
        function getAnswerData() {
            var customAnswerData = self.coinErrorAnswerData,
                shuffled = customAnswerData.slice(0),
                len = customAnswerData.length,
                min = len - 3, temp, index;

            while (len-- > min) {
                index = Math.floor((len + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[len];
                shuffled[len] = temp;
            }
            var formatListData = shuffled.slice(min),
                trueAnswer = document.querySelector('#landingPageAnswer').innerText;
            for (var i = 0; i < 3; i++) {
                if (formatListData[i] === trueAnswer) {
                    formatListData.splice(i, 1, shuffled[0]);
                }
            }
            formatListData.push(trueAnswer);
            function randomsort(a, b) {
                return Math.random() > .5 ? -1 : 1;
            }

            return formatListData.sort(randomsort);
        };
        var answerListData = getAnswerData(),
            answerHtml = '';
        for (var i = 0; i < 4; i++) {
            answerHtml += ('<li class="answer-item"><i>' + (i + 1) + '、</i><span>' + answerListData[i] + '</span>' + '</li>');
        }
        document.querySelector('.coin-answer-wrap').innerHTML = answerHtml;
        self.renderTraceActive9();
    };
    CommonObject.prototype.renderTraceActive9 = function () {
        try {
            window._iclicash = window._iclicash || [];
            var traceBtnEle = document.getElementById('triggerActive9Trace');
            if (!traceBtnEle) {
                traceBtnEle = document.createElement('span');
                traceBtnEle.id = 'triggerActive9Trace';
                document.body.appendChild(traceBtnEle);
                window._iclicash.push([traceBtnEle, 'click', 'active10', '加金币']);
            }
        } catch (e) {}
    };
    CommonObject.prototype.renderCustomTraceActive = function (obj) {
        try {
            window._iclicash = window._iclicash || [];
            var traceBtnEle = document.getElementById('trigger' + obj.type + 'Trace');
            if (!traceBtnEle) {
                traceBtnEle = document.createElement('span');
                traceBtnEle.id = 'trigger' + obj.type + 'Trace';
                document.body.appendChild(traceBtnEle);
                window._iclicash.push([traceBtnEle, obj.event, obj.type, obj.eventDesc, obj.phoneNum, obj.templateFlag]);
            }
        } catch (e) {}
    };
    CommonObject.prototype.renderTrace = function (data) {
        for (var k = 0; k < data.length; k++) {
            var l = document.getElementsByClassName(data[k]["traceClass"]).length;
            window._iclicash = window._iclicash || [];
            var btn;
            for (var i = 0; i < l; i++) {
                btn = document.getElementsByClassName(data[k]["traceClass"])[i];
                window._iclicash.push([btn, data[k]["traceClick"], data[k]["traceActive"], data[k]["traceDesc"]]);
            }
        }
    };
    //填写链接跳转
    CommonObject.prototype.goToUrlModule = function () {
        var self = this;
        var customInputUrl = self.landingPageWechatModule;
        if (customInputUrl && customInputUrl.innerText) {
            var wx_url = customInputUrl.innerText;
            var g = document.getElementsByClassName('trigger-promote-active3').length;
            for (var i = 0; i < g; i++) {
                document.getElementsByClassName('trigger-promote-active3')[i].addEventListener('click', function () {
                    setTimeout(function () {
                        location.href = wx_url;
                    }, 1000);
                })
            }
        }
    };
    //加粉模块
    CommonObject.prototype.renderPromoteModule = function (promoteArr) {
        var self = this;
        var ua = self.ua;
        var index = Math.floor(Math.random() * promoteArr.length);
        var query = promoteArr[index];
        var wxid = query.promote;
        var answerNode = document.querySelector('#landingPageAnswer');
        answerNode && (answerNode.innerText = query.name);
        var imageUrl = query.imageUrl;
        var wx_text, wx_url, targetUrl, wx_logo;

        function callTraceWechatCheck(query) {
            try {
                var url = window.location.href;
                var urlSearch = url.split('allsites/')[1].split('/');
                var userId = urlSearch[0];
                var siteIdMd5 = urlSearch[1];
                var wechatCheck = {
                    userId: userId,
                    siteIdMd5: siteIdMd5,
                    wechatPromote: query['promote']
                };
                wechatCheck = JSON.stringify(wechatCheck);
                window._iclicash = window._iclicash || [];
                var oSpan = document.createElement('span');
                oSpan.id = 'wechatCheck';
                oSpan.style.display = 'none';
                document.body.appendChild(oSpan);
                window._iclicash.push([oSpan, 'click', 'wechatCheck', wechatCheck]);
                document.querySelector('#wechatCheck').click();
            } catch (e) {}
        }

        callTraceWechatCheck(query);
        if (query.type == 1) {
            wx_text = '微信';
            wx_url = 'weixin://';
            wx_logo = "/allsites/template/public/new_sitebuilding/image/wx.gif";
        } else if (query.type == 0) {
            wx_text = 'QQ';
            if (ua.indexOf("Android") > -1 || ua.indexOf("Linux") > -1) {
                wx_url = 'mqqwpa://im/chat?chat_type=wpa&uin=' + wxid + '&version=1&src_type=web';
            } else {
                wx_url = 'mqq://';
            }
            wx_logo = "/allsites/template/public/new_sitebuilding/image/qq.png";
        } else if (query.type == 3) {
            wx_text = 'QQ群';
            wx_url = query.qrcodeUrl;
            wx_logo = "/allsites/template/public/new_sitebuilding/image/qq.png";
        }
        // if (document.getElementsByClassName('close_Mask')[0]) {
        //     document.getElementsByClassName('close_Mask')[0].addEventListener('click',function() {
        //         document.getElementsByClassName('qq_Mask')[0].style.display = "none";
        //     },false);
        //     document.getElementsByClassName('top_add')[0].addEventListener('click',function() {
        //         document.getElementsByClassName('qq_Mask')[0].style.display = "block";
        //     },false);
        //     document.getElementsByClassName('add-friend')[0].addEventListener('click',function() {
        //         document.getElementsByClassName('qq_Mask')[0].style.display = "block";
        //     },false);
        // }
        if (document.getElementsByClassName('banner-inner-icon')[0]) {
            document.getElementsByClassName('banner-inner-icon')[0].querySelector('img').src = wx_logo;
        }
        if (document.getElementsByClassName('component-float-button')[0]) {
            document.getElementsByClassName('component-float-button')[0].querySelector('img') && (document.getElementsByClassName('component-float-button')[0].querySelector('img').src = wx_logo) ;
        }
        imageUrl = imageUrl ? '<img class="landing-page-qrcode" style="width:150px;height:150px;" src="' + imageUrl + '"/>' : "";
        var template_content = document.getElementsByTagName('body')[0].innerHTML;
        template_content = template_content.replace(/{{wechat}}/g, wxid);
        template_content = template_content.replace(/{{二维码}}/g, imageUrl);
        document.getElementsByTagName('body')[0].innerHTML = template_content.replace(/{{wechat_text}}/g, wx_text);
        window.iosClipboardFlag = false;
        function checkiOSClipboard(wxid, responseFunc) {
            function setupWebViewJavascriptBridge(callback) {
                //第一次调用这个方法的时候，为false
                if (window.WebViewJavascriptBridge) {
                    return callback(WebViewJavascriptBridge);
                }
                //第一次调用的时候，为false
                if (window.WVJBCallbacks) {
                    return window.WVJBCallbacks.push(callback);
                }
                //把callback对象赋值给对象
                window.WVJBCallbacks = [callback];
                //加载WebViewJavascriptBridge_JS中的代码
                var WVJBIframe = document.createElement('iframe');
                WVJBIframe.style.display = 'none';
                WVJBIframe.src = 'https://__bridge_loaded__';
                document.documentElement.appendChild(WVJBIframe);
                setTimeout(function () {
                    document.documentElement.removeChild(WVJBIframe)
                }, 0)
            }

            //驱动所有hander的初始化
            setupWebViewJavascriptBridge(function (bridge) {

                // 调用iOS端口方法
                bridge.callHandler('testObjcCallback', {'foo': wxid}, function (response) {
                    //iOS端口返回值
                    var info;
                    var alertDialogSs = document.getElementById('alertDialogSs');
                    if (response) {
                        info = "复制成功";
                    } else {
                        info = "复制失败,请手动复制";
                    }
                    alertDialogSs.innerHTML = info;
                    alertDialogSs.style.display = 'block';
                    setTimeout(function () {
                        alertDialogSs.style.display = 'none';
                    }, 2000);
                    window.iosClipboardFlag = response;
                    responseFunc(wxid);
                });

            });
        }

        goWechat();
        function goWechat() {
            var g = document.getElementsByClassName('trigger-promote').length;
            for (var i = 0; i < g; i++) {
                document.getElementsByClassName('trigger-promote')[i].addEventListener('click', function () {
                    var newuser = self.getQueryString('newuser');
                    sessionStorage.setItem('promoteBackTruncationFlag', 1);
                    if (self.landingPageSlidingBlockModule && newuser) {
                        window.updateCopyFlag = self.updateCopy(wxid);
                        self.sildingBlockModule(resSuccess);
                    } else {
                        resSuccess();
                    }
                });
            }
        };
        function resSuccess() {
            if (ua.indexOf('qukan') != -1) {
                location.href = 'tools?target=clipboard&value=' + wxid;
                setTimeout(function () {
                    location.href = wx_url;
                }, 1000);
            } else if (ua.indexOf('iOS_DH_CPC_OICLK') > -1) {
                checkiOSClipboard(wxid, function () {
                    setTimeout(function () {
                        location.href = wx_url;
                    }, 1000);
                });
            } else {
                if (window.updateCopyFlag) {
                    goTarget(window.updateCopyFlag, wx_text, wx_url);
                } else {
                    var result = self.updateCopy(wxid);
                    goTarget(result, wx_text, wx_url);
                }
            }
        };
        function goTarget(r, s, u) {
            self.updateCopyInfo(r, s);
            if (r) {
                setTimeout(function () {
                    location.href = u;
                }, 1000);
            }
        }
    };
    CommonObject.prototype.updateCopyInfo = function (r, s) {
        var self = this,
            info = "";
        var alertDialogSs = document.getElementById('alertDialogSs');
        if (r) {
            if (document.getElementsByClassName('component-coin-banner').length) {
                self.addCoinDialogTip();
                return;
            }
            info = "复制成功";
        } else {
            info = "复制失败,请手动复制" + s + "号码";
        }
        alertDialogSs.innerHTML = info;
        alertDialogSs.style.display = 'block';
        setTimeout(function () {
            alertDialogSs.style.display = 'none';
        }, 2000);
    };
    CommonObject.prototype.addCoinDialogTip = function () {
        var coinDialogNodes = document.getElementsByClassName('addcoin-dialog-wrap')[0];
        if (Boolean(coinDialogNodes)) {
            coinDialogNodes.style.display = 'block';
        } else {
            var coinDialogNodes = document.createElement('div'),
                dialogContentEle = document.createElement('div'),
                noticeEle = document.createElement('p'),
                successTipEle = document.createElement('p');
            coinDialogNodes.className = 'addcoin-dialog-wrap';
            dialogContentEle.className = 'addcoin-content';
            noticeEle.className = 'addcoin-notice';
            noticeEle.innerHTML = '添加微信后返回趣头条，回答问题即可领取金币！';
            successTipEle.className = 'addcoin-successtip';
            successTipEle.innerHTML = '微信号已复制成功';
            dialogContentEle.appendChild(noticeEle);
            dialogContentEle.appendChild(successTipEle);
            coinDialogNodes.appendChild(dialogContentEle);
            document.body.appendChild(coinDialogNodes);
        }
        setTimeout(function () {
            coinDialogNodes.style.display = 'none';
        }, 2000);
    };
    //拨打电话转化方式
    CommonObject.prototype.createTelBannerModule = function (tel) {
        if (!!tel) {
            document.getElementsByClassName('component-tel')[0].innerHTML = '';
            var div = document.createElement('div');
            div.className = 'trigger-promote-active4';
            div.style.width = '100%';
            div.style.height = '60px';
            div.style.backgroundImage = 'url(/allsites/template/public/tel-bg.png)';
            div.style.backgroundSize = '100%';
            div.style.backgroundRepeat = 'no-repeat';
            var a = document.createElement('a');
            a.style.color = '#fff';
            a.style.display = 'block';
            a.style.lineHeight = '60px';
            a.style.textAlign = 'center';
            a.innerHTML = '拨打电话：' + tel;
            a.setAttribute('href', 'tel:' + tel);
            div.appendChild(a);
            document.getElementsByClassName('component-tel')[0].appendChild(div);
        }
    };
    //电话+表单组件拨打电话转化方式
    CommonObject.prototype.createTFTelModule = function (tel) {
        if (!!tel) {
            var tfTelNode = document.getElementsByClassName('tf-tel')[0];
            tfTelNode && tfTelNode.setAttribute('href', 'tel:' + tel);
        }
    };
    CommonObject.prototype.renderDownloadModule = function (data) {
        var self = this;
        var autoDownload = false;
        var btn = document.getElementsByClassName('landing-page-download');
        if (self.ua.indexOf("Android") > -1 || self.ua.indexOf("Linux") > -1) {
            var downloadUrl = data.android;
        } else {
            var downloadUrl = data.ios;
        }
        if (downloadUrl.indexOf('//') == 0) {
            downloadUrl = 'http:' + downloadUrl;
        } else if (!(downloadUrl.indexOf('http') > -1 && downloadUrl.indexOf('http') == 0)) {
            downloadUrl = 'http://' + downloadUrl;
        }
        if (btn && btn.length) {
            for (var i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', function () {
                    setTimeout(function () {
                        location.href = downloadUrl;
                    }, 1000);
                });
                if (btn[i].getAttribute('enabledownload') == 1) {
                    autoDownload = true;
                }
            }
            if (autoDownload) {
                setTimeout(function () {
                    location.href = downloadUrl;
                }, 5000);
            }
        }
    };
    CommonObject.prototype.addBackTruncation = function () {
        var self = this,
            t = location.href;
        if (t.indexOf('back=1') > 0) {
            if(document.getElementsByClassName('style_7')[0]){
                document.getElementsByClassName('dd')[0].style.display = 'block';
                document.getElementsByClassName('mask')[0].style.display = 'block';
                document.getElementById("closex").addEventListener('click',function() {
                    document.getElementsByClassName('dd')[0].style.display = 'none';
                document.getElementsByClassName('mask')[0].style.display = 'none';
                });
            }else{
                document.getElementsByClassName('backTruncationDialog')[0].style.display = 'block';
            }
        }
        document.body.addEventListener('click', function (e) {
            var className = e.target.className;
            if(e.target.id==='closex'){
                document.getElementsByClassName('dd')[0].style.display = 'none';
                document.getElementsByClassName('mask')[0].style.display = 'none';
            }
            if (className === 'truncationD-closeBtn') {
                document.getElementsByClassName('backTruncationDialog')[0].style.display = 'none';
            }
            if (className === 'truncationD-go-btn') {
                document.getElementsByClassName('backTruncationDialog')[0].style.display = 'none';
                document.getElementById('dgcpc').scrollIntoView();
                self.discountCouponFlag = true;
                self.calculateBusinessPrice();
            }
            if (className === 'close_Mask') {
                document.getElementsByClassName('qq_Mask')[0].style.display = "none";
            }
            if (className === 'top_btn') {
                document.getElementsByClassName('qq_Mask')[0].style.display = "block";
            }
            if (className === 'add-friend') {
                document.getElementsByClassName('qq_Mask')[0].style.display = "block";
            }

        }, false);
        function os() {
            var androidVersion;
            var userAgent = navigator.userAgent;
            var index = userAgent.indexOf("Android");
            var iosVersion = userAgent.match(/iPhone OS ([0-9]+)_/);
            if (index >= 0) {
                androidVersion = parseFloat(userAgent.slice(index + 8));
                if (androidVersion >= 5.0) return true;
                else return false
            } else if (iosVersion) {
                iosVersion = iosVersion[1] - 0;
                if (iosVersion >= 9) return true;
                else return false
            } else {
                return true;
            }
        }

        if (os()) {
            if (navigator.userAgent.indexOf('qukan') > -1 || navigator.userAgent.indexOf('clicash_android') > -1 || navigator.userAgent.indexOf('iOS_DH_CPC_OICLK') > -1) {
                // return true;
            } else {
                return false;
            }

            if (!history.state) {
                var intercetpUrl = t + '&back=1';
                history.replaceState({
                    page: "intercept",
                    entered: !1
                }, "", intercetpUrl), history.pushState({
                    page: "current"
                }, "", t)
            }

            window.onpopstate = function () {
                if ((self.landingPagePromoteModule && !sessionStorage.getItem('promoteBackTruncationFlag')) || (self.landingPageFormModule && !sessionStorage.getItem('businessBackTruncationFlag'))) {
                    if (self.landingPagePromoteModule && self.landingPageFormModule && sessionStorage.getItem('promoteBackTruncationFlag')) {
                        window.history.back();
                    } else {
                        history.state && "intercept" == history.state.page && (history.state.entered || (history.replaceState({
                            page: "intercept",
                            entered: !0
                        }, "", intercetpUrl)));
                        location.reload();
                    }
                } else {
                    window.history.back();
                }
                if (self.landingPagePromoteModule) {
                    sessionStorage.removeItem('promoteBackTruncationFlag');
                } else if (self.landingPageFormModule) {
                    sessionStorage.removeItem('businessBackTruncationFlag');
                }
            }
        }
    };
    CommonObject.prototype.backTruncation = function () {
        var self = this;
        var industryCategoryStyle = self.landingPageBaseTemplateModule;
        var styleIndex = 1;
        var subTitle = '导师一对一交流资格';
        // var textList = ['领取新用户大礼包','日入万元不是梦'];
        // var index = Math.floor(Math.random()*textList.length);
        var textTitle = '';
        if (industryCategoryStyle && industryCategoryStyle.innerText) {
            var n = industryCategoryStyle.innerText;
            switch (n) {
                case 'onlineTemplate':
                    styleIndex = 1;
                    // textTitle = textList[index];
                    break;
                case 'financeTemplate':
                    styleIndex = 2;
                    break;
                case 'fatTemplate':
                    styleIndex = 3;
                    break;
                case 'novelTemplate':
                    styleIndex = 4;
                    subTitle = '阅读后续精彩内容';
                    break;
                case 'healthTemplate':
                    styleIndex = 5;
                    break;
                default:
                    styleIndex = 1;
            }
        }
        var tmplStr = '<div id="backTruncationDialog" class="backTruncationDialog">' +
            '<div class="back-truncationD-content-wrap back-bg-style-' + styleIndex + '">' +
            '<div class="truncationD-wx-area">' +
            '<p class="truncationD-wx-num">{{wechat}}</p>' +
            '<p class="truncationD-sub-title">' + subTitle + '</p></div>' +
            '<button class="truncationD-wx-button trigger-promote" type="button">点击添加{{wechat_text}}</button>' +
            '<p class="truncationD-footer-text">' + textTitle + '</p>' +
            '<span class="truncationD-closeBtn"></span></div>' +
            '</div>';
        var divNode = document.createElement('div');
        divNode.innerHTML = tmplStr;
        document.body.appendChild(divNode);
        self.addBackTruncation();
    };
    CommonObject.prototype.businessBackTruncation = function () {
        try {
            var self = this,
                component = document.querySelector('.custom-online-component');
            if (component) {
                var goodsName = component.getAttribute('goods-name'),
                    dialogTip = component.getAttribute('description'),
                    imgSrc = component.getAttribute('imgsrc'),
                    goodsPrice = component.querySelector('.discounted-price').innerText;
                if (goodsName === null) {
                    goodsName = component.parentNode.getAttribute('goods-name') || '';
                    dialogTip = '清仓大处理，只需' + goodsPrice + '元</br>真的不试一试吗？';
                }
                if (!Boolean(imgSrc)) {
                    imgSrc = '/allsites/template/public/new_sitebuilding/image/business_backdialog_bg.png';
                }
                var tmplStr = '<div class="backTruncationDialog">' +
                        '<div class="businessBack-truncationD-content-wrap" style="background-image: url(' + imgSrc + ');">' +
                        '<p class="truncationD-goods-name">' + goodsName + '</p>' +
                        '<p class="truncationD-goods-tip">' + dialogTip + '</p>' +
                        '<a class="truncationD-go-btn">立即前往</a>' +
                        '<span class="truncationD-closeBtn"></span></div>' +
                        '</div>',
                    dialogNode = document.createElement('div');
                dialogNode.innerHTML = tmplStr;
                document.body.appendChild(dialogNode);
                self.addBackTruncation();
            }
        } catch (e) {}
    };
    CommonObject.prototype.base64Decode = function (value) {
        if (Boolean(value)) {
            var strLen = 4 - value.length % 4;
            if (strLen == 4) {
                strLen = 0;
            }
            for (var i = 0; i < strLen; i++) {
                value += '=';
            }
            return $.base64 && $.base64.decode(value);
        } else {
            return '';
        }
    };
    CommonObject.prototype.renderFormModule = function (formList) {
        var self = this;
        var style_index = formList[2] || 4;
        var html = '<div class="insert-form-content form_style_' + style_index + '">';
        var formParentNode = $('div[component-tag="component-form"]').parent(),
            btnColor = '#387ef5';
        formParentNode.attr('btn_color') && (btnColor = formParentNode.attr('btn_color'));
        $.each(formList[0], function (key, value) {
            var sel = '';
            if(key === 'address'){
                sel = '<div class="insert-form-item template-insert-region">所在地区</div>';
                self.renderFormAddressDialog();
            }
            if(key === 'remark'){
                var remarkArr = value.split(',');
                remarkArr.forEach(function (v) {
                    if(Boolean(v)){
                        html += '<div class="insert-form-list">' +
                            '<span class="insert-form-title">' + v + '</span>' +
                            '<div class="insert-form-item template-insert-' + v + '">' +
                            '<input name="' + v + '" class="form-' + v + '" type="text" value="" placeholder="请输入' + v + '"/>' +
                            '</div></div>';
                    }
                });
            }else{
                html += '<div class="insert-form-list">' +
                    '<span class="insert-form-title">' + value + '</span>' + sel +
                    '<div class="insert-form-item template-insert-' + key + '">' +
                    '<input name="' + key + '" class="form-' + key + '" type="text" value="" placeholder="请输入' + (key == 'address' ? '详细地址' : value) + '"/>' +
                    '</div></div>';
            }
            if (self.formVerifyConfigFlag && key == "telephone") {
                html += '<div class="insert-form-list">' +
                    '<span class="insert-form-title">验证码</span>' +
                    '<div class="insert-form-item template-insert-msg">' +
                    '<input class="form-msg form-msg-val" name="msg" type="text" value="" placeholder="请输入验证码" maxlength="6"/>' +
                    '<button class="form-msg-verification-btn" style="background:' + btnColor + '">发送</button>' +
                    '</div></div>';
            }
        });
        html += '<div class="insert-form-list">' +
            '<button style="margin-left: 50px;padding: 5px 10px;background: ' + btnColor +
            '" class="btn btn-warning landing-page-form-submit">提交</button>' +
            // '<button style="margin-left: 50px;padding: 5px 10px;" class="btn btn-warning landing-page-form-cancel">取消</button>'+
            '</div></div>';
        $('.component-form').html(html);
        self.formDataEcho();
        $(function () {
            $('.landing-page-form-submit').click(function (e) {
                var $parentEle = $(e.currentTarget || e.srcElement).closest('.insert-form-content'),
                    $this = $(this),
                    formData = formList[0],
                    data = {},
                    errorMsg = '';
                $.each(formData, function (key, value) {
                    if (key == 'remark') {
                        var remarkArr = value.split(',');
                        remarkArr.forEach(function (v) {
                            if(Boolean(v) && !Boolean($.trim($parentEle.find('.form-' + v).val()))){
                                errorMsg = '请填写' + v;
                                return false;
                            }
                        });
                    }else if (key !== 'comment' && !Boolean($.trim($parentEle.find('.form-' + key).val()))) {
                        errorMsg = '请填写' + value;
                        return false;
                    }
                    if (key == 'address') {
                        if ($parentEle.find('.insert-form-province').length){
                            if (!Boolean($parentEle.find('.insert-form-province').text()) || !Boolean($parentEle.find('.insert-form-city').text()) || !Boolean($parentEle.find('.insert-form-county').text())) {
                                errorMsg = '请选择完整的行政区划信息';
                                return false;
                            }
                        }else{
                            errorMsg = '请选择所在地区';
                            return false;
                        }
                    }
                    if (key == 'telephone') {
                        if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test($parentEle.find('.form-' + key).val()))) {
                            errorMsg = '请填写正确的' + value;
                            return false;
                        }
                        if (self.formVerifyConfigFlag && $parentEle.find('.form-msg').length) {
                            var formMsg = $.trim($parentEle.find('.form-msg').val());
                            if (formMsg) {
                                data.verify_code = formMsg;
                            } else {
                                errorMsg = '请填写验证码';
                                return false;
                            }
                        }
                    }
                    if (key == 'idCard') {
                        if (!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test($parentEle.find('.form-' + key).val()))) {
                            errorMsg = '请填写正确的' + value;
                            return false;
                        }
                    }

                    if (key == 'remark') {
                        var remarkArr = value.split(','),
                            remarkText = [],
                            remarkVal = [];
                        remarkArr.forEach(function (v) {
                            if(Boolean(v)){
                                remarkText.push(v);
                                remarkVal.push($.trim($parentEle.find('.form-' + v).val()));
                            }
                        });
                        data['remark'] = remarkText.join(',');
                        data['remarkTextarea'] = remarkVal.join(',');
                    } else {
                        data[key] = $parentEle.find('.form-' + key).val();
                    }
                });

                var breakFlag = false,
                    bMealComponentNodes = document.querySelectorAll('div[component-tag="component-meal-configurable"]');
                if (bMealComponentNodes && bMealComponentNodes.length) {
                    for (var bmi = 0, bmLen = bMealComponentNodes.length; bmi < bmLen; bmi++) {
                        if (breakFlag) {
                            break;
                        } else {
                            var optionNodes = bMealComponentNodes[bmi].querySelectorAll('.business-option-wrap');
                            for (var bmj = 0, bmjLen = optionNodes.length; bmj < bmjLen; bmj++) {
                                if (!optionNodes[bmj].querySelector('input:checked')) {
                                    errorMsg = '请选择套餐';
                                    breakFlag = true;
                                    break;
                                }
                            }
                        }
                    }
                }

                var alertDialogSs = document.getElementById('alertDialogSs');
                if (Boolean(errorMsg)) {
                    alertDialogSs.innerHTML = errorMsg;
                    alertDialogSs.style.display = 'block';
                    setTimeout(function () {
                        alertDialogSs.style.display = 'none';
                    }, 2000);
                    return false;
                }
                if ($parentEle.find('.insert-form-province').length) {
                    data.province = $parentEle.find('.insert-form-province').text();
                    data.city = $parentEle.find('.insert-form-city').text();
                    data.county = $parentEle.find('.insert-form-county').text();
                }
                $this.attr('disabled', 'disabled');
                jQuery.support.cors = true;

                if($('.component-form').length < 2){
                    var mealWrapNode = document.querySelector('.business-meal-wrap'),
                        configurableOptionNodes = document.querySelectorAll('.option-configurable-item');
                    if (mealWrapNode) {
                        var mealItem = document.querySelector('.business-meal-wrap').querySelector('input:checked').nextElementSibling.innerText,
                            mealNum = document.querySelector('.business-meal-num').innerText;
                        data.product_meal = mealItem + ', ' + mealNum;

                        var optionWrap = document.querySelector('.business-option-wrap');
                        if (optionWrap && Boolean(optionWrap.querySelector('input:checked'))) {
                            data.product_meal = optionWrap.querySelector('input:checked').nextElementSibling.innerText + ', ' + data.product_meal;
                        }

                        var sizeWrap = document.querySelector('.business-size-wrap');
                        if (sizeWrap && Boolean(sizeWrap.querySelector('input:checked'))) {
                            data.product_meal = sizeWrap.querySelector('input:checked').nextElementSibling.innerText + ', ' + data.product_meal;
                        }
                    } else if (configurableOptionNodes && configurableOptionNodes.length) {
                        var configurableOptions = [];
                        configurableOptionNodes.forEach(function (item) {
                            var itemCheckedNode = item.querySelector('input:checked');
                            if (Boolean(itemCheckedNode)) {
                                configurableOptions.push(itemCheckedNode.nextElementSibling.innerText);
                            }
                        });
                        data.product_meal = configurableOptions.join(', ');
                        data.product_meal += ', ' + (document.querySelector('.business-meal-num') && document.querySelector('.business-meal-num').innerText);
                    }

                    var priceFormEle = document.querySelector('.business-meal-price');
                    if (priceFormEle) {
                        data.goods_price = priceFormEle.innerText.split('¥ ')[1];
                    } else {
                        var priceEle = document.getElementsByClassName('discounted-price')[0];
                        priceEle && (data.goods_price = priceEle.innerText);
                    }
                }
                data.idea_id = self.getQueryString('icliideaid');
                data.search_id = self.getQueryString('iclicashsid');
                if(self.landingPageBaseTemplateModule){
                    data.template_flag = (self.landingPageBaseTemplateModule.innerText === 'elecbusinessTemplate' ? 3 : 4);
                }

                var url = formList[1].trim();
                if (document.querySelectorAll('.trigger-promote-active2')[0]) {
                    document.querySelectorAll('.trigger-promote-active2')[0].click();
                }
                
                if (data.telephone) {
                    for(var i in self.submitFlag){
                        if(data.telephone==self.submitFlag[i]){
                            var alertDialogSs = document.getElementById('alertDialogSs');
                            alertDialogSs.innerHTML = '您已提交成功，无需重复提交！';
                            alertDialogSs.style.display = 'block';
                            setTimeout(function () {
                                alertDialogSs.style.display = 'none';
                            }, 2000);
                            return;
                        }
                    }
                    self.submitFlag.push(data.telephone);
                }
                // self.renderCustomTraceActive({
                //     type: 'active15',
                //     event: 'click',
                //     eventDesc: '表单提交成功',
                //     phoneNum: data.telephone || '',
                //     templateFlag: data.template_flag || 0
                // });

                var params = Object.assign({
                    referer: document.referrer,
                    ua: window.navigator.userAgent
                }, data);
                $.ajax({
                    type: "post",
                    data: params,
                    url: url,
                    dataType: "json",
                    success: function (result) {
                        sessionStorage.setItem('businessBackTruncationFlag', 1);
                        if (result.success) {
                            var timeStamp = new Date().getTime(),
                                traceImg = document.createElement('img'),
                                trace15Url = '//rcv.aiclk.com/trace?t=active15&op1=表单提交成功&op2=' +
                                    data.telephone + '&op3=' + data.template_flag + '&iclicashsid=' + (data.search_id || 'none') +
                                    '&s=' + (++self.active15ClickCount) + '&ref=' + encodeURIComponent(document.referrer || '') +
                                    '&auto=0&timestamp=' + timeStamp + '&_t=' + Math.floor((timeStamp - self.stayDuration) / 1000),
                                siteIdNode = document.querySelector("#landingPageSiteBuildingId");
                            if (siteIdNode && siteIdNode.innerText) {
                                trace15Url = trace15Url + "&opt_siteid=" + siteIdNode.innerText;
                            }
                            traceImg.src = trace15Url;
                            traceImg.style.display = 'none';
                            document.body.appendChild(traceImg);
                            var storageKey = window.location.href.split('/')[6],
                                iclimemberid = self.getQueryString('iclimemberid') || '',
                                formEchoData = {
                                    provinceId: $('.address-province').attr('aid'),
                                    cityId: $('.address-city').attr('aid'),
                                    countyId: $('.address-county').attr('aid')
                                },
                                storageData = JSON.stringify(Object.assign(formEchoData, data));
                            localStorage.setItem(storageKey + iclimemberid, storageData);

                            var successTip = '提交成功',
                                dialogTipNode = document.getElementById('landingPageFormDialogTip');
                            if (dialogTipNode && dialogTipNode.innerText) {
                                successTip = dialogTipNode.innerText;
                            }
                            self.showFormSubmitDialog(successTip);
                            self.resetFormData(formList[0]);
                            self.coinExcitationBannerForm();
                            self.calculateBusinessPrice();
                        } else {
                            self.showFormSubmitDialog(result.message);
                        }
                        $this.removeAttr("disabled");
                        $parentEle.find('.form-msg-verification-btn').removeClass('disabled').text('发送');
                        clearInterval(self.verifyCodeTimer);
                    },
                    error: function () {
                        $this.removeAttr("disabled");
                    }
                });

            });
            $('.landing-page-form-cancel').click(function () {
                self.resetFormData(formList[0]);
                self.calculateBusinessPrice();
            });
            $('.template-insert-region').click(function () {
                if($('.compform-address-dialog').length){
                    $('.content-list-wrap').html(self.renderAddressList());
                    $('.compform-address-dialog').show();
                }
            });
            if ($('.form-msg-verification-btn').length) {
                $('.component-form').on('click', '.form-msg-verification-btn:not(.disabled)', function (e) {
                    var $target = $(e.target || e.srcElement),
                        telphone = $.trim($target.closest('.insert-form-content').find('.form-telephone').val()),
                        alertDialogSs = document.getElementById('alertDialogSs');
                    if ((/^1[3|4|5|7|8][0-9]\d{8}$/.test(telphone))) {
                        $.ajax({
                            type: 'post',
                            data: {
                                telephone: telphone
                            },
                            url: $('#langingPageDomainName').text() + 'msg/send-verify-code',
                            success: function (data) {
                                if (data.code != 0) {
                                    alertDialogSs.innerHTML = data.msg;
                                    alertDialogSs.style.display = 'block';
                                    setTimeout(function () {
                                        alertDialogSs.style.display = 'none';
                                    }, 2000);
                                }else{
                                    if(!$('.form-msg-verification-btn.disabled').length){
                                        var second = 60;
                                        self.verifyCodeTimer = setInterval(function () {
                                            $target.addClass('disabled').text('发送(' + (--second) + 's)');
                                            if (!second) {
                                                $target.removeClass('disabled').text('发送');
                                                clearInterval(self.verifyCodeTimer);
                                            }
                                        }, 1000);
                                    }
                                }
                            }
                        });
                    } else {
                        alertDialogSs.innerHTML = '请输入正确的电话号码';
                        alertDialogSs.style.display = 'block';
                        setTimeout(function () {
                            alertDialogSs.style.display = 'none';
                        }, 2000);
                        return;
                    }
                });
            }
        });
    };
    CommonObject.prototype.formDataEcho = function () {
        var self = this,
            storageKey = window.location.href.split('/')[6],
            iclimemberid = self.getQueryString('iclimemberid') || '';
        if(localStorage.getItem(storageKey + iclimemberid)){
            var formData = JSON.parse(localStorage.getItem(storageKey + iclimemberid));
            for(var key in formData){
                switch (key){
                    case 'province':
                        $('.template-insert-region').html('<span class="insert-form-province">' + formData[key] + '</span><span class="insert-form-city">' + formData.city + '</span><span class="insert-form-county">' + formData.county + '</span>');
                        $('.address-province').text(formData[key]).attr('aid', formData.provinceId);
                        $('.address-city').text(formData.city).attr('aid', formData.cityId).show();
                        $('.address-county').text(formData.county).attr('aid', formData.countyId).show();
                        break;
                    case 'comment':
                    case 'remark':
                        break;
                    default:
                        $('.form-' + key).val(formData[key]);
                        break;
                }
            }
        } else {
            self.getDefaultRegionByIp();
        }
    };
    CommonObject.prototype.getDefaultRegionByIp = function () {
        var self = this,
            provinceId = self.base64Decode(self.getQueryString('icliprovince')),
            cityId = self.base64Decode(self.getQueryString('iclicity'));
        if(Boolean(provinceId)){
            provinceId = window.newRegionMap[provinceId];
            var currentTag = 'province';
            if(provinceId) {
                $('.address-province').attr('aid', provinceId).removeClass('selected');
                cityId = window.newRegionMap[cityId];
                if(cityId) {
                    $('.address-city').attr('aid', cityId).removeClass('selected').show();
                    $('.address-county').addClass('selected').show();
                    currentTag = 'county';
                } else {
                    currentTag = 'city';
                    $('.address-city').addClass('selected').show();
                }
            }
            $('.content-list-wrap').attr('current-tag', currentTag).html(self.renderAddressList());
            if(currentTag == 'county') {
                $('.content-list-wrap li').eq(0).click();
            }
        }
    };
    CommonObject.prototype.renderFormAddressDialog = function () {
        var self = this,
            dialog = document.createElement('div'),
            contentWrap = document.createElement('div'),
            contentTitleWrap = document.createElement('div'),
            contentSelectWrap = document.createElement('div'),
            contentListWrap = document.createElement('ul');
        dialog.className = 'compform-address-dialog hide';
        contentWrap.className = 'content-wrap';
        contentTitleWrap.className = 'content-title-wrap';
        contentSelectWrap.className = 'content-select-wrap';
        contentListWrap.className = 'content-list-wrap';
        contentListWrap.setAttribute('current-tag', 'province');
        contentTitleWrap.innerHTML = '<span class="address-back">&lt;</span><span>配送区域</span>';
        contentSelectWrap.innerHTML = '<span class="address-province selected" tag="province">请选择</span><span class="address-city" tag="city" style="display: none;">请选择</span><span class="address-county" tag="county" style="display: none;">请选择</span>';
        contentListWrap.innerHTML = self.renderAddressList();
        contentWrap.appendChild(contentTitleWrap);
        contentWrap.appendChild(contentSelectWrap);
        contentWrap.appendChild(contentListWrap);
        dialog.appendChild(contentWrap);
        document.body.appendChild(dialog);

        $(document).on('click', '.address-province, .address-city, .address-county', function (e) {
            var $target = $(e.target || e.srcElement),
                preSiblings = $target.prevAll(),
                showFlag = true;
            preSiblings.each(function (i, v) {
                if(!Boolean(v.getAttribute('aid'))){
                    showFlag = false;
                }
            });
            if(showFlag){
                $target.addClass('selected').siblings().removeClass('selected');
                $('.content-list-wrap').attr('current-tag', $target.attr('tag')).html(self.renderAddressList());
            }
        }).on('click', '.content-list-wrap li', function (e) {
            var $target = $(e.target || e.srcElement),
                currentTag = $('.content-list-wrap').attr('current-tag');
            $('.address-' + currentTag).text($target.text()).attr('aid', $target.attr('id')).nextAll().text('请选择').attr('aid', '').hide();
            $('.address-' + currentTag).next().addClass('selected').show().siblings().removeClass('selected');
            $('.content-list-wrap').html(self.renderAddressList());
            if(currentTag != 'county'){
                $('.content-list-wrap').attr('current-tag', $('.address-' + currentTag).next().attr('tag'));
            }else{
                $('.address-back').trigger('click');
            }
        }).on('click', '.address-back', function () {
            var province = Boolean($('.address-province').attr('aid'))? $('.address-province').text() : '',
                city = Boolean($('.address-city').attr('aid'))? $('.address-city').text() : '',
                county = Boolean($('.address-county').attr('aid'))? $('.address-county').text() : '',
                regionHtml = '所在地区';
            if(province){
                regionHtml = '<span class="insert-form-province">' + province + '</span>' +
                    '<span class="insert-form-city">' + city + '</span>' +
                    '<span class="insert-form-county">' + county + '</span>';
            }
            $('.template-insert-region').html(regionHtml);
            $('.compform-address-dialog').hide();
        });
    };
    CommonObject.prototype.renderAddressList = function () {
        var newRegionTypes = window.newRegionTypes,
            provinceId = $('.address-province').attr('aid'),
            cityId = $('.address-city').attr('aid'),
            countyId = $('.address-county').attr('aid'),
            currentTag = $('.content-select-wrap span.selected').attr('tag'),
            option_dom = '';
        if(currentTag === 'county'){
            for (var i = 0, len = newRegionTypes.length; i < len; i++) {
                if(newRegionTypes[i].id == provinceId && newRegionTypes[i].children){
                    $('.address-province').text(newRegionTypes[i].text);
                    var cityList = newRegionTypes[i].children;
                    for (var j = 0, jlen = cityList.length; j < jlen; j++) {
                        if(cityList[j].id == cityId && cityList[j].children){
                            $('.address-city').text(cityList[j].text);
                            var countyList = cityList[j].children;
                            if(countyList.length){
                                countyList.forEach(function (county) {
                                    if(county.id == countyId){
                                        option_dom += '<li class="selected" id="' + county.id + '">' + county.text + '</li>';
                                    }else{
                                        option_dom += '<li id="' + county.id + '">' + county.text + '</li>';
                                    }
                                })
                            }else{
                                option_dom += '<li id="-1">其他区</li>';
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        } else if (currentTag === 'city') {
            for (var i = 0, len = newRegionTypes.length; i < len; i++) {
                if(newRegionTypes[i].id == provinceId && newRegionTypes[i].children){
                    $('.address-province').text(newRegionTypes[i].text);
                    var cityList = newRegionTypes[i].children;
                    cityList.forEach(function (city) {
                        if(city.id == cityId){
                            option_dom += '<li class="selected" id="' + city.id + '">' + city.text + '</li>';
                        }else{
                            option_dom += '<li id="' + city.id + '">' + city.text + '</li>';
                        }
                    });
                    break;
                }
            }
        } else {
            newRegionTypes.forEach(function (province) {
                if(province.id == provinceId){
                    option_dom += '<li class="selected" id="' + province.id + '">' + province.text + '</li>';
                }else{
                    option_dom += '<li id="' + province.id + '">' + province.text + '</li>';
                }
            });
        }
        return option_dom;
    };
    CommonObject.prototype.showFormSubmitDialog = function (msg) {
        var self = this;
        var scrollTop = document.scrollingElement.scrollTop;
        document.body.classList.add('dialog-open');
        document.body.style.top = -scrollTop + 'px';
        var formParentNode = $('div[component-tag="component-form"]').parent(),
            btnColor = '#387ef5';
        formParentNode.attr('btn_color') && (btnColor = formParentNode.attr('btn_color'));
        var submitDialog = document.querySelector('.form-submit-dialog-mask');
        if(submitDialog){
            submitDialog.querySelector('.submit-dialog-tip').innerText = msg;
            submitDialog.style.display = 'block';
        } else {
            submitDialog = document.createElement('div');
            submitDialog.className = 'form-submit-dialog-mask';
            submitDialog.innerHTML = '<div class="form-submit-dialog-content">' +
                '<p class="submit-dialog-tip">' + msg + '</p>' +
                '<button style="background: ' + btnColor + '">确定</button></div>';
            document.body.appendChild(submitDialog);
            submitDialog.querySelector('button').addEventListener('click', function () {
                submitDialog.style.display = 'none';
                document.body.classList.remove('dialog-open');
                document.scrollingElement.scrollTop = scrollTop;
                window.cpcAndroid && cpcAndroid.fetchInfo('closeActivityPage');
            })
        }
    };
    CommonObject.prototype.resetFormData = function (formData) {
        try {
            $.each(formData, function (ele, value) {
                if(ele === 'remark'){
                    var remarkArr = value.split(',');
                    remarkArr.forEach(function (v) {
                        $('.form-' + v).val('');
                    });
                }else{
                    $('.form-' + ele).val('');
                }
            });
            $('.form-msg').val('');
            $('.template-insert-region').text('所在地区');
            $('.content-select-wrap span').text('请选择').attr('aid', '').eq(0).addClass('selected').siblings().removeClass('selected').hide();
            $('.content-list-wrap').attr('current-tag', 'province');
            $('.business-size-wrap li').eq(0).find('input').attr('checked', 'checked');
            var $optionWrapEles = $('.business-option-wrap');
            $optionWrapEles.each(function (index, value) {
                $(value).find('li').eq(0).find('input').attr('checked', 'checked');
            });
            $('.business-meal-wrap li').eq(0).find('input').attr('checked', 'checked');
            $('.business-meal-num').text(1);
        } catch (e) {}
    };
    CommonObject.prototype.monitorBusinessMealOption = function () {
        try {
            var self = this,
                priceEle = document.querySelector('.business-meal-price');
            if (priceEle) {
                var optionConfigurableEle = document.querySelectorAll('.option-configurable-item');
                if (optionConfigurableEle && optionConfigurableEle.length) {
                    optionConfigurableEle.forEach(function (v) {
                        var inputEle = v.querySelectorAll('input');
                        if (inputEle && inputEle.length) {
                            inputEle.forEach(function (item) {
                                item.onchange = function () {
                                    self.calculateBusinessPrice();
                                };
                            });
                        }
                    });
                }
            }
        } catch (e) {}
    };
    CommonObject.prototype.renderBusinessMealModule = function () {
        try {
            if (document.querySelector('.business-meal-num-down')) {
                var self = this;
                document.querySelector('.business-meal-num-down').onclick = function () {
                    var mealNum = parseInt(document.querySelector('.business-meal-num').innerText, 10);
                    if (mealNum > 1) {
                        document.querySelector('.business-meal-num').innerText = --mealNum;
                        self.calculateBusinessPrice();
                    }
                };
                document.querySelector('.business-meal-num-up').onclick = function () {
                    var mealNum = parseInt(document.querySelector('.business-meal-num').innerText, 10);
                    document.querySelector('.business-meal-num').innerText = ++mealNum;
                    self.calculateBusinessPrice();
                };
            }
        } catch (e) {}
    };
    //初始化文字滚动效果
    CommonObject.prototype.initWordRotation = function () {
        var wordRotationWrap = document.getElementsByClassName('word-rotation-wrap');
        try {
            if (wordRotationWrap.length) {
                setInterval(function () {
                    var liHeight = $('.word-rotation-wrap').find('li:last').height();
                    $('.word-rotation-wrap').prepend($('.word-rotation-wrap li:last').css('height', '0px').animate({
                        height: liHeight + 'px'
                    }, 'slow'));
                }, 3000);
            }
        } catch (e) {}
    };
    // 初始化问答模块
    CommonObject.prototype.initQuestionAnswer = function () {
        var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
        var script = document.createElement('script');
        script.src='//cdn.iclicash.com/allsites/template/public/new_sitebuilding/swiper.min.js';
        document.body.appendChild(script);
        script.onload = function () {
            new Swiper('.swiper-container', {
                direction: "horizontal", 
                allowTouchMove: false,
                navigation: {  
                    nextEl: '.swiper-li',  
                },  
            });
        }
        document.querySelectorAll(".swiper-confirm-button")[0]&&document.querySelectorAll(".swiper-confirm-button")[0].addEventListener('click',function(){
            document.querySelectorAll(".swiper-container")[0].style.display = 'none';
            document.getElementById('comment').style.display = 'block';
        })
    };
    CommonObject.prototype.renderCoinBannerFormStyle = function () {
        try {
            var bannerFormEle = document.querySelector('div[component-tag="component-banner-form"]');
            if (bannerFormEle) {
                bannerFormEle.querySelector('.form-text-wrap').style.backgroundImage = 'url(/allsites/template/public/new_sitebuilding/image/banner_form_coin.png)';
                bannerFormEle.querySelector('.form-text').remove();
            }
        } catch (e) {}
    };
    CommonObject.prototype.coinExcitationBannerForm = function () {
        try {
            var self = this,
                bannerFormEle = document.querySelector('div[component-tag="component-banner-form"]');
            if (bannerFormEle && bannerFormEle.parentNode.getAttribute('coinflag') === '1') {
                document.getElementById('triggerActive9Trace').click();
                self.getAjaxCoin(parseInt(Math.random() * 400 + 100, 10), 3);
            }
        } catch (e) {}
    };
    CommonObject.prototype.calculateBusinessPrice = function () {
        try {
            var self = this,
                optionLabel = document.querySelectorAll('.option-label'),
                price = 0;
            if (optionLabel && optionLabel.length) {
                optionLabel.forEach(function (v) {
                    var attrPrice = v.getAttribute('data-price');
                    if (v.previousElementSibling.checked && Boolean(attrPrice)) {
                        price += parseFloat(attrPrice, 10);
                    }
                })
            }
            var mealNumEle = document.querySelector('.business-meal-num');
            if (mealNumEle) {
                price = (price * mealNumEle.innerText).toFixed(2);
            }
            if (self.discountCouponFlag) {
                var coupon = document.querySelector('.custom-online-component').getAttribute('coupon') || '';
                if(Boolean(coupon) && !isNaN(Number(coupon))){
                    var difference = price - coupon;
                    if(difference < 0){
                        difference = 0;
                    }
                    price = difference.toFixed(2);
                }
            }
            var priceEle = document.querySelector('.business-meal-price');
            if (priceEle) {
                priceEle.innerText = '¥ ' + price;
            }
        } catch (e) {}
    };
    CommonObject.prototype.initCountdownTimer = function () {
        var timerEles = document.querySelectorAll('.countdown-timer-time');
        if(timerEles && timerEles.length){
            var countdownTimeObj = {};
            timerEles.forEach(function (ele, ei) {
                countdownTimeObj['countdownTimer' + ei] = 0;
            });
            timerEles.forEach(function (ele, ei) {
                clearInterval(countdownTimeObj['countdownTimer' + ei]);
                countdownTimeObj['countdownTimer' + ei] = setInterval(function () {
                    var timeEleArr = ele.querySelectorAll('span'),
                        color = 'rgb(89, 109, 225)',
                        timeArr = [];
                    timeEleArr.forEach(function (v) {
                        color = window.getComputedStyle(v, null).backgroundColor;
                        timeArr.push(v.innerText);
                    });
                    var i = 0,
                        second = parseInt(timeArr[i], 10) * 24 * 3600 + parseInt(timeArr[++i], 10) * 3600 +
                            parseInt(timeArr[++i], 10) * 60 + parseInt(timeArr[++i], 10) - 1;
                    if (second >= 0) {
                        var s = second % 60; //s
                        s = (s < 10 ? '0' + s : s);
                        second = (second - s) / 60;
                        var m = second % 60; //min
                        m = (m < 10 ? '0' + m : m);
                        second = (second - m) / 60;
                        var h = second % 24; //hour
                        h = (h < 10 ? '0' + h : h);
                        var d = (second - h) / 24;//day
                        d = (d < 10 ? '0' + d : d);
                        ele.innerHTML = '<span style="background-color:' + color + '">' + d + '</span>' +
                            '<span style="background-color:' + color + '">' + h + '</span>' +
                            '<span style="background-color:' + color + '">' + m + '</span>' +
                            '<span style="background-color:' + color + '">' + s + '</span>';
                    } else {
                        clearInterval(countdownTimeObj['countdownTimer' + ei]);
                    }
                }, 1000);
            })
        }
    };
    CommonObject.prototype.preOperateBusinessMeal = function () {
        var bMealComponentNodes = document.querySelectorAll('div[component-tag="component-meal-configurable"]');
        if(bMealComponentNodes && bMealComponentNodes.length) {
            bMealComponentNodes.forEach(function (item) {
                item.setAttribute('id', 'dgcpc');
                var optionNodes = item.querySelectorAll('.business-option-wrap');
                if(optionNodes && optionNodes.length) {
                    optionNodes.forEach(function (option) {
                        var optionInputNodes = option.querySelectorAll('input[type="radio"]');
                        if(optionInputNodes && optionInputNodes.length > 1) {
                            optionInputNodes.forEach(function (v) {
                                v.checked = false;
                            })
                        }
                    })
                }
            });
            this.calculateBusinessPrice();
        }
    };
    new CommonObject();
}).call(this);