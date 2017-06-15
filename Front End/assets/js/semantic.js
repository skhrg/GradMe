$(document).ready(function() {

  $("body").css('background', '#e4e4e4');

  var height = $(".navbar").height();

  $(window).scroll(function(){
    if($(window).scrollTop() > (height)){
       $(".navbar").css('background', 'rgba(20,20,20,0.95)');
       $(".secondary .item").css('color','#ddd');
    } else{
       $(".navbar").css('background','none');
       $(".item").css('color','black');
    }
  });

  var getProductHeight = $(".product.active").height();

  $(".products").css({
    height: getProductHeight
  });

  function calcProductHeight() {
    getProductHeight = $(".product.active").height();

    $(".products").css({
      height: getProductHeight
    });
  }

  function animateContentColor() {
    var getProductColor = $(".product.active").attr("product-color");

    $("body").css({
      background: getProductColor
    });

    $(".title").css({
      color: getProductColor
    });

    $(".btn").css({
      color: getProductColor
    });

    $(".label").css({
      "background-color": getProductColor + "!important"
    });
  }

  var productItem = $(".product"),
    productCurrentItem = productItem.filter(".active");

  /* variable w/ global scope.
      button that is removed by $("#next") 
      and added back by $("#prev")
      functions.    ***/
  var addButton;

  $("#next").on("click", function(e) {
    e.preventDefault();

    var nextItem = productCurrentItem.next();
 
    productCurrentItem.removeClass("active");

    if ( nextItem.is(productItem.last()) ) { 
      
      productCurrentItem = nextItem.addClass("active");

      /* detaches the selected jQuery object and stores in the global */
      addButton = $("#next").detach(); 

      var submitButton = $('<input type="submit"></input').text("SUBMIT").addClass("ui button btn submit");
      $(".cardFooter").append(submitButton);

    } else if (nextItem.length) {
      productCurrentItem = nextItem.addClass("active");
    } else {
      productCurrentItem = productItem.first().addClass("active");
    }

    calcProductHeight();
    animateContentColor();

  });

  $("#prev").on("click", function(e) {
    e.preventDefault();

    var prevItem = productCurrentItem.prev();

    productCurrentItem.removeClass("active");

    if ( prevItem.is(productItem.last().prev() ) ) { 
      
      productCurrentItem = prevItem.addClass("active");

      $(".submit").remove();

      $(".cardFooter").append(addButton);

    } else if (prevItem.length) {
      productCurrentItem = prevItem.addClass("active");
    } else {
      productCurrentItem = productItem.last().addClass("active");
    }

    calcProductHeight();
    animateContentColor();
  });

  $(".search").on("click", function() {
    var selected = $(".active .label").length;
    var currentHeight = getProductHeight;
    $(".products").css({
      "height": currentHeight + 17*selected + "px",
    });
  });

});

/* search function */
$('.dropdown').dropdown({
  label: {
    duration: 0,
  },
  maxSelections: 3,
  debug: true,
  performance: true,
});