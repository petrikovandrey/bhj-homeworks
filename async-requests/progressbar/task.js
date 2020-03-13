let progress = document.getElementById("progress");
let form = document.getElementById("form");
let send = document.getElementById("send");
send.addEventListener("submit", (e) => {
    console.log('2');
    e.preventDefault();
    let FormDate = new FormData(form);
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(FormDate);
    xhr.addEventListener("readystatechange", () => {
        progress.value = xhr.readyState * 0.25;
        if (xhr.readyState === 4) {
            return;
        }
    });
})

