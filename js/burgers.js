const listBurger = document.getElementById('select-your-burger')


fetch("https://titi.startwin.fr/products/type/burger")
.then(res => res.json())
.then(data => {

    data.forEach(eachburger => {

        let oneBurgerDiv = document.createElement('div');
        oneBurgerDiv.classList.add('burger-to-choose');

        oneBurgerDiv.innerHTML =
        `
        <input type="radio" name="burger" checked id="${eachburger.name}">
        <label for="${eachburger.name}">
            <div class="bg-img"><img alt="${eachburger.image}" src="${eachburger.image}"></div>
            <strong>${eachburger.name}</strong>
            <em> - ${eachburger.price.$numberDecimal}€</em>
        </label>
            <p>
            ${eachburger.description}
            </p>
        `

        listBurger.appendChild(oneBurgerDiv)
        oneBurgerDiv.style.margin = "5px";

    });

    listBurger.innerHTML += '<a href="/2fries-click-collect.html" class="button-type">Suivant</a>'

})