// JavaScript Document
$(document).ready(function () {
  $('.addcartbtn').on('click', function () {
    $('html, body').animate({
      'scrollTop': $(".cart_anchor").position().top
    });
    var itemImg = $(this).parent().find('img').eq(0);
    flyToElement($(itemImg), $('.cart_anchor'));
  });
});

$(document).ready (function flyToElement(flyer, flyingTo) {
  var $func = $(this);
  var divider = 3;
  var flyerClone = $(flyer).clone();
  $(flyerClone).css({
    position: 'absolute',
    top: $(flyer).offset().top + "px",
    left: $(flyer).offset().left + "px",
    opacity: 1,
    'z-index': 1000
  });
  $('body').append($(flyerClone));
  var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width() / divider) / 2;
  var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height() / divider) / 2;
  $(flyerClone).animate({
      opacity: 0.4,
      left: gotoX,
      top: gotoY,
      width: $(flyer).width() / divider,
      height: $(flyer).height() / divider
    }, 700,
    function () {
      $(flyingTo).fadeOut('fast', function () {
        $(flyingTo).fadeIn('fast', function () {
          $(flyerClone).fadeOut('fast', function () {
            $(flyerClone).remove();
          });
        });
      });
    });
});
