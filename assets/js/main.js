$(document).ready(function(){
    <!-- меню -->
    $(".icon_menu").click(function() {
        $('.menu').toggleClass("active");
    });
    $('.sub').on('click', function() {
        var currentnav=$(this).closest('li').find('.submenu');
        if(!currentnav.is(':visible')){
            currentnav.slideDown();
            var $this = $(this);
            $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        } else {
            currentnav.slideUp();
            var $this = $(this);
            $this.toggleClass('is-active').children('ul').toggleClass('is-visible');
        }
    });
    <!-- конец меню -->


    <!-- скролл-->
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    <!-- конец скролл -->



    <!-- плагины -->
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
    <!-- конец плагины -->
});