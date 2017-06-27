$(document).ready(function() {

  var prodHeight = $(".product.active").height();
  $(".products").css({
    height: prodHeight
  });
  function calcProductHeight() {
    prodHeight = $(".product.active").height();
    $(".products").css({
      height: prodHeight
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
  var guideItem = $(".pointing .item"),
    guideCurrentItem = guideItem.filter(".active");
  var prevButton;
  var submitButton;

  $(guideItem).on("click", function(e){
    e.preventDefault();
      var link = $(this).attr("href");
      var match = document.getElementById(link);
      productCurrentItem.removeClass("active");
      guideCurrentItem.removeClass("active");
      $(match).addClass("active");
      prodHeight = $(".product.active").height();
      $(".products").css({height: prodHeight});

      $(this).addClass("active");
      productCurrentItem = productItem.filter(".active");
      guideCurrentItem = guideItem.filter(".active");
      animateContentColor();
      cardButtons();
  });

  cardButtons(); 
  /* places correct buttons in card footer */
  function cardButtons() {
    
    if (productCurrentItem.is(productItem.first())) {

      if ($("#prev").exists()) { prevButton = $("#prev").detach() };
      if ($("#submit").exists()) { submitButton = $("#submit").detach() };
      $(".cardFooter").css('justify-content','center');

    } else if ( productCurrentItem.is(productItem.last()) ) {

      if ($("#next").exists()) {addButton = $("#next").detach() };
      if ($("#prev").length == 0) { $(".cardFooter").prepend(prevButton) };
      if ($("#submit").length == 0) { $(".cardFooter").append(submitButton) };

    } else if (!$("#prev").exists()) {

      $(".cardFooter").prepend(prevButton);
      $(".cardFooter").css('justify-content','space-between');

    } else if (!$("#next").exists()) {
      submitButton = $("#submit").detach();
      $(".cardFooter").append(addButton);
    }
    calcProductHeight();
    animateContentColor();
  }

  $("#next").on("click", function(e) {
    e.preventDefault();

    var nxtItem = productCurrentItem.next();
    var nxtGuideItem = guideCurrentItem.next();
    productCurrentItem.removeClass("active");
    guideCurrentItem.removeClass("active");
      
    productCurrentItem = nxtItem.addClass("active");
    guideCurrentItem = nxtGuideItem.addClass("active");
    animateContentColor();
    cardButtons();
    calcProductHeight();
  });

  $(prevButton).on("click", function(e) {
    e.preventDefault();

    var prvItem = productCurrentItem.prev();
    var prvGuideItem = guideCurrentItem.prev();
    productCurrentItem.removeClass("active");
    guideCurrentItem.removeClass("active");

    productCurrentItem = prvItem.addClass("active");
    guideCurrentItem = prvGuideItem.addClass("active");
    animateContentColor();
    cardButtons();
    calcProductHeight();
  });

  $(".search").on("click", function() {
    var selected = $(".active .label").length;
    var currentHeight = prodHeight;
    $(".products").css({
      "height": currentHeight + 30*selected + "px",
    });
  });

});

$.fn.exists = function () {
    return this.length !== 0;
}

/* search function */
$('.dropdown').dropdown({
  label: {
    duration: 0,
  },
  maxSelections: 3,
  debug: true,
  performance: true,
});