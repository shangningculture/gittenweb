$(document).ready(function() {
    $(document).ready(function() {
        $(".foot").click(function() {
            $(".popup").show();
        });
        $(".close").click(function() {
            $(".popup").hide();
        })
    });

});

$(function() {
    $("http://dejiazhongguo.com/5/js/img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 1000
    });
});