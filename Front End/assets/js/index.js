$(document).ready(function(){

  $('.site-slider').owlCarousel({
		loop: true,
		auto: true,
		dots: true,
    mouseDrag: true,
		autoplay: true,
    items: 1,
		nav: false,
    onTranslated: function() {
        var $slideHeading = $('.site-slider .owl-item.active .slider-text h3');
        var $slidePara = $('.site-slider .owl-item.active .slider-text p');

        $slideHeading.addClass('animate-in-fast').on('animationend', function(){
          $slideHeading.removeClass('animate-in-fast').addClass('opacFull');
        });

        $slidePara.addClass('animate-in-slow').on('animationend', function(){
          $slidePara.removeClass('animate-in-slow').addClass('opacFull');
        });
      },
    onChange: function(){
      var $slideHeading = $('.site-slider .owl-item.active .slider-text h3');
      var $slidePara = $('.site-slider .owl-item.active .slider-text p');

      $slideHeading.removeClass('opacFull');
      $slidePara.removeClass('opacFull');

    }
  	});
  });

$(window).on('load', function(){
  var $slideHeading = $('.site-slider .owl-item.active .slider-text h3');
  var $slidePara = $('.site-slider .owl-item.active .slider-text p');

  $slideHeading.addClass('animate-in-fast').on('animationend', function(){
    $slideHeading.removeClass('animate-in-fast').addClass('opacFull');
  });

  $slidePara.addClass('animate-in-slow').on('animationend', function(){
    $slidePara.removeClass('animate-in-slow').addClass('opacFull');
  });
}); 

//Semantic UI
$('.dropdown').dropdown({
  label: {
    duration: 0,
  },
  debug: true,
  performance: true,
});

$('.ui.checkbox')
  .checkbox({
    onChecked() {
      const options = $('#members_dropdown > option').toArray().map(
        (obj) => obj.value
      );
      $('#members_dropdown').dropdown('set exactly', options);
    },
    onUnchecked() {
      $('#members_dropdown').dropdown('clear');
    },
  });