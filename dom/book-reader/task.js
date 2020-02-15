const book = document.getElementById("book");
let c = document.getElementsByClassName("font-size");
for (let index = 0; index < c.length; index++) {
    console.log(c[index]);
    c[index].onclick = click;
}

function click(e) {
    e.preventDefault();
    cleanActive();
    this.classList.add("font-size_active");

    let size = this.dataset.size;

    book.classList.remove("book_fs-big");
    book.classList.remove("book_fs-small");

    if (size != "") {
        book.classList.add(`book_fs-${size}`);
    }
}

function cleanActive() {
    for (let index = 0; index < c.length; index++) {
        if (c[index].matches(".font-size_active")) {
            c[index].classList.remove("font-size_active");
            return;
        }
    }
}