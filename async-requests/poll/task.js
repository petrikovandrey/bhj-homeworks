const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send();
xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.responseText);
        let output = "";
        let title = document.getElementById('poll__title');
        title.textContent = data.data.title

        for (var key in data.data.answers) {
            output += '<button class="poll__answer">' + data.data.answers[key] + '</button>';
        }
        document.getElementById('poll__answers').innerHTML = output;
        let buttons = document.getElementsByClassName("poll__answer");
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].onclick = click;
        }
    }
});

function click() {
    alert("Спасибо, ваш голос засчитан!»");
}