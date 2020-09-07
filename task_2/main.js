$(function(){
    console.log('yov')
    setInterval(()=>{
        let top = Math.floor(Math.random() * (window.innerHeight - $('#disco').height()))
        let left = Math.floor(Math.random() * (window.innerWidth - $('#disco').width()))
        console.log(left, top)
        $('#disco').animate({
//            backgroundColor: 'red',
            top: top + 'px',
            left: left + 'px'
        }, 1000, 'easeInOutCubic')
    }, 1000)
    
    setInterval(()=>{
        let borderColor = getColor();
        let bgColor = getColor()
        console.log(borderColor)
       $('#disco').css({
            border : `3px solid rgb(${borderColor})`,
            boxShadow : `1px 1px 10px 3px rgba(${bgColor},0.7)`,
            backgroundColor : `rgb(${bgColor})`
           
       }) 
    },500)
    function getColor() {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        return `${r}, ${g}, ${b}`
    }
})


