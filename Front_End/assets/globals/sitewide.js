$(document).ready(function() {

  var height = $(".scrollpoint").height();
  $(window).scroll(function(){
    if($(window).scrollTop() > (height)){
       $("#navbar").css('background', 'rgba(40,40,40,0.95)');
       $("#navbar .item").css('color','#ddd');
       $(".secondary-logo").css('color','#fff');
       $("a#hide").css('display','none');
       $("#navbar .secondary").addClass("compact");
    } else{
       $("#navbar").css('background','rgba(250,250,250,0.95)');
       $("#navbar .item").css('color','#000');
       $(".secondary-logo").css('color','#000')
       $("a#hide").css('display','inline');
       $("#navbar .compact").removeClass("compact");
    }
  });

});