var num = 1;
$('#body').attr("src","images/Mesa Negra.png");

$(window).scroll(function () { 
  num = $(window).scrollTop() / 3;
  
 if( parseInt(num) === num){
  
      $('#img1').attr("src","images/Mesa negra"+".png");}
  else{}
  
  if (num<1){
    $('#img1').attr("src","images/Silla negra.png");
  }
    if (num>30){
    $('img').attr("src","images/Mesa negra.png");
      $("img").css("position","right");
  }



});