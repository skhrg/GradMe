$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if(target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });

  var height = $(".parallax").height();

  $(window).scroll(function(){
    if($(window).scrollTop() > (height)){
       $(".navbar").css('background', 'rgba(20,20,20,0.95)');
       $(".item").css('color','#ddd');
       $(".secondary-logo").css('color','#ddd')
       $(".right.menu").css('visibility','hidden');
    } else{
       $(".navbar").css('background','rgba(250,250,250,0.9)');
       $(".item").css('color','#000');
       $(".secondary-logo").css('color','#000')
       $(".right.menu").css('visibility','visible');
    }
  });

  $('.type.example form')
  .form({
    on: 'blur',
  		email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]},
  });

});