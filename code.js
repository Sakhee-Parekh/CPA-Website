$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > $(window).height()){
          $(".nav").css({"background-color":"white"});   
      }
      else{
          $(".nav").css({"background-color":"transparent"});
      }

  })
})

