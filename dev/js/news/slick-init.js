$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    lazyLoad: 'ondemand',
    appendArrows: $(".buttons__slider")
})
