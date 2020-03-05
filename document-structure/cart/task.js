let minus = document.getElementsByClassName("product__quantity-control_dec");
let plus = document.getElementsByClassName("product__quantity-control_inc");
let add = document.getElementsByClassName("product__add");
let cart = document.querySelector(".cart__products");

let pqc = "product__quantity-controls";
let pqv = "product__quantity-value";

for (let index = 0; index < minus.length; index++) {
    minus[index].onclick = clickMinus;
}

for (let index = 0; index < plus.length; index++) {
    plus[index].onclick = clickPlus;
}

for (let index = 0; index < add.length; index++) {
    add[index].onclick = clickAdd;
}

function clickMinus() {
    let c = this.closest("." + pqc);
    let v = c.querySelector("." + pqv);
    let n = Number(v.textContent);
    if (n === 1) {
        return;
    }
    v.textContent = n - 1;
}

function clickPlus() {
    let c = this.closest("." + pqc);
    let v = c.querySelector("." + pqv);
    let n = Number(v.textContent);
    v.textContent = n + 1;
}

function clickAdd(e) {
    e.preventDefault();
    let c = this.closest(".product__quantity");
    let v = c.querySelector(".product__quantity-value");
    let qty = Number(v.textContent);
    let p = this.closest(".product");
    let id = p.dataset.id;
    let img = p.querySelector(".product__image");
    let src = img.src;

    let x = e.pageX;
    let y = e.pageY;
    let clone = img.cloneNode(false);
    clone.setAttribute("style", `border-radius: 49%; position: absolute; left: ${x}px; top: ${y}px;`);
    p.appendChild(clone);

    let setI = setInterval(() => {
        x += 1;
        y -= 10;
        if (y < 0) {
            clone.remove();
            clearInterval(setI);
        }
        clone.setAttribute("style", `border-radius: 49%; position: absolute; left: ${x}px; top: ${y}px;`);
    }, 10, x, y, clone);

    let carts = document.getElementsByClassName("cart__product");
    carts = Array.from(carts);
    let itsNew = carts.find(element => element.dataset.id === id);
    if (itsNew != undefined) {
        let v = itsNew.querySelector(".cart__product-count");
        let n = Number(v.textContent);
        v.textContent = n + qty;
    } else {
        cart.append(createCart(id, src, qty));
    }
}


function createCart(id, src, qty) {
    let product = document.createElement("div");
    let image = document.createElement("img");
    let count = document.createElement("div");
    product.className = "cart__product";
    image.className = "cart__product-image";
    count.className = "cart__product-count";
    product.appendChild(image);
    product.appendChild(count);
    product.dataset.id = id;
    image.src = src;
    count.textContent = qty;
    return product;
}