$(document).ready(function() {
/* 
  $("#mainLink").click(function (){
    $("html").animate({
      scrollTop: $("#main").offset().top
    }, 500);
  });

  $("#aboutLink").click(function (){
    $("html").animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });

 
  $("#contactLink").click(function (){
    $("html").animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  });
*/

  $("#mainLink").click(function (){
    $(".sectionBlock").fadeOut(500);
	var h = $(window).height() + "px";
	$("#main").animate({height: h, opacity: 1}, "slow");
  });

  $("#aboutLink").click(function(){
    $(".sectionBlock").hide();
    $(".mainBlock").animate({height: '500px', opacity: 0.9}, "slow");
    $("#about").fadeIn(500);
  });
  
  $("#expLink").click(function(){
    $(".sectionBlock").hide();
    $(".mainBlock").animate({height: '500px', opacity: 0.9}, "slow");
    $("#exp").fadeIn(500);
  });

  $("#contactLink").click(function(){
    $(".sectionBlock").hide();
    $(".mainBlock").animate({height: '500px', opacity: 0.9}, "slow");
    $("#contact").fadeIn(500);
  });
  
});