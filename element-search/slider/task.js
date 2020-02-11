const nexts = document.getElementsByClassName("slider__arrow_next");
const prevs = document.getElementsByClassName("slider__arrow_prev");
let dots = document.getElementsByClassName("slider__dot");
let images = document.getElementsByClassName("slider__item");

const classActive = "slider__item slider__item_active";
const classDef = "slider__item";
const classDotActive = "slider__dot slider__dot_active";
const classDotDef = "slider__dot";

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

function getCurrentDots() {
    let slider__dot_active = document.getElementsByClassName("slider__dot_active");
    return slider__dot_active[0];
}

function dotNext() {
    let currentDot = getCurrentDots();
    if (currentDot.nextElementSibling) {
        currentDot.nextElementSibling.className = classDotActive;
    } else {
        currentDot.parentElement.firstElementChild.className = classDotActive;
    }
    currentDot.className = classDotDef;
}

function dotPrev() {
    let currentDot = getCurrentDots();
    if (currentDot.previousElementSibling) {
        currentDot.previousElementSibling.className = classDotActive;
    } else {
        currentDot.parentElement.lastElementChild.className = classDotActive;
    }
    currentDot.className = classDotDef;
}

function slideNext() {
    currentSlide = getCurrentSlide();
    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.className = classActive;
    } else {
        currentSlide.parentElement.firstElementChild.className = classActive;
    }
    currentSlide.className = classDef;
    dotNext();
}

function slidePrev() {
    let currentSlide = getCurrentSlide();
    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.className = classActive;
    } else {
        currentSlide.parentElement.lastElementChild.className = classActive;
    }
    currentSlide.className = classDef;
    dotPrev();
}

function clickDots() {
    currentSlide = getCurrentSlide();
    currentSlide.className = classDef;
    dots = Array.from(dots);
    images = Array.from(images);
    let d = dots.indexOf(this);
    images[d].className = classActive;
    this.className = "slider__dot slider__dot_active";
    dots.forEach(element => {
        if (element != this) {
            element.className = "slider__dot";
        }
    });
}