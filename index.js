$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + 1
            }, 500);
        }
    });	


    //Scroll Highlight
    $(window).scroll(function() {

        var position = $(this).scrollTop();

        $('.section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target) {
                $('#navUl > li > a').removeClass('active');
                $('#navUl > li > a[href=\"#' + id + '\"]').addClass('active');
            }
        });
    });
});
