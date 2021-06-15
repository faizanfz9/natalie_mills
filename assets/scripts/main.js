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
      arrows: false,
      dots: true
    })
  })

  // product img gallery
  var thumbs = $(".product-detail .row-wrap .col-left .inner-wrap .thumbs li");
  var mainImg = $(".product-detail .row-wrap .col-left .inner-wrap .main-img");

  mainImg.eq(0).show();

  thumbs.click(function(){
    let index = $(this).index();

    thumbs.removeClass("active");
    $(this).addClass("active");
    mainImg.hide();
    mainImg.eq(index).fadeIn();
  })

})(jQuery);