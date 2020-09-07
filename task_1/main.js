$(document).ready(function () {
    let r;
    let b;
    let g;
    let top;
    let width;
    let height;
    let left;
    let easing;
    let easingList = ['easeInSine', 'easeOutCubic', 'easeInOutCubic', 'easeInOutQuart', 'easeOutBounce', 'easeInOutBounce', 'easeInElastic', 'easeInCirc', 'easeInOutElastic', 'easeInBack']
    $('#ball').click(function () {
        easing = easingList[Math.round(Math.random() * (easingList.length - 1))]
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        width = Math.round(Math.random() * 150)
        height = Math.round(Math.random() * 150)
        top = Math.floor(Math.random() * (window.innerHeight - $(this).height())/1.2)
        left = Math.floor(Math.random() * (window.innerWidth - $(this).width())/1.2)
        console.log(r, b, g, width, height, top, left)
        $(this).animate({
            top: top + 'px',
            left: left + 'px',
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: width + 'px',
            height: height + 'px'
        }, 3000, easing)


        console.log(easing)
    })
})
