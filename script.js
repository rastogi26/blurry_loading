const loadtext =document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load =0

let int =setInterval(blurring,30)

function blurring() {
    load++
 
    if (load>99) {
        clearInterval(int)
        
    }

    loadtext.innerText=  `${load}%`
    //min to max ie 0 to 100 and opacity of % faded from solid to transparent ie 1 to 0
    loadtext.style.opacity = scale(load,0,100,1,0)

    bg.style.filter =`blur(${scale(load,0,100,30,0)}px)`
 
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}