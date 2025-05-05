$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    lazyLoad: 'ondemand',
    appendArrows: $(".buttons__slider")
})

$('.slick-dots li button').on('click', function(e){
    e.stopPropagation();
});


$('.card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    lazyLoad: 'ondemand',
})
