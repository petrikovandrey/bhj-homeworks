let tooltips = document.getElementsByClassName("has-tooltip");
for (let index = 0; index < tooltips.length; index++) {
    tooltips[index].onclick = click;
}

let div = document.createElement("div");
div.className = "tooltip";
div.innerText = "";

function click(e) {
    e.preventDefault();
    let child = this.querySelector(".tooltip");
    console.log(child);
    if(child != null) {
        this.removeChild(child);
        return;
    }
   
    div.innerText = this.title;
    let c = this.getBoundingClientRect();
    div.style.cssText = `display: inline; left: ${c.x}px; top: ${c.y}px;`;

    this.appendChild(div);
  
}
