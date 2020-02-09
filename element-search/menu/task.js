const menu_link = document.getElementsByClassName("menu__link");
for (let i = 0; i < menu_link.length; i++) {
    menu_link[i].onclick = clickMenu;
}

function clickMenu() {
    if (this.nextElementSibling) {
        clearClassActive();
        this.nextElementSibling.className = "menu menu_sub menu_active";      
        return false;
    }
}

function clearClassActive() {
     let activeMenus = document.getElementsByClassName("menu_active");
     for (let index = 0; index < activeMenus.length; index++) {
        activeMenus[index].className = "menu menu_sub";
     }
}