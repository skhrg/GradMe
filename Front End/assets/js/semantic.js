$(document).ready(function() {
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

  $("#prev").on("click", function(e) {
    e.preventDefault();

    var prevItem = productCurrentItem.prev();

    productCurrentItem.removeClass("active");

    if ( prevItem.is(productItem.last().prev() ) ) { 
      
      productCurrentItem = prevItem.addClass("active");

      $(".submit").remove();

      var nextButton = $('<a></a>').addClass('btn') 
          .attr('id',"next").attr('href','#').text('next');

      $(".footer").append(nextButton);

    } else if (prevItem.length) {
      productCurrentItem = prevItem.addClass("active");
    } else {
      productCurrentItem = productItem.last().addClass("active");
    }

    calcProductHeight();
    animateContentColor();
  });

  $("#next").on("click", function(e) {
    e.preventDefault();

    var nextItem = productCurrentItem.next();
 
    productCurrentItem.removeClass("active");

    if ( nextItem.is(productItem.last()) ) { 
      
      productCurrentItem = nextItem.addClass("active");
      $("#next").remove();

      var submitButton = $('<input type="submit"></input').text("SUBMIT").addClass("ui button btn submit");
      $(".footer").append(submitButton);

    } else if (nextItem.length) {
      productCurrentItem = nextItem.addClass("active");
    } else {
      productCurrentItem = productItem.first().addClass("active");
    }

    calcProductHeight();
    animateContentColor();

  });

  $(".search").on("click", function() {
    var selected = $(".active .label").length;
    var currentHeight = getProductHeight;
    $(".products").css({
      "height": currentHeight + 18*selected + "px",
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