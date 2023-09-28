autoSlider()
let offset = 0


const sliderLine = document.querySelector('.slider-container')

function slider() {

    offset = offset + 50
    if (offset > 150) { offset = 0 }
    sliderLine.style.bottom = offset + 'px'
    autoSlider()
}
function autoSlider() {
    let timer;
    timer = setTimeout(slider, 2000)
}

//slider wonders
