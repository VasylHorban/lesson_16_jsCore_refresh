$(document).ready(function () {
    let oldLeft;
    $('.bg-elem').on('click', function () {
        if ($(this).attr('data-on') === 'true') {
            console.log(((parseInt(oldLeft)/parseInt($('.bg-container').css('width')))*100))
            let left = (parseInt(oldLeft)/parseInt($('.bg-container').css('width'))*100).toFixed(3)
            console.log(left)
            $(this).animate({
                left: left + '%',
                width: '17.6%',
                height: '150px'

            }, 1000, function () {
                $(this).css({
                    zIndex: '1'
                })
                $('.bg-dark').css({
                    zIndex: '0',
                    backgroundColor: '#fff'
                })
            })
            $(this).attr('data-on', false)
        } else {
            let left = 50 - 17.6;
            oldLeft = $(this).css('left')
            $(this).css({
                zIndex: '99'
            })
            $(this).attr('data-on', true)
            $('.bg-dark').css({
                zIndex: '5',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            })
            $(this).animate({
                left: left + '%',
                width: '40%',
                height: '400px',

            }, 1000, 'easeInOutSine')
        }
    })
})
