const menu_link = document.getElementsByClassName("menu__link");
for (let i = 0; i < menu_link.length; i++) {
    menu_link[i].onclick = clickMenu;
}

function clickMenu() {
    if(this.nextElementSibling) {
        this.className = "menu menu_sub menu_active";
        this.onclick.preventDefault();
    }
}
