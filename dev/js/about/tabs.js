$(document).ready(function(){
    //map-tabs
    $(".tabs__map__ul .tab__li").on('click', function(){
        $('.tabs__map__ul .tab__li-active').removeClass('tab__li-active');
        $(this).addClass('tab__li-active');
    })

    //apartment-tabs
    $('.apartment__layout__tab').on("click", function(){
        $('.apartment__layout__tab-active').removeClass('apartment__layout__tab-active');
        $(this).addClass("apartment__layout__tab-active")
        $(".apartment__layout__content-active").removeClass("apartment__layout__content-active")
        $(".apartment__layout__content[data-anchor='" + $(this).attr('data-key')+ "']").addClass("apartment__layout__content-active")
        $('.slider-2').slick('setPosition');
    })
    //finishing-tabs 
    $('.finishing__tab').on('click', function(){
        $('.finishing__tab-active').removeClass('finishing__tab-active');
        $(this).addClass('finishing__tab-active');
        $('.finishing__content-active').removeClass('finishing__content-active');
        $('.finishing__content[data-anchor="'+ $(this).attr('data-key') +'"]').addClass('finishing__content-active');
        $('.finishing__type__tab-active').removeClass('finishing__type__tab-active');
        $('.finishing__type__content-active').removeClass('finishing__type__content-active');
        $('.finishing__content-active .finishing__type__tab:first-child').addClass("finishing__type__tab-active");
        $('.finishing__content-active .finishing__type__tabs+.finishing__type__content').addClass("finishing__type__content-active");
        $('.slider-finishing').slick('setPosition');
    })
    $('.finishing__type__tab').on('click', function(){
        $('.finishing__type__tab-active').removeClass('finishing__type__tab-active');
        $(this).addClass('finishing__type__tab-active');
        $('.finishing__type__content-active').removeClass('finishing__type__content-active');
        $('.finishing__type__content[data-anchor="'+ $(this).attr('data-key') +'"]').addClass('finishing__type__content-active')
        $('.slider-finishing').slick('setPosition');
    })

    //table-apartnemt
    $('.apartment__table__cell').on('click', function(){
        $('.apartment__table__row').removeClass('apartment__table__row-active');
        $('.apartment__table__row').addClass('apartment__table__row-no-active');
        $(this).parent().removeClass('apartment__table__row-no-active');
        $(this).parent().addClass('apartment__table__row-active');

        $('.apartment__table__row-no-active .apartment__table__cell-active').removeClass('apartment__table__cell-active')
        $('.apartment__table__cell').addClass('apartment__table__cell-no-active');
        $('.apartment__table__row-no-active .apartment__table__cell[data-numb="'+ $(this).attr('data-numb') +'"]').removeClass("apartment__table__cell-no-active")
        $('.apartment__table__row-no-active .apartment__table__cell[data-numb="'+ $(this).attr('data-numb') +'"]').addClass("apartment__table__cell-active")

        $('.apartment__table__row-active .apartment__table__cell').removeClass('apartment__table__cell-active');

        $(this).addClass('apartment__table__cell-active');
        $(".apartment__table__row-active .apartment__table__cell-active").removeClass('apartment__table__cell-no-active');

    })

})