$(document).ready(function(){
    let timerText = $(".timer__wrapper"),
        resendLink = $(".resend-link"),
        timeValue = timerText.data('time-value'),
        startTimer = function (timerCounter = 1, timerCounterSec = 0){

            $('.timer__wrapper .minutes')[0].innerText = timerCounter;
            if(timerCounterSec === 0){
                $('.timer__wrapper .seconds')[0].innerText = '0' + timerCounterSec;
            }
            else
                $('.timer__wrapper .seconds')[0].innerText = timerCounterSec;

            let t = setInterval(function(){
                if(timerCounterSec === 0){
                    timerCounter--;
                    if(timerCounter === -1){
                        $('.timer__section').addClass('not-active');
                        clearInterval(t);
                        return;
                    }
                    $('.timer__wrapper .minutes')[0].innerText = timerCounter;
                    timerCounterSec = 60;
                }

                timerCounterSec--;

                if(timerCounterSec < 10)
                    $('.timer__wrapper .seconds')[0].innerText = "0"+timerCounterSec;
                else
                    $('.timer__wrapper .seconds')[0].innerText = timerCounterSec;

            }, 1000);
        };
    startTimer(timeValue);
    resendLink.on('click',function(){
        $('.timer__section').removeClass('not-active');
        startTimer(timeValue);
    })

})
