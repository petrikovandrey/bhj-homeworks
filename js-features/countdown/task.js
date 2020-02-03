const timer = document.getElementById("timer");
const t = [4, 25, 19];
const id = setInterval(() => {

    t[2] = t[2] - 1;
    if (t[2] === 0) {
        t[2] = 59;
        t[1] = t[1] - 1;
    } else {
        t[2] = t[2] - 1;
    }
    if (t[1] === 0 && t[0] > 0) {
        t[1] = 59;
        t[0] = t[0] - 1;
    }
    if (t[0] === 0 && t[1] === 0 && t[2] === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(id);
    }
    timer.textContent = `${t[0]}:${t[1]}:${t[2]}`;

}, 1000);
