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