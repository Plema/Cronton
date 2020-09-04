$(document).ready(function () {
    $('.case_slider').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });
    $('.slider_dictionary').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });
});