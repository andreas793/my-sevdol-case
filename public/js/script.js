$(document).ready(function(){
    // let menuItem = $('.sub-menu__items').parent();
    // let tim = 0;
    // function timeoutSubmenu(){
    //     if(tim>0){
    //         clearTimeout(tim);}
    //     tim = setTimeout(function(){$('.menu__item').removeClass('active');}, 1000)}
    //
    // function showSubMenu(e){
    //     $('.menu__item').removeClass('active');
    //     $(e.currentTarget).addClass('active');
    //     timeoutSubmenu(e.currentTarget);
    // }
    // menuItem.click(showSubMenu);
    // window.addEventListener('scroll', function(e){
    //     if(window.pageYOffset > 100){
    //         $('.menu__wrapper').addClass('hide');
    //     }
    //     if(window.pageYOffset < 100)
    //         $('.menu__wrapper').removeClass('hide');
    // })
    // const element = document.querySelector('.js-choice');
    // const choices = new Choices(element, {
    //     searchEnabled: false,
    // });

    // var smartFilter = new JCSmartFilter('/planirovki-i-ceny/', 'HORIZONTAL', {'SEF_SET_FILTER_URL':'/planirovki-i-ceny/filter/clear/apply/','SEF_DEL_FILTER_URL':'/planirovki-i-ceny/filter/clear/apply/'});
    $('.button-show-info').on('click', function(e){
        $(this).closest('.card__wrapper-new').addClass('is-show-info');
    })
    $('.card__info-section .close__wrapper').on('click', function(){
        $(this).closest('.card__wrapper-new').removeClass('is-show-info');
    })
});


    //меню второго уровня
    let openedMenu = document.querySelector('.opened-menu__wrapper'),
        btnMenu = document.querySelector('.menu__item.btn-menu')
    btnMenu.addEventListener('click', function(){
        openedMenu.classList.toggle('opened-menu-active')
    })

