$(function () {
  $(document).scroll(function () {
	  var $nav = $(".topnav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $nav.toggleClass('unscrolled', $(this).scrollTop() <= $nav.height());
	});
});
