let checkBoxes = document.getElementsByClassName("interest__check");
let interests = document.getElementsByClassName("interests");
interests = Array.from(interests);
console.log(checkBoxes);
for (let index = 0; index < checkBoxes.length; index++) {
    checkBoxes[index].onclick = click;
}

function click() {
    let interest = this.closest(".interests");
    let id = interests.find(ithem => ithem === interest);
    console.log(interest);
    root = interest.parentElement;
    console.log(root);
    root.firstElementChild.checked = !interest.firstElementChild.checked;
}