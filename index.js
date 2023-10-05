// nav

const navItem = document.querySelector('.nav-list__item')
navItem.addEventListener('click', (e) => {
    navItem.classList.toggle('active')
})
window.addEventListener('click', (e) => {
    if (e.target.tagName != 'SPAN') navItem.classList.remove('active')
})

//slider

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

//wonders click
const modal = document.querySelector('.block-3-modal')
const modalImg = document.querySelector('.modal-image')
const images = document.querySelectorAll('.block-3-galery__item')
const modalClose = document.querySelector('.modal-cross')
images.forEach(elem => {
    elem.addEventListener('click', openModal);
})
modalClose.addEventListener('click', () => { modal.classList.remove('active') })
function openModal(e) {
    if (!modal.classList.contains('active')) {
        if (e.target.tagName == "IMG") {
            modal.classList.add('active')
            modalImg.src = e.target.src
            console.log(123);


        }
    } else {
        modal.classList.remove('active')
    }

}
