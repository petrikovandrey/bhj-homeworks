let tooltips = document.getElementsByClassName("has-tooltip");
for (let index = 0; index < tooltips.length; index++) {
    tooltips[index].onclick = click;
}

let div = document.createElement("div");
div.className = "tooltip";
div.innerText = "";

function click(e) {
    
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;

    div.innerText = this.title;
    div.style.cssText = `display: inline; left: ${x}px; top: ${y}px;`;

    this.appendChild(div);
  
}
