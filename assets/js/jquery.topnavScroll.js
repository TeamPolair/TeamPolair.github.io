 $(window).scroll(function() {

    var $topNav = $(".topnav"),
        $scroll = $(window).scrollTop(),
        $wh = window.innerHeight / 2;

    if ($scroll > 0) {
        $topNav.addClass("scrolled");
    } else {
        $topNav.removeClass("scrolled");
    }

});
