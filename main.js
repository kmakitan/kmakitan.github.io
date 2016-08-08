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
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("navUl").style.width = "250px";
    document.getElementById("site-wrap").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("navUl").style.width = "0";
    document.getElementById("site-wrap").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
