const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
const clicker__speed = document.getElementById("clicker__speed");
let lastClick = 0;

cookie.onclick = function () {

    time = (new Date().getTime() - lastClick) / 1000;

    if (lastClick === 0) {
        clicker__speed.textContent = 0
    } else {
        clicker__speed.textContent = 1 / time;
    }

    clicker__counter.textContent++;

    if (cookie.width > 200) {
        cookie.width = cookie.width - 25;
        cookie.height = cookie.height - 25;
    } else {
        cookie.width = cookie.width + 25;
        cookie.height = cookie.height + 25;
    }
    lastClick = new Date().getTime();
}
