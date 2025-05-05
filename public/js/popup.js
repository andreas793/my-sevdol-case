$(document).ready(function() {
    $(".popup__show").on("click", function(e) {
        $($(this).data('anchor')).addClass('active');

    });

    $(".popup__close").on("click", function(e) {
        $($(this).data('anchor')).removeClass('active');
    });

    $('#select').multiselect({
        header: false,
        selectedList: 1,
        noneSelectedText: "Все",
        buttonWidth: 384
    });

    let radioDisplayOption = $('input[name="show-type"]');
    console.log(radioDisplayOption);

    radioDisplayOption.change( function(){
        if($(this).val() === 'scheme'){
            $('.table__wrapper-parking').removeClass('active')
            $('.plane__wrapper').removeClass('plane__wrapper-small')
        }
        if($(this).val() === 'list'){
            $('.table__wrapper-parking').addClass('active')
            $('.plane__wrapper').addClass('plane__wrapper-small')
        }
    })

    let timTool = 0;

    $('.tooltip__wrapper').on('click', function(){
        $('.tooltip__wrapper-active').removeClass("tooltip__wrapper-active");
        $(this).addClass("tooltip__wrapper-active")
        if(timTool>0){
            clearTimeout(timTool)
        }
        timTool = setTimeout(function(){
            $('.tooltip__wrapper-active').removeClass("tooltip__wrapper-active");
            clearTimeout(timTool)
        }, 3000)
    })

});

