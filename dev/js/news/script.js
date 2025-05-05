$(document).ready(function(){
    $('.sort__year .sort__item').on('click', function(){
        $('.sort__year .sort__item-active').removeClass('sort__item-active');
        $(this).addClass("sort__item-active");
    })

    $('.sort__topic .sort__item').on('click', function(){
        $('.sort__topic .sort__item-active').removeClass('sort__item-active');
        $(this).addClass("sort__item-active");
    })

    $(".sort__wrapper .sort__btn").on('click', function(){
        $('.sort__topic').addClass("sort__topic-active");
        $("body").css({"overflow":"hidden"})
    })
    $('.sort__wrapper .sort__topic .close__wrapper').on('click', function(){
        $('.sort__topic').removeClass("sort__topic-active");
        $('body').css({"overflow":""})
    })

})