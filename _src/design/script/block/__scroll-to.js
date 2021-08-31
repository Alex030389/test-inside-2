// ///////////////////////////////////////// buttons blur

$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
  e.preventDefault();
  var t = 300;
  var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
  $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
});
