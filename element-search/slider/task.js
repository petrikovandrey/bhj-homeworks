const nexts = document.getElementsByClassName("slider__arrow_next");
const prevs = document.getElementsByClassName("slider__arrow_prev");
let dots = document.getElementsByClassName("slider__dot");
let images = document.getElementsByClassName("slider__item");

const classActive = "slider__item slider__item_active";
const classDef = "slider__item";

for (let index = 0; index < dots.length; index++) {
    dots[index].onclick = clickDots;
}

next = nexts[0];
next.onclick = slideNext;
prev = prevs[0];
prev.onclick = slidePrev;

let currentSlide = getCurrentSlide();

function getCurrentSlide() {
    let slider__item_active = document.getElementsByClassName("slider__item_active");
    return slider__item_active[0];
}

function slideNext() {
    currentSlide = getCurrentSlide();
    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.className = classActive;
    } else {
        currentSlide.parentElement.firstElementChild.className = classActive;
    }
    currentSlide.className = classDef
}

function slidePrev() {
    let currentSlide = getCurrentSlide();
    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.className = classActive;
    } else {
        currentSlide.parentElement.lastElementChild.className = classActive;
    }
    currentSlide.className = classDef;
}

function clickDots() {
    currentSlide = getCurrentSlide();
    currentSlide.className = classDef;
    dots = Array.from(dots);
    images = Array.from(images);
    let d = dots.indexOf(this);
    images[d].className = classActive;
}