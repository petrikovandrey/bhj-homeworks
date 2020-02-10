const dropdown = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const links = document.getElementsByClassName("dropdown__link");
for (let index = 0; index < links.length; index++) {
    links[index].onclick = makeChoise;

}

dropdown.onclick = dropdownEvent;

function makeChoise(e) {  
    e.preventDefault();
    dropdown.textContent = this.textContent;
    dropdownEvent();
}

function dropdownEvent() {
    
    if (list.className.indexOf("dropdown__list_active") > 0) {
        list.className = "dropdown__list";
    } else {
        list.className += " dropdown__list_active";
    }

}