$(document).ready(function () {
    $(".caifangyinpin").on("click", function () {
        console.log($(this).next()[0].paused);
        if ($(this).next()[0].paused == true) {
            $(".caifangyinpin").each(function () {
                $(this).next()[0].pause();
            });
            $(".caifangyinpin").css("background-image", "url(images/laba01.png)")
            $(this).next()[0].play();
            $(this).css("background-image", "url(images/laba02.gif)")
        } else {
            $(this).next()[0].pause();
            $(this).css("background-image", "url(images/laba01.png)")
        }

    })
    $(".yinpin").on("ended", function () {
        $(this).prev().css("background-image", "url(images/laba01.png)");
    })

    yinpin

});