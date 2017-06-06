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
  }

  var productItem = $(".product"),
    productCurrentItem = productItem.filter(".active");
/* filter method selects elements via selector */
  
  $("#next").on("click", function(e) {
    e.preventDefault();

    var nextItem = productCurrentItem.next();
 /* next method finds next match for selector defined in productCurrentItem variable */  
    productCurrentItem.removeClass("active");

    if (nextItem.is(productItem.last())) { 
      productCurrentItem = nextItem.addClass("active");
      $(".card").css( {
        "background": "#ddd",
      });
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

    if (prevItem.length) {
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
      "height": currentHeight + 13*selected + "px",
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