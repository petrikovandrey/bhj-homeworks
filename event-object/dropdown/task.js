const dropdown = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const links = document.getElementsByClassName("dropdown__link");
for (let index = 0; index < links.length; index++) {
    links[index].onclick = makeChoise;
}

dropdown.onclick = dropdownEvent;
const listActive = "dropdown__list_active";

function makeChoise(e) {  
    e.preventDefault();
    dropdown.textContent = this.textContent;
    dropdownEvent();
}

function dropdownEvent() {
    if(list.classList.contains(listActive)) {
       list.classList.remove(listActive) 
    } else {
        list.classList.add(listActive)   
    }
}