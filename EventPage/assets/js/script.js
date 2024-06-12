let text = document.getElementById("slider__text");
let slider__img1 = document.getElementById("slider__img1");
let slider__img2 = document.getElementById("slider__img2");
let slider__img3 = document.getElementById("slider__img3");
let slider__img4 = document.getElementById("slider__img4");
let slider__img5 = document.getElementById("slider__img5");
let slider__img6 = document.getElementById("slider__img6");

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    text.marginTop= value* 2.5 +'px';
    slider__img2.marginTop=value*-1.5+'px';
})