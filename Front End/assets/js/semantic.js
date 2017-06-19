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
  var segItem = $(".segment"),
    segCurrentItem = segItem.filter(".active");
  /* variable removed by prev and added by next */
  var prevButton = $('<a class="btn" id="prev" href="#">Prev</a>');

  $("#next").on("click", function(e) {
    e.preventDefault();

    var nxtItem = productCurrentItem.next();
    var nxtSegItem = segCurrentItem.next();
    productCurrentItem.removeClass("active");
    segCurrentItem.removeClass("active");

    if ( nxtItem.is(productItem.first().next()) ) { 
      
      productCurrentItem = nxtItem.addClass("active");
      segCurrentItem = nxtSegItem.addClass("active");
      $(".cardFooter").prepend(prevButton);

    } else if ( nxtItem.is(productItem.last()) ) { 
      
      productCurrentItem = nxtItem.addClass("active");
      segCurrentItem = nxtSegItem.addClass("active");
      /* addButton detached and reattached in $(#prev) function */
      addButton = $("#next").detach(); 

      var submitButton = $('<input type="submit"></input').text("SUBMIT").addClass("ui button submit");
      $(".cardFooter").append(submitButton);

    } else if (nxtItem.length) {
      productCurrentItem = nxtItem.addClass("active");
      segCurrentItem = nxtSegItem.addClass("active");
    } else {
      productCurrentItem = productItem.first().addClass("active");
      segCurrentItem = nxtSegItem.addClass("active");
    }

    calcProductHeight();
    animateContentColor();

  });

  $(prevButton).on("click", function(e) {
    e.preventDefault();

    var prvItem = productCurrentItem.prev();
    var prvSegItem = segCurrentItem.prev();
    productCurrentItem.removeClass("active");
    segCurrentItem.removeClass("active");

    if ( productCurrentItem.is(productItem.first().next()) ) {

      productCurrentItem = prvItem.addClass("active");
      prevButton = $(prevButton).detach();

    } else if ( prvItem.is(productItem.last().prev() ) ) { 
      
      productCurrentItem = prvItem.addClass("active");
      segCurrentItem = prvSegItem.addClass("active");
      $(".submit").remove();
      $(".cardFooter").append(addButton);

    } else {
      productCurrentItem = prvItem.addClass("active");
      segCurrentItem = prvSegItem.addClass("active");
    }

    calcProductHeight();
    animateContentColor();
  });

  $(".search").on("click", function() {
    var selected = $(".active .label").length;
    var currentHeight = getProductHeight;
    $(".products").css({
      "height": currentHeight + 23*selected + "px",
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