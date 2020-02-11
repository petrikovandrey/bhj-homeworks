let tabs = document.getElementsByClassName("tab");
let conts = document.getElementsByClassName("tab__content");
tabs = Array.from(tabs);
for (let index = 0; index < tabs.length; index++) {
    tabs[index].onclick = clickEvent;
}

function clickEvent() {
    if (this.className.indexOf("tab_active") < 0) {
        this.className += " tab_active";     
        changeContent();
    } else {
        this.className = "tab";
        changeContent();
    }

}

function changeContent() {
    for (let index = 0; index < conts.length; index++) {
        console.log(tabs.indexOf(this));
        let i = tabs.indexOf(this);
        if (index === i) {
            conts[index].className = "tab__content_active";
        } else {
            conts[index].className = "tab__content";
        }
    }
}