const rotatorCase = document.getElementsByClassName("rotator__case");

const id = setInterval(() => {
    let activeEl = document.querySelector(".rotator__case_active");
    setTimeout(() => {
        activeEl.classList.remove("rotator__case_active");
        if (activeEl.nextElementSibling) {
            activeEl.nextElementSibling.classList.add("rotator__case_active");
        } else {
            activeEl.parentElement.firstElementChild.classList.add("rotator__case_active");
        }
        let nextActiveEl = document.querySelector(".rotator__case_active");
        nextActiveEl.style.color = nextActiveEl.dataset.color;
      
    }, activeEl.dataset.speed);
    
}, 999);