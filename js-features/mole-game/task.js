const array = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9"];
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let click = document.getElementById(element);
    click.onclick = checkClick;
    console.log(click);
}

function clearStat() {
    lost.textContent = 0;
    dead.textContent = 0;
}

function getHoleId(element) {
    return element.className.includes('hole_has-mole');
}

function checkClick() {

    holehasMole = getHoleId(this);
    if (holehasMole) {
        dead.textContent++;
        if (dead.textContent === "10") {
            alert("You are the winner!");
            clearStat();
        }
    } else {
        lost.textContent++;
        if (lost.textContent === "5") {
            alert("You are the loser!");
            clearStat();
        }
    }
}