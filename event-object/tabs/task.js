let tabs = document.getElementsByClassName("tab");
let conts = document.getElementsByClassName("tab__content");
tabs = Array.from(tabs);
conts = Array.from(conts);

for (let index = 0; index < tabs.length; index++) {
    tabs[index].onclick = clickEvent;
}

let tab_active = "tab_active";
let tab_content_active = "tab__content_active";

function clickEvent() {
    if (this.classList.contains(tab_active)) {
        console.log(this);
        this.classList.remove(tab_active);
    } else {
        this.classList.add(tab_active);
    }
    
    let i = tabs.indexOf(this);
    conts.forEach(function (elemet, index) {
        if (index != i) {
            conts[index].classList.remove(tab_content_active);
        }
    })
    conts[i].classList.add(tab_content_active);

}

