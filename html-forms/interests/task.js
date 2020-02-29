let checkBoxes = document.getElementsByClassName("interest__check");
let interests = document.getElementsByClassName("interests");
interests = Array.from(interests);
// console.log(checkBoxes);
for (let index = 0; index < checkBoxes.length; index++) {
    checkBoxes[index].onclick = click;
}

function click() {
    let interest = this.closest(".interests_active");
 
    let list;
    if (interest === null) {
        interest = this.closest("li");
        list = interest.querySelectorAll(".interest__check");
    } else {
        list = interest.parentElement.querySelectorAll(".interest__check");
    }
  
    list.forEach(element => {
        if (this != element) {
            element.checked = !element.checked;
        }
    });
}
