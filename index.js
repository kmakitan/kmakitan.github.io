$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });


    //Scroll Highlight
    $(window).scroll(function() {

        var position = $(this).scrollTop();

        var result = $("#home").height();
        console.log(position);
        console.log(result);


        $('.section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');
            if (id != "home") {
                target -= 1;
            }






            if (position >= target) {
                $('#navUl > li > a').removeClass('active');
                $('#navUl > li > a[href=\"#' + id + '\"]').addClass('active');
            }
        });
    });

    $(function() {
        var pull = $('#pull');
        menu = $('nav ul');
        menuHeight = menu.height();

        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
