const widget = document.querySelector(".chat-widget");
widget.addEventListener("click", function () {
    widget.classList.add("chat-widget_active");
});

let time = "";
let text = [
    "Добрый день",
    "Hello",
    "How are you",
    "WatsApp",
    "WTF?!",
    "Im AFK"
];

let messages = document.querySelector(".chat-widget__messages");

widget.addEventListener("keydown", function (e) {
    let textCont = document.getElementById("chat-widget__input").value;
    console.log(textCont);
    if (e.keyCode === 13 && text.length > 0) {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        time = `${h}:${m}`;
        messages.innerHTML += `
        <div class="message">
            <div class="message__time"> ${time} </div>
            <div class="message__text">
                ${textCont}
            </div>
        </div>
        `;
        answerBot();
        document.getElementById("chat-widget__input").value = "";
    }
});

function answerBot() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    time = `${h}:${m}`;
    let i = Math.floor(Math.random() * 4);
    messages.innerHTML += `
    <div class="message">
            <div class="message__time"> ${time} </div>
            <div class="message__text">
                ${text[i]}
            </div>
        А</div>
     `;
}  
