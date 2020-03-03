let button = document.getElementById("tasks__add");
let taskList = document.getElementById("tasks__list");
let input = document.getElementById("task__input");


button.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value.length === 0) {
        alert("You haven't typed text to do");
        return;
    }
    let task = document.createElement("div");
    let taskTitle = document.createElement("div");

    taskTitle.className = "task__title";
    task.className = "task";

    task.appendChild(taskTitle);
    task.insertAdjacentHTML("beforeEnd", '<a href="#" class="task__remove">&times;</a>');

    taskTitle.innerText = input.value;
    input.value = "";
    taskList.appendChild(task);

    let remove = task.querySelector(".task__remove");
    remove.addEventListener("click", function () {
        task.remove();
    });
});

