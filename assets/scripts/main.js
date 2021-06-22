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

  // payment method selector
  var methods = $(".cart .row-wrap .col-left .card-wrap .payment-methods .method");
  var enterDetailBox = $(".cart .row-wrap .col-left .card-wrap .payment-methods .method .enter-details")

  methods.click(function(){
    methods.removeClass("active");
    $(this).addClass("active");

    enterDetailBox.hide();
    $(this).find(".enter-details").slideDown();
  });

  enterDetailBox.click(function(e){
    e.stopPropagation();
  })

  // request overlay popup
  var requestPopup = $(".return-overlay");
  var showBtn = $(".request-return");
  var closeBtn = requestPopup.find(".popup .header button");

  showBtn.click(function(e){
    e.preventDefault();
    requestPopup.fadeIn();
  });

  closeBtn.click(function(){
    requestPopup.fadeOut();
  })

  // video overlay popup
  $(".video-link").videoPopup();

  // blog slider
  var blogSlider = $(".blog-grid .slider-wrap");
  
  blogSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  })

  // initiative slider
  var initiativeSlider = $(".initiative-slider .slider-wrap");

  initiativeSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  })

})(jQuery);