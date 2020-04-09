$('.slider-carousel').slick({
    dots: true,
});

$('.import').slick({
    arrows: true,
});

/*$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows sleder-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows " src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-map',
    responsive: [{
            breakpoint: 1210,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        },
    ]
});
*/


$(document).ready(function () {
    $('.header-btn').on("click", function () {
        $('.overlay').show();
    });
    $('.popup-close').on("click", function () {
        $('.overlay').hide();
    });
});