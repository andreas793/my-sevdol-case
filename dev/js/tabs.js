$(document).ready(function(){
    let tabItems = $('.tabs__wrapper .tabs__item');

    tabItems.on('click', function(e){
        $('.tabs__item-active').removeClass('tabs__item-active');
        $(this).addClass('tabs__item-active');
        $('.plane__wrapper').removeClass("plane__wrapper-active");
        $('[data-tabs-value=' + $(this).attr('data-tabs-value') + ']').addClass('plane__wrapper-active');
    })

})