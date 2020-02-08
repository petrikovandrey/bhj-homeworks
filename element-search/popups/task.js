const modal_main = document.getElementById("modal_main");
const modal_success = document.getElementById("modal_success");
const modal_close = document.getElementsByClassName("modal__close_times");
for (let index = 0; index < modal_close.length; index++) {
    modal_close[index].onclick = closeWindow;
}

modal_main.className = "modal modal_active";

const elements = document.getElementsByClassName("btn_danger");
const closeBtn = elements.item(0);

closeBtn.onclick = function () {
    modal_main.className = "modal";
    modal_success.className = "modal modal_active"
}


function closeWindow() {
    modal_main.className = "modal";
    modal_success.className = "modal";

}