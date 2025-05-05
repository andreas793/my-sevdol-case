$(document).ready(function(){

    let allParametnsBtn = $('.all-parametrs__wrapper input[type="checkbox"]'),
        filtersFormRow = $('.filters__form__content .filters__form__row')[0];

    if(allParametnsBtn) {
        allParametnsBtn.on('change', function () {
            if ( $(this).is(":checked") )
            {
                filtersFormRow.classList.add('filters__form__row-all');
            }
            else
            {
                filtersFormRow.classList.remove('filters__form__row-all');
            }
        })
    }

    let cardsWrapper = $('.cards__wrapper'),
        viewModeValue = $('input[name="view-mode"]'),
        typeGroup = $('#type-group');

        if(cardsWrapper && viewModeValue){
            viewModeValue.on('click', function(e){
                if(!typeGroup.is(":checked")){
                    if(this.value === 'view-mode-tile' && cardsWrapper.hasClass("cards__wrapper-row")){
                        cardsWrapper.removeClass('cards__wrapper-row')}

                    if(this.value === 'view-mode-simple' && !cardsWrapper.hasClass("cards__wrapper-row")){
                        cardsWrapper.addClass('cards__wrapper-row')}
                }
            });
        }

        typeGroup.on('click', function(e){
            if(typeGroup.is(':checked')){
                $('#view-mode-tile').prop("checked", true );
                $('#view-mode-simple').prop("checked", false);
                $('#view-mode-simple').prop('disabled', true);
                $('.cards__wrapper').removeClass('cards__wrapper-row');
            }
            else
                $('#view-mode-simple').prop('disabled', false);

        })

        let closeFilters = $('.close__filters__form'),
            filtersForm = $('.filters__form'),
            showFilter = $('.show-filter');
        if(showFilter){
            showFilter.on('click', function(){
                filtersForm.toggleClass('filters__form-active');
                $('.filters__wrapper .filters__form__row').toggleClass('filters__form__row-all');
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
            });
        }

        closeFilters.on('click', function(){
            filtersForm.toggleClass('filters__form-active');
            $('.filters__wrapper .filters__form__row').toggleClass('filters__form__row-all');
            document.body.style.overflow = '';
            document.body.style.height = ''
        })


});