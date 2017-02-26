

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= .5*$(window).height()) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(700);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});

// for fading on scroll
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }
        });

    });

});


/* for navi */
$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
     if (!active1) $(this).find('.test1').css({'transform': 'translate(-125px,70px)'});
    else $(this).find('.test1').css({'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'transform': 'translate(-45px,110px)'});
    else $(this).find('.test2').css({'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'transform': 'translate(45px,110px)'});
    else $(this).find('.test3').css({'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'transform': 'translate(125px,70px)'});
    else $(this).find('.test4').css({'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});


