
const xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send();
xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let itemsEl = document.getElementById("items");
        let data = JSON.parse(xhr.responseText);
        console.log(data);        
        let output = "";
        let v = data.response.Valute;
        console.log(v);
        for (var key in v) {
            let item = document.createElement("div");
            item.className="item";
            output =`<div class="item__code">${v[key].CharCode}</div>
            <div class="item__value">${v[key].Value}</div>
            <div class="item__currency">${v[key].Name}</div>`;
            item.innerHTML = output;
            itemsEl.appendChild(item);
        }
        let loader = document.getElementById("loader");
        loader.className = "loader";
    }
});

