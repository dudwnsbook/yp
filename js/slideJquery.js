$(document).ready(function () {
    let newLen = $('.new-slide-box').length;
    let newCnt = 0;
    let reLen = $('.recomend-slide-box').length;
    let reCnt = 0;

    function newNextAni() {
        $('.new-slide-box').removeClass('on')
        newCnt++
        if (newCnt >= newLen) {
            newCnt = 0
        }
        $('.new-slide-box').eq(newCnt).addClass('on')
        $('.new-num-inner').html(newCnt+1);
    }

    function newPrevAni() {
        $('.new-slide-box').removeClass('on')

        newCnt--
        if (newCnt < 0) {
            newCnt = newLen - 1
        }
        $('.new-slide-box').eq(newCnt).addClass('on')
        $('.new-num-inner').html(newCnt+1);

    }
    function reNextAni() {
        $('.recomend-slide-box').removeClass('on')
        newCnt++
        if (newCnt >= newLen) {
            newCnt = 0
        }
        $('.recomend-slide-box').eq(newCnt).addClass('on')
        $('.recomend-num-inner').html(newCnt+1);
    }

    function rePrevAni() {
        $('.recomend-slide-box').removeClass('on')

        newCnt--
        if (newCnt < 0) {
            newCnt = newLen - 1
        }
        $('.recomend-slide-box').eq(newCnt).addClass('on')
        $('.recomend-num-inner').html(newCnt+1);

    }
    $('.new-rightBtn').click(newNextAni)
    $('.new-leftBtn').click(newPrevAni)
    $('.recomend-rightBtn').click(reNextAni)
    $('.recomend-leftBtn').click(rePrevAni)
});