let range = function (){

    const ownersRange = document.querySelectorAll('.range__panel.owners_range'),
          ownersRangeValue = document.querySelectorAll('.range__value.owners_range');
    if(ownersRange){
        ownersRange.forEach((item, i) => {
            noUiSlider.create(item,{
                connect: [true, false],
                range: {
                    'min': 1,
                    'max': 100
                },
                padding: 0,
                start: 1,
                margin: 0,
                step: 1,
            });

            let current_value = parseInt(item.getAttribute('data-range-value'));
            item.noUiSlider.set(current_value);

            item.noUiSlider.on('update', function(values, handle){
                ownersRangeValue[i].innerHTML = Math.round(values[handle]);
                ownersRange[i].setAttribute('data-range-value', ownersRange[i].noUiSlider.get())
            });

        });
    }

}

document.addEventListener('load',range());