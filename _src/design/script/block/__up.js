// ///////////////////////////////////////// up

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 1500) {
    // $('.up').fadeIn();
    $('.up').css({"transform": "translateX(0)"});
  } else {
    $('.up').css({"transform": "translateX(100px)"});
  }
});

$('.up').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});
