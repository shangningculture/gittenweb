var gundong = function () {
    var i = 0;
    for (i = 0; i < 22; i++) {
        var rand1 = parseInt(Math.random() * 25 + 1);
        quotes = new Array
        quotes[1] = '张小姐'
        quotes[2] = '刘小姐'
        quotes[3] = '周小姐'
        quotes[4] = '吴小姐'
        quotes[5] = '朱小姐'
        quotes[6] = '陈小姐'
        quotes[7] = '田小姐'
        quotes[8] = '钟小姐'
        quotes[9] = '钟小姐'
        quotes[10] = '韩小姐'
        quotes[11] = '顾小姐'
        quotes[12] = '王小姐'
        quotes[13] = '李小姐'
        quotes[14] = '卢小姐'
        quotes[15] = '崔小姐'
        quotes[16] = '段小姐'
        quotes[17] = '胡小姐'
        quotes[18] = '潘小姐'
        quotes[19] = '陈小姐'
        quotes[20] = '林小姐'
        quotes[21] = '代小姐'
        quotes[22] = '苏小姐'
        quotes[23] = '刘小姐'
        quotes[24] = '孟小姐'
        quotes[25] = '蔡小姐'
        var quote = quotes[rand1]
        document.write(quote)

        var rand1 = parseInt(Math.random() * 18 + 1);
        quotes = new Array
        quotes[1] = '（130****'
        quotes[2] = '（131****'
        quotes[3] = '（132****'
        quotes[4] = '（133****'
        quotes[5] = '（134****'
        quotes[6] = '（135****'
        quotes[7] = '（136****'
        quotes[8] = '（137****'
        quotes[9] = '（138****'
        quotes[10] = '（139****'
        quotes[11] = '（150****'
        quotes[12] = '（151****'
        quotes[13] = '（152****'
        quotes[14] = '（153****'
        quotes[15] = '（155****'
        quotes[16] = '（156****'
        quotes[17] = '（158****'
        quotes[18] = '（159****'
        var quote = quotes[rand1]
        document.write(quote + parseInt(Math.random() * 9 + 1) + parseInt(Math.random() * 9 + 1) +
            parseInt(Math.random() * 9 + 1) + parseInt(Math.random() * 9 + 1) + '）&nbsp;')

        var rand1 = parseInt(Math.random() * 25 + 1);
        quotes = new Array
        quotes[1] = '5分钟前'
        quotes[2] = '7分钟前'
        quotes[3] = '9分钟前'
        quotes[4] = '13分钟前'
        quotes[5] = '19分钟前'
        quotes[6] = '33分钟前'
        quotes[7] = '38分钟前'
        quotes[8] = '43分钟前'
        quotes[9] = '58分钟前'
        quotes[10] = '8分钟前'
        quotes[11] = '9分钟前'
        quotes[12] = '1小时前'
        quotes[13] = '2小时前'
        quotes[14] = '1小时前'
        quotes[15] = '3小时前'
        quotes[16] = '5小时前'
        quotes[17] = '8分钟前'
        quotes[18] = '7分钟前'
        quotes[19] = '11分钟前'
        quotes[20] = '15分钟前'
        quotes[21] = '19分钟前'
        quotes[22] = '20分钟前'
        quotes[23] = '26分钟前'
        quotes[24] = '38分钟前'
        quotes[25] = '52分钟前'
        var quote = quotes[rand1]
        document.write('成功获取名额 &nbsp;' + quote + '&nbsp;' + '<br><br>')
    }
}

$(document).ready(function () {
    function scroll (a, b, c) {
        var speed = 20
        var scrollBox = document.getElementById(a);
        var boxOne = document.getElementById(b);
        var boxTwo = document.getElementById(c);
        boxTwo.innerHTML = boxOne.innerHTML
    
        function Marquee() {
            if (boxTwo.offsetTop - scrollBox.scrollTop <= 0)
                scrollBox.scrollTop -= boxOne.offsetHeight
            else {
                scrollBox.scrollTop++
            }
        }
        setInterval(Marquee, speed)
    }
    
    scroll('scrollBox','boxOne','boxTwo')
    scroll('scrollBox2','boxOne2','boxTwo2')
    
})

