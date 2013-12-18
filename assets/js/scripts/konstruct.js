jQuery(document).ready(function($) {
$(".reveal").click(function(e) {
    var target = $(this).attr('href');
    if ($(target).css('display') === 'none') {
      $(target).fadeIn(500);
    }
    else {
      $(target).fadeOut(500);
    }
    e.preventDefault();
  });
});