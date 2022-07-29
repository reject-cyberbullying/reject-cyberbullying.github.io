var threejsWidth, threejsHeight, scatterindex;
var isMobile = /iPad|iPod|iPhone|Android/.test(navigator.userAgent);

if (isMobile) {
    threejsWidth = window.innerWidth;
    threejsHeight = window.innerHeight;
} else {
    threejsWidth = 900;
    threejsHeight = 400;
}

$(document).ready(function () {

    //出现文书
    $(window).on('scroll', function () {
        var a0 = $("#writ").offset().top;//获取元素距离顶部的距离
        var b0 = $(window).scrollTop();//获取滚动的高度
        var c0 = a0 - 450;
        if (b0 > c0) {
            // scatterindex = 1;
            // window.app.click();
            $("#writ_gif").css("opacity", 1);
        } else {
            $("#writ_gif").css("opacity", 0);
        }
    });

    //出现杀夫粒子
    $(window).on('scroll', function () {
        var a1 = $("#scatter_area").offset().top;//获取元素距离顶部的距离
        var b1 = $(window).scrollTop();//获取滚动的高度
        var c1 = a1 - 500;
        if (b1 > c1) {
            // scatterindex = 1;
            // window.app.click();
            $("#scatter_wrap").fadeIn();
            $("#gif_2287").fadeIn();
        } else {
            $("#scatter_wrap").fadeOut();
        }
    });

    //出现杀子粒子
    $(window).on('scroll', function () {
        var a2 = $("#scatter_area2").offset().top;//获取元素距离顶部的距离
        var b2 = $(window).scrollTop();//获取滚动的高度
        var c2 = a2 - 500;
        if (b2 > c2) {
            $("#scatter_wrap2").fadeIn();
        } else {
            $("#scatter_wrap2").fadeOut();
        }
    });

    //出现整体粒子
    $(window).on('scroll', function () {
        var a3 = $("#scatter_area3").offset().top;//获取元素距离顶部的距离
        var b3 = $(window).scrollTop();//获取滚动的高度
        var c3 = a3 - 500;
        if (b3 > c3) {
            $("#scatter_wrap3").fadeIn();
        } else {
            $("#scatter_wrap3").fadeOut();
        }
    });

    //出现钥匙
    $(window).on('scroll', function () {
        var a4 = $("#scatter_area4").offset().top;//获取元素距离顶部的距离
        var b4 = $(window).scrollTop();//获取滚动的高度
        var c4 = a4 - 450;
        if (b4 > c4) {
            $("#scatter_wrap4").fadeIn();
        } else {
            $("#scatter_wrap4").fadeOut();
        }
    });


    var controller = new ScrollMagic.Controller();

    var scatter_text2_height = $("#scatter_text2").outerHeight(true);

    var scatterDescHeight = $("#scatter_desc").height();
    var scatterDuration = scatterDescHeight * 1.22;

    //二三部分的scatter
    var scatterDescHeight_invisibility = $(".scatter_desc_invisibility1").height();
    var scatterDuration_invisibility = scatterDescHeight_invisibility;





    // full
    new ScrollMagic.Scene({
        triggerElement: "#scatter_wrap",
        triggerHook: 0.25,
        duration: scatterDuration * 1.06
    })
        .setPin("#scatter_wrap")

        .addTo(controller);

    //第二部分的full
    new ScrollMagic.Scene({
        triggerElement: "#scatter_wrap2",
        triggerHook: 0.2,
        duration: scatterDuration_invisibility * 13
    })
        .setPin("#scatter_wrap2")

        .addTo(controller);

    //第三部分的full
    new ScrollMagic.Scene({
        triggerElement: "#scatter_wrap3",
        triggerHook: 0.2,
        duration: scatterDuration_invisibility * 11
    })
        .setPin("#scatter_wrap3")

        .addTo(controller);


    // scatter1
    // new ScrollMagic.Scene({
    //     triggerElement: "#scatter_text1",
    //     triggerHook: 0.5,
    //     duration: scatter_text2_height
    // })
    //     .addTo(controller)
    //     .on("enter", function (e) {
    //         $("#scatter2mask").css("opacity", 1);
    //         $("#scatter2mask2").css("opacity", 1);
    //     })
    //     .on("leave", function (e) {
    //         $("#scatter2mask").css("opacity", 0);
    //     })

    // scatter_mental
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text1",
        triggerHook: 0.6,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#scatter3mask").css("opacity", 1);
            $("#gif_2287").css("opacity", 0);
            $("#mental_560").css("opacity", 1);
        })
        .on("leave", function (e) {
            $("#scatter3mask").css("opacity", 0);
            $("#mental_560").css("opacity", 0);
        })

    // scatter_husband
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text2",
        triggerHook: 0.6,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#husband_mask").css("opacity", 0.8);
            $("#husband_736_1").css("opacity", 1)
        })
        .on("leave", function (e) {
            $("#husband_mask").css("opacity", 0);
            $("#husband_736_1").css("opacity", 0)
        })


    // scatter_child
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text3",
        triggerHook: 0.6,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#child_mask1").css("opacity", 0.8);
            $("#child_mask2").css("opacity", 0.8);
            $("#child_518_1").css("opacity", 1);
        })
        .on("leave", function (e) {
            $("#child_mask1").css("opacity", 0);
            $("#child_mask2").css("opacity", 0);
            $("#child_518_1").css("opacity", 0);
        })

    // scatter_whole
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text4",
        triggerHook: 0.6,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#other_mask").css("opacity", 0.8);
            $("#other_1033").css("opacity", 1);
        })
        .on("leave", function (e) {
            $("#other_mask").css("opacity", 0);
            $("#other_1033").css("opacity", 0);
        })


    // new ScrollMagic.Scene({
    //     triggerElement: "#scatter_text6",
    //     triggerHook: 0.47
    // })
    //     .addTo(controller)
    //     .on("enter", function (e) {
    //         scatterindex = 1;
    //         window.app.click();
    //     })



    //准备生成杀夫人像
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text5",
        triggerHook: 0.05,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#husband_rectangle_gif").css("display", "inline")
            $("#husband_rectangle_png").css("display", "inline")
            $("#husband_736_2").css("opacity", 1);
        })
        .on("leave", function (e) {
            $("#husband_rectangle_gif").css("display", "none")
            $("#husband_rectangle_png").css("display", "none")
            $("#husband_736_2").css("opacity", 0);
        })

    //设置杀夫人像离开
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text5",
        triggerHook: 0.47
    })
        .addTo(controller)
        .on("leave", function (e) {
            scatterindex = 1;
            window.app.click();
        })


    //准备生成杀子人像
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text_invisibility1",
        triggerHook: 0.05,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#child_rectangle_gif").css("display", "inline")
            $("#child_rectangle_png").css("display", "inline")
            $("#child_518_2").css("opacity", 1);
        })
        .on("leave", function (e) {
            $("#child_rectangle_gif").css("display", "none")
            $("#child_rectangle_png").css("display", "none")
            $("#child_518_2").css("opacity", 0);
        })

    //设置杀子人像离开
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text_invisibility1",
        triggerHook: 0.1
    })
        .addTo(controller)
        .on("leave", function (e) {
            scatterindex = 1;
            window.app2.click();
        })


    //准备生成整体形象
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text_invisibility2",
        triggerHook: 0.05,
        duration: scatter_text2_height
    })
        .addTo(controller)
        .on("enter", function (e) {
            $("#whole_rectangle_gif").css("display", "inline")
            $("#whole_rectangle_png").css("display", "inline")
            $("#whole_2287").css("opacity", 1)
        })
        .on("leave", function (e) {
            $("#whole_rectangle_gif").css("display", "none")
            $("#whole_rectangle_png").css("display", "none")
            $("#whole_2287").css("opacity", 0)
        })

    //设置整体形象离开
    new ScrollMagic.Scene({
        triggerElement: "#scatter_text_invisibility2",
        triggerHook: 0.1
    })
        .addTo(controller)
        .on("leave", function (e) {
            scatterindex = 1;
            window.app3.click();
        })



    //鼠标点击事件
    var gif = document.getElementById("husband_rectangle_gif");
    gif.onclick = function () {
        scatterindex = 2;
        window.app.click();
        $("#husband_rectangle_gif").css("display", "none");
        $("#husband_rectangle_png").css("display", "none");
        // $("#husband_rectangle_gif").css("cursor","default");
        // $("#mask1").css("display","none");
        $("#husband_736_2").css("opacity", 0)
    };



    var gif = document.getElementById("child_rectangle_gif");
    gif.onclick = function () {
        scatterindex = 2;
        window.app2.click();
        $("#child_rectangle_gif").css("display", "none");
        $("#child_rectangle_png").css("display", "none");
        $("#child_518_2").css("opacity", 0);
    };



    var gif = document.getElementById("whole_rectangle_gif");
    gif.onclick = function () {
        scatterindex = 2;
        window.app3.click();
        $("#whole_rectangle_gif").css("display", "none");
        $("#whole_rectangle_png").css("display", "none");
        $("#whole_2287").css("opacity", 0);
    };






    var husband_height = $("#husband").outerHeight(true);


    new ScrollMagic.Scene({
        triggerElement: "#husband",
        triggerHook: 0,
        duration: husband_height
    })
        .setPin("#husband_img")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#husband",
        triggerHook: 0,
        duration: husband_height
    })
        .on("enter", function (e) {
            $("#husband_img").css("opacity", 1)
        })
        .on("leave", function (e) {
            $("#husband_img").css("opacity", 0);
        })
        .addTo(controller);





    var child_height = $("#child").outerHeight(true);


    new ScrollMagic.Scene({
        triggerElement: "#child",
        triggerHook: 0,
        duration: child_height
    })
        .setPin("#child_img")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#child",
        triggerHook: 0,
        duration: child_height
    })
        .on("enter", function (e) {
            $("#child_img").css("opacity", 1)
        })
        .on("leave", function (e) {
            $("#child_img").css("opacity", 0);
        })
        .addTo(controller);





    var whole_height = $("#whole").outerHeight(true);

    new ScrollMagic.Scene({
        triggerElement: "#whole",
        triggerHook: 0,
        duration: whole_height
    })
        .setPin("#whole_img")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#whole",
        triggerHook: 0,
        duration: whole_height
    })
        .on("enter", function (e) {
            $("#whole_img").css("opacity", 1)
        })
        .on("leave", function (e) {
            $("#whole_img").css("opacity", 0);
        })
        .addTo(controller);






})