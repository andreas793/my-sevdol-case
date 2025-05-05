$(document).ready(function(){
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,
    });
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

});