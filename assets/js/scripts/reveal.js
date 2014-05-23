jQuery(document).ready(function($) {
$(".reveal").click(function(e) {
    var target = $(this).attr('href');
    if ($(target).css('display') === 'none') {
      $(target).fadeIn(150);
    }
    else {
      $(target).fadeOut(150);
    }
    e.preventDefault();
  });
});