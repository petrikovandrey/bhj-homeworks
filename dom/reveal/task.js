let reveal = document.querySelector(".reveal");
document.addEventListener("scroll", function () {
   
    let topElement = reveal.getBoundingClientRect().top;
    if (topElement > 0 && topElement < window.innerHeight) {
        reveal.classList.add("reveal_active");
    } else {
        reveal.classList.remove("reveal_active");
    }
})