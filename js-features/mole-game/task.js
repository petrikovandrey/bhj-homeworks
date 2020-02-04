const array = ["hole1", "hole2", "hole3", "hole4", "hole5", "hole6", "hole7", "hole8", "hole9"];
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.getElementById("element").onclick = function () {
        holehasMole = getHoleId();
        if (holehasMole === click1) {
            dead.textContent++;
            if (dead.textContent === 10) {
                alert("You are the winner!");
            }
        } else {
            lost.textContent++;
            if (lost.textContent === 5) {
                alert("You are the loser!");
            }
        }

    }
}


function getHoleId() {
    // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const hole = document.getElementById(element);

        if (hole.className.includes('hole_has-mole')) {
            return hole;
        }

    }
    return undefined;
}

// если ячейка содержит класс тогда +1 иначе +1 к ошибке
// если ошибок 5 тогда конец игры
// если 10 побед тогда конец игры