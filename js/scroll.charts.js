//杀夫原因
$(document).ready(function () {
    var husbandReason1Width = $("#husband_reason1").width();
    var husbandReason1Height = $("#husband_reason1").height();
    var husbandReasonDescHeight = $("#husband_reason_desc").height();
    var fixedHeight = husbandReasonDescHeight + husbandReason1Height * 1.1;

    $(".husband_reason_wrap").css("padding-top", husbandReason1Height);
    $("#husband_reason_imgs").css("width", husbandReason1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#husband_reason_imgs",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#husband_reason_imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#husband_reason_text1",
        triggerHook: 0.7
    })
        .setClassToggle("#husband_reason1", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#husband_reason_text3",
        triggerHook: 0.7
    })
        .setClassToggle("#husband_reason2", "fadeout")
        .addTo(controller)

});




//杀夫凶器
$(document).ready(function () {
    var husbandWeapon1Width = $("#husband_weapon1").width();
    var husbandWeapon1Height = $("#husband_weapon1").height();
    var husbandWeaponDescHeight = $("#husband_weapon_desc").height();
    var fixedHeight = husbandWeaponDescHeight + husbandWeapon1Height * 1.1;

    $(".husband_weapon_wrap").css("padding-top", husbandWeapon1Height);
    $("#husband_weapon_imgs").css("width", husbandWeapon1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#husband_weapon_imgs",
        triggerHook: 0,
        duration: fixedHeight
    })
        .setPin("#husband_weapon_imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#husband_weapon_text2",
        triggerHook: 0.6
    })
        .setClassToggle("#husband_weapon1", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#husband_weapon_text3",
        triggerHook: 0.6
    })
        .setClassToggle("#husband_weapon2", "fadeout")
        .addTo(controller)

});



//杀子原因
$(document).ready(function () {
    var childReason1Width = $("#husband_reason1").width();
    var childReason1Height = $("#husband_reason1").height();
    var childReasonDescHeight = $("#child_reason_desc").height();
    var fixedHeight2 = childReasonDescHeight + childReason1Height * 1.05;

    $(".child_reason_wrap").css("padding-top", childReason1Height);
    $("#child_reason_imgs").css("width", childReason1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#child_reason_imgs",
        triggerHook: 0,
        duration: fixedHeight2
    })
        .setPin("#child_reason_imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#child_reason_text1",
        triggerHook: 0.8
    })
        .setClassToggle("#child_reason1", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#child_reason_text2",
        triggerHook: 0.8
    })
        .setClassToggle("#child_reason2", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#child_reason_text3",
        triggerHook: 0.8
    })
        .setClassToggle("#child_reason3", "fadeout")
        .addTo(controller)

});



//弃婴原因
$(document).ready(function () {
    var babyReason1Width = $("#husband_reason1").width();
    var babyReason1Height = $("#husband_reason1").height();
    var babyReasonDescHeight = $("#baby_reason_desc").height();
    var fixedHeight3 = babyReasonDescHeight + babyReason1Height * 1.1;

    $(".baby_reason_wrap").css("padding-top", babyReason1Height);
    $("#baby_reason_imgs").css("width", babyReason1Width);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#baby_reason_imgs",
        triggerHook: 0,
        duration: fixedHeight3
    })
        .setPin("#baby_reason_imgs")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#baby_reason_text1",
        triggerHook: 0.55
    })
        .setClassToggle("#baby_reason1", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#baby_reason_text2",
        triggerHook: 0.55
    })
        .setClassToggle("#baby_reason2", "fadeout")
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: "#baby_reason_text3",
        triggerHook: 0.55
    })
        .setClassToggle("#baby_reason3", "fadeout")
        .addTo(controller)

});


//自杀图形变换
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#suicide",
    offset: 40
})
    .setClassToggle("#suicide1", "fadeout")
    .addTo(controller);


//年龄图形变换    
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#age",
    offset: 120
})
    .setClassToggle("#age1", "fadeout")
    .addTo(controller);