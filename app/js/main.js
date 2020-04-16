$('.slider-carousel').slick({
    dots: true,
    autoplay: true,
    prevArrow: '<img class="slick-next" src="img/main/prevArrow.svg" alt=""></img>',
    nextArrow: '<img class="slick-prev " src="img/main/nextArrow.svg" alt=""></img>',
    responsive: [{
        breakpoint: 850,
        settings: {
            dots: false,
            arrows: false,
        }
    }, ]
});

$('.import').slick({
    autoplay: true,
    prevArrow: '<img class="slick-next" src="img/main/prevArrow.svg" alt=""></img>',
    nextArrow: '<img class="slick-prev " src="img/main/nextArrow.svg" alt=""></img>',
    responsive: [{
        breakpoint: 850,
        settings: {
            arrows: false,
        }
    }, ]
});



$(document).ready(function () {
    $('.popup-application--open').on("click", function () {
        $('.overlay').show();
    });
    $('.popup-close').on("click", function () {
        $('.overlay').hide();
    });
});

$(document).ready(function () {
    $('.popup-call--open').on("click", function () {
        $('.overlay--call').show();
    });
    $('.popup-close').on("click", function () {
        $('.overlay--call').hide();
    });
});


$(function ($) {
    $('.navbar-burger--open').on('click', function () {
        $(this).parents('.header-nav').toggleClass('header-nav--open');
    });

    $('html').on('click', function (e) {
        if (!$(e.target).closest('.header-nav__burger').length &&
            ($('.header-nav__burger').hasClass('header-nav--open'))) {
            $('.header-nav__burger').removeClass('header-nav--open');
        }
    });
});