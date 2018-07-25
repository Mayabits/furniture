$(document).ready(function () {

    var num = 1;
    $('#body').attr("src","images/Mesa Negra.png");

    $(window).scroll(function () { 
        num = $(window).scrollTop() / 3;
        
        if( parseInt(num) === num) {        
            $('#img1').attr("src","images/Mesa negra"+".png");
        }
        else{}
        
        if (num<1) {
            $('#img1').attr("src","images/Silla negra.png");
        }
        
        if (num>30) {
            $('#img1').attr("src","images/Mesa negra.png");
            $("#img1").css("position","right");
        };

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) { 
                $("h4").html("Jesper K Thomas");
            } else {
                $("h4").html("Mike Wazowski");
            }
        });        
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { 
            $("h2").html("Dunes Anthrazite Black");
        } else {
            $("h2").html("Shell Dining Chair");
        }
    });
});
