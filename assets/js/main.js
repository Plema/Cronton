$(document).ready(function(){

        setTimeout(function(){
            $('.preloader').toggleClass('active');
            $('body').css('overflow','auto')
        },12000);

    <!-- меню -->
    $(".icon_menu").click(function() {
        $('.menu').toggleClass("active");
    });
    $(".icon_call").click(function() {
        $('.call').toggleClass("active");
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


    <!-- Слайдер-->
    $('.case_slider').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,

        autoplay:true,
        autoplaySpeed:3000,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });
    $('.services_slider').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        autoplay:true,
        centerMode:false,
        autoplaySpeed:3000,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',
        responsive: [
            {

                breakpoint: 1920,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1600,
                settings: {
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    <!-- конец Слайдер-->


    <!-- Попап-->
    $('.open-form').on("click", function () {
        $('.overlay-form').addClass('active fadeInDown');
        $('body').addClass('hid');

    });
    $('.overlay-form .close,.close-popup').on("click", function () {
        $('.overlay-form').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-form').removeClass('active');
        }, 500);
    });
    <!-- конец Попап-->


    <!-- Анимация цифр-->
    jQuery("#banner").mousemove(
        function(e){
            var offset = jQuery(this).offset();
            var xPos = e.pageX - offset.left;
            var yPos = e.pageY - offset.top;

            var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
            var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);

            jQuery(this).children('img').each(
                function(){
                    var diffX = jQuery('#Parallax').width() - jQuery(this).width();
                    var diffY = jQuery('#Parallax').height() - jQuery(this).height();

                    var myX = diffX * (mouseXPercent / 1500);

                    var myY = diffY * (mouseYPercent / 1080);

                    var cssObj = {
                        'left': myX + 'px',
                        'top': myY + 'px'
                    }
                    jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

                }
            );

        }
    );
    <!-- конец Анимация цифр-->
});


