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
    } else{
       $(".navbar").css('background','none');
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