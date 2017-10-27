$(document).ready(function() {

  var navHeight = 30;

  $("#mainLink").click(function (){
    $("html").animate({
      scrollTop: $("#main").offset().top
    }, 500);
  });

  $("#aboutLink").click(function (){
    $("html").animate({
      scrollTop: $("#about").offset().top - navHeight
    }, 500);
  });

  $("#expLink").click(function (){
    $("html").animate({
      scrollTop: $("#exp").offset().top - navHeight
    }, 500);
  });  
 
  $("#contactLink").click(function (){
    $("html").animate({
      scrollTop: $("#contact").offset().top - navHeight
    }, 500);
  });

  $("ul li").click(function (){
    $("ul li").removeClass("active");
    $(this).addClass("active");	
  });  

  var scroll_start = 0;
  var startChange = $(".mainFont").offset().top;
  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > startChange) {
      $(".navbar-default").addClass("scrolled-nav");
    } else {
      $(".navbar-default").removeClass("scrolled-nav");
    }
  });
  
/*
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
 */
});