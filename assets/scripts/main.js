(function($){
  //  featured cards
  var card = $(".featured .row-wrap .col-wrap .card-wrap .text-block");

  card.hover(function(){
    $(this).find("p").slideDown();
  }, function(){
    $(this).find("p").slideUp();
  })

  // product slider
  var slider = $(".product-slider .slider-wrap");

  slider.each(function(){
    $(this).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    })
  })

})(jQuery);