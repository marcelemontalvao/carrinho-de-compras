function criarMain() {
    let body = document.querySelector("body");
    let main = document.createElement("main");
    let table = createTable();
    let ul = createProducts(productsCart);
    let totalPriceSection = createTotalPriceSection();
    let button = createButton();
    main.append(table);
    main.append(ul);
    main.append(totalPriceSection);
    main.append(button);
    body.append(main);
}

function createTable() {
    let table = document.createElement("div");
    table.classList.add("table");
    let pBold = document.createElement("p")
    pBold.classList.add("bold");
    pBold.innerText = "Item";
    let p = document.createElement("p")
    p.innerText = "Valor";
    table.append(pBold);
    table.append(p);
    return table;
}

function createProducts(productsCart) {
    let ul = document.createElement("ul");
    for(let i = 0; i < productsCart.length; i++) {
        let li = document.createElement("li")
        li.classList.add("product");
        let pBold = document.createElement("p")
        pBold.classList.add("bold")
        pBold.innerText = productsCart[i].name;
        let p = document.createElement("p");
        p.innerText = productsCart[i].price.toLocaleString('pt-br', {style: 'currency', currency : 'BRL'});
        li.append(pBold);
        li.append(p);
        ul.append(li);
    }
    return ul;
}

function sumAllProducts(productsCart) {
    let sum = 0;
    for(let i = 0; i < productsCart.length; i++) {
       sum += productsCart[i].price; 
    }
    return sum;
}

function createTotalPriceSection() {
    let totalPriceSection = document.createElement("section");
    let liTable = document.createElement("li")
    liTable.classList.add("total");
    let pTotal = document.createElement("p");
    pTotal.innerText = "Total";
    let p = document.createElement("p");
    let totalPrice = sumAllProducts(productsCart);
    p.innerText = totalPrice.toLocaleString('pt-br', {style: 'currency', currency : 'BRL'});
    liTable.append(pTotal);
    liTable.append(p);
    totalPriceSection.append(liTable);
    return totalPriceSection;
}

function createButton() {
    let button = document.createElement("button")
    button.innerText = "Finalizar compra";
    return button;
}

criarMain();