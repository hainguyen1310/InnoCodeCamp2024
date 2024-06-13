let text = document.getElementById("slider__text");
let slider__img1 = document.getElementById("slider__img1");
let slider__img3 = document.getElementById("slider__img3");
let slider__img4 = document.getElementById("slider__img4");
let slider__img5 = document.getElementById("slider__img5");
let slider__img6 = document.getElementById("slider__img6");
let slider__img8 = document.getElementById("slider__img8");


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transform = `translateY(${value * 1.5}px)`;
    slider__img8.style.transform = `translateY(${-value}px)`;
    slider__img5.style.transform = `translateY(${0.5*value}px)`;
    slider__img4.style.transform = `translateY(${0.3*value}px)`;
    slider__img3.style.transform = `translateY(${0.2*value}px)`;
    slider__img3.style.transform = `translateY(${0.1*value}px)`;

});

// Using IntersectionObserver to hide images when the content section is reached
let slider = document.querySelector('.slider');
let content = document.getElementById('content');
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

let hideImagesCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.slider img').forEach(img => {
                img.style.opacity = 1;
            });
        } else {
            document.querySelectorAll('.slider img').forEach(img => {
                img.style.opacity = 0;
            });
        }
    });
};

let observer = new IntersectionObserver(hideImagesCallback, options);
observer.observe(slider);

let contentObserver = new IntersectionObserver(hideImagesCallback, options);
contentObserver.observe(content);