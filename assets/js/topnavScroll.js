$(function () {
  $(document).scroll(function () {
	  var $nav = $(".topnav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  $(document).scroll(function () {
	  var $nav = $(".topnav");
	  $nav.toggleClass('unscrolled', $(this).scrollTop() == $nav.height());
	});
});
