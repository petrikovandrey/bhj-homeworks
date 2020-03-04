let minus = document.getElementsByClassName("product__quantity-control_dec");
let plus = document.getElementsByClassName("product__quantity-control_inc");
let add = document.getElementsByClassName("product__add");
let cart = document.querySelector(".cart__products");

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
    let c = this.closest(".product__quantity-controls");
    let v = c.querySelector(".product__quantity-value");
    let n = Number(v.textContent);

    if (n === 1) {
        return;
    }
    v.textContent = n - 1;
}

function clickPlus() {
    let c = this.closest(".product__quantity-controls");
    let v = c.querySelector(".product__quantity-value");
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
    let src = p.querySelector(".product__image").src;
    
    cart.append(createCart(id,src,qty));
    // добавить проверку на наличие элемента
    // менять его кол-вл
    // добавить анимацию
}

function createCart(id,src,qty) {
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