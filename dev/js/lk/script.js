$(document).ready(function(){
    //табы карточки
    let tabItems = $('.tabs__wrapper .tab__item'),
        cardSmall = $('.tabs__wrapper .card__wrapper-small'),
        tabItemsMob = $('.tabs__wrapper .tab__item__mob');

    tabItems.on('click', function(e){
        $('.tab__item.active').removeClass('active');
        $(this).addClass('active');
    })
    cardSmall.on('click', function(e){
        $('.tabs__wrapper .card__wrapper-small.active').removeClass('active');
        $(this).addClass('active');
    })
    tabItemsMob.on('click', function(){
        $('.tab__item__mob.active').removeClass('active');
        $(this).addClass('active');
        $(".tabs__wrapper .tab__item.active").removeClass('active');
        $('.tab__item[data-anchor="'+ $(this).data('key') +'"]').addClass('active');
    })

    //мобильные табы "анкета/цифровая ипотека/этапы сделки"

        let itemsBottom = $(".tab__items-bottom .tab__item-bottom");

        itemsBottom.on("click", function(){
            $(".tab__items-bottom .tab__item-bottom.active").removeClass('active')
            $(this).addClass('active')
            $(".item-bottom-anchor.active").removeClass('active')
            $('.item-bottom-anchor[data-anchor="'+ $(this).data('key') +'"]').addClass('active');

            let scrollTabs = 0;
            for(let i=0; i < $(".tab__items-bottom .tab__item-bottom").length; i++){
                if($(this).attr("data-key") === $('.tab__items-bottom .tab__item-bottom:nth-child('+ (i + 1) +')').attr("data-key")){
                    scrollTabs -= ($(window).width() - $('.tab__items-bottom .tab__item-bottom:nth-child('+ (i + 1) +')').outerWidth(true))/2;
                    break;
                }
                scrollTabs += $('.tab__items-bottom .tab__item-bottom:nth-child('+ (i + 1) +')').outerWidth(true);
            }

            if(scrollTabs>0)
                $(".tab__items-bottom").animate({scrollLeft: scrollTabs + "px"}, "slow")
            else
                $(".tab__items-bottom").animate({scrollLeft: 0}, "slow")

        })


    // анкета
    let questionnaireItem = $('.questionnaire__item');
    for(let i = 0; i < questionnaireItem.length; i++){
        if(questionnaireItem[i].hasAttribute('data-progress-value')){
            let progressValue = $(questionnaireItem[i]).attr('data-progress-value') + "%";
            questionnaireItem[i].querySelector('.questionnaire__text').innerText = "Анкета заполнена на " + progressValue;
            questionnaireItem[i].querySelector('.questionnaire__progress__value').style.width = progressValue;
        }
    }

    let editQuestBtn = $(".edit__questionnaire"),
        editClose = $(".edit__close");

    editQuestBtn.on('click', function(){
        $(this).closest('.questionnaire__item').addClass("questionnaire__item-edit");
    })
    editClose.on('click', function(e){
        $(this).closest('.questionnaire__item.questionnaire__item-edit').removeClass('questionnaire__item-edit')
    })


    //попап
    $(".popup__show").on("click", function(e) {
            $($(this).data('anchor')).addClass('active');
            $('body').css('overflow', 'hidden');
    });

    $(".popup__close").on("click", function(e) {
        $($(this).data('anchor')).removeClass('active');
        $('body').css('overflow', '');
    });

    //steps
    $(".steps__wrapper .step__wrapper").on("click", function(){
        $(".steps__wrapper .step__wrapper.active").removeClass('active');
        $(this).addClass('active');
    })

    //тултип
    let tooltipElem;

    function tooltipShow(event){
        let target = event.target;

        //если есть подсказка
        let tooltipHtml = target.dataset.tooltip
        if(!tooltipHtml) return;

        //создание элемента подсказки
        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip-custom';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        //позиционирование сверху
        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if(left < 0) left = 0; //не заезжать за левый край окна


        let top = coords.top - tooltipElem.offsetHeight - 5;
        if(top < 0) top = coords.top + target.offsetHeight + 5; //если подсказка не помещается сверху, то отображать ее снизу

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

    }

    function tooltipHide(event){
        if(tooltipElem){
            tooltipElem.remove();
            tooltipElem = null;
        }
    }

    $( ".tooltip__icon" ).mouseover(() => tooltipShow(event));
    $( ".tooltip__icon" ).mouseout(() => tooltipHide(event));
    $(".tooltip__icon").on('touchstart', function(event){
        tooltipShow(event);
        let timTooltip = setTimeout(() => {
            if($('.tooltip-custom')){
                $('.tooltip-custom').remove();
            }
        }, 2000);
    })

    $( ".tooltiped" ).mouseover(() => tooltipShow(event));
    $( ".tooltiped" ).mouseout(() => tooltipHide(event));
    $(".tooltiped").on('touchstart', function(event){
        tooltipShow(event);
        let timTooltip = setTimeout(() => {
            if($('.tooltip-custom')){
                $('.tooltip-custom').remove();
            }
        }, 2000);
    })

})