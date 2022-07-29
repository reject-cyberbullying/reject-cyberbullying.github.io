var fengmianIsLargen = false;
var fengmianIsNormal = true
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            triggerElement: "#fengmian",
            triggerHook: 0,
            duration: 400
        })
        .setPin("#fengmian")
        .addTo(controller);

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop(); //获取滚动的高度
        if (scrollTop > 50 && fengmianIsLargen == false) {
            fengmianIsLargen = true;
            $(".fengmian-01").addClass("fengmian-01zoomin");
            $(".fengmian-02").addClass("fengmian-02hide");
            $(".fengmian-03").addClass("fengmian-03show");
        }
        if (scrollTop < 50) {
            fengmianIsLargen = false;
            $(".fengmian-01").removeClass("fengmian-01zoomin")
            $(".fengmian-02").removeClass("fengmian-02hide");
            $(".fengmian-03").removeClass("fengmian-03show");
        }

    });
})