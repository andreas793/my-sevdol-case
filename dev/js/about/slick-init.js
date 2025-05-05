$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    lazyLoad: 'ondemand',
    appendArrows: $(".buttons__slider")
})

$('.slick-dots li button').on('click', function(e){
    e.stopPropagation();
});

$('.slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    lazyLoad: 'ondemand',
})

$('.slider-finishing').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    lazyLoad: 'ondemand',
})