let progress = document.getElementById("progress");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
   
    let fd = new FormData(form);
  
    let xhr = new XMLHttpRequest;
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function () { 
         progress.value = 0.5 };
    xhr.upload.onload = function () {  
        progress.value = 1 };
    xhr.upload.onerror = function () {  
        progress.value = 0};

    xhr.send(fd);
})

